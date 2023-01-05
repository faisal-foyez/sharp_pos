import React from 'react';
import Table from '../../../UI/Table/Table';
// import UpdatePurchaseComponent from './PurchaseAddForm';
import { columns } from '../../../../ControlsData/Sales/Sales';
const SalesList = (props) => {

    return (
        <Table columns={columns} service="salesServices" page="Sales" >
            {/* <UpdatePurchaseComponent /> */}
        </Table>
    )
}
export default SalesList;