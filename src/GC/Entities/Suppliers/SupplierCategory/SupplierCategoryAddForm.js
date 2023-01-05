import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Supplier/SupplierCategory';
const SupplierCategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="supplierCategoryServices" entity="supplierCategory" name="Supplier Category" row={props.row} />
        </>

    )

}

export default SupplierCategoryAddForm;