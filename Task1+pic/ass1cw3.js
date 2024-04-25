const div = document.getElementById("container")

const fetchposts = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const posts = await response.json()
    console.log(posts)

    posts.forEach((each)=>{
        div.innerHTML += `

            <div class="card">
                <h1> ${each.userId}</h1>
                <h3>${each.id}</h3>
                <h4>${each.title}</h4>
                <h5>${each.body}</h5>
                
                <button class="btn"> View More </button>
            </div>
        `
    })
}

fetchposts()
