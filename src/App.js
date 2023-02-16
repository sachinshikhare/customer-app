import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ListCustomersComponent from './components/ListCustomersComponent';
import CreateUpdateCustomerComponent from './components/CreateUpdateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';

function App() {
  return (
      <div>
        <Router>
          <div className="container">
            <Routes>
              <Route path = "/" exact element = { <ListCustomersComponent /> } ></Route>
              <Route path = "/customers" element = { <ListCustomersComponent /> }></Route>
              <Route path = "/add-customer/:id" element = { <CreateUpdateCustomerComponent /> } ></Route>
              <Route path = "/view-customer/:id" element = {<ViewCustomerComponent />}></Route>
            </Routes>
          </div>
        </Router>
      </div>

  );
}

export default App;
