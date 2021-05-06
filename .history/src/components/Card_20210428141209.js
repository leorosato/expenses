import './Card.css';


function Card(props) {
    const classes = 'cards ' + props.className;
    return (
        <div className="card">
            {props.children}
        </div>);
}


export default Card;