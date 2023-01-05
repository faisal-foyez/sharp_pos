import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateCustomerCategoryComponent from './CustomerCategoryAddForm';
import { columns } from '../../../../ControlsData/Customer/CustomerCategory'
const CustomerCategoryList = (props) => {

    return (
        <Table columns={columns} service="customerCategoryServices" page="Customer Category" addItemRoute={"/customercategoryadd"}>
            <UpdateCustomerCategoryComponent />
        </Table>
    )
}
export default CustomerCategoryList;