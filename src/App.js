import React from "react";
import "./style.css";
import Posts from "./Posts"
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"
import  {BrowserRouter, Switch, Route} from   'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <div>
 <Nav/>
 <Switch>
<Route  path='/about'  component={About} />
<Route path='/home' exact component={Home}  />
<Route path='/posts' component={Posts}   />
</Switch>
    </div>
    </BrowserRouter>
  );
}
