export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('post-its');

    const h1 = document.createElement('h1');
    h1.textContent = post.Title;

    const p = document.createElement('p');
    p.textContent = post.Description;

    const h3 = document.createElement('h3');
    h3.textContent = post.Author;

    div.append(h1, p, h3);
    return div;
}