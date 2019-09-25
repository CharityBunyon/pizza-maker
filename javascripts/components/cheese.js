import utilities from '../helpers/utilities.js'

//4th: import utilities, make function, and export the function name
const printCheeseOptions = () => {
    const domString = `cheese`
    utilities.printToDom('cheese-counter', domString);
};

export default {printCheeseOptions};
