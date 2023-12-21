# A MERN App for Storing Workout Plans

Users can Log in/ Sign up and create and store their workout plans.


## Technologies Used

Backend: <b>Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt</b>
<br/>
Frontend: <b>React.js, React Router</b>

<b>Hosted on Railway.app for backend</b>
<br/>
<b>Hosted on Vercel for frontend</b>

## Getting Started
``` bash
cd ./backend
npm install
touch .env
npm run dev

cd ..
cd ./frontend
npm install
npm start
```

In the .env file, add your MongoDB URI and JWT Secret Key
``` bash
PORT=4000
MONGO_URI="YOUR_MONGODB_URI"
JWT_SECRET_KEY="YOUR JWT STRING (RANDOM STRING)"
```

And wherever you perform the fetch operations in the frontend, change the URL to your localhost:4000