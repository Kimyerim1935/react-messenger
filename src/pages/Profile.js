import React,{ useState, useEffect } from 'react';
import Img from '../assets/img/img.jpg';
import Camera from '../assets/svg/Camera';
import Delete from '../assets/svg/Delete';
import { storage, db, auth } from '../firebase';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const [img, setImg] = useState('')
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(()=> {
        getDoc(doc(db, 'users', auth.currentUser.uid)).then(docSnap => {
            if (docSnap.exists) {
                setUser(docSnap.data())
            }
        })
        if (img) {
            const uploadImg = async () => {
                const imgRef = ref(storage,
                    `avatar/${new Date().getTime()} - ${img.name}`);
                    if (user.avatarPath) {
                        await deleteObject(ref(storage, user.avatarPath))
                    }
                try {
                    const snap = await uploadBytes(imgRef, img);
                    const url = await getDownloadURL(ref(storage, snap.ref.fullPath ))
                    
                    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                        avatar: url,
                        avatarPath: snap.ref.fullPath
                    })
                    setImg('')
                } catch (err) {
                    console.log(err)
                }
            };
            uploadImg();
        }  
    },[img]);

    const deleteImage = async () => {
        try {
            const confirm = window.confirm('Delete avatar?')
            if (confirm) {
                await deleteObject(ref(storage, user?.avatarPath))

                await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                    avatar: '',
                    avatarPath: ''
                })
                history.push('/')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <section>
            <div className="profile_container">
                <div className="img_container">
                    <img src={user?.avatar || Img} alt="img"/>
                    <div className="overlay">
                        <div>
                            <label htmlFor="photo">
                                <Camera />
                            </label>
                            {user?.avatar ? <Delete deleteImage={deleteImage}/> : null}
                            <input type="file" accept='image/*' style={{ display:'none' }} id='photo' onChange={e=>setImg(e.target.files[0])} />
                        </div>
                    </div>
                </div>
                <div className="text_container">
                    <h3>{user ? user.name : null}</h3>
                    <p>{user ? user.email : null}</p>
                    <hr/>
                    <small>Joined on: {user?.createdAt.toDate().toDateString()}</small>
                </div>
            </div>
        </section>
    )
}

export default Profile;
