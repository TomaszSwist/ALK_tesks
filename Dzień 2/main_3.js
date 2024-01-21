// Newsletter
// Stwórz dialog subskrypcji do newslettera; musi mieć miejsce na tytuł, treść, input na
// imię subskrybenta, input na e-mail subskrybenta, button "Subscribe" i miejsce na logo.

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    const firstName = formData.get('firstName')
    const emailAddress = formData.get('emailAddress')

    console.log(firstName, emailAddress);

    event.target.reset()
})