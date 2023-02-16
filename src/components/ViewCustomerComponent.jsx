import React, { Component } from 'react'
import CustomerService from "../services/CustomerService";
import {Link, useParams} from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ViewCustomerComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div >
                    <h3 > View Customer Details</h3>
                    <table>
                        <tbody>
                            <tr align={"left"}>
                                <th>Customer Id:</th>
                                <td>{ this.state.customer.customerId }</td>
                            </tr>
                            <tr align={"left"}>
                                <th> Customer Name: </th>
                                <td>{ this.state.customer.customerName }</td>
                            </tr>
                            <tr align={"left"}>
                                <th>Customer Email Id:</th>
                                <td>{ this.state.customer.emailId }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
                <Link to={'/customers'}>Back</Link>
            </div>
        )
    }
}

// export default ViewCustomerComponent
export default withRouter(ViewCustomerComponent);
