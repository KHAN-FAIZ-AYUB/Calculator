const valueBox = document.querySelectorAll(".valuebox");
const btnAdd = document.querySelector("#add");

const validation = function () {
  const val1 = document.getElementById("first-value").value;
  const val2 = document.getElementById("second-value").value;
  //   console.log(isNaN(val1), isNaN(val2));
  if (isNaN(val1) || isNaN(val2)) {
    alert("Pleas Enter Number");
    return false;
  }
  return true;
};

const sum = function () {
  if (validation()) {
    const val1 = parseFloat(document.getElementById("first-value").value);
    const val2 = parseFloat(document.getElementById("second-value").value);
    const total = val1 + val2;
    // document.getElementById("add").value = total;
    document.getElementById("result").value = total;
    console.log(val1, val2, total);
  }
};
btnAdd.addEventListener("click", sum);

// ---------------------------------CGPT-------------------------------
// const valueBox = document.querySelectorAll(".valuebox");
// const btnAdd = document.querySelector("#add");

// const validation = function () {
//   const val1 = document.getElementById("first-value").value;
//   const val2 = document.getElementById("second-value").value;

//   if (isNaN(val1) || isNaN(val2)) {
//     alert("Please Enter Numbers");
//     return false;
//   }
//   return true;
// };

// const sum = function () {
//   if (validation()) {
//     const val1 = parseFloat(document.getElementById("first-value").value);
//     const val2 = parseFloat(document.getElementById("second-value").value);
//     const total = val1 + val2;
//     document.getElementById("result").value = total;
//   }
// };

// btnAdd.addEventListener("click", sum);

// ---------------------------RESET----------------------------------
// const reset = function () {
//   return (valueBox = " ");
// };
// console.log(reset);
// const btnReset = document.querySelector("#reset");
// btnReset.addEventListener("click", reset);

document.getElementById("reset").onclick = function () {
  document.getElementById("first-value").value =
    document.getElementById("second-value").value =
    document.getElementById("result").value =
      "";
};
//  --------------------------------------------------------------------

const sub = function () {
  // if(validation()){
  const val1 = Number(document.getElementById("first-value").value);
  const val2 = Number(document.getElementById("second-value").value);
  const total = val1 - val2;
  document.getElementById("sub").value = total;
  document.getElementById("result").value = total;
  console.log(val1, val2, total);
  // }
};
const btnSub = document.querySelector("#sub");
btnSub.addEventListener("click", sub);

const multi = function () {
  const val1 = Number(document.getElementById("first-value").value);
  const val2 = Number(document.getElementById("second-value").value);
  const total = val1 * val2;
  document.getElementById("multi").value = total;
  document.getElementById("result").value = total;
  console.log(val1, val2, total);
};
const btnMulti = document.querySelector("#multi");
btnMulti.addEventListener("click", multi);

const div = function () {
  const val1 = Number(document.getElementById("first-value").value);
  const val2 = Number(document.getElementById("second-value").value);
  const total = val1 / val2;
  document.getElementById("div").value = total;
  document.getElementById("result").value = total;
  console.log(val1, val2, total);
};
const btnDiv = document.querySelector("#div");
btnDiv.addEventListener("click", div);

/*
document.querySelector("#add").addEventListener("click", function () {
  document.getElementById("result").value =
    Number(document.getElementById("first-value").value) +
    Number(document.getElementById("first-value").value);
});
*/
