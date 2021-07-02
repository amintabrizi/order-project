import React from "react";
import Hoc from "../../hoc/hoc";
import Burger from './../../components/burger/burger';
import BuildControls from './../../components/burger/buildControls/buildControls';
import Modal from './../../components/UI/modal/modal';

const INGREDIENTS_PRICE = {
  'salad': 1,
  'bacon': 2,
  'cheese': 3,
  'meat': 4
}

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      'salad': 1,
      'bacon': 1,
      'cheese': 1,
      'meat': 1
    },
    totalPrice: 10,
    modal: false
  }

  addIngredientHandler = (type) => {

    //add ingredients
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENTS_PRICE[type];

    //add ingredients price
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    })

  }

  removeIngredientHandler = (type) => {

    //add ingredients
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if (updatedCount < 0) {
      return
    }
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENTS_PRICE[type];

    //add ingredients price
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    })

  }

  ingredientsCount = () => {
    let objectValues = Object.values(this.state.ingredients);
    const sum = objectValues.reduce((total, current) => {
      return total + current
    }, 0)
    return sum
  }

  modalHandler = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <Hoc>
        <Burger
          ingredients={this.state.ingredients}
          ingredientsCount={this.ingredientsCount}
        />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          ingredientsCount={this.ingredientsCount}
          modalHandler={this.modalHandler}
        />
        <Modal data={this.state.ingredients} modalHandler={this.modalHandler} show={this.state.modal}>modal</Modal>
      </Hoc>
    )
  }

}

export default BurgerBuilder;
