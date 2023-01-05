import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Expense/ExpenseCategory';
const ExpenseCategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="expenseCategoryServices" entity="expenseCategory" name="Expense Category" row={props.row} />
        </>

    )

}

export default ExpenseCategoryAddForm;