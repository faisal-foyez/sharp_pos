import React, { useState } from 'react';
// import { updateObject, checkValidity } from '../../../../Shared/utility';
import InputForm from '../../../UI/InputForm/InputForm'
import ContextMenu from '../../../UI/ContextMenu/ContextMenu';
import {controls} from '../../../../ControlsData/Company/Branch';
const BranchAddForm = (props) => {
    return (
        <>
            <InputForm controls={controls} service="branchServices" entity="branch" name="Branch" row={props.row} />
        </>

    )

}

export default BranchAddForm;