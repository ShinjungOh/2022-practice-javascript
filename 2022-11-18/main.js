import App from './App.js';

// (function () {
//     document
//         .querySelector('#search-keyword')
//         .addEventListener('keyup',
//             function (e) {
//                 fetch(`https://api.idiots.band/api/search?keyword=${e.target.value}`)
//                     .then((x) => x.json())
//                     .then((data) => {
//                         console.log(JSON.stringify(data, null, 2));
//                         const htmlString = `${data
//                             .map((d) => `<div style="display: inline-block; width: 33%"><img src="${d.poster}" style="object-fit: cover; width: 100%;"></div>`)
//                             .join('')}`;
//                         document.querySelector('#search-result').innerHTML = htmlString;
//                     });
//             }
//         );
// })();

function debounce(callback, limit = 200) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(this, args);
        }, limit);
    }
}

new App({
    target: 'app',
})
