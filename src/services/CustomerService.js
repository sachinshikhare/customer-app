import axios from 'axios';

const customerApisBaseUrl = "http://localhost:8080/api/v1/customers";

class CustomerService {

    getCustomers(){
        return axios.get(customerApisBaseUrl);
    }

    createCustomer(customer){
        return axios.post(customerApisBaseUrl, customer);
    }

    getCustomerById(customerId){
        return axios.get(customerApisBaseUrl + '/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(customerApisBaseUrl + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(customerApisBaseUrl + '/' + customerId);
    }
}

export default new CustomerService()