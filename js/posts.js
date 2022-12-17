document.addEventListener("DOMContentLoaded", function() {
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
                createPost(data[i], postContainer);
            }
    });
});

function createPost(postJson, postContainer) {
    let name = postJson.name;
    let description = postJson.description;
    let author = postJson.author;
    let date = postJson.date;

    console.log(name, description, author, date);

    let post = document.createElement("div");
    post.classList.add("post");

    let postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    
    let postContent = document.createElement("div");
    postContent.classList.add("post-content");

    let postAuthor = document.createElement("div");
    postAuthor.classList.add("post-author");

    let postDate = document.createElement("div");
    postDate.classList.add("post-date");

    let postButton = document.createElement("button");
    postButton.classList.add("post-button");
    postButton.setAttribute("onclick", `launchPost(${postJson.id})`);

    let postTitleH1 = document.createElement("h1");
    postTitleH1.innerHTML = name;

    let postContentP = document.createElement("p");
    postContentP.innerHTML = description;

    let postAuthorP = document.createElement("p");
    postAuthorP.innerHTML = author;

    let postDateP = document.createElement("p");
    postDateP.innerHTML = date;

    let postButtonP = document.createElement("p");
    postButtonP.innerHTML = "Read";

    postTitle.appendChild(postTitleH1);
    postContent.appendChild(postContentP);
    postAuthor.appendChild(postAuthorP);
    postDate.appendChild(postDateP);
    postButton.appendChild(postButtonP);

    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(postAuthor);
    post.appendChild(postDate);
    post.appendChild(postButton);
    
    postContainer.appendChild(post);
}