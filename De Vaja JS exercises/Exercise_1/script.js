// The program can start after the page fully loaded
window.addEventListener('load', () => {

    //variables declaration
    let i = 0;
    let tempName;
    let frontTurn = true;

    // array with ten names of birds
    const birdNameList = ["Crested Auklet", "Cuban Blackbird", "Boreal Chickadee",
        "American Crow", "Carribean Dove", "Comb Duck", "Amur Falcon", "Chaffinch", "Bullfinch", "Greenfinch"
        // Link for getting the bird names "https://7esl.com/birds-vocabulary-english/"
    ]

    // CREATE HTML CONTENT
    // select the display box
    const displayBox = document.querySelector(".display-box")

    // create new class
    const nameBox = document.createElement('div');
    nameBox.classList.add('name-box');

    // create text
    const birdNameBox = document.createElement('h1');
    birdNameBox.classList.add('bird-name-box');


    // CREATE DISPLAY AND RUNNING FUNCTIONS
    // select the html file for determining key pressing
    const pressKey = document.querySelector("html");

    // grant event listener to keydown function
    function getClickedKey() {
        pressKey.addEventListener("keydown", pressedKeyCheck);
    }

    getClickedKey();

    // display the bird's name on the screen
    function displayName(birdName) {
        birdNameBox.textContent = birdName;
        nameBox.appendChild(birdNameBox);
        displayBox.appendChild(nameBox);
    }

    // display function
    function display() {

        let birdName = birdNameList[i];

        // check whether the name is displayed on the screen?
        if (birdNameBox.textContent == '') {
            displayName(birdName);
        }
    }


    // check pressed key 
    function pressedKeyCheck(clickedKey) {

        // assign current bird name to a temp name
        tempName = birdNameBox.textContent;

        // check if the first or last letter is a space
        if (tempName[0] == " " || tempName[tempName.length - 1] == " ") {
            tempName = tempName.split(" ").join('');
        }

        // check if game ends
        if (isNoLetter(tempName) && i == 9) {
            birdNameBox.textContent = "Thanks you for your time! Game END!"
        }

        // check if no name on the screen
        if (tempName == '' || tempName == " ") {
            frontTurn = true;
            display(++i);
        } else {
            removeOccurances(clickedKey);
        }

    }

    // remove all occurances of pressed key
    function removeOccurances(clickedKey) {

        // assign the clicked key to temp key
        let tempKey = clickedKey.key;

        // if user needs to enter the first letter on the keyboard
        if (frontTurn) {
            if (tempKey.toLowerCase() == tempName[0].toLowerCase()) {

                // replace all the occurances of letter
                tempName = tempName.split(tempKey.toUpperCase()).join('');
                tempName = tempName.split(tempKey.toLowerCase()).join('');
                birdNameBox.textContent = tempName;

                if (isNoLetter(tempName) && i != 9) {
                    alert("REMEMBER TO PRESS ANY KEY TO CONTINUE!")
                }

                // change state
                return frontTurn = false;
            } else {
                alert("Please enter the first letter of the word on the screen");
            }

            return;

        } else {
            if (tempKey.toLowerCase() == tempName[tempName.length - 1].toLowerCase()) {

                // replace all the occurances of letter
                tempName = tempName.split(tempKey.toUpperCase()).join('');
                tempName = tempName.split(tempKey.toLowerCase()).join('');
                birdNameBox.textContent = tempName;

                if (isNoLetter(tempName) & i != 9) {
                    alert("REMEMBER TO PRESS ANY KEY TO CONTINUE!")
                }
                //change state
                return frontTurn = true;

            } else {
                alert("Please enter the last letter of the word on the screen");
            }

            return;
        }
    }

    // check the letter is uppercase?
    function isUpperCase(letter) {
        return letter != letter.toLowerCase() && letter == letter.toUpperCase();
    }

    // check if there is no letter left on the screen
    function isNoLetter(str) {
        return str.length == 0;
    }


    display();

})