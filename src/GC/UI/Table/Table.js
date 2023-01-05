import React,{useState,useEffect,useRef,useContext} from 'react';
import classes from './Table.module.css';
// import Input from '../Input/Input';
// import {checkValidity} from '../../../Shared/utility';
import {SideDrawerContext} from '../SideDrawer/SideDrawerContext';
import ContextMenu from '../ContextMenu/ContextMenu';
import services from '../../../Services/index';
import {useHistory} from 'react-router-dom';
const Table = (props) =>{
    const searchInputEl = useRef(null);
    const history = useHistory();
    //MESSAGE CENTER INFO IS HERE
    const [isShowPagination,setIsShowPagination] = useState(true);
    const [saveInfo, setSaveInfo] = useState({
        isBtnDisabled: false,
        message: '',
        messageColor: null
    })
    //NAVSHOW INFO IS HERE FROM CONTEXT
    const [isNavShow,setIsNavShow] = useContext(SideDrawerContext);
    //SELECTED PAGE NUMBER OF THE TABLE
    const [selectedPageNumber,setSelectedPageNumber] = useState(1);
    //PAGINATION INFO IS HERE
    const [paginationInfo,setPaginationInfo] = useState({
        pageSizeArray:[10,25,50,100],
        selectedPageSize:10,
        selectedPageNumber:1,
        pagesToShowArray:[],
        totalRows:0,
        totalPages:0
    })

    const [searchTxt,setSearchTxt] = useState('');
    //CONTEXT MENU SELECTED ITEM IS HERE. WHEN ROW IS RIGHT CLICKED THEN
    //SOME ITEMS WILL BE SHOWED AND SELECTED ITEM WILL BE HERE.
    const [selectedContextItem, setSelectedContextItem] = useState(null);
    //CONTEXT ITEMS ARE HERE
    const [contextMenu,setContextMenu] = useState({
        data:[
             {name: 'Sales Details'},
             {name: 'Return'} ,
             {name: 'Return Details'} 
        ],
        top:0,
        left:0,
        isShow:false
    });
    //CONTROLS INFO COMING AS PROPS AND ON USEEFFECT THEY WILL BE SAVED IN THIS STATE
    //#region 

    // const [controls,setControls] = useState({
    //     code: {
    //         elementType: 'input',
    //         elementConfig: {
    //             placeholder: 'Branch Code',
                
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false,
    //         css:{
    //             width:'auto',
    //         }
    //     },
    //     branchName: {
    //         elementType: 'input',
    //         elementConfig: {
    //             placeholder: 'Branch Name'
    //         },
    //         value: '',
    //         validation: {
    //             required: true,
    //         },
    //         valid: false,
    //         touched: false,
    //         css: {
    //             width: 'auto'
    //         }
    //     },
    //     vatRegistryNumber: {
    //         elementType: 'input',
    //         elementConfig: {
    //             placeholder: 'Vat Registry Number'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false,
    //         css: {
    //             width: 'auto'
    //         }
    //     },
    //     maxDiscountRate: {
    //         elementType: 'input',
    //         elementConfig: {
    //             placeholder: 'Max Discount Rate'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false,
    //         css: {
    //             width: 'auto'
    //         }
    //     },
    //     address1: {
    //         elementType: 'textarea',
    //         elementConfig: {
    //             placeholder: 'Address 1'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false,
    //         css: {
    //             width: 'auto'
    //         }
    //     },
    //     address2: {
    //         elementType: 'textarea',
    //         elementConfig: {
    //             placeholder: 'Address 2'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false,
    //         css: {
    //             width: 'auto'
    //         }
    //     },
    //     contactPerson: {
    //         elementType: 'select',
    //         elementConfig: {
    //             placeholder: 'Password',
    //             options: [
    //                 { value: -1, displayValue: "Select" },
    //                 { value: 0, displayValue: "Faisal Islam" },
    //                 { value: 1, displayValue: "Zakir Hossain" },
    //                 { value: 2, displayValue: "Hridoy" },
    //             ],
    //             selected:{value:1,displayValue:"Zakir"}
    //         },
    //         value: 1,
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false,
    //         css: {
    //             width: 'auto'
                
    //         }

    //     },

    //     isActive: {
    //         elementType: 'checkbox',
    //         elementConfig: {
    //             placeholder: 'Address 2'
    //         },
    //         value: false,
    //         css: {
    //             width: 'auto'
    //         }
    //     },
    // })

    //#endregion
    //TABLE STATE INFO IS HERE. INCL
    const [tableState, setTableState] = useState({
        //totalRows:0,
        editRowState:null,
        columns:null,
        //THE DATA WILL BE HERE IN THE ROWS ARRAY
        rows:[]
    })
    const [selectedRow, setSelectedRow] = useState(null)
    
    //TO STORE THE CACHE DATA. WHEN THE PAGE DATA WILL BE FETCHED IT WILL BE STORED.
    const [cacheData,setCacheData] = useState({})

    //TO UPDATE THE TABLE DATA BY PAGE SIZE AND PAGE NUMBER
    const updateTableData = (pageSize, clickedPageNumber,cb,isRefresCache) => {

        if(!isRefresCache){
            if(cacheData[clickedPageNumber]){
                setTableState({
                    ...tableState,
                    rows:cacheData[clickedPageNumber]
                })
                cb();
                return;
            }
        }
        services[props.service].getByPage(!pageSize ? paginationInfo.selectedPageSize:pageSize, parseInt(clickedPageNumber) - 1)
            .then(res => {
                setTableState({
                    ...tableState,
                    rows: res.data
                })
                setCacheData({
                    ...cacheData,
                    [clickedPageNumber]:res.data
                })
                cb();
            }).catch(err => console.log(err));
            
    }
    const updatePageArray = (clickedPageNumber) =>{
        //TAKE THE FIRST PAGE NUMBER AND LAST PAGE NUMBER FROM THE PagesToShow ARRAY
        const firstPageInArray = paginationInfo.pagesToShowArray[0];
        const lastPageInArray = paginationInfo.pagesToShowArray[paginationInfo.pagesToShowArray.length - 1];
        //CHECKING IF THE FIRST ELEMENT FROM THE PAGE ARRAY IS CLICKED EXCEPT 1
        //BECAUSE IF IT IS ONE THEN NO MORE BACK TRACK OR "<<" BACK IS CLICKED
        if ((clickedPageNumber <= firstPageInArray && firstPageInArray != 1)) {
            //NUMBER OF PAGE ELEMENT TO SHOW DEPENDS. IF FIRST PAGE THEN MAX PAGE NO. IS 5. 
            //FOR OTHER PAGES IT WILL BE WITHIN 6
            const arraySize = firstPageInArray == 5 ? 5 : 6;
            //TAKING FIRST ITEM TO PUSH EITHER 1 OR FirstPageInArray - 5
            let firstItemToPush = firstPageInArray == 5 ? 1 : firstPageInArray - 5;
            //PUSH THE PAGES IN THE ARRAY
            const pagesToShow = [...Array(arraySize)].map((x, i) => firstItemToPush + i);
            //UPDATE THE STATE
            updateTableData(paginationInfo.selectedPageSize,clickedPageNumber,()=>{
                setPaginationInfo({
                    ...paginationInfo,
                    pagesToShowArray: pagesToShow,
                });
                setSelectedPageNumber(clickedPageNumber);
            });
            return;
        }
        //CHEICKING IF THE LAST PAGE / ">>" (NEXT) IS CLICKED
        if (clickedPageNumber >= lastPageInArray ){
            //CHECKING, IN THE NEXT PAGE, ARE THERE MORE THAN 5 PAGES 
            if ((paginationInfo.totalPages - lastPageInArray) >= 5) {
                //IF MORE THAN 5 PAGES THEN PAGES TO SHOW WILL BE 6
                const pagesToShow = [...Array(6)].map((x, i) => lastPageInArray + i);
                //UPDATE THE STATE

                updateTableData(paginationInfo.selectedPageSize,clickedPageNumber,()=>{
                    setPaginationInfo({
                        ...paginationInfo,
                        pagesToShowArray: pagesToShow,
                    });
                    setSelectedPageNumber(clickedPageNumber);
                });
                return;
                
            }
            //CHECKING, IN THE NEXT PAGE, ARE THERE LESS THAN 5 PAGES 
            else if ((paginationInfo.totalPages - lastPageInArray) < 5 && (paginationInfo.totalPages - lastPageInArray) != 0) {

                //IF THERE ARE LESS THAN 5 PAGES, PUT THE REMAINING NUMBER OF PAGES IN ARRAY
                const pagesToShow = [...Array((paginationInfo.totalPages - lastPageInArray) + 1)].map((x, i) => lastPageInArray + i);
                //UPDATE THE STATE


                updateTableData(paginationInfo.selectedPageSize, clickedPageNumber,()=>{
                  
                    setPaginationInfo({
                        ...paginationInfo,
                        pagesToShowArray: pagesToShow
                    });
                    setSelectedPageNumber(clickedPageNumber);
                });
                return;
                

                
            }
            
        }
       
        updateTableData(paginationInfo.selectedPageSize,clickedPageNumber,()=>{
            setSelectedPageNumber(clickedPageNumber);
        });  
    }
    const onClickPagination = (clickedPageNumber) =>{

        //UPDATE THE PAGE ARRAY
        //updatePageArray(clickedPageNumber);
        updatePageArray(clickedPageNumber);
    }
    const onClickNextPage = () => {
        //ON CLIK NEXT PAGE, INCREASE THE SELECTEDPAGE BY 1
        // const selectedPageNumber = paginationInfo.selectedPageNumber +1;
        
        if(selectedPageNumber >= paginationInfo.totalPages ) return;
        const selectedPageNo = selectedPageNumber + 1;
        //CALL UPDATE PAGE ARRAY
        //updatePageArray(selectedPageNo);
        updatePageArray(selectedPageNo);
    }
    const onClickPreviousPage = () => {
        if(selectedPageNumber<=1) return;
        //DECREATE THE SELECTED PAGE BY 1
        const selectedPageNo = selectedPageNumber - 1;
        //UPDATE THE PAGE ARRAY
        // updatePageArray(selectedPageNo);
        updatePageArray(selectedPageNo);
    } 
    //WHEN THE PAGE IS LOADED FOR THE FIRST TIME THEN THE PAGE BUTTONS WILL BE SET 
    const setInitialPages = (data) =>{
        const totalPages = Math.ceil(data / paginationInfo.selectedPageSize)
        let pagesToShowArray;
        //ON PAGE FIRST LOAD CHECKING OFF TOTAL PAGES ARE LESS THAN 5 OR NOT
        if (totalPages <= 5) {
            //IF LESS THAN 5 THEN JUST PUSH ALL OF PAGES IN THE ARRAY
            pagesToShowArray = [...Array(totalPages)].map((x, i) => i + 1);
        }
        else {
            //IF TOTAL PAGES ARE MORE THAN 5 THEN JUST SHOW FIRST 5
            pagesToShowArray = [...Array(5)].map((x, i) => i + 1);
        }

        //UPDATE STATE
        setPaginationInfo({
            ...paginationInfo,
            pagesToShowArray: pagesToShowArray,
            totalRows: data,
            totalPages: Math.ceil(data / paginationInfo.selectedPageSize)
        })
    }
    //COMPONENTDIDMOUNT LIKE, HERE TABLE DATA AND PAGINATION FIRST LOAD IS DONE
    useEffect(()=>{

        updateTableData(paginationInfo.selectedPageSize,selectedPageNumber);
        services[props.service].count()
            .then(res2 => {
               setInitialPages(res2.data);
            }).catch(err=>console.log(err));

    },[])

    //ON CLICK MOVE TO THE FIRST PAGE OF THE ARRAY
    const onClickFirstPage = () =>{
        let pagesToShowArray;
        //CHECKING IF TOTAL PAGE IS LESS THAN 5 THEN JUST PUSH ALL OF THEM IN THE ARRAY
        if (paginationInfo.totalPages <= 5) {
            pagesToShowArray = [...Array(paginationInfo.totalPages)].map((x, i) => i + 1);
        }
        //CHECKING IF TOTAL PAGE IS MORE THAN 5 THEN JUST PUSH FIRST 5 IN THE ARRAY
        else {
            pagesToShowArray = [...Array(5)].map((x, i) => i + 1);
        }
        // UPDATE THE PAGINATION STATE
        updateTableData(paginationInfo.selectedPageSize,1,()=>{
            setPaginationInfo({
                ...paginationInfo,
                pagesToShowArray: pagesToShowArray,
            });
            setSelectedPageNumber(1);
        });

    }
    //ON CLICK MOVE TO THE LAST PAGE OF THE ARRAY
    const onClickLastPage = () => {
        let startingPoint,pagesToShowArray;
        //CHECKING IF THE TOTAL PAGES IS DIVISIBLE BY 5. 
        if(paginationInfo.totalPages %5 ==0){
            //IF DIVISIBLE THEN STARTING POINT WILL BE TOTAL PAGES - 5
            startingPoint = paginationInfo.totalPages - 5;
            //PUSH THE ITEM FROM STARTING POINT
            pagesToShowArray = [...Array(6)].map((x, i) => startingPoint + i);
        }
        else{
            //IF NOT DIVISIBLE BY 5 THEN STARTING POINT WILL BE TOTAL PAGES - (TOTALPAGES % 5)
             startingPoint = paginationInfo.totalPages - (paginationInfo.totalPages % 5);
             //PUSH THE ITEM FROM THE STARTING POINT
             pagesToShowArray = [...Array((paginationInfo.totalPages%5) +1)].map((x, i) => startingPoint+i);

        }
        //UPDATE THE PAGINATION STATE
        updateTableData(paginationInfo.selectedPageSize,paginationInfo.totalPages,()=>{
            setPaginationInfo({
                ...paginationInfo,
                pagesToShowArray:pagesToShowArray
            });
            setSelectedPageNumber(paginationInfo.totalPages);
        });
    }
    //WE DOUBLE CLICK OR CLICK IN THE EDIT BUTTON TO START EDITING
    const onDoubleClickItemToEdit = (rowClicked,row) =>{
        if(props.children){
            setIsNavShow(false);
            setSelectedRow(row);
        }
        //REDIRECT TO THE PRODUCT SUBMIT PAGE TO UPDATE
        // history.push({
        //     pathname:props.addItemRoute,
        //     state:row
        // })

        // //WE GET THE ROW NUMBER ( as rowClicked variable) AND ROW DATA (as row)
        // //AND SET THE NUMBER OF THE ROW IN STATE
        // setTableState({
        //     ...tableState,
        //     editRowState: rowClicked
        // })
        // //HERE WE RESET THE CONTROLS STATE
        // let updatedControls = controls;
        // for (let controlName in controls){
        //     console.log(row[controlName])
        //      updatedControls = {
        //         ...updatedControls,
        //         [controlName]: {
        //             ...updatedControls[controlName],
        //             value: row[controlName],
        //             valid: true,
        //             touched: true
        //         }
        //     };
        // }
        // setControls(updatedControls);
    }

    //TO EDIT WHEN VALUE CHANGE IN INPUT CONTROL IS HANDLED HERE.
    // const inputChangedHandler = (value, controlName) =>{
    //     console.log(value, controlName);
    //     const updatedControls = {
    //         ...controls, 
    //         [controlName]: {
    //             ...controls[controlName], 
    //             value: value,//UPDATING THE VALUE GOT AS ARGUMENT
    //             valid: checkValidity(value, controls[controlName].validation),
    //             touched: true
    //         }
    //     };
    //     console.log(updatedControls);
    //     setControls(updatedControls);
    // }
    const showContextMenu = (e,row) =>{
        e.preventDefault();

        setContextMenu({
            ...contextMenu,
            top: e.clientY,
            left: e.clientX,
            isShow:true
        });
        return false;
    }
    const onClickContextItem = (e,item) =>{
        e.preventDefault();
        e.stopPropagation(); 


        setContextMenu({
            ...contextMenu,
            isShow:false
        })
        setSelectedContextItem(item);
    }
    const onChangePageSize = (e)=>{
        setCacheData({});
        const pageSize = parseInt(e.target.value);
        const totalPages = Math.ceil(paginationInfo.totalRows / pageSize);
        
        let pagesToShowArray;
        //ON PAGE FIRST LOAD CHECKING OFF TOTAL PAGES ARE LESS THAN 5 OR NOT
        if (totalPages <= 5) {
            //IF LESS THAN 5 THEN JUST PUSH ALL OF PAGES IN THE ARRAY
            pagesToShowArray = [...Array(totalPages)].map((x, i) => i + 1);
        }
        else {
            //IF TOTAL PAGES ARE MORE THAN 5 THEN JUST SHOW FIRST 5
            pagesToShowArray = [...Array(5)].map((x, i) => i + 1);
        }
        
        //UPDATE TABLE DATA WITH REFRESH TRUE
        updateTableData(pageSize, 1,()=>{
            //UPDATE STATE
            setPaginationInfo({
                ...paginationInfo,
                selectedPageSize: pageSize,
                totalPages: totalPages,
                pagesToShowArray: pagesToShowArray
            })
            setCacheData({});
            setSelectedPageNumber(1);
        },true);

    }
    // ON CLICK ADD BUTTON PAGE WILL REDIRECT TO ADD PAGE
    const onClickAddButton = () =>{
        history.push({
            pathname: "/sharppos"+props.addItemRoute
        })
    }
    // ON CLICK DELETE BUTTON DATA WILL BE DELETED
    const onClickDelete = (row) =>{
        //console.log(row._id);]
        //CONFIRM IF USER IS SURE TO DELETE
        const confirmRes = window.confirm('Are you sure?');
        if(!confirmRes) return;

        //SETTING THE MESSAGE FOR DELETING
        setSaveInfo({
            ...saveInfo,
            isBtnDisabled: true,
            message: 'Deleting ......',
            messageColor: '#696969'
        })
        services[props.service].delete(row._id).then(res=>{
            //console.log(res.data);
            //AFTER DELETING UPDATING THE TABLE
            updateTableData(paginationInfo.selectedPageSize,selectedPageNumber,()=>{
                setCacheData({});
                //SETTING THE MESSAGE
                setSaveInfo({
                    ...saveInfo,
                    isBtnDisabled: false,
                    message: 'Successfully Deleted',
                    messageColor: 'green'
                })
                setTimeout(() => {
                    setSaveInfo({
                        ...saveInfo,
                        message: '',
                        messageColor: null
                    })
                }, 10000)
            },true);
        }).catch(err=>{
            setSaveInfo({
                isBtnDisabled: false,
                message: 'Error : ' + err.message,
                messageColor: 'red'
            })
            setTimeout(() => {
                setSaveInfo({
                    ...saveInfo,
                    message: '',
                    messageColor: null
                })
            }, 10000)
        });
    }
    //SETTING THE SEARCH TEXT
    const onChangeSearchTxt = (e) =>{
        setSearchTxt(e.target.value);
        if(!e.target.value){
            updateTableData(paginationInfo.selectedPageSize, selectedPageNumber, () => { }, false);
            setInitialPages(paginationInfo.totalRows);
            setIsShowPagination(true);
        }
    }
    //SEARCHING THE DATA 
    const searchData = () =>{
        if (!searchTxt) {
            // console.log(searchTxt);
            // updateTableData(paginationInfo.selectedPageSize, selectedPageNumber, () => { }, false);
            // setInitialPages(paginationInfo.totalRows);
            // setIsShowPagination(true);
            return;
        }
        //CHECK IF SEARCHED DATA IS NUMBER OR NOT
        const isSearchTxtNumber = !isNaN(searchTxt);
        const nubmerSearchTxt = isSearchTxtNumber ? parseFloat(searchTxt) : null;
        //console.log(nubmerSearchTxt);
        //return;
        let columns;
        // IF SEARCH TXT IS NUMBER THEN SET NUMBER COLUMN WITH NUMBER AS WELL STRING COLUMN WITH THAT 
        //SAME NUMBER AS STRING
        if (isSearchTxtNumber) {
            columns = Object.keys(props.columns).filter(key => props.columns[key].type === 'string' || props.columns[key].type === 'number').map(column => {
                
                if (props.columns[column].type === 'number') {
                    //SETTING NUMBER FOR NUMBER COLUMN
                    return { [column]: nubmerSearchTxt }
                }
                //SETTING NUMBER FOR STRING COLUMN
                return { [column]: { $regex: `.*${searchTxt}.*`, $options: 'i' } }
            });
        }
        //IF SEARCH TXT IS STRING THEN SET THE STRING COLUMN ONLY NO NEED TO CHECK THE 
        //NUMBER COLUMN
        else {
            columns = Object.keys(props.columns).filter(key => props.columns[key].type === 'string').map(column => {
                return { [column]: { $regex: `.*${searchTxt}.*`, $options: 'i' } }
            });
        }


        //HERE CALLING THE SEARCH API
        services[props.service].getBySearch(columns).then(res => {

            setTableState({
                ...tableState,
                rows: res.data
            });
            setIsShowPagination(false);

        }).catch(err => console.log(err));

    }
    //ON PRESS ENTER ON SEARCH TXT BOX SEARCH THE DATA
    const onKeyUpSearchTxt = (e) =>{
        if(e.keyCode === 13){
            searchData();
        }
    }
    //CLOSE UPDATE PANEL
    const onCloseUpdatePanel = () =>{
        setSelectedRow(null); 
        if(searchTxt){
            searchData();
        }
        else{
            updateTableData(paginationInfo.selectedPageSize, selectedPageNumber, null, true); 
        }
        setIsNavShow(true);
    
    }

    let updateForm
    if(props.children){
        updateForm = React.cloneElement(props.children,{row:selectedRow});
    }
    // const style={
    //     headerInputStyle:{
    //         border: 'none', 
    //         borderRadius: 3, 
    //         height: 20, 
    //         outline: 'none', 
    //         boxShadow: '1px 1px 3px rgba(0,0,0,.5)'
    //     }
    // }
    return (
        <>
            <div className={classes.messageCenter} style={{ color: saveInfo.messageColor,marginLeft:isNavShow?'15%':'17.5%',zIndex:selectedRow ? 0 : 100000 }}>
                <span style={{ color: '#b63131', textDecoration: 'underline' }}>{props.page}</span>
                <span style={{ marginTop: 12, fontSize: 16 }}>
                    {saveInfo.message}
                </span>

            </div>
            {
                //ADD TABLE BUTTON 
                props.addItemRoute &&
                <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <button onClick={()=>onClickAddButton()} className={classes.addButton}>{"Add " + props.page}</button>
                </div>
            }
            <div style={{ display: 'flex', flexDirection: 'column', width:isNavShow?'85%':'98%',minWidth:540, margin: 'auto',marginTop:props.addItemRoute?40: 90, boxShadow: '1px 1px 4px rgba(0, 0, 0, .5)',padding:'0 10px 10px 0'}}>
            
            {/* ENTRIES TO SHOW AND SEARCH BOX IS IN THIS DIV */}
            <div style={{display:'flex',flexDirection:'row',width:'100%',height:'62px',justifyContent:'space-between'}}>
                {/* Entries to show design in this div */}
                <div style={{alignSelf:'flex-end'}} className={classes.entriesContainer}>
                    <span>Show</span>
                    <select onChange={(e)=>onChangePageSize(e)} className={classes.showEntriesSelect}>
                        {
                            paginationInfo.pageSizeArray.map(item=>{
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
                    <span>entries</span>
                </div>
                {/* Searchbox design is in this div */}
                <div className={classes.searchboxContainer} style={{alignSelf:'flex-end'}}>
                    <span style={{fontSize:'1rem',fontWeight:700}}>Search:</span>
                    <input ref={searchInputEl} type="text" value={searchTxt} onKeyUp={(e)=>onKeyUpSearchTxt(e)} onChange={(e)=>onChangeSearchTxt(e)} style={{}}/>
                </div>
            </div>
            {/* WHOLE TABLE IS IN THIS DIV */}
            <div className={classes.tableContainer}>
                <table>
                    <thead>
                        <tr>
                                <th ></th>
                                <th ></th>
                            {
                                props.columns != null && Object.keys(props.columns).map(column=>{
                                    return (<th>
                                                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                                    <span>{props.columns[column].name}</span>
                                                    {/* {
                                                    props.columns[column].type === 'string'?
                                                        <input  style={style.headerInputStyle} type="text"/>
                                                    : props.columns[column].type === 'number'?
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}><input style={{ ...style.headerInputStyle }} type='text' /><input style={{ ...style.headerInputStyle,marginTop:5 }} type='text' /></div>
                                                        : props.columns[column].type === 'date' ?
                                                            <div style={{ display: 'flex', flexDirection: 'column' }}><input style={{ ...style.headerInputStyle }} type='date' /><input style={{ ...style.headerInputStyle, marginTop: 5 }} type='date' /></div>
                                                        :null
                                                    } */}
                                                </div>
                                            </th>)
                                    // return (<th>{typeof (props.columns[column]) === 'object' ? props.columns[column].name : props.columns[column]}</th>)
                                })
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableState.rows.length!=0&&tableState.rows.map((row,rowNumber)=>{
                              return(
                                  <tr onContextMenu={(e)=>{showContextMenu(e,row)}} >
                                      {/* Edit and Delete button in the table */}
                                      <td style={{ textAlign: "center" }}> <button onClick={() => { onDoubleClickItemToEdit(rowNumber, row) }} className={classes.tableButton}>Edit</button></td>
                                      <td style={{ textAlign: "center" }}> <button onClick={() => { onClickDelete(row) }} className={classes.tableButton}>Delete</button></td>

                                      {
                                          props.columns != null && Object.keys(props.columns).map((key,i) => {
                                              
                                              return (
                                                  <td onDoubleClick={()=>{onDoubleClickItemToEdit(rowNumber,row)}}>
                                                      
                                                      {
                                                          
                                                        //   tableState.editRowState==rowNumber
                                                        //   ?
                                                        //   <Input
                                                        //       key={i}
                                                        //       elementType={controls[key].elementType}
                                                        //       elementConfig={controls[key].elementConfig}
                                                        //       value={controls[key].value}
                                                        //       invalid={!controls[key].valid}
                                                        //       shouldValidate={controls[key].validation}
                                                        //       touched={controls[key].touched}
                                                        //       changed={(value) => inputChangedHandler(value, key)}
                                                        //       noLabel={true}
                                                        //       style={controls[key].css}/>
                                                        //       : 
                                                        <span >
                                                            {typeof(row[key]) ==='object' && row[key]?row[key][props.columns[key].field]: row[key]}
                                                        </span>
                                                      }
                                                          
                                                  </td>
                                              )
                                          })
                                      }
                                     
                                  </tr>
                                )  
                            })
                        }
                        {
                            contextMenu.isShow &&
                            <ContextMenu style={{top:contextMenu.top,left:contextMenu.left}} itemClick = {(e,item)=>onClickContextItem(e,item)} data={contextMenu.data}/>

                        }
                    </tbody>
                </table>
            </div>
            {/* PAGINATION IS HERE IN THIS DIV */}
            {
                isShowPagination &&
                <div className={classes.paginationButtonContainer} style={{alignSelf:'flex-end',marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    {
                        paginationInfo.totalPages > 5 &&
                        <button onClick={() => onClickFirstPage()} style={{ marginRight: 18 }} className={classes.startEndBtn} >{"start"}</button>
                    }
                    <button onClick={() => onClickPreviousPage()} className={classes.paginationButton} >{"<<"}</button>
                    {
                        paginationInfo.pagesToShowArray.map((x,i)=>{
                            return (
                                <button id={x} onClick={()=>onClickPagination(x)}  className={[classes.paginationButton, selectedPageNumber == x ? classes.activePage:null].join(' ')}>{x}</button>
                            )
                        })
                    }
                    <button onClick={() => onClickNextPage()} className={classes.paginationButton}  >{">>"}</button>
                    {
                        paginationInfo.totalPages > 5 &&
                        <button onClick={() => onClickLastPage()} style={{ marginRight: 0, marginLeft: 12 }} className={classes.startEndBtn} >{"end"}</button>
                    }
                    <span className={classes.selectedPage}>{selectedPageNumber.toString() + "/" + paginationInfo.totalPages}</span>
                </div>

            }
            </div>
            {
                selectedRow &&
                <div 
                    onClick={() => {onCloseUpdatePanel()}} style={{ position:'fixed',top:0,left:0,height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,.5)'}}>
                    <div onClick={(e) => { e.stopPropagation(); }} style={{ overflowY: 'scroll', zIndex:10000000, position:'fixed', height:'100%',width:'94%',marginLeft:'3%',backgroundColor:'white'}}>
                      {
                        updateForm
                      }
                    </div>
                </div>
            }
        </>
   
   )
}

export default Table;