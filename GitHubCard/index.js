import axios from 'axios'

// 1: send a GET request to the following URL https://api.github.com/users/<your name>
axios
  .get('https://api.github.com/users/elijahdaniel')
  .then(res => {
    const cards = document.querySelector('.cards')
    cards.append(github(res.data))
  })
  .catch(err => console.log(err))

// 2: inspect the data. study it.
// ʕ•́ᴥ•̀ʔっ kthanksbai.

// 3: create a component with the structure at the bottom of the page
function github(data) {
  // elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const info = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  // const a = document.createElement('a') <- used template literal instead
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  // classes
  card.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  // content
  img.src = data.avatar_url
  name.textContent = data.name
  username.textContent = data.login
  location.textContent = `Location: ${data.location}`
  profile.innerHTML = `Profile: <a href=${data.html_url}>${data.name}</a>`
  followers.textContent = `Followers: ${data.followers}`
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  // append elements into card-info
  info.append(name, username, location, profile, followers, following, bio)

  // append elements to parent card
  card.append(img, info)

  return card
}

// 4: Pass the data received from Github into your function
// See step 1

// 5: populate followersArray and create their cards (.forEach below)
const followersArray = [
  'oliviaChen2020',
  'simonesquad',
  'dionne-stratton',
  'joshuaholloway',
  'leachtucker',
  'rhea-manuel',
  'sophiethedeveloper',
  'sleepylazarus',
]

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`).then(data => {
    const cards = document.querySelector('.cards')
    cards.appendChild(github(data.data))
  })
})

// structure for task 3
/*
  <div class="card">
    <img src={image url of user} />
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:  
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  </div>
*/
