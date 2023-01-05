import React from 'react';
import Table from '../../../UI/Table/Table';
// import UpdatePurchaseComponent from './PurchaseAddForm';
import { columns } from '../../../../ControlsData/Purchase/Purchase';
const PurchaseList = (props) => {

    return (
        <Table columns={columns} service="purchaseServices" page="Purchase" >
            {/* <UpdatePurchaseComponent /> */}
        </Table>
    )
}
export default PurchaseList;