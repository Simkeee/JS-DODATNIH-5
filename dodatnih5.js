// 1. Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.
// Examples:
// numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8] ]) ➞ [[1, 2, 3, 4, 5, 6], [7, 8, "a"], ["b", "c"], ["d", "e", "f"]]
// numThenChar([[1, 2, 4.4, "f", "a", "b"], [0], [0.5, "d","X",3,"s"], ["f", "e", 8], ["p","Y","Z"], [12,18]]) ➞ 
// [[0, 0.5, 1, 2, 3, 4.4], [8], [12, 18, "X", "Y", "Z"], ["a", "b", "d"], ["e", "f", "f"], ["p", "s"]]
function numThenChar(arr) {
    const letterUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const letterLow = letterUp.map(e => e.toLowerCase());
    const numb = [0,1,2,3,4,5,6,7,8,9];
    const allvalues = [...numb,...letterUp, ...letterLow];     //niz svih dozvoljenih elemenata sortiranih na potreban nacin
    var arr1 = [];
    var x = 0;
// console.log(allvalues);
    for (let i = 0; i < arr.length; i++) {                    //formiranje jedinstvenog niza i njegovo sortiranje
        for (let j = 0; j < arr[i].length; j++) {
            arr1.push(arr[i][j]);
        };
    };
    arr1.sort((a, b) => allvalues.indexOf(a) - allvalues.indexOf(b));
    //console.log(arr1);
    for (let n = 0; n < arr.length; n++) {                   // upisivanje sortiranog niza u staru strukturu
        for (let m = 0; m < arr[n].length; m++){ 
                    arr[n][m] = arr1[x];
                    x++;
        } 
    }
    return arr;
}
console.log(numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8] ]));

// 2. Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.
// Examples:
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
function doesTriangleFit(firstTriangle,secondTriangle) {
    var result = false;
    if( firstTriangle[0] <= secondTriangle[0]&&
        firstTriangle[1] <= secondTriangle[1]&&
        firstTriangle[2] <= secondTriangle[2]){
        result = true;
        }
    if( firstTriangle[0]+firstTriangle[1]<=firstTriangle[2]||       //triangle with that dimensions is possible?
        secondTriangle[0]+secondTriangle[1]<=secondTriangle[2]){
        result = false;
        }
    return '2. ' + result;
}
console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));


// 3. Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise. For clarity, each letter must have a plus sign on both sides.
// Examples:
// plusSign("+f+d+c+#+f+") ➞ true
// plusSign("+d+=3=+s+") ➞ true
// plusSign("f++d+g+8+") ➞ false
// plusSign("+s+7+fg+r+8+") ➞ false
function plusSign(str) {
    const letterUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const letterLow = letterUp.map(e => e.toLowerCase());
    const allLetters = [...letterUp, ...letterLow];
    var counter = 0;
    var counter1 = 0;
    var result = false;
    for (let i = 0; i < str.length; i++) {
       if (allLetters.includes(str[i]) &&
            str[i-1] == "+" &&
            str[i+1] == "+") {
            counter++;
        }
       if (allLetters.includes(str[i])) {
       counter1++;
        }
    }
    if(counter == counter1){
        result = true;
    }
return '3. ' + result;
}
console.log(plusSign("+s+7+fg+r+8+"));

// 4. Create a function that takes a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.
// Only check for diagonals, horizontals and verticals.
// Examples:
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, 39, 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   ["x", 43, 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, 65, "x", 83, 54],
//   [67, 98, 39, "x", 44],
//   [21, 59, 24, 30, "x"]
// ]) ➞ true
// bingoCheck([
//   ["x", "x", "x", "x", "x"],
//   [64, 12, 47, 32, 90],
//   [37, 16, 68, 83, 54],
//   [67, 19, 98, 39, 44],
//   [21, 75, 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, 78, 47, "x", 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, "x", 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ false
function bingoCheck(arr) {
    var result = false;
    var counter3 = 0;
    for (let i = 0; i < arr.length; i++) {
        var counter1 = 0;
        var counter2 = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "x") {   //horizontals
                counter1++;
            }
            if (arr[j][i] == "x") {   //verticals
                counter2++;
            }
            if (arr[j][i] == arr[j][i] && arr[j][i] == "x") {   //diagonals
                counter3++;
            }
        }
        if(counter1 == 5){
            result = true;
            break;
        }
        if(counter2 == 5){
            result = true;
            break;
        }
    }
    if(counter3 == 5){
      result = true;
    }
    return '4. ' + result;
}
console.log(bingoCheck([
      ["x", "x", "x", "x", "x"],
      [64, 12, 47, 32, 90],
      [37, 16, 68, 83, 54],
      [67, 19, 98, 39, 44],
      [21, 75, 24, 30, 52]
    ]));

// 5. When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the receiver's blood type. Receiving a blood type that is not compatible with your own can be life-threating, so blood banks always make sure to note the type of blood they receive from donors so that they can ensure a safe transfusion.
// Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence of Rh factor. If antigen A is found, the blood type includes the letter "A". If antigen B is found, the blood type includes the letter "B". And if the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-". If neither antigen A nor antigen B are found, the blood type includes the letter "O".
// For example, a person with only antigen A would have the blood type "A-". A person with both antigens A and B and the Rh factor would have blood type "AB+", and a person wih only the Rh factor would have blood type "O+".
// The rules for giving and receiving blood are as follows:
// A person with antigen A may only give blood to another person with antigen A.
// A person with antigen B may only give blood to another person with antigen B.
// A person with the Rh factor may only give blood to another person with the Rh factor.
// A person with none of the above factors (O-) can give blood to anyone.
// Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give blood to the receiver, according to the rules above. For clarity: all letters are capital and each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".
// Examples:
// canGiveBlood("O+", "A+") ➞ true
// canGiveBlood("A-", "B-") ➞ false
// canGiveBlood("A-", "AB+") ➞ true
function canGiveBlood(type1,type2) {
    var result = false;
if(type1[type1.length-1] == "+" && type1[type1.length-1] == "+"){ //+ daje, +prima
    result = true;
    if (type1[0] == "A" && 
        type2[0] != "A" && 
        type1.length == 2 &&
        type2.length == 2 ) {
        result = false;
    }
    if (type1[0] == "B" && 
        type2[0] != "B" && 
        type1.length == 2 &&
        type2.length == 2 ){
        result = false;
    }
}
if(type1[type1.length-1] == "+" && type2[type2.length-1] == "-"){   //+ daje, -prima
    result = false;
}
if(type1[type1.length-1] == "-"){ //- daje
    result = true;
    if (type1[0] == "A" && 
        type2[0] != "A" && 
        type1.length == 2 &&
        type2.length == 2 ) {
        result = false;
    }
    if (type1[0] == "B" && 
        type2[0] != "B" && 
        type1.length == 2 &&
        type2.length == 2 ){
        result = false;
    }
}
return '5. ' + result;
}
console.log( canGiveBlood("A-", "AB+"));