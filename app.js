// import functions and grab DOM elements
const authBtn = document.getElementById('auth-button');
// let state

// set event listeners 
authBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    return location.replace('/Auth-Page');
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
