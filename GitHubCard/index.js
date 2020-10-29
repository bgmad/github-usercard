import axios from 'axios';
import gsap from 'gsap';

/*
STEP 1: using axios, send a GET request to the following URL
(replacing the placeholder with your Github name):
https://api.github.com/users/<your name>
*/


const followersArray = [ 'bgmad', 'Ladrillo', 'BigKnell', 'tetondan', 'justsml', 'zoelud'];

followersArray.forEach(username => {
  axios
   .get(`https://api.github.com/users/${username}`)
   .then(res => {
      const userData = res.data;
      const cards = document.querySelector('.cards');
      cards.appendChild(createCard(userData));
   })
   .catch(err => {
     console.log(`Data ${err.response.data.message}`);
   });
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
STEP 5: Now that you have your own card getting added to the DOM, either
follow this link in your browser https://api.github.com/users/<Your github name>/followers,
manually find some other users' github handles, or use the list found at the
bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

function createCard(userData) {
  const card = document.createElement('card');
  const userAvatar = document.createElement('img');
  const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
      const githubURL = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');
  const additionalInfo = document.createElement('div');


  card.classList.add('card');
  // card.classList.add('card-closed');
  userAvatar.src = userData['avatar_url'];
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = userData.name;
  username.classList.add('username');
  username.textContent = userData.login;
  location.textContent = `Location: ${userData.location}`;
  profile.textContent = `Profile: `;
  githubURL.href = userData['html_url'];
  githubURL.textContent = userData['html_url'];
  followers.textContent = `Followers: ${userData.followers}`;
  following.textContent = `Following: ${userData.following}`;
  bio.textContent = `Bio: ${userData.bio}`;
  additionalInfo.classList.add('more-container'); 

  card.appendChild(userAvatar);
  card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
      profile.appendChild(githubURL);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);


  card.addEventListener('click', event => {
    card.classList.toggle('card-open');
    
    if(card.classList.value === 'card card-open'){
      card.appendChild(additionalInfo);
      console.log(card);
    }
    else{
      card.removeChild(additionalInfo);
      console.log(card);
    }
  });

  return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
