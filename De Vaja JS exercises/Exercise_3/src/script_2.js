import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, get, ref, set, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// import { firebase } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js";

// import { initializeApp } from 'firebase/app';
// import { getDatabase, get, ref, set, child } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCnIA_6nU3VmzihocrjzkTGbzdziviDoJM",
    authDomain: "de-vaja---emoji-generato-80227.firebaseapp.com",
    databaseURL: "https://de-vaja---emoji-generato-80227-default-rtdb.europe-west1.firebasedatabase.app",
    // databaseURL: "https://de-vaja---emoji-generato-80227.firebaseio.com",
    projectId: "de-vaja---emoji-generato-80227",
    storageBucket: "de-vaja---emoji-generato-80227.appspot.com",
    messagingSenderId: "997725036693",
    appId: "1:997725036693:web:9cd83c009a9f09c1f13b9c"
});



// Reference to database
var emojiListDB = getDatabase(firebaseConfig);
console.log(emojiListDB);

window.addEventListener('load', () => {
    // Database list

    // const db = getDatabase(firebaseConfig); // Get the database reference
    // let emojiListRef = ref(db, 'emojis');

    let emojiList = [];

    // Retrieve the data
    // get(emojiListRef)
    //     .then((snapshot) => {
    //         if (snapshot.exists()) {
    //             const data = snapshot.val();

    //             emojiList = data;
    //             console.log('Data from Firebase:', emojiList);
    //         } else {
    //             console.log('No data available');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Error getting data:', error);
    //     });


    function fetchUpdatedData() {
        const database = getDatabase(firebaseConfig);
        const emojiRef = ref(database, 'emojis');

        get(emojiRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    emojiList = Object.values(data); // Update the local array with the updated data
                    console.log('Updated data from Firebase:', emojiList);
                    printSavedEmojis();
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error('Error getting updated data:', error);
            });
    }

    fetchUpdatedData();



    //create virtual led board elements
    const canvasBox = document.createElement("div");
    canvasBox.classList.add("virtual-board-container");
    const canvasBoard = document.createElement("div");
    canvasBoard.classList.add('led-board');

    // create led board

    for (let i = 0; i < 8; i++) {
        const canvasRow = document.createElement("div");
        canvasRow.classList.add('led-board-row');
        for (let j = 0; j < 8; j++) {
            const canvasCell = document.createElement('canvas');
            canvasCell.classList.add("led-cell");
            canvasRow.appendChild(canvasCell);
        }
        canvasBoard.appendChild(canvasRow);
    }

    const contentVirtualBox = document.querySelector('.content-virtual-led');
    contentVirtualBox.appendChild(canvasBox);
    canvasBox.appendChild(canvasBoard);

    // Use canvas to fill the cell
    const ledCell = document.querySelectorAll('.led-cell');
    fillColours(ledCell);

    function fillColours(ledCell) {
        Array.prototype.forEach.call(ledCell, (cell) => {
            const canvasCell = cell.getContext("2d");
            canvasCell.fillStyle = "gray";
            canvasCell.fillRect(0, 0, cell.width, cell.height);

            // Declare and initialize the currentColor variable
            let currentColor = "gray";

            // Add hover event listener to change canvas fill color on hover
            cell.addEventListener('mouseenter', () => {
                canvasCell.fillStyle = "green"; // Change the fill color on hover
                canvasCell.fillRect(0, 0, cell.width, cell.height);
            });

            // Reset the canvas color when the mouse leaves the cell
            cell.addEventListener('mouseleave', () => {
                canvasCell.fillStyle = currentColor; // Reset the fill color
                canvasCell.fillRect(0, 0, cell.width, cell.height);
            });

            // Change color after clicking
            cell.addEventListener('click', () => {
                if (currentColor === "gray") {
                    currentColor = "green"; // Update the stored color
                } else {
                    currentColor = "gray"; // Update the stored color
                }
                canvasCell.fillStyle = currentColor;
                canvasCell.fillRect(0, 0, cell.width, cell.height);
            });
        })
    }


    // Create html elements for saving emoji
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add('virtual-board-button');
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.setAttribute('id', 'save-buton');
    saveButton.textContent = "Save";

    // Space div
    const virtualBoardSpace = document.createElement("div");
    virtualBoardSpace.classList.add('virtual-board-space');

    buttonContainer.appendChild(saveButton);
    contentVirtualBox.appendChild(buttonContainer);
    contentVirtualBox.appendChild(virtualBoardSpace);

    // Get name for emoji 
    // Overlay background
    const saveButtonOverlay = document.createElement('div');
    saveButtonOverlay.classList.add('save-overlay-container');
    const overlayBackground = document.createElement('div');
    overlayBackground.classList.add('overlay-background');
    // Promt container
    const promptNameContainer = document.createElement('form');
    promptNameContainer.classList.add('promt-name-container');
    promptNameContainer.setAttribute('id', 'promptNameForm');
    // Promt header
    const inputLabel = document.createElement('label');
    inputLabel.classList.add('input-label');
    inputLabel.setAttribute('for', "emoji-name");
    inputLabel.textContent = "Give your special emoji a name :)";
    // Promt input
    const emojiNameInput = document.createElement('input');
    emojiNameInput.classList.add('emoji-name-input');
    emojiNameInput.setAttribute('id', "emoji-name");
    emojiNameInput.setAttribute('type', 'text');
    emojiNameInput.setAttribute('placeholder', "Enter a name");
    // Promt buttons
    const overlayButtons = document.createElement('div');
    overlayButtons.classList.add('overlay-buttons');
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-button');
    doneButton.setAttribute('type', 'submit');
    doneButton.textContent = "Done";
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.textContent = "Cancel";

    overlayButtons.appendChild(doneButton);
    overlayButtons.appendChild(cancelButton);
    promptNameContainer.appendChild(inputLabel);
    promptNameContainer.appendChild(emojiNameInput);
    promptNameContainer.appendChild(overlayButtons);
    overlayBackground.appendChild(promptNameContainer);
    saveButtonOverlay.appendChild(overlayBackground);
    buttonContainer.appendChild(saveButtonOverlay);

    // Open the promt name screen
    saveButton.addEventListener('click', toggleSaveScreen);

    function toggleSaveScreen() {
        saveButtonOverlay.classList.toggle('show-save-overlay');
    }

    // Close the prompt name screen
    cancelButton.addEventListener('click', toggleSaveScreen);

    // Handle submit
    promptNameContainer.addEventListener('submit', function(event) {
        console.log(emojiNameInput.value);
        event.preventDefault();
        if (!emojiNameInput.value) {
            // event.preventDefault();
            alert("Please give a name for your new emoji");
            return;
        }

        const emojiConfig = getEmojiConfiguration();
        console.log(emojiConfig);
        const emojiNameTemp = replaceSpacesWithHyphens(emojiNameInput.value);
        let savingFactorCondition = false;
        for (let i = 0; i < emojiList.length; i++) {
            if (emojiNameTemp == emojiList[i].emojiName) {
                savingFactorCondition = true;
                break;
            }
        }

        if (savingFactorCondition == true) {
            alert("This name has been already used. Please choose an other name");
            return;
        } else {
            addNewEmoji(emojiNameTemp, emojiConfig);
            printSavedEmoji(emojiList[emojiList.length - 1]);
            console.log(emojiList);


            saveNewEmoji(emojiNameTemp, emojiConfig);

            promptNameContainer.reset();
            fillColours(ledCell);
            toggleSaveScreen() // Close the prompt name name screen
        }

    })

    // Save new emoji to the database
    const saveNewEmoji = (emojiName, emojiConfig) => {
        const db = getDatabase(firebaseConfig);
        const newEmojiRef = ref(db, 'emojis/' + emojiName); // Create a reference to the new emoji

        // Set the emoji data
        set(newEmojiRef, {
                emojiName: emojiName,
                emojiConfig: emojiConfig
            })
            .then(() => {
                console.log('Emoji saved successfully');
            })
            .catch((error) => {
                console.error('Error saving emoji:', error);
            });
    };


    // Add new item into the emoji list
    const addNewEmoji = (name, emojiConfig) => {
        const newEntry = {
            emojiName: name,
            emojiConfig: emojiConfig,
            index: emojiList.length // Assign the current length as the index
        }
        emojiList.push(newEntry);
    };

    // // Update local storage
    // function updateLocalStorage() {
    //     // Save current emoji list to local storage
    //     localStorage.setItem('emojiList', JSON.stringify(emojiList));
    // }

    // Save new emoji to database
    function saveNewEmojiConfiguration(configuration) {

    }

    // Get emoji configuration 
    function getEmojiConfiguration() {
        const ledCells = document.querySelectorAll('.led-cell');
        const emojiConfig = [];
        ledCells.forEach((cell) => {
            const canvasCell = cell.getContext("2d");
            const isGreen = canvasCell.fillStyle === "#008000";
            emojiConfig.push(isGreen);
        })

        return emojiConfig;
    }

    // Print saved emoji

    const contentSavedEmoji = document.querySelector('.content-saved-emoji');

    // Create container for displaying saved emoji
    const savedEmojiList = document.createElement('div');
    savedEmojiList.classList.add('saved-emoji-container');
    const savedEmojiItems = document.createElement('div');
    savedEmojiItems.classList.add('saved-emoji-items');


    savedEmojiList.appendChild(savedEmojiItems);

    contentSavedEmoji.appendChild(savedEmojiList);


    console.log(emojiList);

    function printSavedEmojis() {
        // // Clear existing saved emojis if any
        // // Assuming you have an HTML element with ID 'saved-emojis-container'
        // const savedEmojisContainer = document.getElementById('saved-emojis-container');
        // savedEmojisContainer.innerHTML = '';

        emojiList.forEach((emoji) => {
            printSavedEmoji(emoji);
        })
    }



    function printSavedEmoji(savedEmoji) {
        const savedEmojiItem = document.createElement('div');
        savedEmojiItem.classList.add('saved-emoji-item');
        // const emojiNameTemp = savedEmoji.emojiName;
        const emojiNameTemp = replaceSpacesWithHyphens(savedEmoji.emojiName);
        // console.log(emojiNameTemp);
        const canvasBoardTemp = document.createElement("div");
        // console.log(canvasBoardTemp);
        canvasBoardTemp.classList.add('led-board-' + emojiNameTemp);
        const ledBoardNameContainer = document.createElement("div");
        ledBoardNameContainer.classList.add('led-board-name-container');
        const ledboardEmojiName = document.createElement('h4');
        ledboardEmojiName.classList.add('led-board-emoji-name');
        ledboardEmojiName.textContent = emojiNameTemp;
        const ledBoardButtonContainer = document.createElement('div');
        ledBoardButtonContainer.classList.add('led-board-button-container');
        const ledBoardButton = document.createElement('button');
        ledBoardButton.classList.add('led-board-button');
        ledBoardButton.textContent = "Remove";
        let indexTemp = 0;

        for (let i = 0; i < 8; i++) {
            const canvasRowTemp = document.createElement("div");
            canvasRowTemp.classList.add('led-board-row-' + emojiNameTemp);
            canvasRowTemp.style.height = "20px";
            for (let j = 0; j < 8; j++) {
                const canvasCellTemp = document.createElement('canvas');
                canvasCellTemp.classList.add("led-cell-" + emojiNameTemp);
                // canvasCellTemp.setAttribute('id', emojiNameTemp);
                canvasCellTemp.style.width = "20px";
                canvasCellTemp.style.height = "20px";
                canvasCellTemp.style.border = "0.1px solid black";
                const canvasTemp = canvasCellTemp.getContext("2d");
                // console.log(savedEmoji.emojiConfig[indexTemp]);
                if (!savedEmoji.emojiConfig[indexTemp]) {
                    canvasTemp.fillStyle = "gray";
                    canvasTemp.fillRect(0, 0, canvasCellTemp.width, canvasCellTemp.height);
                } else {
                    canvasTemp.fillStyle = "green";
                    canvasTemp.fillRect(0, 0, canvasCellTemp.width, canvasCellTemp.height);
                }
                canvasRowTemp.appendChild(canvasCellTemp);
                ++indexTemp;
            }
            canvasBoardTemp.appendChild(canvasRowTemp);
        }
        ledBoardButtonContainer.appendChild(ledBoardButton);
        ledBoardNameContainer.appendChild(ledboardEmojiName);
        ledBoardNameContainer.appendChild(ledBoardButtonContainer);
        savedEmojiItem.appendChild(canvasBoardTemp);
        savedEmojiItem.appendChild(ledBoardNameContainer);
        savedEmojiItems.appendChild(savedEmojiItem);

        ledBoardButton.addEventListener('click', () => {
            savedEmojiItems.removeChild(savedEmojiItem);
            console.log(savedEmoji.index);
            emojiList.splice(savedEmoji.index, 1);
            // Update indices of the remaining items
            emojiList.forEach((emoji, i) => {
                emoji.index = i;
            });

            deleteEmojiFromDatabase(savedEmoji.emojiName);
        })


    }

    function deleteEmojiFromDatabase(emojiName) {

        const emojiRef = ref(getDatabase(firebaseConfig), 'emojis/' + emojiName);
        remove(emojiRef)
            .then(() => {
                console.log('Emoji deleted successfully from the database');
            })
            .catch((error) => {
                console.error('Error deleting emoji from the database:', error);
            });
    }

    function replaceSpacesWithHyphens(str) {
        return str.replace(/\s+/g, '-');
    }

})