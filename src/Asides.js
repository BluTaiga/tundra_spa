import {
  NavLink,
} from "react-router-dom";

export const TundraAside = (props) => {
  return (
  <div>
    <h2>Tundra Nav</h2>
    <ul>
      <li><NavLink to="/tundraProfile">subject_profile</NavLink></li>
      <li><NavLink to="/tundraHistory">known_history</NavLink></li>
      <li><NavLink to="/tyrium">tyrium</NavLink></li>
      <li><NavLink to="/tundraCurrentStatus">current_status</NavLink></li>
    </ul>
  </div>
  )
}