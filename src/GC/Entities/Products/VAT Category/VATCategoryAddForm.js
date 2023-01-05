import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Product/VATCategory';
const VATCategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="vatCategoryServices" entity="vatCategory" name="VAT Category" row={props.row} />
        </>

    )

}

export default VATCategoryAddForm;