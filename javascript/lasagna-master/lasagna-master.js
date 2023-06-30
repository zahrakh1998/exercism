/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime){
    if (remainingTime === 0)
        return 'Lasagna is done.'
    if (remainingTime > 0)
        return 'Not done, please wait.'
        return 'You forgot to set the timer.'
    }

    
export function preparationTime(layers , minutes = 2){
    return layers.length * minutes
}

export function quantities(layers){
    let sauce = 0
    let noodles = 0
 for(let i=0 ; i < layers.length ; i++){
    if(layers[i] === 'sauce'){
      sauce += 0.2
    }
    if(layers[i] === 'noodles'){
      noodles += 50
    }
 }
 const quantitiesObj = {
    noodles: noodles,
    sauce: sauce
  }
return quantitiesObj;
}

export function addSecretIngredient(friendsList, myList){
myList.push(friendsList[friendsList.length-1])
}

export function scaleRecipe(recipe , portions = 2){
    const newRecipe = {}
    for(let key in recipe){
       newRecipe[key]=  recipe[key]  * (portions / 2)
    }
    return newRecipe
}

  
