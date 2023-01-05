import companyServices from './Company/CompanyServices';
import branchServices from './Company/BrachServices';
import warehouseServices from './Company/WarehouseServices';

import customerServices from './Customer/CustomerServices';
import customerCategoryServices from './Customer/CustomerCategoryServices';
import customerSubcategoryServices from './Customer/CustomerSubCategoryServices';

import expenseServices from './Expense/ExpenseServices';
import expenseCategoryServices from './Expense/ExpenseCategoryServices';
import expenseSubcategoryServices from './Expense/ExpenseSubCategoryServices';

import productServices from './Product/ProductServices';
import productCategoryServices from './Product/ProductCategoryServices';
import productSubcategoryServices from './Product/ProductSubCategoryServices';
import vatCategoryServices from './Product/VatCategoryServices';
import brandServices from './Product/BrandServices';
import groupServices from './Product/GroupServices';

import purchaseServices from './Purchase/PurchaseServices';
import purchaseDetailsServices from './Purchase/PurchaseDetailsServices';
import purchaseReturnServices from './Purchase/PurchaseReturnServices';
import purchaseReturnDetailsServices from './Purchase/PurchaseReturnDetailsServices';

import salesServices from './Sales/SalesServices';
import salesDetailsServices from './Sales/SalesDetailsServices';
import salesReturnServices from './Sales/SalesReturnServices';
import salesReturnDetailsServices from './Sales/SalesReturnDetailsServices';

import supplierServices from './Supplier/SupplierServices';
import supplierCategoryServices from './Supplier/SupplierCategoryServices';
import supplierSubcategoryServices from './Supplier/SupplierSubCategoryServices';

import userServices from './User/UserServices';
import userRoleServices from './User/UserRoleServices';


const services = {
    companyServices,
    branchServices,
    warehouseServices,

    customerServices,
    customerCategoryServices,
    customerSubcategoryServices,

    expenseServices,
    expenseCategoryServices,
    expenseSubcategoryServices,

    productServices,
    productCategoryServices,
    productSubcategoryServices,
    vatCategoryServices,
    brandServices,
    groupServices,

    purchaseServices,  
    purchaseDetailsServices  ,
    purchaseReturnServices , 
    purchaseReturnDetailsServices , 

    salesServices  ,
    salesDetailsServices  ,
    salesReturnServices , 
    salesReturnDetailsServices , 
    supplierServices  ,
    supplierCategoryServices  ,
    supplierSubcategoryServices  ,

    userServices ,
    userRoleServices  ,

}
export default  services;