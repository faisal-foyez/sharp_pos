import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateCustomerSubcategoryComponent from './CustomerSubCategoryAddForm';
import { columns } from '../../../../ControlsData/Customer/CustomerSubcategory';
const CustomerSubcategoryList = (props) => {

    return (
        <Table columns={columns} service="customerSubcategoryServices" page="Customer Subcategory" addItemRoute={"/customersubcategoryadd"}>
            <UpdateCustomerSubcategoryComponent />
        </Table>
    )
}
export default CustomerSubcategoryList;