# E Commerce Rexlan

This project is using MERN stack (MongoDB, Express, React, Node). This is an E-Commerce type website with items like (clothes, shoes.. etc).
Currently not finished.

# Instructions

After cloning the repository you first need to change the directory to backend and install the necessary npm packages

```
cd backend
npm install
```

After you are done with that, go to frontend directory and install the necessary npm packages

```
cd ..
cd frontend
npm install
```

Finally you can go back to the main directory and install needed npm packages for running both server side and frontend side at one time. 

```
cd ..
npm install
```

## Database instructions

This projects uses MongoDB as DB, so to run it you will need to use local MongoDB Compass or MongoDB atlass, after setting it up you can take all the data files stored in `backend/data` and put them in in your DB.

## Environment variables instructions

You will need to create `.env` file in the main directory, follow `.env.example` variables as an example and fill them with your own data.

## Running the project

After everything is set, next time if you want to start the project all you need to do is run this command `npm run dev` from the main directory which will start server side and back side at one time.

You can start them independently with the following command.

```
npm run server - start server side
npm run client - start frontend side
```
