import React, {Component} from 'react';

class AddRemoveIngredient extends Component {
    render () {
        let ingredient_propeties = this.props.ingr;
        let ingredient_name = this.props.name;
        return (
                        <div>
                           <h4>{ingredient_name}</h4>
                           <div>
                               <button
                                   type="submit"
                                   disabled={ingredient_propeties.disabled}
                                   className={"less"}
                                   onClick={() => this.props.onRemove(ingredient_name)}
                               >
                                   Less
                               </button>
                               <button
                                   type="submit"
                                   className={"more"}
                                   onClick={() => this.props.onAdd(ingredient_name)}
                               >
                                   More
                               </button>
                            </div>
                       </div>
           );
    }
}

export default AddRemoveIngredient;