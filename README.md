# Customer-App React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Features
1. View All Customers 
   - "/" OR "/customers" 
   - It will show list of all existing customers. None if no existing customers
     - For Each customer in table, you will have 3 links
       1. View will navigate to **View Customer Details**
       2. Update wll navigate to **Update Customer**
       3. Delete will Delete Customer
   - It will also have a link to navigate to **Create New Customer**
2. Create New Customer
   - '/add-customer/_add'
   - You can add details to create new customer
   - On clicking of Save button customer will be created and you will be navigated to **View All Customers**
   - On clicking of Cancel you will be navigated to **View All Customers**
3. Update Customer
   - '/add-customer/:id'
   - You can modify details of existing customer
   - On clicking of Save button customer will be created and you will be navigated to **View All Customers**
   - On clicking of Cancel you will be navigated to **View All Customers**
4. View Customer Details
   - /view-customer/:id
   - You can view customer details on this page
   - back link will navigate to **View All Customers**