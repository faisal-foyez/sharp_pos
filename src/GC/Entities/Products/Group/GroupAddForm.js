import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Product/Group';
const GroupAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="groupServices" entity="group" name="Group" row={props.row} />
        </>

    )

}

export default GroupAddForm;