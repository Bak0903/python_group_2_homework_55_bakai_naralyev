import React, {Component} from 'react';
import './Burger.css';
import Draw from "./Draw/Draw.js";

class Burger extends Component {
    render () {
        return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>

                {Object.keys(this.props.burger).map(
                    (key, i) => {
                        return (
                            <Draw
                                key={i}
                                name={key}
                                ingr={this.props.burger[key]}
                            />
                        );
                    }
                )
                }
                <div className="BreadBottom"></div>
            </div>
        );
    }
}

export default Burger;