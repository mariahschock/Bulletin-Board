import { fetchPosts, checkAuth, getUser, logout } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const authBtn = document.getElementById('auth-button');
const createBtn = document.getElementById('create-button');
const postList = document.getElementById('bulletin-board');

checkAuth();

// authBtn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     return location.assign('/Auth-Page');
// });

createBtn.addEventListener('click', () => {
    const user = getUser();
    if (user) {
        return location.assign('/Create-Page');
    } else {
        return location.assign('/Auth-Page');
    }
});

async function handleLogout() {
    await logout();
}

async function handleAuth() {
    window.location.href = '/Auth-Page';
}

async function loadData() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        postList.append(postDiv);
    }
    const user = getUser();
    console.log('reloading');
    console.log(user);
    
    if (user) {
        authBtn.textContent = 'Logout';
        authBtn.addEventListener('click', handleLogout);
        authBtn.classList.remove('hide');
    } else {
        authBtn.textContent = 'Login';
        authBtn.addEventListener('click', handleAuth);
        authBtn.classList.remove('hide');
    }
}

loadData();