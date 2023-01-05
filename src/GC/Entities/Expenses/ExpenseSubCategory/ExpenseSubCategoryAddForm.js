import React, { useState } from 'react';
import InputForm from '../../../UI/InputForm/InputForm';
import { controls } from '../../../../ControlsData/Expense/ExpenseSubcategory';
const ExpenseSubcategoryAddForm = (props) => {

    return (
        <>
            <InputForm controls={controls} service="expenseSubcategoryServices" entity="expenseSubCategory" name="Expense Subcategory" row={props.row} />
        </>

    )

}

export default ExpenseSubcategoryAddForm;