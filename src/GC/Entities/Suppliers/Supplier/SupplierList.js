import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateSupplierComponent from './SupplierAddForm';
import { columns } from '../../../../ControlsData/Supplier/Supplier'
const SupplierList = (props) => {

    return (
        <Table columns={columns} service="supplierServices" page="Supplier" addItemRoute={"/supplieradd"}>
            <UpdateSupplierComponent />
        </Table>
    )
}
export default SupplierList;