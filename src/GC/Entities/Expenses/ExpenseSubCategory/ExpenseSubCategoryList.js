import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateExpenseSubcategoryComponent from './ExpenseSubCategoryAddForm';
import { columns } from '../../../../ControlsData/Expense/ExpenseSubcategory';
const ExpenseSubcategoryList = (props) => {

    return (
        <Table columns={columns} service="expenseSubcategoryServices" page="Expense Subcategory" addItemRoute={"/expensesubcategoryadd"}>
            <UpdateExpenseSubcategoryComponent />
        </Table>
    )
}
export default ExpenseSubcategoryList;