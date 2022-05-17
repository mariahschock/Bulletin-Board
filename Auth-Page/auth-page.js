import { signInUser, signUpUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.assign('/Create-Page');
    } else if (!user) {
        alert('Either Email or Password is incorrect');
    }
});
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/Create-Page');
    }
});

redirectIfLoggedIn();