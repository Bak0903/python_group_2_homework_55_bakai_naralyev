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
                },
                bacon: {
                    layers: [],
                    price: 30,
                },
                cheese: {
                    layers: [],
                    price: 20,
                },
                meat: {
                    layers: ["layer"],
                    price: 50,
                },
                chiken: {
                    layers: [],
                    price: 35,
                },
                pickles: {
                    layers: [],
                    price: 10,
                },
            },
            total_price: 75,
        };

        this.addRemoveIngredient = this.addRemoveIngredient.bind(this);
    }

    addRemoveIngredient (ingredient, operation) {
        let part = this.state.myBurger[ingredient];
        const myBurger = {...this.state.myBurger};
        if (operation === 'add') {
            part.layers.push('layer');
            myBurger[ingredient] = part;
        }
        else {
            part.layers.splice(0, 1);
            myBurger[ingredient] = part;
        }
        let total_price = this.priceCalculation();
        this.setState(
            {...this.state,
            myBurger,
            total_price,
            }
        );
    }

    priceCalculation() {
        let total_price = 20;
        let burger = this.state.myBurger;
        for(var ing in burger) {
            total_price = total_price + (burger[ing].layers.length * burger[ing].price);
        }
        return total_price;
    }

    isButtonDisabled = (ingredient) => {
        let propeties = this.state.myBurger[ingredient];
        return propeties.layers.length === 0;
    };

  render() {
    return (
        <div className={"App"}>
            <Burger burger={this.state.myBurger}/>
            <Pick
                onDis = {this.isButtonDisabled}
                burger = {this.state.myBurger}
                price = {this.state.total_price}
                onAddRemoveIngredient = {this.addRemoveIngredient}
            />
        </div>
    )
  }
}

export default App;