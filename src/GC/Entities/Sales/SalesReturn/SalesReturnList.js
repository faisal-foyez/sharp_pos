import React from 'react';
import Table from '../../../UI/Table/Table';
// import UpdatePurchaseComponent from './PurchaseAddForm';
import { columns } from '../../../../ControlsData/Sales/SalesReturn';
const SalesReturnList = (props) => {

    return (
        <Table columns={columns} service="salesReturnServices" page="Sales Return" >
            {/* <UpdatePurchaseComponent /> */}
        </Table>
    )
}
export default SalesReturnList;