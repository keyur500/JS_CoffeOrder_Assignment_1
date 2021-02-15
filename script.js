// Constructor Object 
function coffeeOrder(name, drinkType, size, drizzle, whippedCreme, sweetner, coldFoam, dairy){
  this.customerName = name;
  this.typeOfDrink = drinkType;
  this.sizeOfCoffee = size;
  this.drizzle = drizzle;
  this.whippedCreme = whippedCreme;
  this.sweetner = sweetner;
  this.coldFoam = coldFoam;
  this.dairy = dairy;
  
  this.coffeeOrder = function() {
    document.getElementById("dispOrderName").innerText = this.customerName;
    document.getElementById("dispSize_Drink").innerText = this.sizeOfCoffee +" | "+ this.typeOfDrink;
    document.getElementById("dispDairy").innerText = this.dairy;
    
    // displaying the selected modifiers only 
    for(let modifiers in this){
            if(this[modifiers] == true){
              let node = document.createElement("li");
              node.appendChild(document.createTextNode(modifiers));
              document.getElementById("dispModifiers").appendChild(node);
            }
        }
  };
}

let orderCoffee = function(){
        
    // Getting the form fields value 
    let customerName = document.getElementById("FormControlNameInput").value;

    let drinkType;
    let drink = document.getElementsByName("DrinkType");
      for(let i=0; i<drink.length; i++){
        if (drink[i].checked) {
          drinkType = drink[i].value;
        } 
      }
    
    let DrinkSize = document.getElementById("coffeeSize").value;

    /* Extra Modifiers */
    let drizzle = (document.getElementById("Drizzle").checked)? true : false;
    let whippedCrm = (document.getElementById("whippedCreme").checked)? true : false;
    let swtner = (document.getElementById("sweetner").checked)? true : false;
    let cldFoam = (document.getElementById("coldfoam").checked)? true : false;
    
    let dairy = document.getElementById("dairy").value;
    
    // creating object for coffee order
    let orderObj = new coffeeOrder(customerName, drinkType, DrinkSize, drizzle, whippedCrm, swtner, cldFoam, dairy);
    orderObj.coffeeOrder();
  }

  // New Order 
  let newOrder = function(){
    // we are refreshing the page for new order
    location.reload();
  }