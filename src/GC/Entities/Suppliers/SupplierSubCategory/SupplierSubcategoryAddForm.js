import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Supplier/SupplierSubcategory';
const SupplierSubcategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="supplierSubcategoryServices" entity="supplierSubCategory" name="Supplier Subcategory" row={props.row} />
        </>

    )

}

export default SupplierSubcategoryAddForm;