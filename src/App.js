import React from 'react';
import './App.css';
import Table from './GC/UI/Table/Table';
import Layout from './GC/Layout/Layout';
import Login from './GC/Login/Login';
//COMPANIES 
import CompanyAddForm from './GC/Entities/Companies/Company/CompanyAddForm';
import CompanyList from './GC/Entities/Companies/Company/CompanyList';
import BranchAddForm from './GC/Entities/Companies/Branch/BranchAddForm';
import BranchList from './GC/Entities/Companies/Branch/BranchList';
import WarehouseAddForm from './GC/Entities/Companies/Warehouse/WarehouseAddForm';
import WarehouseList from './GC/Entities/Companies/Warehouse/WarehouseList';
//////////////////////////////////////////////////////////////////////////////

//CUSTOMERS 
import CustomerAddForm from './GC/Entities/Customers/Customer/CustomerAddForm';
import CustomerList from './GC/Entities/Customers/Customer/CustomerList';
import CustomerCategoryAddForm from './GC/Entities/Customers/CustomerCategory/CustomerCategoryAddForm';
import CustomerCategoryList from './GC/Entities/Customers/CustomerCategory/CustomerCategoryList';
import CustomerSubcategoryAddForm from './GC/Entities/Customers/CustomerSubCategory/CustomerSubCategoryAddForm';
import CustomerSubcategoryList from './GC/Entities/Customers/CustomerSubCategory/CustomerSubCategoryList';
//////////////////////////////////////////////////////////////////////////////

//EXPENSE 
import ExpenseAddForm from './GC/Entities/Expenses/Expense/ExpenseAddForm';
import ExpenseList from './GC/Entities/Expenses/Expense/ExpenseList';
import ExpenseCategoryAddForm from './GC/Entities/Expenses/ExpenseCategory/ExpenseCategoryAddForm';
import ExpenseCategoryList from './GC/Entities/Expenses/ExpenseCategory/ExpenseCategoryList';
import ExpenseSubcategoryAddForm from './GC/Entities/Expenses/ExpenseSubCategory/ExpenseSubCategoryAddForm';
import ExpenseSubcategoryList from './GC/Entities/Expenses/ExpenseSubCategory/ExpenseSubCategoryList';
//////////////////////////////////////////////////////////////////////////////

//PRODUCT 
import BrandAddForm from './GC/Entities/Products/Brand/BrandAddForm';
import BrandList from './GC/Entities/Products/Brand/BrandList';
import GroupAddForm from './GC/Entities/Products/Group/GroupAddForm';
import GroupList from './GC/Entities/Products/Group/GroupList';
import ProductAddForm from './GC/Entities/Products/Product/ProductAddForm';
import ProductList from './GC/Entities/Products/Product/ProductList';
import ProductCategoryAddForm from './GC/Entities/Products/Product Category/ProductCategoryAddForm';
import ProductCategoryList from './GC/Entities/Products/Product Category/ProductCategoryList';
import ProductSubcategoryAddForm from './GC/Entities/Products/Product Subcategory/ProductSubcategoryAddForm';
import ProductSubcategoryList from './GC/Entities/Products/Product Subcategory/ProductSubcategoryList';
import VatCategoryAddForm from './GC/Entities/Products/VAT Category/VATCategoryAddForm';
import VatCategoryList from './GC/Entities/Products/VAT Category/VATCategoryList';
//////////////////////////////////////////////////////////////////////////////

//PURCHASE 
import PurchaseList from './GC/Entities/Purchases/Purchase/PurchaseList';
import PurchaseReturnList from './GC/Entities/Purchases/PurchaseReturn/PurchaseReturnList';
/////////////////////////////////////////////////////////////////////////////

//Sales 
import SalesList from './GC/Entities/Sales/Sales/SalesList';
import SalesReturnList from './GC/Entities/Sales/SalesReturn/SalesReturnList';
/////////////////////////////////////////////////////////////////////////////

//SUPPLIER 
import SupplierAddForm from './GC/Entities/Suppliers/Supplier/SupplierAddForm';
import SupplierList from './GC/Entities/Suppliers/Supplier/SupplierList';
import SupplierCategoryAddForm from './GC/Entities/Suppliers/SupplierCategory/SupplierCategoryAddForm';
import SupplierCategoryList from './GC/Entities/Suppliers/SupplierCategory/SupplierCategoryList';
import SupplierSubcategoryAddForm from './GC/Entities/Suppliers/SupplierSubCategory/SupplierSubcategoryAddForm';
import SupplierSubcategoryList from './GC/Entities/Suppliers/SupplierSubCategory/SupplierSubcategoryList';
//////////////////////////////////////////////////////////////////////////////

//USER
import UserAddForm from './GC/Entities/Users/User/UserAddForm';
import UserList from './GC/Entities/Users/User/UserList';

import UserRoleAddForm from './GC/Entities/Users/UserRole/UserRoleAddForm';
import UserRoleList from './GC/Entities/Users/UserRole/UserRoleList';
////////////////////////////////////////////////////////////////////////////
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UploadImages from './GC/UI/UploadImages/UploadImages';
import {controls,columns} from './ControlsData/User/User';
import controlData from './ControlsData/index';
import InputForm from './GC/UI/InputForm/InputForm';
import userRoleAddForm from './GC/Entities/Users/UserRole/UserRoleAddForm';

function App() {
  // let str = "http://ec2-3-7-145-124.ap-south-1.compute.amazonaws.com/sharpposapi/api";
  // str = str.slice(0,str.length-3);
  // console.log('str',str);
  const defaulUrl = '/sharppos';
  return (
    <Router> 
      <Layout>
        <Switch>
          <Route path={defaulUrl} exact component={ProductList}/>
          {/* //COMPANIES */}
          <Route path={defaulUrl+"/branch"} exact component={BranchList} />
          <Route path={defaulUrl+"/branchadd"} exact component={BranchAddForm} />

          <Route path={defaulUrl+"/company"} exact component={CompanyList}/>
          <Route path={defaulUrl+"/companyadd"} exact component={CompanyAddForm} />

          <Route path={defaulUrl+"/warehouse"} exact component={WarehouseList} />
          <Route path={defaulUrl+"/warehouseadd"} exact component={WarehouseAddForm} />
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //CUSTOMERS */}
          <Route path={defaulUrl+"/customer"} exact component={CustomerList} />
          <Route path={defaulUrl+"/customeradd"} exact component={CustomerAddForm} />

          <Route path={defaulUrl+"/customercategory"} exact component={CustomerCategoryList} />
          <Route path={defaulUrl+"/customercategoryadd"} exact component={CustomerCategoryAddForm} />

          <Route path={defaulUrl+"/customersubcategory"} exact component={CustomerSubcategoryList} />
          <Route path={defaulUrl+"/customersubcategoryadd"} exact component={CustomerSubcategoryAddForm} />
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //EXPENSE */}
          <Route path={defaulUrl+"/expense"} exact component={ExpenseList} />
          <Route path={defaulUrl+"/expenseadd"} exact component={ExpenseAddForm} />

          <Route path={defaulUrl+"/expensecategory"} exact component={ExpenseCategoryList} />
          <Route path={defaulUrl+"/expensecategoryadd"} exact component={ExpenseCategoryAddForm} />

          <Route path={defaulUrl+"/expensesubcategory"} exact component={ExpenseSubcategoryList} />
          <Route path={defaulUrl+"/expensesubcategoryadd"} exact component={ExpenseSubcategoryAddForm} />
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //PRODUCTS */}
          <Route path={defaulUrl+"/brand"} exact component={BrandList} />
          <Route path={defaulUrl+"/brandadd"} exact component={BrandAddForm} />

          <Route path={defaulUrl+"/group"} exact component={GroupList} />
          <Route path={defaulUrl+"/groupadd"} exact component={GroupAddForm} />

          <Route path={defaulUrl +"/product"} exact component={ProductList} />
          <Route path={defaulUrl +"/productadd"} exact component={ProductAddForm} />

          <Route path={defaulUrl +"/productcategory"} exact component={ProductCategoryList} />
          <Route path={defaulUrl +"/productcategoryadd"} exact component={ProductCategoryAddForm} />

          <Route path={defaulUrl +"/productsubcategory"} exact component={ProductSubcategoryList} />
          <Route path={defaulUrl +"/productsubcategoryadd"} exact component={ProductSubcategoryAddForm} />

          <Route path={defaulUrl +"/vatcategory"} exact component={VatCategoryList} />
          <Route path={defaulUrl +"/vatcategoryadd"} exact component={VatCategoryAddForm} />
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //PURCHASES */}
          <Route path={defaulUrl +"/purchase"} exact component={PurchaseList} />
          <Route path={defaulUrl +"/purchasereturn"} exact component={PurchaseReturnList} />


          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //Sales */}
          <Route path={defaulUrl +"/sales"} exact component={SalesList} />
          <Route path={defaulUrl +"/salesreturn"} exact component={SalesReturnList} />

          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //SUPPLIERS */}
          <Route path={defaulUrl +"/supplier"} exact component={SupplierList} />
          <Route path={defaulUrl +"/supplieradd"} exact component={SupplierAddForm} />

          <Route path={defaulUrl +"/suppliercategory"} exact component={SupplierCategoryList} />
          <Route path={defaulUrl +"/suppliercategoryadd"} exact component={SupplierCategoryAddForm} />

          <Route path={defaulUrl +"/suppliersubcategory"} exact component={SupplierSubcategoryList} />
          <Route path={defaulUrl +"/suppliersubcategoryadd"} exact component={SupplierSubcategoryAddForm} />
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* //Users */}
          <Route path={defaulUrl +"/user"} exact component={UserList} />
          <Route path={defaulUrl +"/useradd"}  exact component={UserAddForm} />

          <Route path={defaulUrl +"/userrole"} exact component={UserRoleList} />
          <Route path={defaulUrl +"/userroleadd"} exact component={userRoleAddForm} />
          {/* //////////////////////////////////////////////////////////////////// */}
        </Switch>
        {/* <UploadImages /> */}
      </Layout>
    </Router>
    //<Login />
  );
}

export default App;
