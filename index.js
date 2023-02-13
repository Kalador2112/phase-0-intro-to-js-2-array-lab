const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat() {
    cats.push("Ralph")
}



function destructivelyPrependCat() {
    cats.unshift("Bob")
}



function destructivelyRemoveLastCat() {
    cats.pop()
}



function destructivelyRemoveFirstCat() {
    cats.shift()
}


function appendCat() {
    
    const copyOfAppendCat = [...cats, "Broom"]
    return copyOfAppendCat
}


function prependCat() {
    const copyOfCatsTwo = ["Arnold", ...cats]
    return copyOfCatsTwo
 }



  function removeLastCat() {
    const slicedCats = cats.slice(0, -1)
    return slicedCats
 }



  function removeFirstCat() {
    const slicedFirstCats = cats.slice(1)
    return slicedFirstCats
 }