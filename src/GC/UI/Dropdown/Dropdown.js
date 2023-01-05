import React, { useState, useEffect, useRef } from 'react';
import classes from './Dropdown.module.css';
import services from '../../../Services/index';
const Dropdown = (props) => {
    const inputEl = useRef(null);
    const tableContainerEl = useRef(null);
    const [state, setState] = useState({
        rows: []
    })
    const [isOptionShown, setIsOptionShown] = useState(false);
    const [selectedOptIdx, setSelectedOptIdx] = useState(0);
    const optionEls = useRef([]);

    useEffect(() => {
        //IF DROPDOWN DATA IS DEPENDENT ON DEPENDENCY VALUE THEN DON'T LOAD THE DATA ON FIRST LOAD
        //IF DEPENDECY VALUE IS THERE JUST RETURN
        if (props.dependencyValue !== undefined)
            return;



        //adding window click event listener to close the dropdown whererever is clicked
        //window.addEventListener("click",closeDropdown,false);

        return () => {
            //window.removeEventListener("click",closeDropdown,false);
        }
    }, [])

    const onClickDropdownHeader = (e) => {
        e.stopPropagation();
        //TOGGLE THE DROPDOWN
        // setState({
        //     ...state,
        //     isOptionShown: !state.isOptionShown
        // }); 
        setIsOptionShown(!isOptionShown);
        //console.log(props.dependencyValue, props.dependencyCollection);
        //DEPENDENCY VALUE IS THERE THEN DATA WILL BE LOADED ON DROPDOWN CLICK
        if (props.dependencyValue !== undefined) {
            //DATA WILL BE LOADED IF DROPDOWN IS CLICKED TO SHOW DATA
            // THAT IS BEING CHECKED
            if (isOptionShown === false) {
                //DATA IS BEING FETCHED ACCORDING TO DEPENDENCY VALUE
                services[props.options.api].getByQuery({ [props.dependencyCollection]: props.dependencyValue }, props.dependencyFields).then(res => {

                    setState({
                        ...state,
                        rows: res.data
                    })
                    setIsOptionShown(true)
                }).catch(err => {


                });
            }
        }
        else {
            //IF THERE IS ALREADY ROWS IN OPTIONS THEN
            if (props.options.rows) {
                //IF ALREADY SELECTED VALUE IS THERE THAT MEANS IT IS FOR UPDATE DATA
                // if(props.value){


                //     //FIND THE DATA ACCORDING TO SELECTED DATA
                //    // const foundData = props.options.rows.find(item => item[props.options.selectedValue] === props.value);


                //     setState({
                //         ...state,
                //         //selectedValue: foundData[props.options.displayValue],
                //         rows: props.options.rows
                //     })
                //     return;
                // }
                //IF PROPS.VALUE IS NOT THERE THAT MEANS IT IS ADD DATA PAGE
                //SET THE ROWS ONLY
                setState({
                    ...state,
                    rows: props.options.rows
                })
            }
            // THERE IS API THAT MEANS DROPDOWN LIST DATA WILL COME FROM DB
            else if (props.options.api) {
                //CALLING THE API
                services[props.options.api].getAll().then(res => {
                    //IF PROPS.VALUE IS ALREADY THERE THEN SET THE SELECTED DATA AS SHOW VALUE
                    // if(props.value){
                    //     //FIND DATA ACCORDING TO PROPS.VALUE
                    //     //const foundData = res.data.find(item => item[props.options.selectedValue] === props.value);
                    //     setState({
                    //         ...state,
                    //         //selectedValue:foundData[props.options.displayValue],
                    //         rows:res.data
                    //     })
                    //     return;
                    // }
                    setState({
                        ...state,
                        rows: res.data
                    })
                }).catch(err => { console.log(err) })
            }
        }

    }

    const onClickOption = (option, e) => {
        e.stopPropagation();

        //SELECTING AN OPTION IF CLICKED
        // setState({
        //     ...state,
        //     selectedValue: option[props.options.displayValue],
        //     isOptionShown:false
        // })
        setIsOptionShown(false)
        //AND SETTING IT IN CONTROL STATE
        props.onChange({ value: option[props.options.selectedValue], showValue: option[props.options.displayValue] });
    }

    const onCloseDropdown = (e) => {
        setTimeout(() => {
            // setState({
            //     ...state,
            //     isOptionShown:false
            // })
            setIsOptionShown(false);

        }, 200)
    }
    //THIS METHOD  IS USED TO NAVIGATE THROUGH DATA WITH ARROW UP AND DOWN PRESSED
    const onInputKeyPress = (e) => {

        const maxScrollTop = tableContainerEl.current.scrollHeight - tableContainerEl.current.clientHeight

        //WHEN ARROW KEY UP IS PRESSED
        if (e.keyCode === 38) {
            let index = selectedOptIdx;
            console.log(tableContainerEl.current.scrollHeight, tableContainerEl.current.scrollTop, tableContainerEl.current.clientHeight);

            if (index <= 0) {
                setSelectedOptIdx(state.rows.length);
                tableContainerEl.current.scrollTop = maxScrollTop;
            }
            else {
                setSelectedOptIdx(index - 1);
                //const maxScrollTop = tableContainerEl.current.scrollHeight - tableContainerEl.current.clientHeight
                tableContainerEl.current.scrollTop = (index - 1) * ((maxScrollTop) / (state.rows.length))
            }
        }
        //WHEN ARROW KEY DOWN IS PRESSED
        else if (e.keyCode === 40) {
            let index = selectedOptIdx;
            console.log(tableContainerEl.current.scrollHeight, tableContainerEl.current.scrollTop, tableContainerEl.current.clientHeight);


            if (index >= state.rows.length) {
                setSelectedOptIdx(0);
                tableContainerEl.current.scrollTop = 0;
            }
            else {
                setSelectedOptIdx(index + 1);
                //const maxScrollTop = tableContainerEl.current.scrollHeight - tableContainerEl.current.clientHeight
                tableContainerEl.current.scrollTop = (index + 1) * ((maxScrollTop) / (state.rows.length))
            }
        }
        //IF ENTER IS PRESSED THEN SELECT THE DATA
        else if (e.keyCode === 13) {

            if (isOptionShown && state.rows.length) {
                optionEls.current[selectedOptIdx].click();
            }
            props.keyPressed(e);
        }
    }
    const onScrollDropdown = (e) => {
        const el = e.target;
        //console.log(el.scrollHeight,el.scrollTop,el.clientX)
    }
    // IF DESELECT IS CLICKED THEN CLEAR THE SELECTED VALUE
    const closeSelectedValue = () => {
        props.onChange({ value: '', showValue: '' });
    }

    const columns = props.options.columns;

    const style = {
        activeOption: {
            backgroundColor: '#964a4a',
            color: 'white',
        }
    }
    return (

        <div className={classes.container}>

            <div className={classes.dropdownHeader}>
                <input
                    ref={inputEl}
                    type="text"
                    onFocus={(e) => { onClickDropdownHeader(e); }}
                    onBlur={(e) => { onCloseDropdown(e) }}
                    value={props.showValue ? props.showValue : ''}
                    onKeyUp={(e) => { onInputKeyPress(e) }}
                />
                <div onClick={(e) => { !isOptionShown && inputEl.current.focus(); }} className={classes.triangle}></div>
            </div>
            {
                isOptionShown
                    ?
                    <div onScroll={(e) => { onScrollDropdown(e) }} ref={tableContainerEl} className={classes.dropdownTableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    {Object.keys(columns).map(key => <th>{columns[key]}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.rows.length ? (
                                        <tr
                                            ref={el => optionEls.current[0] = el}
                                            onClick={closeSelectedValue}
                                            style={{ fontSize: 16, fontWeight: 700, color: 'gray', height: 30, ...selectedOptIdx === 0 ? style.activeOption : null, }}>
                                            {
                                                Object.keys(columns).map((column, i) => {
                                                    return i === 0 ? <td>Deselect</td> : <td></td>
                                                })
                                            }
                                        </tr>
                                    ) : null
                                }
                                {
                                    state.rows.map((row, i) => {
                                        return (
                                            <tr ref={el => optionEls.current[i + 1] = el} style={{ fontWeight: 700, color: 'black', ...selectedOptIdx === i + 1 ? style.activeOption : null }} onClick={(e) => onClickOption(row, e)}>
                                                {
                                                    Object.keys(columns).map(column => {
                                                        return <td>{row[column]}</td>
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    !state.rows.length && (
                                        <tr style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }}>No data</tr>
                                    )
                                }
                            </tbody>

                        </table>

                    </div>
                    : null
            }

        </div>
    )

}

export default Dropdown;