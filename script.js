const valueBox = document.querySelectorAll(".valuebox");
const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#sub");
const btnMulti = document.querySelector("#multi");
const btnDiv = document.querySelector("#div");

const validation = function () {
  const val1 = document.getElementById("first-value").value;
  const val2 = document.getElementById("second-value").value;
  if (isNaN(val1) || isNaN(val2)) {
    alert("Pleas Enter Number");
    return false;
  }
  return true;
};

const sum = function () {
  const val1 = document.getElementById("first-value").value;
  const val2 = document.getElementById("second-value").value;
  if (validation()) {
    const total = Number(val1) + Number(val2);
    document.getElementById("add").value = total;
    document.getElementById("result").value = total;
    console.log(val1, val2, total);
  }
  setTimeout(() => {
    document.getElementById("first-value").value =
      document.getElementById("second-value").value =
      result.value =
        "";
  }, 5000);
};

//  ------------------------Sub--------------------------------------------

const sub = function () {
  const val1 = document.getElementById("first-value").value;
  const val2 = document.getElementById("second-value").value;

  if (validation(val1, val2)) {
    const total = Number(val1) - Number(val2);
    document.getElementById("sub").value = total;
    document.getElementById("result").value = total;
    console.log(val1, val2, total);
  }
  setTimeout(() => {
    document.getElementById("first-value").value =
      document.getElementById("second-value").value =
      result.value =
        "";
  }, 5000);
};

//  ------------------------Multi--------------------------------------------

const multi = function () {
  const val1 = document.getElementById("first-value").value;
  const val2 = document.getElementById("second-value").value;

  if (validation(val1, val2)) {
    const total = val1 * val2;
    document.getElementById("multi").value = total;
    document.getElementById("result").value = total;
    console.log(val1, val2, total);
  }
  setTimeout(() => {
    document.getElementById("first-value").value =
      document.getElementById("second-value").value =
      result.value =
        "";
  }, 5000);
};

//  ------------------------Div--------------------------------------------

const div = function () {
  const val1 = document.getElementById("first-value").value;
  const val2 = document.getElementById("second-value").value;

  if (validation(val1, val2)) {
    const total = val1 / val2;
    document.getElementById("div").value = total;
    document.getElementById("result").value = total;
    console.log(val1, val2, total);
  }
  setTimeout(() => {
    document.getElementById("first-value").value =
      document.getElementById("second-value").value =
      result.value =
        "";
  }, 5000);
};

// ---------------------------RESET----------------------------------

document.getElementById("reset btn").onclick = function () {
  document.getElementById("first-value").value =
    document.getElementById("second-value").value =
    document.getElementById("result").value =
      "";
};

btnAdd.addEventListener("click", sum);
btnSub.addEventListener("click", sub);
btnMulti.addEventListener("click", multi);
btnDiv.addEventListener("click", div);

/*
document.querySelector("#add").addEventListener("click", function () {
  document.getElementById("result").value =
    Number(document.getElementById("first-value").value) +
    Number(document.getElementById("first-value").value);
});
*/
