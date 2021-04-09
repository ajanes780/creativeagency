import "./App.scss";
import { HomeComponent } from "./components/home/HomeComponent";
import { WorkPageComponent } from "./components/workpage/WorkPageComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { ContactComponent } from "./components/contact/ContactComponet";
import { ServicesComponent } from "./components/services/ServicesComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/work" component={WorkPageComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route path="/services" component={ServicesComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
