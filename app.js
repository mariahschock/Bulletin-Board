// import functions and grab DOM elements
const authBtn = document.getElementById('auth-button');
const createBtn = document.getElementById('create-button');

// let state

// set event listeners 
authBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    return location.assign('/Auth-Page');
});

createBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    return location.assign('/Create-Page');
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
