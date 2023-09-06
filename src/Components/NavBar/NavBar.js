import styles from "./NavBar.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiUser, BiPhotoAlbum } from "react-icons/bi";

export const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <BiPhotoAlbum />
        </div>
        <div className={styles.addAlbum}>
          <IoAddCircleOutline />
        </div>
        <div className={styles.user}>
          <BiUser />
        </div>
      </div>
    </>
  );
};
