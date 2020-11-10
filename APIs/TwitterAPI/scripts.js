let body = document.querySelector('body');
let url = 'https://dog.ceo/api/breeds/image/random/50';

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res.message);
    for(let i = 0; i < res.message.length; i++){
      let picture = document.createElement('img');
      picture.src = res.message[i];
      body.appendChild(picture);
    }
  })
  .catch(err => console.log(err));





















// other ways of writing our fetch request (none are incorrect)
// fetch(url).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));

// fetch(url)
//   .then(res =>{return res.json()})
//   .then(res => {console.log(res)})
//   .catch(err => {console.log(err)})

// fetch(url)
//   .then(res =>{
//     return res.json()
//   })
//   .then(res => {
//     body.appe(res)})
//   .catch(err => {
//     console.log(err)
//   })