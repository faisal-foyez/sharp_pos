import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateProductCategoryComponent from './ProductCategoryAddForm';
import { columns } from '../../../../ControlsData/Product/ProductCategory';
const ProductCategoryList = (props) => {

    return (
        <Table columns={columns} service="productCategoryServices" page="Product Category" addItemRoute={"/productcategoryadd"}>
            <UpdateProductCategoryComponent />
        </Table>
    )
}
export default ProductCategoryList;