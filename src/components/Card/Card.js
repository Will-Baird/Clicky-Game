import React from "react";
import "./Card.css";

class Card extends React.Component {
        
    render() {
        return(
        <div className="card col-3" data-value={this.props.value} onClick={this.props.checkValue}>
            <img className="charImg" alt={this.props.name} src={this.props.image} data-value={this.props.value}/>
        </div>
        );
    }
}

export default Card;