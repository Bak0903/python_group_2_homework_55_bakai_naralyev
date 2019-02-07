import React, {Component} from 'react';

class AddRemoveIngredient extends Component {

    render () {

        let ingredientName = this.props.name;
        return (
            <div className={"ingredient_change"}>
               <h4 className={"ingredient_name"}>{ingredientName}</h4>
               <div className={"buttons"}>
                   <button
                       type="submit"
                       disabled={ this.props.isDisabled()}
                       className={"less"}
                       onClick={() => this.props.onAddRemove(ingredientName, "remove")}
                   >
                       Less
                   </button>
                   <button
                       type="submit"
                       className={"more"}
                       onClick={() => this.props.onAddRemove(ingredientName, "add")}
                   >
                       More
                   </button>
                </div>
           </div>
        );
    }
}

export default AddRemoveIngredient;