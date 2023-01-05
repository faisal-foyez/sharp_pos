import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Customer/CustomerSubcategory';
const CustomerSubcategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="customerSubcategoryServices" entity="customerSubCategory" name="Customer Subcategory" row={props.row} />
        </>

    )

}

export default CustomerSubcategoryAddForm;