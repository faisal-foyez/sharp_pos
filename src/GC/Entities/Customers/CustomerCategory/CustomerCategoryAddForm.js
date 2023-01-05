import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Customer/CustomerCategory';
const CustomerCategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="customerCategoryServices" name="Customer Category" entity="customerCategory"  row={props.row} />
        </>

    )

}

export default CustomerCategoryAddForm;