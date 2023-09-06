import styles from "./Album.module.css";
import { LuImage} from "react-icons/lu";

export const Album = () => {
  return (
    <>
      <div className={styles.album}>
        <div className={styles.imageContainer}>
          <LuImage className={styles.image} />
        </div>
        <div className={styles.title}>title</div>
        <div className={styles.buttonsContainer}>
          <button className={styles.edit}>Edit</button>
          <button className={styles.delete}>Delete</button>
        </div>
      </div>
    </>
  );
};
