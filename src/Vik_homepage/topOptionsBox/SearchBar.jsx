import styles from "./SerchBar.module.css";
import DrawerExample from "../homeCompo/loginSignDrawer";
import SearchLoc from "../homeCompo/SearchBox";

const SearchBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topLogoSection}>
        <img
          src="https://user-images.githubusercontent.com/105915325/200888778-f30992b8-3ff4-485a-9300-c10681697057.jpeg"
          alt="Web-Site Logo"
        />
        <div className={styles.register}>
          <div>Blog</div>
          <div style={{ textDecorationLine: "underline" }}>
            Register As A Professional
          </div>
          {/* <button onClick={()=>openDrawer}>Login/Sign Up</button> */}
          <DrawerExample />
        </div>
      </div>
      <div className={styles.searchBox}>
        <p>Home / Delhi-Ncr</p>
        <b style={{ fontSize: "50px" }}>Home services, on demand.</b>
        <div style={{border:"1px solid red"}}>
          <SearchLoc/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
