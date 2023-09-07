import { AlbumContainer } from "./Components/AlbumContainer/AlbumContainer";
import { AlbumForm } from "./Components/AlbumForm/AlbumForm";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let showForm = false;
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      {showForm ? <AlbumForm /> : <AlbumContainer />}
    </div>
  );
}

export default App;
