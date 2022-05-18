import { createNewPost } from '../fetch-utils.js';
//import { renderPosts } from '../render-utils.js';

const createForm = document.getElementById('sticky-form');
const saveBtn = document.getElementById('save');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const newPost = {
        Title: data.get('title'),
        Description: data.get('description'),
        Author: data.get('author'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
    return location.assign('/');
});

// saveBtn.addEventListener('submit', async (e) => {
//     e.preventDefault();

// });