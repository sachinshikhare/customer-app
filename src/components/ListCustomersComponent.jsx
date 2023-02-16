import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from 'react-router-dom';

class ListCustomersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                customers: []
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);

    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then( res => {
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)});
        });
    }
    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }
    render() {
        return (
            <div>
                 <h2 >Customers List</h2>
                 <div>
                    <Link to={'/add-customer/_add'}>Add Customer</Link>
                 </div>
                 <br></br>
                {this.state.customers.length != 0 && <div>
                        <table border={3}>
                            <thead>
                                <tr>
                                    <th> Customer Id</th>
                                    <th> Customer Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer =>
                                        <tr key = {customer.customerId}>
                                            <td> { customer.customerId} </td>
                                            <td> { customer.customerName} </td>
                                            <td>
                                                <Link to={`/view-customer/${customer.customerId}`} >View </Link>
                                                    &nbsp;&nbsp;
                                                <Link to={`/add-customer/${customer.customerId}`}>Update</Link>
                                                    &nbsp;&nbsp;
                                                <Link onClick={ () => this.deleteCustomer(customer.customerId)}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div> }

            </div>
        )
    }
}

export default ListCustomersComponent
