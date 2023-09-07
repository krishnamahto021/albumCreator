import { useEffect } from "react";
import { Album } from "../Album/Album";
import styles from "./AlbumContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { albumSelectors, getInitialState } from "../../redux/reducers/albumReducer";

export const AlbumContainer = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getInitialState());        
    },[dispatch]);

    const albums = useSelector(albumSelectors);
    
    return (
        <>
            <div className={styles.albumContainer}>
                {albums.map((album,i)=>{
                    return(
                        <>
                            <Album key={i} title={album.title}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}