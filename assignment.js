const eitherFunction = (arr1, arr2) => {
  let resultArr = minusFunct(arr1, arr2);
  for (let r = 0; r < arr2.length; r++) {
    if (!arr1.includes(arr2[r])) {
      resultArr.push(arr2[r]);
    }
  }
  return resultArr;
};
const minusFunct = (arr1, arr2) => {
  let resultArr = []; //copy the arr1 in new array
  for (let r = 0; r < arr1.length; r++) {
    if (!arr2.includes(arr1[r])) {
      //if the elements are there in other array, then remove them
      resultArr.push(arr1[r]);
    }
  }
  console.log(arr1, resultArr);
  return resultArr;
};
const orOperation = (arr1, arr2) => {
  let resultArr = arr1.slice();
  for (let r = 0; r < arr2.length; r++) {
    if (!resultArr.includes(arr2[r])) {
      resultArr.push(arr2[r]); //include the elements which are not there in final array(Distinct elements in arr2)
    }
  }
  return resultArr;
};
const andOperation = (arr1, arr2) => {
  let resultArr = [];
  //find the array with lesser elements to traverse
  if (arr1.length > arr2.length) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  for (let r = 0; r < arr1.length; r++) {
    //include those which are common with other arrays
    if (arr2.includes(arr1[r])) {
      resultArr.push(arr1[r]);
    }
  }
  return resultArr;
};
const operatorFunct = (arr1, arr2, operator) => {
  let resultArr = [];
  switch (operator) {
    case "OR":
      resultArr = orOperation(arr1, arr2);
      break;
    case "AND":
      resultArr = andOperation(arr1, arr2);
      break;
    case "MINUS":
      resultArr = minusFunct(arr1, arr2);
      break;
    case "EITHER":
      resultArr = eitherFunction(arr1, arr2);
      break;
    default:
      break;
  }
  console.log(
    `Array Operation ${operator} has been performed on Array A of size: ${arr1.length} and Array B of size:${arr2.length}  and Output Array is of size:${resultArr.length}`
  );
  resultArr.sort((a, b) => {
    return a - b;
  });
  return resultArr;
};
//Operator "AND" means: A & B (Elements which are both in A AND  B)
// Operator "MINUS" means: A - B (Elements that are in A but NOT in B)
//Operator "AND" means: A & B (Elements which are both in A AND  B)
let arr1 = [1, 5, 4, 3, 2];
let arr2 = [2, 3, 4, 6];
let operator = "OR";
console.log(
  `Output Array after OR operation : [${operatorFunct(arr1, arr2, operator)}]`
);
operator = "AND";
console.log(
  `Output Array after AND operation : [${operatorFunct(arr1, arr2, operator)}]`
);
operator = "MINUS";
console.log(
  `Output Array after MINUS operation : [${operatorFunct(
    arr1,
    arr2,
    operator
  )}]`
);
//Bonus :Is there a way to get an Array which has elements present only in one of Arrays
operator = "EITHER";
console.log(
  `Output Array after EITHER operation : [${operatorFunct(
    arr1,
    arr2,
    operator
  )}]`
);
