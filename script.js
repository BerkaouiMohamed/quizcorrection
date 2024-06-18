
var question1Buttons = document.getElementsByClassName('qustion1')
var question2Buttons = document.getElementsByClassName('qustion2')
var question3Buttons = document.getElementsByClassName('qustion3')

var value1, value2, value3;

function handleAwnsers(myButtons) {
    var answer
    for (let i = 0; i < myButtons.length; i++) {
        myButtons[i].addEventListener('click', () => {
            for (let i = 0; i < myButtons.length; i++) {
                if (myButtons[0].className.includes('qustion1')) {
                    myButtons[i].className = "qustion1"
                }
                else if (myButtons[0].className.includes('qustion2')) {
                    myButtons[i].className = "qustion2"
                }
                else {
                    myButtons[i].className = "qustion3"
                }
            }
            answer = myButtons[i].value
            myButtons[i].className += " myclass"

            if (myButtons[0].className.includes('qustion1')) {
                value1 = answer
                console.log(value1);
            }
            else if (myButtons[0].className.includes('qustion2')) {
                value2 = answer
            }
            else {
                value3 = answer
            }

        })

    }


}



handleAwnsers(question1Buttons)
handleAwnsers(question2Buttons)
handleAwnsers(question3Buttons)

document.getElementById('submit').addEventListener('click', function () {
    var score = 0
    if (!value1 || !value2 || !value3) {
        alert('select all feilds ')
        return;
    }
    if (value1 == 3) score++;
    if (value2 == 3) score++;
    if (value3 == 2) score++;
    alert(`your score :${score}`)
    location.reload()


})