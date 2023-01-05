import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Product/ProductSubCategory';
const ProductSubcategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="productSubcategoryServices" entity="productSubCategory" name="Product Subcategory" row={props.row} />
        </>

    )

}

export default ProductSubcategoryAddForm;