### `npm i`

This command will install every package necessary to run the app :

FRONTEND :
- REACT.js : (react-router-dom / react-dom / react-icons / react-scripts)
- styled-components (handle CSS)
- formik (handle form validation)
- yup (used in formik to handle validationSchema)
- axios (handle the API requests)

BACKEND :
- express
- nodemon
- bcrypt (used to hash password)
- dotenv
- jsonwebtoken
- mysql2
- sequelize (handle / create the SQL database using models)

To launch the app :
- Download ans install MySQL WorkBench (https://dev.mysql.com/downloads/workbench/)
Launch WorkBench, then : 
- Create a user named : root
- Create a password : groupomania
- Create a database named : groupomania

In Visual Studio Code (or another) :
- Open a terminal in the repository :
    ### `cd docs/backend/`
    ### `nodemon server.js`

- Open a second terminal :
    ### `cd docs/frontend/`
    ### `npm start`