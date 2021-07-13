import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./Banner/Banner";
import Home from "./Home/Home";
import "./style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
