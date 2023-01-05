import React from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Product/Brand';
const BrandAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="brandServices" entity="brand" name="Brand" row={props.row} />
        </>

    )

}

export default BrandAddForm;