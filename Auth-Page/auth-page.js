import { signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');

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