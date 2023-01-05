import {controls as companyControls,columns as companyColumns, validation as companyValidation} from './Company/Company';
import { controls as branchControls, columns as branchColumns, validation as branchValidation } from './Company/Branch';
import { controls as warehouseControls, columns as warehouseColumns, validation as warehouseValidation } from './Company/Warehouse';

import { controls as customerControls, columns as customerColumns,validation as customerValidation } from './Customer/Customer';
import { controls as customerCategoryControls, columns as customerCategoryColumns, validation as customerCategoryValidation } from './Customer/CustomerCategory';
import { controls as customerSubCategoryControls, columns as CustomerSubCategoryColumns, validation as customerSubCategoryValidation } from './Customer/CustomerSubcategory';

import { controls as expenseControls, columns as expenseColumns, validation as expenseValidation } from './Expense/Expense';
import { controls as expenseCategoryControls, columns as expenseCategoryColumns, validation as expenseCategoryValidation } from './Expense/ExpenseCategory';
import { controls as expenseSubCategoryControls, columns as expenseSubCategoryColumns, validation as expenseSubCategoryValidation } from './Expense/ExpenseSubcategory';

import { controls as brandControls, columns as brandColumns, validation as brandValidation } from './Product/Brand';
import { controls as groupControls, columns as groupColumns, validation as groupValidation } from './Product/Group';
import { controls as productControls, columns as productColumns, validation as productValidation } from './Product/Product';
import { controls as productCategoryControls, columns as productCategoryColumns, validation as productCategoryValidation} from './Product/ProductCategory';
import { controls as productSubCategoryControls, columns as productSubCategoryColumns, validation as productSubCategoryValidation} from './Product/ProductSubCategory';
import { controls as vatControls, columns as vatColumns, validation as vatCategoryValidation} from './Product/VATCategory';


import { controls as purchaseControls, columns as purchaseColumns} from './Purchase/Purchase';
import { columns as purchaseDetailsColumns} from './Purchase/PurchaseDetails';
import { columns as purchaseReturnColumns } from './Purchase/PurchaseReturn';
import { columns as purchaseReturnDetailsColumns } from './Purchase/PurchaseReturnDetails';

import { columns as salesColumns } from './Sales/Sales';
import { columns as salesDetailsColumns } from './Sales/SalesDetails';
import { columns as salesReturnColumns } from './Sales/SalesReturn';
import { columns as salesReturnDetailsColumns } from './Sales/SalesReturnDetails';

import { controls as supplierControls, columns as supplierColumns, validation as supplierValidation} from './Supplier/Supplier';
import { controls as supplierCategoryControls, columns as supplierCategoryColumns, validation as supplierCategoryValidation} from './Supplier/SupplierCategory';
import { controls as supplierSubCategoryControls, columns as supplierSubCategoryColumns, validation as supplierSubCategoryValidation} from './Supplier/SupplierSubcategory';

import { controls as userControls, columns as userColumns, validation as userValidation} from './User/User';
import { controls as userRoleControls, columns as userRoleColumns, validation as userRoleValidation} from './User/UserRole';






export const controlData = {
    companyControls,
    branchControls,
    warehouseControls,

    customerControls,
    customerCategoryControls,
    customerSubCategoryControls,

    expenseControls,
    expenseCategoryControls,
    expenseSubCategoryControls,

    brandControls,
    groupControls,
    productControls,
    productCategoryControls,
    productSubCategoryControls,
    vatControls,
    
    //NO PURCHASE AND SALES CONTROLS

    supplierControls,
    supplierCategoryControls,
    supplierSubCategoryControls,

    userControls,
    userRoleControls,
}

export const columns = {
    companyColumns ,
    branchColumns ,
    warehouseColumns ,

    customerColumns ,
    customerCategoryColumns ,
    CustomerSubCategoryColumns ,

    expenseColumns ,
    expenseCategoryColumns ,
    expenseSubCategoryColumns ,

    brandColumns ,
    groupColumns ,
    productColumns ,
    productCategoryColumns ,
    productSubCategoryColumns ,
    vatColumns ,


    purchaseColumns ,
    purchaseDetailsColumns ,
    purchaseReturnColumns ,
    purchaseReturnDetailsColumns ,

    salesColumns ,
    salesDetailsColumns ,
    salesReturnColumns ,
    salesReturnDetailsColumns ,

    supplierColumns ,
    supplierCategoryColumns ,
    supplierSubCategoryColumns ,

    userColumns ,
    userRoleColumns ,
}

export const validation = {
    companyValidation,
    branchValidation,
    warehouseValidation,

    customerValidation,
    customerCategoryValidation,
    customerSubCategoryValidation,

    expenseValidation,
    expenseCategoryValidation,
    expenseSubCategoryValidation,

    brandValidation,
    groupValidation,
    productValidation,
    productCategoryValidation,
    productSubCategoryValidation,
    vatCategoryValidation,

    // purchaseValidation,
    // purchaseDetailsValidation,
    // purchaseReturnValidation,
    // purchaseReturnDetailsValidation,

    // salesValidation,
    // salesDetailsValidation,
    // salesReturnValidation,
    // salesReturnDetailsValidation,

    supplierValidation,
    supplierCategoryValidation,
    supplierSubCategoryValidation,

    userValidation,
    userRoleValidation,
}
