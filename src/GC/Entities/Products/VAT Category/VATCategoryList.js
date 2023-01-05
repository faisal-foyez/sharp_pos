import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateVATCategoryComponent from './VATCategoryAddForm';
import { columns } from '../../../../ControlsData/Product/VATCategory';
const VATCategoryList = (props) => {

    return (
        <Table columns={columns} service="vatCategoryServices" page="VAT Category" addItemRoute={"/vatcategoryadd"}>
            <UpdateVATCategoryComponent />
        </Table>
    )
}
export default VATCategoryList;