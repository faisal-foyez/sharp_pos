import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Expense/Expense';
const ExpenseAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="expenseServices" entity="expense" name="Expense" row={props.row} />
        </>

    )

}

export default ExpenseAddForm;