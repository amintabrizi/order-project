import classes from './burger.module.css';
import BurgerIngrediens from './burgerIngredients/burgerIngredients';

const Burger = (props) => {

  let ingredientsItems = null;


  // const sumObjValues = (obj) => {

  //   const getValues = Object.values(obj);
  //   //return array from object values like => [1,1,2,3]

  //   let sumValues = getValues.reduce((total, current) => {
  //     return total + current;
  //   }, 0)

  //   return sumValues

  // }

  const getIngredientsItem = (obj) => {
    const objectKeys = Object.keys(obj)
    //["salad", "bacon", "cheese", "meat"]


    return objectKeys.map((igk) => {
      return [...Array(obj[igk])]

        /*
          console.log(obj[igk]);
          1
          2
          3
        */

        /*
          console.log([...Array(obj[igk])]);
          1
          undefined
          1
          undefined
          2
          undefined undefined
          3
          undefined undefined undefined
        */

        .map((_, i) => {
          return <BurgerIngrediens key={igk + i} type={igk} />
        })

    })
  }


  if (props.ingredientsCount() === 0) {
    ingredientsItems = <p>Please add ingredients</p>;
  } else {
    ingredientsItems = getIngredientsItem(props.ingredients);
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngrediens type="bread-top" />
      {ingredientsItems}
      <BurgerIngrediens type="bread-bottom" />
    </div>
  )

}
export default Burger;