// main.js

// Emmmet
<section className="news">
    <article>....</article>
    <article>....</article>
    <article>....</article>
</section>

// lapiemy element <h2>
document.body.firstElementChild.innerText = 'Witaj!';

// lapiemy element <button>
const button = document.querySelector('button');

// dopisujemy jeszcze text " Now!"
button.innerText = button.innerText + ' Now!';


https://developer.mozilla.org/en-US/docs/Web/CSS/attr


// ustawiamy atrybuty na <button>
button.setAttribute('active', true);
button.setAttribute('disabled', '');

function toBoolean(value) {
    if (value === 'true') {
        return true;
    }

    return false;

    // najkrocej:
    // return value === 'true';
}

console.log(
    true,
    toBoolean( button.getAttribute('active') )
);

button.setAttribute('age', 15);

console.log(
    Number( button.getAttribute('age') )
);

console.log( button.hasAttribute('age') );

// usuwamy atrybut age
button.removeAttribute('age');


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// dataset

const ul = document.querySelector('ul');

ul.dataset.disabled = true;
ul.dataset.superActive = 'foobar';
ul.dataset.secretNumber = 125657890;

console.log(
    ul.dataset.disabled,
    ul.dataset.superActive,
    ul.dataset.secretNumber,
    ul.dataset.myName
);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


const section = document.querySelector('.news');

console.log(
    'Czy klasa "news" istnieje?', section.classList.contains('news')
);

section.classList.add('tasty');
section.classList.add('foo', 'bar');

section.classList.remove('tasty');

console.log(
    'Pokaz wszystkie klasy na section', section.className
);  

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
 
const readMeButton = document.createElement('button');
 
readMeButton.textContent = 'Read me!';
readMeButton.setAttribute('type', 'button');
readMeButton.classList.add('btn', 'btn-warning');
readMeButton.style.backgroundColor = 'cyan';
readMeButton.style.fontWeight = 'bold';
 
 
const paragraph = document.createElement('p');
 
readMeButton.style.backgroundColor = 'cornsilk';
readMeButton.style.border = '1px solid brown';
 
 
const text = document.createTextNode('To jest zawartosc naszego paragrafu.');
 
// <!-- tekst komentarza -->
const comment = document.createComment('To jest tresc komentarza HTML.');
 
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
 
// wstaw readMeButton za (po) naszym  guziku z tekstem "Click!"
button.after(readMeButton);
 
// wypelniamy paragraf wczesniej przygotowanym tekstem
paragraph.append(text);
 
// teraz wstawiamy gotowy paragraf przez lista
ul.before(paragraph);
 
// wstawiamy nasz komentarz HTML jako pierwsze dziecko w <body>
document.body.prepend(comment);
 
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
 
// DocumentFragment
 
const reviews = [
    'Bylo OK.',
    'Nie podobalo mi sie!',
    '10/10',
    'Szkoda czasu...'
];
 
const fragment = document.createDocumentFragment();
 
 
reviews.forEach(review => {
    const li = document.createElement('li');
    li.textContent = review;
 
    fragment.append(li);
});
 
 
ul.append(fragment);
 
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */