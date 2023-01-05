import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateSupplierSubcategoryComponent from './SupplierSubcategoryAddForm';
import { columns } from '../../../../ControlsData/Supplier/SupplierSubcategory'
const SupplierSubcategoryList = (props) => {

    return (
        <Table columns={columns} service="supplierSubcategoryServices" page="Supplier Subcategory" addItemRoute={"/suppliersubcategoryadd"}>
            <UpdateSupplierSubcategoryComponent />
        </Table>
    )
}
export default SupplierSubcategoryList;