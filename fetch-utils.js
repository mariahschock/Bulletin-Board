const SUPABASE_URL = 'https://vrgnnbxjpirhnspwbtxy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZ25uYnhqcGlyaG5zcHdidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDM4ODksImV4cCI6MTk2Nzg3OTg4OX0.pLi2lpE10QoZGWcQundIQW6sYkcpvCsuLewA1q7lto8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    const resp = await client.from('Posts').select('*');
    console.log(resp);
    return resp.data;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });
    if (resp.user) {
        return resp.user;
    } else {
        console.error(resp.error);
    }
}
export async function signUpUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    if (resp.user) {
        return resp.user;
    } else {
        console.error(resp.error);
    }
}

export async function createNewPost(post) {
    const resp = await client.from('Posts').insert(post);
    if (resp.data) {
        return resp.data;
    } else {
        console.error(resp.error);
    }
}

export function checkAuth() {
    const user = getUser();
    // if (!user) location.assign('/');
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}
// export async function redirectIfLoggedIn() {
//     if (getUser()) {
//         location.assign('./Create-Page');
//     } 
// }