import React, { useState } from 'react';
import './App.css';
import CategoryButton from './CategoryButton';
import DisplayProduct from './Product';
import data, { categoriesUnique, productsInCat, reduceToTotal } from './data.js'

function App() {
  const [currentCategory, setCat] = useState("All")

  return (
    <div className="">
      <header className="App-header">
        <h3># Of Categories: {categoriesUnique.length}</h3>
        <h3># Of Products: { data.length }</h3>
        <div className="Buttons">
          <CategoryButton name="All" count={100} onClick={ () => setCat("All") }/>
          { categoriesUnique.map((category) => {
            return <CategoryButton name={category}  count={productsInCat(data, category)} onClick={ () => setCat(category) }/>
          }) }
        </div>
        <h3>Current Category: { currentCategory }</h3>
        <h3>Total price of all products: ${ reduceToTotal(data).toFixed(2) }</h3>
        <div className="Products">
          { data.filter((product) => {
            return product.category === currentCategory || currentCategory === "All"
          }).map((product) => {
            return <DisplayProduct name={product.name} units={product.units} rating={product.rating} price={product.price} description={product.description}/>
          }) }
        </div>
      </header>
    </div>
  );
}

export default App;
