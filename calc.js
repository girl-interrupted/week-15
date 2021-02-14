let result = document.getElementById("result")
   
  function addFunction() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    result.innerHTML= parseInt(input1) + parseInt(input2);
        }
        
  function subtractFunction() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    result.innerHTML= parseInt(input1) - parseInt(input2);
        }

  function multiplyFunction() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    result.innerHTML= parseInt(input1) * parseInt(input2);
        }

  function divideFunction() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    if (input2 == 0) {
        alert ("На ноль не делим")
    }
    else {
    result.innerHTML= parseInt(input1) / parseInt(input2);
    }
        }