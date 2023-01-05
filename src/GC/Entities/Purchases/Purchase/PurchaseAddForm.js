import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Purchase/Purchase';
const PurchaseAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="purchaseServices" entity="Purchase" row={props.row} />
        </>

    )

}

export default PurchaseAddForm;