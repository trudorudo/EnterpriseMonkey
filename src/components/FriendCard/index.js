import React from "react";
import "./style.css";


// function FriendCard(props) {
//   console.log(props);
//   return (
//     <div className="card btn">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//     </div>
//   );
// }
const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name}  src={props.image}  onClick={() => props.increaseScore(props.id)}/>
    </div>
  </div>
)

export default FriendCard;
