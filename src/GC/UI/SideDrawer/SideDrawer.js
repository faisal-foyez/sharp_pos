import React,{useState,useContext}from 'react';
import classes from './SideDrawer.module.css';
import {SideDrawerContext} from './SideDrawerContext';
import {Link} from 'react-router-dom';
const reqSvgs = require.context('../../../Assets', true, /\.svg$/);

const SideDrawer = () =>{
    //GET CONTEXT DATA ISSHOWNAV 
    const [isShowNav,setIsShowNav] = useContext(SideDrawerContext);
    //const svgPaths = reqSvgs.keys();
    const defaultUrl = "/sharppos";
    //HERE ARE THE ITEMS TO SHOW IN SIDE DRAWER
    const [navItemState,setNavItemState] = useState(
        [
            {
                name:'Product',
                icon:'./product.svg',
                children:[
                    {
                        name: 'Product List',
                        icon: './list.svg',
                        url:defaultUrl+'/product'
                    },
                    {
                        name: 'Category',
                        icon: './category.svg',
                        url: defaultUrl +'/productcategory'
                    },
                    {
                        name: 'Subcategory',
                        icon: './category.svg',
                        url: defaultUrl +'/productsubcategory'
                    },
                    {
                        name: 'Brand',
                        icon: './brand.svg',
                        url: defaultUrl +'/brand'
                    },
                    {
                        name: 'Group',
                        icon: './group.svg',
                        url: defaultUrl +'/group'
                    },
                    {
                        name: 'VAT',
                        icon: './vat.svg',
                        url: defaultUrl +'/vatcategory'
                    },
                ]
            },
            {
                name: 'Customer',
                icon: './customer.svg',
                children: [
                    {
                        name: 'Customer List',
                        icon: './list.svg',
                        url: defaultUrl +'/customer'
                    },
                    {
                        name: 'Category',
                        icon: './category.svg',
                        url: defaultUrl +'/customercategory'
                    },
                    {
                        name: 'Subcateogry',
                        icon: './category.svg',
                        url: defaultUrl +'/customersubcategory'
                    },
                ]
            },
            {
                name: 'Supplier',
                icon: './supplier.svg',
                children: [
                    {
                        name: 'Supplier List',
                        icon: './list.svg',
                        url: defaultUrl +'/supplier'
                    },
                    {
                        name: 'Category',
                        icon: './category.svg',
                        url: defaultUrl +'/suppliercategory'
                    },
                    {
                        name: 'Subcateogry',
                        icon: './category.svg',
                        url: defaultUrl +'/suppliersubcategory'
                    },
                ]
            },
            {
                name: 'Sales',
                icon: './sales.svg',
                children: [
                    {
                        name: 'Sales List',
                        icon: './list.svg',
                        url: defaultUrl +"/sales"
                    },
                    {
                        name: 'Sales Return',
                        icon: './return.svg',
                        url: defaultUrl +"/salesreturn"
                    }
                ]
            },
            {
                name: 'Purchase',
                icon: './purchase.svg',
                children: [
                    {
                        name: 'Purchase List',
                        icon: './list.svg',
                        url: defaultUrl +'/purchase'
                    },
                    {
                        name: 'Purchase Return',
                        icon: './return.svg',
                        url: defaultUrl +'/purchasereturn'
                    }
                ]
            },
            {
                name: 'Expense',
                icon: './expense.svg',
                children: [
                    {
                        name: 'Expense List',
                        icon: './list.svg',
                        url: defaultUrl +'/expense'
                    },
                    {
                        name: 'Category',
                        icon: './category.svg',
                        url: defaultUrl +'/expensecategory'
                    },
                    {
                        name: 'Subcateogry',
                        icon: './category.svg',
                        url: defaultUrl +'/expensesubcategory'
                    },
                ]
            },
            {
                name: 'Organization',
                icon: './organization.svg',
                children: [
                    {
                        name: 'Company',
                        icon: './company.svg',
                        url: defaultUrl +'/company'
                    },
                    {
                        name: 'Branch',
                        icon: './branch.svg',
                        url: defaultUrl +'/branch'
                    },
                    {
                        name: 'Warehouse',
                        icon: './warehouse.svg',
                        url: defaultUrl +'/warehouse'
                    }
                ]
            },
            {
                name: 'User',
                icon: './customer.svg',
                children: [
                    {
                        name: 'User List',
                        icon: './list.svg',
                        url: defaultUrl +'/user'
                    },
                    {
                        name: 'User Roles',
                        icon: './userrole.svg',
                        url: defaultUrl +'/userrole'
                    },
    
                ]
            },
        ]
    )
    const [state,setState] = useState({
        selectedParentNav:'',
        selectedChildNav:'',
        navOpenStatus:{
        }
    })
    //HERE WE UPDATE THE STATE OF THE NAV OPEN STATE 
    const onClickParentNav = (navName) =>{
        //WHETHER PARENT ITEM IS CLICKED TO OPEN OR CLOSE
        setState({
            ...state,
            selectedParentNav:navName,
            navOpenStatus:{
                ...state.navOpenStatus,
                [navName]:!state.navOpenStatus[navName]
            }

        })
    }
   
    //HERE WE SET SET IF SIDE DRAWER REMAINS OPEN OR CLOSED
    const onClickToggleNav = () =>{
        setIsShowNav(!isShowNav);
    }
    
    const style={
        threeBar:{
            height: 5, 
            width: 22, 
            backgroundColor: 'white'
        },
        rotatePolygon:{
            transition:'all .3s ease-in',
            transform:'rotate(0deg)',
        },
        rotatePolygonReverse: {
            transition: 'all .3s ease-in',
            transform: 'rotate(-90deg)'
        }
    }
    return(
        <React.Fragment>
            <div
            onClick={onClickToggleNav}
            style={{
                position:'fixed',
                top:10,
                left:16,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                height:23,
                zIndex:10000
            }}>
                <div style={style.threeBar}></div>
                <div style={style.threeBar}></div>
                <div style={style.threeBar}></div>
            </div>
            <div className={isShowNav==true?[classes.drawerContainer,classes.drawerOpen].join(' ') :[classes.drawerContainer, classes.drawerClose].join(' ')}>
                <img onClick={onClickToggleNav} src={reqSvgs("./arrow_left.svg")} style={{position:'absolute',top:10,right:14,height:15}}/>
                <ul>
                    {
                        navItemState.map(item=>{
                            return(
                                <li>
                                    <div onClick={() => { onClickParentNav(item.name.toLowerCase()) }} className={classes.navIconContainer}>
                                        <img src={reqSvgs(item.icon)} />
                                        <span>{item.name}</span>
                                        {
                                            item.children.length 
                                                ? <img src={reqSvgs("./polygon.svg")} className={classes.polyglon} style={state.navOpenStatus[item.name.toLowerCase()] ? style.rotatePolygon : style.rotatePolygonReverse} />
                                            :null
                                        }
                                    </div>
                                    {
                                        item.children.length?
                                        (
                                                <ul className={state.navOpenStatus[item.name.toLowerCase()] == true ? classes.navChildOpenAnimation : classes.navChildCloseAnimation}>
                                                {
                                                    item.children.map(child=>{
                                                        return(
                                                            <Link to={child.url} style={{textDecoration:'none',color:'white'}}>
                                                                <div className={classes.navIconContainer}>
                                                                    <img src={reqSvgs(child.icon)} />
                                                                    <li>{child.name}</li>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                                
                                            </ul>
                                    
                                        )
                                        :null
                                    }
                                 
                                </li>
                            )
                        })
                    }
                    {/* <li>
                        <div onClick={() => { onClickParentNav('product') }} className={classes.navIconContainer}>
                            <img src={reqSvgs("./product.svg")}/>
                            <span>Product</span>
                            <img src={reqSvgs("./polygon.svg")} className={classes.polyglon} style={state.navOpenStatus.product ? style.rotatePolygon : style.rotatePolygonReverse  }/>
                        </div>
                        <ul className={state.navOpenStatus.product == true ? classes.navChildOpenAnimation : classes.navChildCloseAnimation}>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./list.svg")} />
                                <li>Product List</li>
                            </div>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./category.svg")} />
                                <li>Category</li>
                            </div>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./brand.svg")} />
                                <li>Brand</li>
                            </div>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./group.svg")} />
                                <li>Group</li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <div className={classes.navIconContainer}>
                            <img src={reqSvgs("./customer.svg")} />
                            <span>Customer</span>
                        </div>
                    </li>
                    <li>
                        <div className={classes.navIconContainer}>
                            <img src={reqSvgs("./supplier.svg")} />
                            <span>Supplier</span>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => { onClickParentNav('sales') }} className={classes.navIconContainer}>
                            <img src={reqSvgs("./sales.svg")} />
                            <span>Sales</span>
                            <img src={reqSvgs("./polygon.svg")} className={classes.polyglon} style={state.navOpenStatus.sales ? style.rotatePolygon : style.rotatePolygonReverse} />
                        </div>
                        <ul className={state.navOpenStatus.sales == true ? classes.navChildOpenAnimation : classes.navChildCloseAnimation}>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./list.svg")} />
                                <li>Sales List</li>
                            </div>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./return.svg")} />
                                <li>Sales Return</li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <div onClick={() => { onClickParentNav('purchase') }} className={classes.navIconContainer}>
                            <img src={reqSvgs("./purchase.svg")} />
                            <span>Purchase</span>
                            <img src={reqSvgs("./polygon.svg")} className={classes.polyglon} style={state.navOpenStatus.purchase ? style.rotatePolygon : style.rotatePolygonReverse} />


                        </div>
                        <ul className={state.navOpenStatus.purchase == true ? classes.navChildOpenAnimation : classes.navChildCloseAnimation}>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./list.svg")} />
                                <li>Purchase List</li>
                            </div>
                            <div className={classes.navIconContainer}>
                                <img src={reqSvgs("./return.svg")} />
                                <li>Purchase Return</li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <div className={classes.navIconContainer}>
                            <img src={reqSvgs("./employee.svg")} />
                            <span>Employee</span>
                        </div>
                    </li>
               */}
                </ul>
            </div>
        </React.Fragment>
      
    )
}

export default SideDrawer;