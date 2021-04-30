import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { TundraAside } from "./Asides"
import Contact from "./Contact"
import {
  TundraProfile, 
  TundraHistory, 
  Tyrium, 
  TundraCurrentStatus, 
  Prompt
} from "./profile_text/Tundra"
import Copyright from "./profile_text/Copyright"

const Main = () => {
  return (
    <HashRouter>
      <div className="wrapper">
        <ul className="header">
          <li><NavLink exact to="/">Tundra</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="main">
          <Route exact path="/">
            <Prompt notice={<Copyright/>}/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/tundraProfile">
            <TundraProfile notice={<Copyright/>}/>
          </Route>
          <Route path="/tundraHistory">
            <TundraHistory notice={<Copyright/>}/>
          </Route>
          <Route path="/tyrium">
            <Tyrium notice={<Copyright/>}/>
          </Route>
          <Route path="/tundraCurrentStatus">
            <TundraCurrentStatus notice={<Copyright/>}/>
          </Route>
        </div>
        <div className="aside aside-1">
          <Route exact path="/" component={TundraAside}/>
          <Route path="/tundraProfile" component={TundraAside}/>
          <Route path="/tundraHistory" component={TundraAside}/>
          <Route path="/tyrium" component={TundraAside}/>
          <Route path="/tundraCurrentStatus" component={TundraAside}/>
        </div>
        <div className="footer">Footer</div>
      </div>
    </HashRouter>
  );
}
 
export default Main;