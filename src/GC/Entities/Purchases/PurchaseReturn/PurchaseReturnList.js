import React from 'react';
import Table from '../../../UI/Table/Table';
// import UpdatePurchaseComponent from './PurchaseAddForm';
import { columns } from '../../../../ControlsData/Purchase/PurchaseReturn';
const PurchaseReturnList = (props) => {

    return (
        <Table columns={columns} service="purchaseReturnServices" page="Purchase Return" >
            {/* <UpdatePurchaseComponent /> */}
        </Table>
    )
}
export default PurchaseReturnList;