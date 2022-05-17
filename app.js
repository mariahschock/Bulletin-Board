import { fetchPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const authBtn = document.getElementById('auth-button');
const createBtn = document.getElementById('create-button');
const postList = document.getElementById('bulletin-board');

authBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    return location.assign('/Auth-Page');
});

createBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    return location.assign('/Auth-Page');
});

async function loadData() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        postList.append(postDiv);
    }
}
loadData();

