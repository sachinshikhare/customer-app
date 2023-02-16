import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        const navigate  = useNavigate();
        return <Children {...props}  match = {match} navigate = {navigate}/>
    }
}
class CreateUpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customerName: '',
            emailId: '',
            errorMessage: ''
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then( (res) =>{
                let customer = res.data;
                this.setState({
                    customerName: customer.customerName,
                    emailId : customer.emailId
                });
            });
        }
    }

    saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        if (this.state.customerName.trim() === '' || this.state.emailId.trim() === '') {
            this.setState({errorMessage: "Invalid input, Customer Name And/Or Email Id cannot be empty"}) ;
            return;
        }

        let customer = {customerName: this.state.customerName, emailId: this.state.emailId};
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.navigate('/customers');
            });
        }else{
            customer.customerId = this.state.id
            CustomerService.updateCustomer(customer, this.state.id).then( res => {
                this.props.navigate('/customers');
            });
        }
    }

    changeCustomerNameHandler= (event) => {
        this.setState({
            customerName: event.target.value,
            errorMessage: ''
        });
    }

    changeEmailIdHandler= (event) => {
        this.setState({
            emailId: event.target.value,
            errorMessage: ''
        });
    }

    cancel(){
        this.props.navigate('/customers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 >Add Customer</h3>
        }else{
            return <h3 >Update Customer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div >
                    <div >
                        <label  >{this.state.errorMessage}</label>
                        <br/>
                        <div >
                            {
                                this.getTitle()
                            }
                            <br/>
                            <div>
                                <form>
                                    <table>
                                        <tbody>
                                            {
                                            this.state.id !== '_add' &&
                                                <tr align={"left"}>
                                                    <th>Customer Id:</th>
                                                    <td>{ this.state.id }</td>
                                                </tr>
                                            }
                                            <tr align={"left"}>
                                                <th> Customer Name: </th>
                                                <td>
                                                    <input placeholder="Customer Name" name="customerName"
                                                           value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                                </td>
                                            </tr>
                                            <tr align={"left"}>
                                                <th>Customer Email Id:</th>
                                                <td>
                                                    <input placeholder="Email Address" name="emailId"
                                                           value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                                </td>
                                            </tr>
                                            <tr align={"left"}>
                                                <th></th>
                                                <td>
                                                    <br/>
                                                    <button onClick={this.saveOrUpdateCustomer}>Save</button>
                                                        &nbsp;&nbsp;&nbsp;
                                                    <button onClick={this.cancel.bind(this)} >Cancel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(CreateUpdateCustomerComponent);
