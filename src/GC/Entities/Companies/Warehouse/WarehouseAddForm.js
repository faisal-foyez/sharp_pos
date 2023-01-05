import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import {controls} from '../../../../ControlsData/Company/Warehouse';
const WarehouseAddForm = (props) => {
    return (
        <>
            <InputForm controls={controls} service="warehouseServices" entity="warehouse" name="Warehouse" row={props.row} />
        </>

    )

}

export default WarehouseAddForm;