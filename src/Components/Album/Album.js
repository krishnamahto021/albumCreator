import { useDispatch } from "react-redux";
import styles from "./Album.module.css";
import { LuImage } from "react-icons/lu";
import {
  deleteAlbum,
  albumActions,
  updateAlbum,
} from "../../redux/reducers/albumReducer";
import { useRef } from "react";

export const Album = (props) => {
  const { title, id, isEditing } = props;
  const dispatch = useDispatch();
  const { toggleUpdateForm } = albumActions;
  const updatedTitle = useRef();

  function handleEdit(id) {
    dispatch(toggleUpdateForm(id));
  }

  function handleDelete(id) {
    dispatch(deleteAlbum(id));
  }

  function handleUpdate(id) {
    const title = updatedTitle.current.value;
    dispatch(updateAlbum({ title, id }));
    dispatch(toggleUpdateForm(id));
  }

  return (
    <>
      <div className={styles.album}>
        <div className={styles.imageContainer}>
          <LuImage className={styles.image} />
        </div>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="Enter the update title"
              ref={updatedTitle}
              className={styles.titleInput}
            />
            <button
              className={styles.updateButton}
              onClick={() => handleUpdate(id)}
            >
              Update
            </button>
          </div>
        ) : (
          <div className={styles.title}>{title}</div>
        )}
        <div className={styles.buttonsContainer}>
          <button className={styles.edit} onClick={() => handleEdit(id)}>
            Edit
          </button>
          <button className={styles.delete} onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
