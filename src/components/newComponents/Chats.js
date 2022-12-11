import DefaultAvatar from "../../assets/img/user_default.png";

const Chats = () => {
  return (
    <div className='chatsWrapper'>
      <div className='userChat'>
        <img src={DefaultAvatar} alt='userAvatar' />
        <div className='userChatInfo'>
          <span>user</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;