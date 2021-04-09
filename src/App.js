import "./App.scss";
import { HeaderComponent } from "./components/HeaderComponent";
import { HomeComponent } from "./components/home/HomeComponent";
import { WorkPageComponent } from "./components/workpage/WorkPageComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/work" component={WorkPageComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
