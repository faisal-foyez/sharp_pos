import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Product/ProductCategory';
const ProductCategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="productCategoryServices" entity="productCategory" name="Product Category" row={props.row} />
        </>

    )

}

export default ProductCategoryAddForm;