// let obj = {
//     width: 2,
//     length: 5,
//     height: 1
// }



// function volumeOfContainer(width, length, height) {
//     return obj.width*obj.length*obj.height;
// }
// console.log(volumeOfContainer())



let obj = {
    a:1,
    b:2,
    c:3
}
// let output = Object.entries(obj);       this is the easy way
// console.log(output);
function convertArray (obj){                //this is the function
    let output = Object.entries(obj);
    return output;
}
console.log(convertArray(obj))