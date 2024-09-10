

// ! Keep track of state!

let allPosts = [
    {
        content: "It's twitter, not x 🐦",
        author: "Not Elon"
    },
    {
        content: "It's Facebook, not meta 👾",
        author: "Not Mark"
    },
]

// function onReady() {
//     // // Add event listener for submit button
//     // document.querySelector('#submit-button').addEventListener('click', onSubmitPost);
// }

// Event handler
function onSubmitPost(event) {
    event.preventDefault();
    console.log('Submit button clicked!');

    // * Gather the data from the form:
    let contentInput = document.getElementById("content-input").value
    let authorInput = document.getElementById("author-input").value

    let newPost = {
        content: contentInput,
        author: authorInput
    }
    console.log("New post to add...", newPost)

    // Update state...
    allPosts.push(newPost)
    console.log("All posts after new post added: ", allPosts)

    // Render
    render(); 
}

function render() {
    // Render the posts

    let postsTableBody = document.getElementById("posts-table-body")
    console.log("postsTableBody: ", postsTableBody)

    // ! Clear the DOM
    postsTableBody.innerHTML = ""

    // ! Render entire data structure
    // Loop over the array of posts, and append them to the DOM
    for (let post of allPosts) {
        postsTableBody.innerHTML += `
            <tr>
                <td>${post.content}</td>
                <td>${post.author}</td>
            </tr>
        `
    }

}

// onReady()