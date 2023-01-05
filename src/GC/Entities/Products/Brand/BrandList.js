import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateBrandComponent from './BrandAddForm';
import { columns } from '../../../../ControlsData/Product/Brand';
const BrandList = (props) => {

    return (
        <Table columns={columns} service="brandServices" page="Brand" addItemRoute={"/brandadd"}>
            <UpdateBrandComponent />
        </Table>
    )
}
export default BrandList;