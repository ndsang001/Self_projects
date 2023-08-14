// The program can start after the page fully loaded
window.addEventListener('load', () => {
    //variable declaration
    let questionList = JSON.parse(localStorage.getItem('questionList')) || [];

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10); // Extract YYYY-MM-DD


    // function to add new item into the array
    const addToList = (text, category) => {
        const newEntry = {
            text: text,
            category: category,
            date: formattedDate // Convert date to string format
        };
        questionList.push(newEntry);
    }

    // Function to add new question to the local storage
    function addNewQuestion() {
        // Save the current array to local Storage
        localStorage.setItem('questionList', JSON.stringify(questionList));

    }



    // Example: adding new HTML element to the DOM
    const contentList = document.querySelector('.content__list-container');
    //console.log(contentList);
    const listItemBox = document.createElement('div');
    listItemBox.classList.add('list__container-box');
    contentList.appendChild(listItemBox);


    // Show the questions
    questionList.forEach((question) => {
        const itemBox = document.createElement("div");
        itemBox.classList.add("item-container");
        const itemQuestion = document.createElement("span");
        itemQuestion.classList.add("item-question");
        itemQuestion.innerHTML = question.text;
        const itemCategory = document.createElement("span");
        itemCategory.classList.add("item-category");
        itemCategory.innerHTML = question.category;
        const itemDate = document.createElement('span');
        itemDate.classList.add("item-date");
        itemDate.innerHTML = question.date;
        itemBox.appendChild(itemQuestion);
        itemBox.appendChild(itemCategory);
        itemBox.appendChild(itemDate);

        // Insert the new element at the beginning of the container
        if (listItemBox.firstChild) {
            listItemBox.insertBefore(itemBox, listItemBox.firstChild);
        } else {
            listItemBox.appendChild(itemBox);
        }


    })

    const selectMenu = document.querySelector('.select-menu-category');
    // console.log(selectMenu);

    // Add event listener "click" to category button 
    const selectMenuID = document.getElementById('selectMenuButton');
    selectMenuID.addEventListener('click', handleMenuClick);

    // Toggle the menu button
    function handleMenuClick() {
        document.querySelector('.select-menu-overlay').classList.toggle("show-select-menu");
    }

    // Set category type to show
    const menuCategories = document.querySelectorAll(".menu-category");
    menuCategories.forEach((category) => {
        category.addEventListener('click', setCategory);
    });
    // console.log(menuCategories);
    // Other way to use forEach
    // Array.prototype.forEach.call(menuCategories, (category) => {
    //     category.addEventListener('click', setCategory);
    // });

    // Function to set the content of the menu category as well as change the current display items
    function setCategory(category) {
        const clickedCategory = category.target;
        selectMenuID.innerHTML = clickedCategory.textContent;
        handleMenuClick();
    }

    // Add event listener "click" to ADD button
    const addButton = document.getElementById("addButton");
    addButton.addEventListener('click', addQuestionToggle);

    // Function to open/close pop-up
    function addQuestionToggle() {
        document.querySelector('.add-popup-overlay').classList.toggle("show-add-popup");
    }

    // Close the popup
    const cancelButton = document.getElementById('cancelButton');
    cancelButton.addEventListener('click', addQuestionToggle);


    // Handle submit 
    const popupForm = document.querySelector('.popup-box-overlay');
    popupForm.addEventListener('submit', function(event) {
        const questionContent = document.querySelector('.popup-question-textarea').value;
        if (!selectedCategory || !questionContent) {
            event.preventDefault();
            alert("Please select a category and fulfill the question before submitting. Thank you!")
            return;
        }

        addToList(questionContent, selectedCategory.value);
        addNewQuestion();

        popupForm.reset();
    })

    const list = localStorage.getItem('questionList');
    console.log(JSON.parse(list));

    // Choose category
    let selectedCategory = null; // To track the currently selected category

    const categoryMenu = document.querySelectorAll(".popup-category-input");
    categoryMenu.forEach((category) => {
        category.addEventListener('click', setPopupCategory);
    })

    function setPopupCategory(event) {
        const clickedCategory = event.target;

        // Deselect the previously selected category
        if (selectedCategory === clickedCategory) {
            // Clicked category is already selected, deselect it
            selectedCategory.classList.remove('popup-selected-category');
            selectedCategory = null;
        } else {
            // Deselect the previously selected category
            if (selectedCategory) {
                selectedCategory.classList.remove('popup-selected-category');
            }

            // Update the selected category and apply styling
            selectedCategory = clickedCategory;
            clickedCategory.classList.add("popup-selected-category");
        }
    }
});