import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateProductComponent from './ProductAddForm';
import { columns } from '../../../../ControlsData/Product/Product';
const ProductList = (props) => {

    return (
        <Table columns={columns} service="productServices" page="Product" addItemRoute={"/productadd"}>
            <UpdateProductComponent />
        </Table>
    )
}
export default ProductList;