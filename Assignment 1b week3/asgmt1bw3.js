const div = document.getElementById("container")

const fetchalbums = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")

    const albums = await response.json()
    console.log(albums)

    albums.forEach((each)=>{
        div.innerHTML += `

            <div class="card">
                <h1> ${each.id}</h1>
                <h3>${each.title}</h3>
                <h4>${each.userId}</h4>
                
                <button class="btn"> View More </button>
            </div>
        `
    })
}

fetchalbums()
