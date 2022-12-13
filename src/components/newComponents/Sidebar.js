import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import styles from '../../styles/home.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar;