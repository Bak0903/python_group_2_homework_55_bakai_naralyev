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
            },
            total_price: 125,
        };

        this.addRemoveIngredient = this.addRemoveIngredient.bind(this);
    }

    addRemoveIngredient (ingredient, operation) {
        let part = this.state.myBurger[ingredient];
        const myBurger = {...this.state.myBurger};
        let total_price = this.state.total_price;

        if (operation === 'add') {
            part.layers.push('layer');
            part.disabled = false;
            myBurger[ingredient] = part;
            total_price = total_price + part.price;
        }

        else {
            if (part.layers.length > 0) {
                part.layers.splice(0, 1);
                part.disabled = false;
                if (part.layers.length <= 0) part.disabled=true;
                myBurger[ingredient] = part;
                total_price = total_price - part.price;
            }
            else {
                part.disabled = true;
                myBurger[ingredient] = part;
            }
        }
        this.setState(
            {...this.state,
            myBurger,
            total_price,
            }
        );
        console.log(this.state);
    }

  render() {
    return (
        <div>
            <Burger burger={this.state.myBurger}/>
            <Pick
                burger = {this.state.myBurger}
                price = {this.state.total_price}
                onAddRemoveIngredient = {this.addRemoveIngredient}
            />
        </div>
    )
  }
}

export default App;
