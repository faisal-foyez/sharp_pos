import React, { useState } from 'react';
import InputFrom from '../../../UI/InputForm/InputForm';
import {controls} from '../../../../ControlsData/User/UserRole';
const userRoleAddForm = (props) => {
    return (
        <>
            <InputFrom controls={controls} service="userRoleServices" entity="userRole" name="User Role" row={props.row}/>
        </>

    )

}

export default userRoleAddForm;