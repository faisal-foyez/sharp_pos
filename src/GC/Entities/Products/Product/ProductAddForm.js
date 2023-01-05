import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Product/Product';
const ProductAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="productServices" entity="product" name="Product" row={props.row} />
        </>

    )

}

export default ProductAddForm;