import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Supplier/Supplier';
const SupplierAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="supplierServices" entity="supplier" name="Supplier" row={props.row} />
        </>

    )

}

export default SupplierAddForm;