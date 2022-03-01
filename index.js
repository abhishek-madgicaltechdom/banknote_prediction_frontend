// // const submitData = (e) => {

// //     e.preventDefault()

// //     console.log('Submit Data');
// //     const form = document.querySelector('form');
// //     const data = Object.fromEntries(new FormData(form).entries());
// //     console.log(data);
// // }
// // import 'regenerator-runtime/runtime';
// import axios from 'axios';   

// var form = document.forms.namedItem("form");

// // form.addEventListener('load', makeGetRequest())


// form.addEventListener('submit', function (ev) {

//     ev.preventDefault();
//     console.log('Submit Data');
//     const form = document.querySelector('form');
//     const data = Object.fromEntries(new FormData(form).entries());
//     makePostRequest('/prediction', data)
//     console.log(data);
// }, false);


// function makePostRequest(path, queryObj) {
//     axios.post(path, queryObj).then(
//         (response) => {
//             var result = response.data;
//             console.log(result);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
// }
 
// queryObj = { name: 'Chitrank' };
// makePostRequest('http://0.0.0.0:3030', queryObj);