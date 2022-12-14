import DefaultAvatar from '../../assets/img/user_default.png';
import styles from '../../styles/home.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <span className={styles.logo}>Happy chat</span>
      <div className={styles.user}>
        <img src={DefaultAvatar} alt='userAvatar'/>
        <span>he</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar;