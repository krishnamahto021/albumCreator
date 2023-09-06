import styles from "./AlbumForm.module.css";

export const AlbumForm = ()=>{
    return(
        <>
            <div className={styles.albumFormContainer}>
                <form className={styles.albumForm}>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Enter the title of the Album" className={styles.titleInput}/>
                </form>
                <button className={styles.addButton}>Add</button>
            </div>
        </>
    )
}