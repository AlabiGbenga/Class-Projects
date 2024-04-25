const div = document.getElementById("container")

const fetchComments = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")

    const comments = await response.json()
    console.log(comments)

    comments.forEach((each)=>{
        div.innerHTML += `

            <div class="card">
                <h1> ${each.body}</h1>
                <h3>${each.email}</h3>
                <h4>${each.id}</h4>
                <h5>${each.name}</h5>
                <h6>${each.postId}</h6>
                <button class="btn"> View More </button>
            </div>
        `
    })
}

fetchComments()
