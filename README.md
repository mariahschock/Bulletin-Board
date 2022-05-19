## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

To Do List:

- Add Supabase script to html
- Create fetch-utils.js file
  - Add Supabase URL and Key
  - Add client
- Create sign up and sign-in forms in html
  - add two inputs
    - email (type= email)
    - password (type= password)
  - add buttons that say "sign up" and "sign-in"
- In app.js:
  - add const variables for sign up and sign-in forms
  - add submit event listeners (don't forget the e.preventDefault();)
  - add new FormData for sign up and sign-in forms
  - const user = await signUpUser(data.get('email'), data.get('password');)









Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
