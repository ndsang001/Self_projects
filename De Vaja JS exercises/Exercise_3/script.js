window.addEventListener('load', () => {
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

    // Create html elements for saving emoji
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add('virtual-board-button');
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.setAttribute('id', 'save-buton');
    saveButton.textContent = "Save";

    buttonContainer.appendChild(saveButton);
    contentVirtualBox.appendChild(buttonContainer);

    // Get name for emoji 
    // Overlay background
    const saveButtonOverlay = document.createElement('div');
    saveButtonOverlay.classList.add('save-overlay-container');
    const overlayBackground = document.createElement('div');
    overlayBackground.classList.add('overlay-background');
    // Promt container
    const promtNameContainer = document.createElement('div');
    promtNameContainer.classList.add('promt-name-container');
    // Promt header
    const inputLabel = document.createElement('label');
    inputLabel.classList.add('input-label');
    inputLabel.setAttribute('for', "emoji-name");
    inputLabel.textContent = "Give your special emoji a name :)";
    // Promt input
    const emojiNameInput = document.createElement('input');
    emojiNameInput.classList.add('emoji-name-input');
    emojiNameInput.setAttribute('id', "emoji-name");
    emojiNameInput.setAttribute('placeholder', "Enter a name");
    // Promt buttons
    const overlayButtons = document.createElement('div');
    overlayButtons.classList.add('overlay-buttons');
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-button');
    doneButton.textContent = "Done";
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = "Cancel";

    overlayButtons.appendChild(doneButton);
    overlayButtons.appendChild(cancelButton);
    promtNameContainer.appendChild(inputLabel);
    promtNameContainer.appendChild(emojiNameInput);
    promtNameContainer.appendChild(overlayButtons);
    overlayBackground.appendChild(promtNameContainer);
    saveButtonOverlay.appendChild(overlayBackground);
    buttonContainer.appendChild(saveButtonOverlay);

    saveButton.addEventListener('click', toggleSave);

    function toggleSave() {
        saveButtonOverlay.classList.toggle('show-save-overlay');
    }

})