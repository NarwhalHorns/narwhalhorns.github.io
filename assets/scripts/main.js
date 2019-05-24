// Vue.component('my-footer', {
//   template:
//     `<footer>
//       <ul>
//         <li><a href="mailto:jamestmason1997@gmail.com">Email</a></li>
//         <li><a href="https://www.instagram.com/justjamesmason">Instagram</a></li>
//         <li><a href="https://twitter.com/jamjarmason">Twitter</a></li>
//         <li><a href="https://github.com/NarwhalHorns">Github</a></li>
//       </ul>
//       <p id="copy"></p>
//     </footer>`
// })
//
// var app = new Vue({
//   el: '#app'
// })

document.getElementById('copy').innerHTML = 'James Mason &copy; ' + new Date().getFullYear()

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('./sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
