import DefaultAvatar from "../../assets/img/user_default.png";
import styles from '../../styles/chat.moudule.scss';

const Chats = () => {
  return (
    <div className={styles.chatWrapper}>
      <div className={styles.userChat}>
        {/*<img className={styles.img} src={DefaultAvatar} alt='userAvatar' />*/}
        <div className={styles.userChatInfo}>
          <span>user</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;