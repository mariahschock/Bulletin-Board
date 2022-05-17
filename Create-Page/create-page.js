import { createNewPost } from '../fetch-utils.js';

const createForm = document.getElementById('sticky-form');

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
});