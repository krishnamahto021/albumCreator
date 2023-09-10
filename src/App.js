import { useDispatch, useSelector } from "react-redux";
import { AlbumContainer } from "./Components/AlbumContainer/AlbumContainer";
import { AlbumForm } from "./Components/AlbumForm/AlbumForm";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInitialState, showForm } from "./redux/reducers/albumReducer";
import { useEffect } from "react";

function App() {
  const showFormVal = useSelector(showForm);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getInitialState());
  },[dispatch]);

  return (
      <div className="App">
        <ToastContainer />
        <NavBar />
        {showFormVal ? <AlbumForm /> : <AlbumContainer />}
      </div>
  );
}

export default App;
