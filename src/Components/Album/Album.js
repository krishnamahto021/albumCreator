import { useDispatch } from "react-redux";
import styles from "./Album.module.css";
import { LuImage } from "react-icons/lu";
import { deleteAlbum } from "../../redux/reducers/albumReducer";

export const Album = (props) => {
  let showUpdateForm = false;
  const {title,id} = props;
  const dispatch = useDispatch();

  function handleDelete(id){
    dispatch(deleteAlbum(id)); 

  }
  return (
    <>
      <div className={styles.album}>
        <div className={styles.imageContainer}>
          <LuImage className={styles.image} />
        </div>
        {showUpdateForm ? (
          <div>
            <input
              type="text"
              placeholder="Enter the update title"
              className={styles.titleInput}
            />
            <button className={styles.updateButton}>Update</button>
          </div>
        ) : (
          <div className={styles.title}>{title}</div>
        )}
        <div className={styles.buttonsContainer}>
          <button className={styles.edit}>Edit</button>
          <button className={styles.delete} onClick={()=>handleDelete(id)}>Delete</button>
        </div>
      </div>
    </>
  );
};
