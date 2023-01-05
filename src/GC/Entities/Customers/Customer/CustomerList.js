import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateCustomerComponent from './CustomerAddForm';
import { columns } from '../../../../ControlsData/Customer/Customer'
const CustomerList = (props) => {

    return (
        <Table columns={columns} service="customerServices" page="Customer" addItemRoute={"/customeradd"}>
            <UpdateCustomerComponent />
        </Table>
    )
}
export default CustomerList;