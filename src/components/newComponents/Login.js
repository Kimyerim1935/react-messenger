import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Add from '../../assets/img/img.png';
import styles from '../../styles/auth.scss';
import {useHistory} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebase";
import {doc, updateDoc} from "firebase/firestore";

const Login = () => {
  const {register, watch, formState: {errors}} = useForm();

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
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Happy chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" name='email' value={email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="pw" name='password' value={password} onChange={handleChange}/>
          </div>
          {/*<input type="file" id="file"/>*/}
          {error ? <p className="error">{error}</p> : null}
          <button>Sign In</button>
        </form>

        <p>
          You do have an account? Register
        </p>
      </div>
    </div>
  )
}

export default Login;