// get DOM element of button
const button = document.querySelector('button');
// get DOM element of ul
const ul = document.querySelector('ul');

const getDataJokes = async () => {

    return res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });    
    // const res = await axios.get('https://icanhazdadjoke.com', {
    //     headers: { 'Accept': 'application/json' }
    // });
    // console.log(res.data);
};

// getDataJokes();

button.addEventListener('click', () => {
    getDataJokes()
    .then(() => {

    const li = document.createElement('li');
    li.innerHTML = res.data.joke;
    ul.appendChild(li);
    
    })
})


// fetch("https://icanhazdadjoke.com", {
// headers: 'Accept','application/json'
// })
// .then((res) => {
// if(res.status !== 200){
// console.log('Problem! ', res.status);
// return;
// }
// res.json().then((data) => {
// console.log(data);
// })
// .catch((err) => {
// console.log('Fetch Error! ', err);
// });