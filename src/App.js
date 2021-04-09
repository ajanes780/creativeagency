import "./App.scss";
import { HeaderComponent } from "./components/HeaderComponent";
import { HomeComponent } from "./components/home/HomeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
