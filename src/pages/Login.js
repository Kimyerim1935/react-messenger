import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../firebase';
import {updateDoc, doc} from 'firebase/firestore'
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
        loading: false
    })

    const {email, password, error, loading} = data;
    const history = useHistory();

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setData({...data,error: null, loading: true})

        if (!email || !password) {
            setData({...data, error: '모든 필드의 값을 입력해야합니다.'})
        }
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateDoc(doc(db, 'users', result.user.uid ), {
                isOnline: true
            });
            setData({
                email: '', 
                password: '', 
                error: null, 
                loading: false
            })
            history.replace('/')
        } catch (err) {
            setData({...data, error: err.message, loading: false})
        }
    }

    return (
        <section>
            <h3>Log into your Account</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' value={email} onChange={handleChange}/>
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={handleChange}/>
                </div>
                {error ? <p className="error">{error}</p> : null}
                
                <div className="btn_container">
                    <button className="btn" disabled={loading}>
                        {loading ? 'Lodding in ...' : 'Login'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Login;