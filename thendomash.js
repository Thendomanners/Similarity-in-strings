// This program Calculate the match percentage between two peoples first names
//import {createReadStream} from "fs";
    //first name input

let inputName1 = window.prompt("Enter first name");
    //second name input
    let inputName2 = window.prompt("Enter second name");
    //checking for validity of the character
    if (!/^[a-zA-Z]*$/.test(inputName1)) {
        //error message
        document.write("error encountered NB : Enter first valid name only ")
    }
    if (!/^[a-zA-Z]*$/.test(inputName2)) {
        //error message
        document.write("error encountered NB : Enter second valid name only ")
    }
//calling the functions to do comparison
console.log(match);
console.log(counterpr);

//counter for the common characters in the two names
let count =0 ;
function match  (inputName1 , inputName2){
    for (let  i in inputName1)
        inputName2.includes(inputName1[i])? count++:false ;
    console.log(count);

}

function counterpr ( inputName1 , inputName2 ) {
   // return = (str.split(find)).length - 1;
let counte =0 ;
const obj = inputName2.split("");
for (inputName1 of inputName2)
{let idno =obj.findIndex(s => s === inputName1);
if (idno >= 0)
{counte++ ;
obj.splice(idno, 1)}
}
return counte ;

}


let csvWriter = require('csv-writer').createObjectCsvWriter({
    path: 'out.csv', //output path
    header: [
//assigning
        {id: 'gender', title: 'Gender'},
        {id: 'f', title: 'Female'},
        {id: 'm', title: 'Male'},
    ]
});
// sorting alphabetically
const ascending = data.sort((inputName1, inputName2) => inputName1[field].localeCompare(inputName2[field]))
objArray.sort(function (inputName1,inputName2) {
    return inputName1.localeCompare(inputName2);

})

function removeDuplicate(array){
    return array.filter((inputName1,inputName2)=> array.indexOf(inputName1)=== b)
};

//creating a variable for data write
let inform= [];
csvWriter
    .writeRecords(inform)
    .then(()=> console.log('The CSV file was written successfully'));
// writefile node
const fs = require ('fs')
let data = "writing a file "
fs.writeFile('output.txt',data,(err)=>
{if (err) throw err;
})

