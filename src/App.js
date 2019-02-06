import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger.js';
import Pick from "./Pick/Pick.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myBurger: {
                salad: {
                    layers: ["layer"],
                    price: 5,
                    disabled: false,
                },
                bacon: {
                    layers: ["layer"],
                    price: 30,
                    disabled: false,
                },
                cheese: {
                    layers: ["layer"],
                    price: 20,
                    disabled: false,
                },
                meat: {
                    layers: ["layer"],
                    price: 50,
                    disabled: false,
                },

                total_price: 125,
            },
        };

        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }

    addIngredient (ingredient) {
        let part = this.state.myBurger[ingredient];
        const myBurger = {...this.state.myBurger};

        part.layers.push('layer');
        part.disabled = false;
        myBurger[ingredient] = part;
        myBurger.total_price = myBurger.total_price + part.price;


        this.setState(
            {...this.state,
            myBurger}
        );
        console.log(this.state);
    }

    removeIngredient (ingredient) {
        let part = this.state.myBurger[ingredient];
        const myBurger = {...this.state.myBurger};

        if (part.layers.length > 0) {
            part.layers.splice(0, 1);
            part.disabled = false;
            if (part.layers.length === 0) part.disabled=true;
            myBurger[ingredient] = part;
            myBurger.total_price = myBurger.total_price - part.price;
        }
        else {
            part.disabled = true;
            myBurger[ingredient] = part;
        }

        this.setState(
            {...this.state,
            myBurger}
        );
        console.log(this.state);
    }


  render() {
    return (
        <div>
            <Burger burger={this.state.myBurger}/>
            <Pick
                burger = {this.state.myBurger}
                onAddIngredient = {this.addIngredient}
                onRemoveIngredient = {this.removeIngredient}
            />
        </div>
    )
  }
}

export default App;
