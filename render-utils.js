export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('post-its');

    const h2 = document.createElement('h2');
    h2.textContent = post.Title;

    const p = document.createElement('p');
    p.textContent = post.Description;

    const h6 = document.createElement('h6');
    h6.textContent = post.Author;

    div.append(h2, p, h6);
    return div;
}