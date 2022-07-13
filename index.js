function addNumbers() {}
function subtractNumbers() {}
function divideNumbers() {}
function multiplyNumbers() {}

window.onload = function () {
    let inputString = "";

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
                    break;
                case "buttonTwo":
                    inputString += "2";
                    break;
                case "buttonThree":
                    inputString += "3";
                    break;
                case "buttonFour":
                    inputString += "4";
                    break;
                case "buttonFive":
                    inputString += "5";
                    break;
                case "buttonSix":
                    inputString += "6";
                    break;
                case "buttonSeven":
                    inputString += "7";
                    break;
                case "buttonEight":
                    inputString += "8";
                    break;
                case "buttonNine":
                    inputString += "9";
                    break;
                case "buttonZero":
                    inputString += "0";
                    break;
                case "buttonPlus":
                    break;
                case "buttonTimes":
                    break;
                case "buttonDivide":
                    break;
                case "buttonEquals":
                    break;
                case "buttonDot":
                    break;
                case "buttonMinus":
                    break;
                default:
                    console.log("Bug detected");
            }
            screenInput.value = inputString;
            //screenInput.value = "test";
        });
    }
};
