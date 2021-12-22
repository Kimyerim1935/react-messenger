import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {auth, db} from '../firebase';
import {signOut} from 'firebase/auth';
import {updateDoc, doc} from 'firebase/firestore';
import { AuthContext } from '../context/auth'
import {useHistory} from 'react-router-dom';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    const handleSignOut = async() => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            isOnline: false
        })
        await signOut(auth);
        history.push('/login') 
    }

    return (
        <nav>
            <h3>
                <Link to="/">Messenger</Link>
            </h3>
            <div>
                {
                    user ? (
                        <>
                            <Link to="/profile">Profile</Link>
                            <button className="btn" onClick={handleSignOut}>Logout</button>
                        </> 
                    ) : ( 
                        <>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Log in</Link>
                        </>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar;
