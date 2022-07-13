function addNumbers(num1, num2) {
    return num1 + num2;
}

function onEquals(inputString) {
    let conCatNumbers = "";
    let sumArr = [];
    let lengthCheckArr = [];

    let newInputArr = inputString.split(/(?=\W*)/g);

    for (let i of newInputArr) {
        if (!isNaN(i)) {
            lengthCheckArr.push(i);
        } else if (isNaN(i)) {
            conCatNumbers = lengthCheckArr.join("");
            sumArr.push(parseInt(conCatNumbers));
            lengthCheckArr = [];
            sumArr.push(i);
        }
    }
    conCatNumbers = lengthCheckArr.join("");
    sumArr.push(parseInt(conCatNumbers));
    lengthCheckArr = [];
    if (sumArr.length % 2 != 1) {
        console.log("ERROR: " + sumArr);
    } else {
        totalNum = 0;
        for (let i = 1; i < sumArr.length; i += 2) {
            currentSum = 0;
            console.log(sumArr);
            console.log(i);
            switch (sumArr[i]) {
                case "+":
                    if (i == 1) {
                        currentSum = addNumbers(sumArr[i - 1], sumArr[i + 1]);
                        totalNum += currentSum;
                    } else {
                        totalNum = addNumbers(totalNum, sumArr[i + 1]);
                    }
                    break;
                case "-":
                    if (i == 1) {
                        currentSum = subtractNumbers(
                            sumArr[i - 1],
                            sumArr[i + 1],
                        );
                        totalNum += currentSum;
                    } else {
                        totalNum = subtractNumbers(totalNum, sumArr[i + 1]);
                    }
                    break;
                case "/":
                    if (i == 1) {
                        currentSum = divideNumbers(
                            sumArr[i - 1],
                            sumArr[i + 1],
                        );
                        totalNum += currentSum;
                    } else {
                        totalNum = divideNumbers(totalNum, sumArr[i + 1]);
                    }
                    break;
                case "*":
                    if (i == 1) {
                        currentSum = multiplyNumbers(
                            sumArr[i - 1],
                            sumArr[i + 1],
                        );
                        totalNum += currentSum;
                    } else {
                        totalNum = multiplyNumbers(totalNum, sumArr[i + 1]);
                    }
                    break;
                default:
                    console.log("ERROR");
            }
        }
        return totalNum;
    }

    // let finalNum = 0;
    // for (let i of array) {
    //     if (!isNaN(parseInt(i))) {
    //     }
    //     // if (i.match(/\D/)) {
    //     // }
    // }
}

window.onload = function () {
    let inputString = "";
    //let storedNumber = 0;
    //let storedFunction = "";
    let equalsSplit = [];

    const buttons = document.getElementsByClassName(
        "calculator--buttons--grid-item",
    );

    let screenInput = document.getElementById("calcScreen");

    for (let i of buttons) {
        i.addEventListener("click", function () {
            const id = this.id;
            console.log(id);
            switch (id) {
                case "buttonOne":
                    inputString += "1";
                    screenInput.value = inputString;
                    break;
                case "buttonTwo":
                    inputString += "2";
                    screenInput.value = inputString;
                    break;
                case "buttonThree":
                    inputString += "3";
                    screenInput.value = inputString;
                    break;
                case "buttonFour":
                    inputString += "4";
                    screenInput.value = inputString;
                    break;
                case "buttonFive":
                    inputString += "5";
                    screenInput.value = inputString;
                    break;
                case "buttonSix":
                    inputString += "6";
                    screenInput.value = inputString;
                    break;
                case "buttonSeven":
                    inputString += "7";
                    screenInput.value = inputString;
                    break;
                case "buttonEight":
                    inputString += "8";
                    screenInput.value = inputString;
                    break;
                case "buttonNine":
                    inputString += "9";
                    screenInput.value = inputString;
                    break;
                case "buttonZero":
                    inputString += "0";
                    screenInput.value = inputString;
                    break;
                case "buttonPlus":
                    inputString += "+";
                    screenInput.value = inputString;
                    break;
                case "buttonTimes":
                    break;
                case "buttonDivide":
                    break;
                case "buttonEquals":
                    inputString = onEquals(inputString);
                    screenInput.value = inputString;
                    inputString = "";
                    break;
                case "buttonDot":
                    break;
                case "buttonMinus":
                    break;
                default:
                    console.log("Bug detected");
            }
            //screenInput.value = "test";
        });
    }
};
