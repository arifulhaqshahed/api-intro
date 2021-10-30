function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}


function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>New title: ${post.title}</h3>
        <p>New description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayPhotos(data))
}

function displayPhotos(photos){
    const photoContainer = document.getElementById('photos');
    for (const photo of photos) {
        const img = document.createElement('img');
        img.style.margin = '10px';
        img.src = photo.thumbnailUrl;
        // console.log(photo)
        photoContainer.appendChild(img);
    }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);

const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} }
const {brand} = premikas.cars;
console.log(brand);

