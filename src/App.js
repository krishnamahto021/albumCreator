import { Provider } from "react-redux";
import { AlbumContainer } from "./Components/AlbumContainer/AlbumContainer";
import { AlbumForm } from "./Components/AlbumForm/AlbumForm";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";

function App() {
  let showForm = false;
  return (
    <Provider store={store}>
    <div className="App">
      <ToastContainer />
      <NavBar />
      {showForm ? <AlbumForm /> : <AlbumContainer />}
    </div>
    </Provider>
  );
}

export default App;
