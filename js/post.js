// Get ID from URL
var url = new URL(window.location.href);
var id = url.searchParams.get("id");

// Get Post from JSON posts
fetch("../posts/posts.json")
    .then(response => {
        return response.json()
    }
    )
    .then(data => {
        // Insert the navbar into a class called navbar-container
        // document.querySelector(".navbar-container").innerHTML = data;
        console.log(data);

        let postContainer = document.querySelector(".post-container");

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                createPost(data[i]);
                return;
            }
        }

        console.log("Post not found");
        
        // Redirect to 404
        window.location.href = "404.html";
});

/*
Insert following HTML code into the current page head
    <meta property="og:title" content="[POST TITLE]">
    <meta property="og:description" content="[POST CONTENT]">
    <meta property="og:image" content="images/logo.png">
*/


function createPost(postJson) {
    let title = postJson.name;
    let content = postJson.content;
    let author = postJson.author;
    let date = postJson.date;

    if(postJson.hidden)
    {
        // Activate item with class "hidden-title"
        let hiddenTitle = document.querySelector(".hidden-title");
        hiddenTitle.classList.remove("hidden-title");

        // Add disclaimer class
        hiddenTitle.classList.add("disclaimer");
    }

    // Insert following HTML code into the current page head
    let head = document.querySelector("head");
    head.innerHTML += `
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${postJson.description}">
        <meta property="og:image" content="images/logo.png">
    `;

    console.log(title, content, author, date);

    let postTitle = document.querySelector(".post-title");
    let postContent = document.querySelector(".post-content");
    let postAuthor = document.querySelector(".post-author");
    let postDate = document.querySelector(".post-date");

    postTitle.innerHTML = "<h1>" + title + "</h1>";

    // Replace new lines with <br>
    content = content.replace(/\n/g, "<br>");
    postContent.innerHTML = content;

    postAuthor.innerHTML = "<p>By " + author + "</p>";
    postDate.innerHTML = "<p>" + date + "</p>";
}
