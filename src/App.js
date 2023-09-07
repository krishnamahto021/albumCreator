import { useSelector } from "react-redux";
import { AlbumContainer } from "./Components/AlbumContainer/AlbumContainer";
import { AlbumForm } from "./Components/AlbumForm/AlbumForm";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showForm } from "./redux/reducers/albumReducer";

function App() {
  const showFormVal = useSelector(showForm);

  return (
      <div className="App">
        <ToastContainer />
        <NavBar />
        {showFormVal ? <AlbumForm /> : <AlbumContainer />}
      </div>
  );
}

export default App;
