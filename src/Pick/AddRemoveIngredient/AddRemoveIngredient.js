import React, {Component} from 'react';

class AddRemoveIngredient extends Component {
    render () {
        let ingredientPropeties = this.props.ingr;
        let ingredientName = this.props.name;
        return (
            <div className={"ingredient_change"}>
               <h4 className={"ingredient_name"}>{ingredientName}</h4>
               <div>
                   <button
                       type="submit"
                       disabled={ingredientPropeties.disabled}
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