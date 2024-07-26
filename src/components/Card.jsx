import { NavLink } from "react-router-dom";

const Card = ({ suggestion }) => {
  return (
    <div style={{ backgroundColor: suggestion.bgColor }}>
      <h3>{suggestion.heading}</h3>
      <p>{suggestion.desc}</p>
      <NavLink to={suggestion.path}>Read More</NavLink>
    </div>
  );
};

export default Card;
