import React, {Component} from 'react';
import './Burger.css';
import Salad from "./Salad/Salad.js";
import Bacon from "./Bacon/Bacon.js";
import Cheese from "./Cheese/Cheese.js";
import Meat from "./Meat/Meat.js";


class Burger extends Component {
    render () {
        return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <Salad count={this.props.burger.salad}/>
                <Bacon count={this.props.burger.bacon}/>
                <Cheese count={this.props.burger.cheese}/>
                <Meat count={this.props.burger.meat}/>
                <div className="BreadBottom"></div>
            </div>
        );
    }
}

export default Burger;