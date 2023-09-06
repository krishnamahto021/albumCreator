import { AlbumContainer } from "./Components/AlbumContainer/AlbumContainer";
import { AlbumForm } from "./Components/AlbumForm/AlbumForm";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  let showForm = false;
  return (
    <div className="App">
      <NavBar />
      {showForm ? <AlbumForm/> : <AlbumContainer/>}

    </div>
  );
}

export default App;
