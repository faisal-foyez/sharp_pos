import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateExpenseComponent from './ExpenseAddForm';
import { columns } from '../../../../ControlsData/Expense/Expense';
const ExpenseList = (props) => {

    return (
        <Table columns={columns} service="expenseServices" page="Expense" addItemRoute={"/expenseadd"}>
            <UpdateExpenseComponent />
        </Table>
    )
}
export default ExpenseList;