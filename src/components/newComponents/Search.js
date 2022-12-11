import DefaultAvatar from '../../assets/img/user_default.png';

const Search = () => {
  return (
    <div className='searchWrapper'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src={DefaultAvatar} alt='userAvatar' />
        <div className='userChatInfo'>
          hello
        </div>
      </div>
    </div>
  )
}

export default Search;