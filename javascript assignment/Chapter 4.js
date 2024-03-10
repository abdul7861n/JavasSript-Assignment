//01. Declare 3 variables in one statement:

let a = 1, b = "hello", c = true;

//02. Legal variable names:

let myVariable;
let my_variable;
let $variable;
let _variable;
let camelCaseVariable;

//03. Illegal variable names:

// let 1stVariable; // starts with a number
// let my variable; // contains space
// let my-variable; // contains hyphen
// let my&variable; // contains special character other than $ and _
// let variable#;    // contains special character other than $ and _

//04. Displaying in the browser:

let textToDisplay = "<h1> Rules for naming JS variables </h1> <br/>"
document.write(textToDisplay);

let onetextToDisplay = "Variable names can only contain letters, numbers, dollar signs ($), and underscores (_) For example $my_1stVariable <br/> <br/>"
document.write(onetextToDisplay);

let twotextToDisplay = "Variables must begin with a letter, dollar sign ($), or underscore (_). For example $name, _name, or name <br/> <br/>"
document.write(twotextToDisplay);

let threetextToDisplay = " Variable names are case-sensitive.<br/> <br/>"
document.write(threetextToDisplay);

let fourtextToDisplay = " Variable names should not be JS keywords.<br/> <br/>"
document.write(fourtextToDisplay);