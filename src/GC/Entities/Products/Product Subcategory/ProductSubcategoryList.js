import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateProductSubcategoryComponent from './ProductSubcategoryAddForm';
import { columns } from '../../../../ControlsData/Product/ProductSubCategory';
const ProductSubcategoryList = (props) => {

    return (
        <Table columns={columns} service="productSubcategoryServices" page="Product Subcategory" addItemRoute={"/productsubcategoryadd"}>
            <UpdateProductSubcategoryComponent />
        </Table>
    )
}
export default ProductSubcategoryList;