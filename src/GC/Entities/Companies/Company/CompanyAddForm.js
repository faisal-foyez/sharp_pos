import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import {controls} from '../../../../ControlsData/Company/Company';
const CompanyAddForm = (props) => {
    return (
        <>
            <InputForm controls={controls} service="companyServices" entity="company" name="Company" row={props.row}/>
        </>

    )

}

export default CompanyAddForm;