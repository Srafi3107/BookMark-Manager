var bookmarksA = JSON.parse(localStorage.getItem("A")) || [];
var bookmarksB = JSON.parse(localStorage.getItem("B")) || [];

        function displayBookmarks(bookmarks, detailsDiv) {
            if (bookmarks) {
                bookmarks.forEach(function(bookmark) {
                    var pTitle = document.createElement("p");
                    pTitle.textContent = "Title: " + bookmark.title;

                    var pURL = document.createElement("p");
                    var aURL = document.createElement("a");
                    aURL.textContent = "URL: " + bookmark.url;
                    aURL.href = bookmark.url;
                    aURL.target = "_blank";
                    pURL.appendChild(aURL);

                    var pCategory = document.createElement("p");
                    pCategory.textContent = "Category: " + bookmark.category;

                    detailsDiv.appendChild(pTitle);
                    detailsDiv.appendChild(pURL);
                    detailsDiv.appendChild(pCategory);
                });
            }
        }

        // function ShowDetails() {
        
        // } 

        var detailsDivA = document.getElementById("bookmarkDetailsA");
        displayBookmarks(bookmarksA, detailsDivA);

        var detailsDivB = document.getElementById("bookmarkDetailsB");
        displayBookmarks(bookmarksB, detailsDivB);