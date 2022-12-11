import Sidebar from '../components/newComponents/Sidebar';
import Chat from '../components/newComponents/Chat';
import styles from '../styles/home.scss';

const NewHome = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default NewHome