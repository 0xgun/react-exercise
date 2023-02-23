import axios from 'axios';
import React, { Component } from 'react';
import Panel,{Button} from "react-bootstrap"
 
class Customers extends Component{
    constructor(props){
        super(props);
        this.state={
            selectCustomer:1
        }
    }
    componentDidMount(){
        this.getCustomerdata();

    }
    getCustomerdata(){
        axios.get('public\samplejson\customerlist.json').then(Response =>{
            this.state({customerList:Response})
        })
    }
    render(){
        //object
        return (
            <div className='addmargin'>
                <div className='col-mid-3'>
                    {this.state.customerList.data.map(customer =>{
                        <Panel bsStyle="info" key={customer.name} className ="centeralign" >
                            <Panel.Heading>
                                <Panel.Title coponentClass='h3'>
                                    {customer.name}
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <p>
                                    {Customers.email}
                                </p>
                                <p>
                                    {Customers.phone}
                                </p>
                                <Button bsStyle="info" onClick={()=>this.setState({selectCustomer:customer.id})}>
                                    Click To View
                                </Button>
                            </Panel.Body>

                        </Panel>
                    })}
                </div>
            </div>
        );
    }

}
export default Customers;