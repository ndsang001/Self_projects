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
            date: formattedDate, // Convert date to string format
            done: false,
            index: questionList.length // Assign the current length as the index
        };
        questionList.push(newEntry);
    }

    // Function to add new question to the local storage
    function updateLocalStorage() {
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
    function showQuestion(selectedCategoryList) {
        selectedCategoryList.forEach((question, index) => {
            const itemContainerOuter = document.createElement("div");
            itemContainerOuter.classList.add("item-container-outer");

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item-container");

            const itemQuestion = document.createElement("span");
            itemQuestion.classList.add("item-question");
            itemQuestion.innerHTML = question.text;

            const itemCategory = document.createElement("span");
            itemCategory.classList.add("item-category");
            itemCategory.innerHTML = question.category;

            const itemDate = document.createElement('span');
            itemDate.classList.add("item-date");
            itemDate.innerHTML = question.date;

            const itemButtons = document.createElement("div");
            itemButtons.classList.add("item-buttons");

            // "Done" and "Undone" button 
            const doneButton = document.createElement("button");
            doneButton.classList.add("done-button");
            doneButton.textContent = question.done ? "Undone" : "Done";
            doneButton.addEventListener("click", () => {
                if (question.done) {
                    question.done = false;
                    itemQuestion.style.textDecoration = "none";
                    doneButton.textContent = "Done";
                    doneButton.style.background = "#5cdb5c";
                } else {
                    question.done = true;
                    itemQuestion.style.textDecoration = "line-through";
                    doneButton.textContent = "Undone";
                    doneButton.style.background = "pink";
                }
                updateLocalStorage();
            })

            // "Remove" button
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-button");
            removeButton.textContent = "Remove";
            removeButton.style.background = "#ff0021"
            removeButton.addEventListener("click", () => {
                listItemBox.removeChild(itemContainerOuter);
                console.log("index la: " + question.index);
                questionList.splice(question.index, 1);
                // Update indices of the remaining items
                questionList.forEach((question, i) => {
                    question.index = i;
                });
                console.log("Question list after remove: " + JSON.stringify(questionList, null, 2));
                updateLocalStorage();
            })

            itemContainerOuter.appendChild(itemContainer);
            itemContainer.appendChild(itemQuestion);
            itemContainer.appendChild(itemCategory);
            itemContainer.appendChild(itemDate);
            itemContainerOuter.appendChild(itemButtons);
            itemButtons.appendChild(doneButton);
            itemButtons.appendChild(removeButton);

            // Insert the new element at the beginning of the container
            if (listItemBox.firstChild) {
                listItemBox.insertBefore(itemContainerOuter, listItemBox.firstChild);
            } else {
                listItemBox.appendChild(itemContainerOuter);
            }

            // Update styles based on question.done
            if (question.done) {
                itemQuestion.style.textDecoration = "line-through";
                doneButton.style.background = "pink";
            }
        })

    }

    showQuestion(questionList);


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
        // const selectedCategoryList = questionList.filter(item => item.category == clickedCategory.textContent).reduce((result, item) => {
        //     const { category } = item;
        //     if (!result[category]) {
        //         result[category] = [];
        //     }
        //     result[category].push(item);
        //     return result;

        // }, {});
        const selectedCategoryList = questionList.filter(item => item.category == clickedCategory.textContent).map(item => ({
            text: item.text,
            category: item.category,
            date: item.date, // Convert date to string format
            done: item.done,
            index: item.index
        }));
        console.log(selectedCategoryList);
        const itemContainerOuter = document.querySelectorAll(".item-container-outer");
        console.log(itemContainerOuter);
        itemContainerOuter.forEach(item => {
            listItemBox.removeChild(item);
        })
        if (clickedCategory.textContent == "ALL") {
            showQuestion(questionList);
        } else {
            showQuestion(selectedCategoryList)
        }

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
        updateLocalStorage();

        popupForm.reset();
    })

    // const list = localStorage.getItem('questionList');
    // console.log(JSON.parse(list));

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