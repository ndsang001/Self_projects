window.addEventListener('load', () => {

    //variables declaration
    let i = 0;
    let tempName;
    const min = Math.min()
    const max = Math.max()
    let frontTurn = true;

    // array with ten names of birds
    const birdNameList = ["Crested Auklet", "Cuban Blackbird", "Boreal Chickadee",
        "American Crow", "Carribean Dove", "Comb Duck", "Amur Falcon", "Chaffinch", "Bullfinch", "Greenfinch"
    ]

    // create html content

    // select the display box
    const displayBox = document.querySelector(".display-box")
        // select the html file for determining key pressing
    const pressKey = document.querySelector("html");
    console.log(pressKey);

    function getClickedKey() {
        pressKey.addEventListener("keydown", pressedKeyCheck);
    }

    getClickedKey();

    // create new class
    const nameBox = document.createElement('div');
    nameBox.classList.add('name-box');

    // create text 
    const birdNameBox = document.createElement('h1');
    birdNameBox.classList.add('bird-name-box');

    // display the bird's name on the screen
    function displayName(birdName) {
        birdNameBox.textContent = birdName;
        nameBox.appendChild(birdNameBox);
        displayBox.appendChild(nameBox);

        //console.log(a)
    }

    // display function
    function display() {

        let birdName = birdNameList[i];

        // check whether the name is displayed on the screen?
        if (birdNameBox.textContent == '') {
            displayName(birdName);

        }

    }


    function pressedKeyCheck(clickedKey) {

        tempName = birdNameBox.textContent;

        if (tempName[0] == " " || tempName[tempName.length - 1] == " ") {
            tempName = tempName.split(" ").join('');
        }

        if (isNoLetter(tempName) && i == 9) {
            birdNameBox.textContent = "Thanks you for your time! Game END!"
        }

        if (tempName == '' || tempName == " ") {
            frontTurn = true;
            display(++i);
        } else {
            removeOccurances(clickedKey);
        }

    }

    function removeOccurances(clickedKey) {
        console.log("day la key " + clickedKey.key)
        let tempKey = clickedKey.key;

        if (frontTurn) {
            if (tempKey.toLowerCase() == tempName[0].toLowerCase()) {

                console.log("ok front");

                tempName = tempName.split(tempKey.toUpperCase()).join('');
                tempName = tempName.split(tempKey.toLowerCase()).join('');
                birdNameBox.textContent = tempName;

                // if (isUpperCase(tempName[0])) {
                //     tempName = tempName.split(tempKey.toUpperCase()).join('');
                //     birdNameBox.textContent = tempName;
                // } else {
                //     tempName = tempName.split(tempKey.toLowerCase()).join('');
                //     birdNameBox.textContent = tempName;
                // }
                if (isNoLetter(tempName) && i != 9) {
                    alert("REMEMBER TO PRESS ANY KEY TO CONTINUE!")
                }
                return frontTurn = false;
            } else {
                alert("Please enter the first letter of the word on the screen");
            }

            return;

        } else {
            if (tempKey.toLowerCase() == tempName[tempName.length - 1].toLowerCase()) {

                console.log("ok back");
                tempName = tempName.split(tempKey.toUpperCase()).join('');
                tempName = tempName.split(tempKey.toLowerCase()).join('');
                birdNameBox.textContent = tempName;

                // if (isUpperCase(tempName[tempName.length - 1])) {
                //     tempName = tempName.split(tempKey.toUpperCase()).join('');
                //     birdNameBox.textContent = tempName;
                // } else {
                //     console.log("toi o day")
                //     tempName = tempName.split(tempKey.toLowerCase()).join('');
                //     birdNameBox.textContent = tempName;
                // }
                if (isNoLetter(tempName) & i != 9) {
                    alert("REMEMBER TO PRESS ANY KEY TO CONTINUE!")
                }
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