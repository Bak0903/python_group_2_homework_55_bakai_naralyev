import React, {Component} from 'react';

class AddRemoveIngredient extends Component {

    static isButtonDisabled (ingredient, propeties) {
        return propeties.layers.length === 0;
    }

    render () {

        let ingredientPropeties = this.props.ingr;
        let ingredientName = this.props.name;
        return (
            <div className={"ingredient_change"}>
               <h4 className={"ingredient_name"}>{ingredientName}</h4>
               <div className={"buttons"}>
                   <button
                       type="submit"
                       disabled={AddRemoveIngredient.isButtonDisabled(ingredientName, ingredientPropeties)}
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