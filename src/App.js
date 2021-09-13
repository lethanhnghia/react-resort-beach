import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import SingleRoom from "./pages/SingleRoom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/single-room/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
