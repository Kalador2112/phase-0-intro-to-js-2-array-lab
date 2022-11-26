// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat() {
    cats.push("Ralph")
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyPrependCat() {
    cats.unshift("Bob")
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyRemoveLastCat() {
    cats.pop()
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyRemoveFirstCat() {
    cats.shift()
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function appendCat() {
    cats
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function prependCat() {
    const copyOfCatsTwo = ["Arnold", ...cats]
    return copyOfCatsTwo
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function removeLastCat() {
    const slicedCats = cats.slice(0, -1)
    return slicedCats
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function removeFirstCat() {
    const slicedFirstCats = cats.slice(1)
    return slicedFirstCats
  }