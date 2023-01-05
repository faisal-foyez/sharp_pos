import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Customer/Customer';
const CustomerAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="customerServices" entity="customer" name="Customer" row={props.row} />
        </>

    )

}

export default CustomerAddForm;