import { useRef } from "react";
import styles from "./AlbumForm.module.css";
import { useDispatch } from "react-redux";
import { addNewAlbum, albumActions } from "../../redux/reducers/albumReducer";


export const AlbumForm = () => {
  const titleRef = useRef();
  const {toggleAlbum} = albumActions;
  const dispatch = useDispatch();
  function clearInput(){
    titleRef.current.value = "";
  }
  function handleSubmit(e){
    e.preventDefault();
    const title = titleRef.current.value;
    dispatch(addNewAlbum(title))   ; 
    clearInput(); 
    dispatch(toggleAlbum());   
  }

  return (
    <>
      <div className={styles.albumFormContainer}>
        <form className={styles.albumForm}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter the title of the Album"
            ref={titleRef}
            className={styles.titleInput}
          />
        </form>
        <button className={styles.addButton} onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};
