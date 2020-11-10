let body = document.querySelector('body');
let url = '';

// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(res => res.json())
//   .then(res => {
//     for(let i = 0; i < res.all.length; i++){
//       let text = document.createElement('p');
//       text.innerText = res.all[i].text;
//       body.appendChild(text);
//     }
//   })
//   .catch(err => console.log(err));


// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
// .then(res => res.json())
// .then(res => {
//   for(let key in res.bpi){
//     console.log(res.bpi[key]);
//     let text = document.createElement('p');
//     text.innerText = `On ${res.time.updated} the ${res.bpi[key].code} had a rate of ${res.bpi[key].rate_float / 10000}`;
//     body.appendChild(text);
//   }
// })
// .catch(err => console.log(err));




















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