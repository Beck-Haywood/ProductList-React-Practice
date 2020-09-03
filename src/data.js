import data from './data.json'

// Challenge 2
const categories = data.map((data) => {
    return data.category
})
// Challenge 3
// Make a set from an array all values of the set will be unique!
const categorieSet = new Set(categories) 
// Make an array from a set with Array.from()
const categoriesUnique = Array.from(categorieSet)
// Challenge 4
const categoryHistogram = data.reduce((obj, item) => {
    // check if category exists as a key on obj
    if (item.category in obj) {
        // if so add 
        // 1 to the value of this key   
        obj[item.category] += 1
    } else {
        // set this key with a value of 1
        obj[item.category] = 1
    }
    return obj
}, {}) // Define the initial value as an Object!

// Challenge 5
const categoryListHistogram = categoriesUnique.sort().reduce((accumulator, category) => {
    accumulator.push({ name: category, count: categoryHistogram[category] })
    return accumulator
}, [])
// Challenge 13
function productsInCat(data, category) {
    let count = 0
    data.forEach((data) => {
      if (data.category === category) {
        count += 1
      }
    });
    return count
}
// Challenge 13
reduceToTotal(data)
function reduceToTotal(data) {
  const prices = data.map((data) => {
    let formattedPrice = parseFloat(data.price.substring(1))
    return formattedPrice
  })
   return prices.reduce((accumulator, currentValue) => accumulator + currentValue ,0)
}
export default data // export the native JS array
// Challenge 6
export { categoriesUnique, productsInCat, reduceToTotal }

