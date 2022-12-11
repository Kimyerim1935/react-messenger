import DefaultAvatar from '../../assets/img/user_default.png';

const Message = () => {
  return (
    <div className='messageWrapper owner'>
      <div className='messageInfo'>
        <img src={DefaultAvatar} alt='userAvatar' />
        <span> just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/04/strawberry-cake-8c9a6b6.jpg?quality=90&webp=true&resize=300,272" alt='img' />
      </div>
    </div>
  )
}

export default Message;