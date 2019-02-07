import React, {Component} from 'react';

class Draw extends Component {

    static Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render () {
        let ingredientPropeties = this.props.ingr;
        let ingredientName = Draw.Capitalize(this.props.name);
        return (
            Object.values(ingredientPropeties.layers).map(
                (key, i) => {
                    return (
                        <div className={ingredientName} key={i}>
                        </div>
                   );
                }
            )
        );
    }

}

export default Draw;