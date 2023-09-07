document.addEventListener("DOMContentLoaded", function () {
  
    function saveBookmark() {
        var title = document.getElementById("Title").value;
        var url = document.getElementById("Url").value;
        var category = document.getElementById("catagory").value;

     
        if (title.length > 30) {
            alert("Title must be 30 characters or less.");
            return;
        }

        if (!title || !url || !category) {
            alert("Error: All fields are required.");
            return;
        }

        var bookmark = {
            title: title,
            url: url,
            category: category
        };

        var categoryBookmarks = JSON.parse(localStorage.getItem(category)) || [];
        categoryBookmarks.push(bookmark);

        localStorage.setItem(category, JSON.stringify(categoryBookmarks));

        window.location.href = "index.html";
    }

    function newCategory() {
        var newCategoryName = prompt("Enter a new category name:");

        if (newCategoryName) {
            var option = document.createElement("option");
            option.value = newCategoryName;
            option.textContent = newCategoryName;

            var select = document.getElementById("catagory");
            select.appendChild(option);

            select.value = newCategoryName;
        }
    }

    var saveButton = document.querySelector('input[type="submit"]');
    saveButton.addEventListener("click", saveBookmark);

    var addButton = document.querySelector('button[type="button"]');
    addButton.addEventListener("click", newCategory);
});