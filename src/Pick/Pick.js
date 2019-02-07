import React, {Component} from 'react';
import './Pick.css';
import AddRemoveIngredient from "./AddRemoveIngredient/AddRemoveIngredient.js";


class Pick extends Component {

    render () {
        return (
            <div className="Constructor">
                <h3 className={"price"}>Current Price: {this.props.price}</h3>
                {Object.keys(this.props.burger).map(
                    (key, i) => {
                        return (
                            <AddRemoveIngredient
                                isDisabled={() => {return this.props.onDis(key)}}
                                key = {i}
                                name = {key}
                                ingr = {this.props.burger[key]}
                                onAddRemove={this.props.onAddRemoveIngredient}
                            />
                        );
                    }
                )
                }
            </div>
        );
    }
}

export default Pick;