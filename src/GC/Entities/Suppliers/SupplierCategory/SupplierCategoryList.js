import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateSupplierCategoryComponent from './SupplierCategoryAddForm';
import { columns } from '../../../../ControlsData/Supplier/SupplierCategory'
const SupplierCategoryList = (props) => {

    return (
        <Table columns={columns} service="supplierCategoryServices" page="Supplier Category" addItemRoute={"/suppliercategoryadd"}>
            <UpdateSupplierCategoryComponent />
        </Table>
    )
}
export default SupplierCategoryList;