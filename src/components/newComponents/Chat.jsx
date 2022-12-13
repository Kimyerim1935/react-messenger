import Camera from '../../assets/img/camera.png';
import AddUser from '../../assets/img/add_user.png';
import More from '../../assets/img/more.png';
import Messages from "../newComponents/Messages";
// import Input from './Input';
import styles from '../../styles/chat.moudule.scss';

const Chat = () => {
  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatInfo}>
        <span>user</span>
        <div className={styles.chatIcons}>
          <img src={Camera} alt='camera_icon' />
          <img src={AddUser} alt='addUser_icon' />
          <img src={More} alt='more_icon' />
        </div>
      </div>
      <Messages />
      {/*<Input />*/}
    </div>
  )
}

export default Chat;