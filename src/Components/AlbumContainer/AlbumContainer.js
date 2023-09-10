
import { Album } from "../Album/Album";
import styles from "./AlbumContainer.module.css";
import { useSelector } from "react-redux";
import {
  albumsArray,
} from "../../redux/reducers/albumReducer";

export const AlbumContainer = () => {


  const albums = useSelector(albumsArray);

  return (
    <>
      <div className={styles.albumContainer}>
        {albums.map((album, i) => {
          return (
            <>
              <Album
                key={i}
                title={album.title}
                id={album.id}
                isEditing={album.isEditing}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
