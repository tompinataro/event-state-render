// ! State
    // Default value is 0
let totalVotes = 0

/**
 * 
 * Will recieve a direction of "up" or "down"
 * Use the direction to change the total votes.
 */
function changeVoteCount(direction) {
    if (direction == "up") {
        totalVotes ++
    } else if (direction === "down") {
        totalVotes --
    }

    console.log("Vote count was changed, currently:", totalVotes)

    // * Render dom AFTER totalVotes changes
    render()

}

// ! Event Handlers
function upVoteHandler() {
    console.log("upVoteHandler() was called")
    changeVoteCount("up")
}

function downVoteHandler() {
    console.log("downVoteHandler() was called")
    changeVoteCount("down")
}

// ! Render
function render() {
    console.log("🦆 Rendering QUACK!")
    let voteCountDOM = document.getElementById("vote-count")
    console.log("voteCountDOM: ", voteCountDOM)

    voteCountDOM.textContent = totalVotes
}
