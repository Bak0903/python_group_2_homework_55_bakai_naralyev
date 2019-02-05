import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger.js';

class App extends Component {

  state = {
    myBurger: {
        salad: {
            layers: ["layer"],
            price: 5,
        },
        bacon: {
            layers: ["layer"],
            price: 30,
        },
        cheese: {
            layers: ["layer"],
            price: 20,
        },
        meat: {
            layers: ["layer"],
            price: 50,
        },
    },
    burger: [
        {"id": 1, "name": "Salad", "price": 5, "count": 1},
        {"id": 2, "name": "Bacon", "price": 30, "count": 1},
        {"id": 3, "name": "Cheese", "price": 20, "count": 1},
        {"id": 4, "name": "Meat", "price": 50, "count": 1},
    ],
      total_price: 20,
  };

  render() {
    return (
      <Burger burger = {this.state.myBurger}/>
    );
  }
}

export default App;
