// let obj = {
//     width: 2,
//     length: 5,
//     height: 1
// }



// function volumeOfContainer(width, length, height) {
//     return obj.width*obj.length*obj.height;
// }
// console.log(volumeOfContainer())



// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// // let output = Object.entries(obj);       this is the easy way
// // console.log(output);
// function convertArray (obj){                //this is the function
//     let output = Object.entries(obj);
//     return output;
// }
// console.log(convertArray(obj))

// function numbersAndLetters (str){
//     newObj = {
//         "letters": 0,
//         "numbers": 0
//     };
//     let numCount =0;
//     for (let i=0; i < str.length; i++){
//         if (Character.isDigit(str.charAt(i)))
//         numCount++;
//     }
//     let strLength = "";
//     for (let i=0; i < str.length; i++){

// }

function numbersAndLetters (str){
    let letters = [];
    let numbers = [];

    const filterStr = str.split('').filter(item => item !=' ');
    console.log(filterStr)

    for (let i=0; i< filterStr.length ; i++){
        if (isNaN(filterStr[i])){
            letters.push(filterStr[i]);
        } else {
         numbers.push(filterStr[i]);
     }
    }
    let obj = {
        'letters': letters.length,
        'numbers': numbers.length 
};
return  console.log(obj);
}
console.log(numbersAndLetters('Hello World 2023'));