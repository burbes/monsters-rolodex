// import { Component } from "react";

import './card.styles.css';

const Card = ({ monster }) => {
    const { id, email, name } = monster;
    return (
        <div className='card-container'>
            <img alt={`${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

// class Card extends Component {

//     render() {
//         const { monster } = this.props;
//         const { id, email, name } = monster;
//         return (
//             <div className='card-container'>
//                 <img alt={`${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;