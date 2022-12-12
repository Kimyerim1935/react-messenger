import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../../firebase';
import {setDoc, doc, Timestamp} from 'firebase/firestore'
import {useHistory, Link} from 'react-router-dom';
import styles from '../../styles/auth.module.scss';
import Add from '../../assets/img/add_user.png';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false
  })

  const {name, email, password, error, loading} = data;
  const history = useHistory();

  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setData({...data,error: null, loading: true})

    if (!name || !email || !password) {
      setData({...data, error: '모든 필드의 값을 입력해야합니다.'})
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result.user)
      await setDoc(doc(db, 'users', result.user.uid ), {
        uid: result.user.uid,
        name,
        email,
        password,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true
      });
      setData({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false
      })
      history.push('/')
    } catch (err) {
      setData({...data, error: err.message, loading: false})
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Happy Chat</span>
        <span className={styles.title}>Register</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="name" name='name' value={name} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email" name='email' value={email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name='password' value={password} onChange={handleChange}/>
          </div>
          <button>Register</button>
        </form>
        <p>
          You do have an account?
          <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register;