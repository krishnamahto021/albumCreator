import styles from "./NavBar.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiUser, BiPhotoAlbum } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { albumActions } from "../../redux/reducers/albumReducer";

export const NavBar = () => {
  const dispatch = useDispatch();
  const {toggleAlbum} = albumActions;

  function toggleAlbumForm(){
    dispatch(toggleAlbum());
  }
  
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <BiPhotoAlbum />
        </div>
        <div className={styles.addAlbum} >
          <IoAddCircleOutline onClick={toggleAlbumForm} />
        </div>
        <div className={styles.user}>
          <BiUser />
        </div>
      </div>
    </>
  );
};
