import utilities from '../helpers/utilities.js'

//5- made an array for my for loop
const cheeses = [
{id: "cheese1", name:"swiss", price: 50},
{id: "cheese2", name:"yellow", price: 90},
{id: "cheese3", name:"white", price: 500},
{id: "cheese4", name:"green", price: 0}
];

//4th: import utilities, make function, and export the function name
const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString +=` <div class="form-check">
    <input type="checkbox" class="form-check-input" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`;
    }
    //6- made for loop here. added name.
    //7- put cheese id and for because thats how screen readers relate??
    utilities.printToDom('cheese-counter', domString);
};

export default {printCheeseOptions};
