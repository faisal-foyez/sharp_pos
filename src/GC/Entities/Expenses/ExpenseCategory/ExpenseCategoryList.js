import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateExpenseCategoryComponent from './ExpenseCategoryAddForm';
import { columns } from '../../../../ControlsData/Expense/ExpenseCategory';
const ExpenseCategoryList = (props) => {

    return (
        <Table columns={columns} service="expenseCategoryServices" page="Expense Category" addItemRoute={"/expensecategoryadd"}>
            <UpdateExpenseCategoryComponent />
        </Table>
    )
}
export default ExpenseCategoryList;