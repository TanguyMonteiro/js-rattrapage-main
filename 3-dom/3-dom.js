let h2test = document.querySelector('article:first-of-type h2');
console.log(h2test);
h2test.innerText = 'Un titre remplacé avec VanillaJS';
let formChange = $('input#username');
formChange.val('test Jquery');
let paragraphs = $('article p');
paragraphs.addClass('paragraph');
//let firstParagraph = getElementsByTagName('article p:irst-of-type');
//firstParagraph.classList.add('summary');

let links = document.querySelectorAll('a.more');
links.forEach(function(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(event.target);
        console.log('Récupéré avec VanillaJS');
    });
});

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let usernameField = document.querySelector('#username');
    console.log(usernameField.value);

    let passwordField = document.querySelector('#password');
    console.log(passwordField.value);
});