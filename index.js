function addNumbers(num1, num2) {
    return num1 + num2;
}
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
function divideNumbers(num1, num2) {
    return num1 / num2;
}

function onEquals(inputString) {
    let conCatNumbers = "";
    let sumArr = [];
    let lengthCheckArr = [];

    let newInputArr = inputString.split(/(?=\W*)/g);
    console.log(newInputArr);

    for (let i of newInputArr) {
        if (!isNaN(i) || i === ".") {
            lengthCheckArr.push(i);
        } else if (isNaN(i)) {
            conCatNumbers = lengthCheckArr.join("");
            sumArr.push(parseFloat(conCatNumbers));
            lengthCheckArr = [];
            sumArr.push(i);
        }
    }
    conCatNumbers = lengthCheckArr.join("");
    sumArr.push(parseFloat(conCatNumbers));
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
}

window.onload = function () {
    let inputString = "";

    const buttons = document.getElementsByClassName(
        "calculator--buttons--grid-item",
    );

    let screenInput = document.getElementById("calcScreen");

    for (let i of buttons) {
        i.addEventListener("click", function () {
            const id = this.id;
            if (id == "buttonEquals") {
                inputString = onEquals(inputString);
                screenInput.value = inputString;
                inputString = "";
            } else {
                inputString += i.innerHTML.trim();
                screenInput.value = inputString;
            }
        });
    }
};
