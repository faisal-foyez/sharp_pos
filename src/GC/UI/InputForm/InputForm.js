import React, { useState,useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import services from '../../../Services/index';
import {validation} from '../../../ControlsData/index';
import './InputForm.css';
// import {useLocation} from 'react-router-dom';
const InputForm = (props) => {
    // const location = useLocation();
    // const firstTextEl = useRef(null);
    const [state, setState] = useState({
        controls: {
        }

    })
    const [saveInfo,setSaveInfo] = useState({
        isBtnDisabled:false,
        message:'',
        messageColor:null
    })
    useEffect(()=>{
        //console.log(props);
        //IF THERE IS ROW THAT MEANS DATA WILL BE UPDATED
        const row = props.row;
        if(row){
            //console.log(row);
            //HERE WE RESET THE CONTROLS STATE
            let updatedControls = props.controls;
            for (let controlName in props.controls){
                //console.log('dependency',props.controls[controlName].dependency);

                const displayValue = props.controls[controlName].elementConfig.options && props.controls[controlName].elementConfig.options.displayValue;
                //console.log('test', controlName, displayValue)
                let value = row[controlName] && row[controlName]._id ? row[controlName]._id : row[controlName];
                if (props.controls[controlName].elementType === "datepicker") {
                    const day = new Date(value).getDate();
                    const month = new Date(value).getMonth() + 1;
                    const year = new Date(value).getFullYear();
                    value = year + "-" + (month.toString().length === 1 ? "0" + month : month) + "-" + (day.toString().length === 1 ? "0" + day : day)
                    //console.log('datapicker', value);
                }
                const showValue = row[controlName] && row[controlName][displayValue] ? row[controlName][displayValue] : row[controlName];
                //IF THERE IS DEPENDENCY OF THAT CONTROL VALUE WILL BE SET AS 
                //DEPENDENCVALUDE IN THE DEPENDANT CONTROL
                if(props.controls[controlName].dependency){
                    const dependency = updatedControls[controlName].dependency;
                    updatedControls = {
                        ...updatedControls,
                        [controlName]: {
                            ...updatedControls[controlName],
                            value: !value ? '' : value,
                            elementConfig:{
                                ...updatedControls[controlName].elementConfig,
                                showValue:showValue
                            },
                            valid: true,
                            touched: true
                        },
                        [dependency]:{
                            ...updatedControls[dependency],
                            elementConfig:{
                                ...updatedControls[dependency].elementConfig,
                                //HERE IS THE DEPENDENCY VALUE OF DEPENDANT CONTROL
                                dependencyValue: value
                            }

                        }
                    };

                }
                //IF NO DEPENDENCY THEN SET THE VALUE AS USUAL
                else{
                    updatedControls = {
                        ...updatedControls,
                        [controlName]: {
                            ...updatedControls[controlName],
                            value: !value ? '' : value,
                            elementConfig:{
                                ...updatedControls[controlName].elementConfig,
                                showValue:showValue
                            },
                            valid: true,
                            touched: true
                        },
                    }
                }
            }

            setState({
                ...state,
                controls:updatedControls
            })

        }
        //IF NO ROW THAT MEANS DATA WILL BE ADDED OR THIS IS AN ADD PAGE
        else{
            setState({
                ...state,
                controls: props.controls
            })
        }
        //FORM DEFAULT ENTER KEY PRESS SUBMIT THE FORM TO SERVER. TO STOP THIS KIND OF 
        //BEHAVIOR THIS IS DONE
        window.addEventListener("keydown",(e)=>{e.keyCode === 13 && e.preventDefault()});
    },[])

    const onAddData = (e,cb) => {
        
        e.preventDefault();
        //INITIALIZING THE FORM DATA TO SEND WITH THE API TO ADD OR UPDATE
        let formData = new FormData();
        //INITIALIZING THE DATA FOR VALIDATION
        let data = {};
        for (var key in state.controls) {
            //SETTING ALL THE DATA IN DATA OBJECT
            data ={
                ...data,
                [key]:state.controls[key].value
            }
            //IF VOID THEN SKIP
            if(key==='void') continue;
            //IF IMAGES THEN THERE CAN BE MULTIPLE IMAGE SO A LOOP HAS TO BE RUN
            //TO APPEND ALL THE IMAGES IN IMAGE COLUMN OF FORMDATA VARIABLE
            if (key === 'images' && state.controls[key].value.length){
                state.controls[key].value.forEach(val=>{
                    formData.append(key,val);
                })
            }
            //OTHERWISE JUST APPEND THE DATA
            else{

                formData.append(key, state.controls[key].value)
            }
        }
        // const x = 10;
        //DOING THE VALIDATION HERE
        const {error} = validation[props.entity + "Validation"]().validate(data);
        //IF THERE IS ERROR THEN SHOW THAT IN MESSAGE CENTER
        if(error){
            const controlName  = error.details[0].context.key
            //SET THE VALID STATUS OF THE CONTROL FALSE
            setState({
                controls:{
                    ...state.controls,
                    [controlName]:{
                        ...state.controls[controlName],
                        valid:false
                    }
                }
            })
            //SET ERROR MESSAGE INFO
            setSaveInfo({
                ...saveInfo,
                isBtnDisabled: false,
                message:error.details[0].message,
                messageColor: 'red'
            })
            setTimeout(() => {
                setSaveInfo({
                    ...saveInfo,
                    message: '',
                    messageColor: null
                })
                // setState({
                //     controls: {
                //         ...state.controls,
                //         [controlName]: {
                //             ...state.controls[controlName],
                //             valid: true
                //         }
                //     }
                // })
            }, 3000)
            return
        }
        // for (var pair of formData.entries()) {

        // }
        //IF LOCATION STATE IS THERE THAT MEANS THIS IS GOING UPDATE DATA
        //IF NOT THEN ADD DATA
        //return;
        if(props.row){
            //SET STATUS DATA IS UPDATING
            setSaveInfo({
                ...saveInfo,
                isBtnDisabled: true,
                message: 'Updating ......',
                messageColor: '#696969'
            })
            //CALLING API TO UPDATE DATA
            services[props.service].update(props.row._id, formData).then(res => {
                cb && cb();
                //IF SUCCESSFUL THEN SET MESSAGE ACCORDINGLY
                setSaveInfo({
                    ...saveInfo,
                    isBtnDisabled: false,
                    message: 'Successfully Updated',
                    messageColor: 'green'
                })
                setTimeout(() => {
                    setSaveInfo({
                        ...saveInfo,
                        message: '',
                        messageColor: null
                    })
                }, 10000)
            }).catch(err => {
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
            })
            return;
        }
        //IF NO ROW AVAILABLE THEN EXECUTION WILL COME HERE TO ADD DATA
        //SETTING THE MESSAGE FOR MESSAGE CENTER ACCORDINGLY
        setSaveInfo({
            ...saveInfo,
            isBtnDisabled:true,
            message:'Saving ......',
            messageColor: '#696969'
        })
        services[props.service].add(formData).then(res=>{
            clearFormData();
            cb && cb();
            //IF SUCCESSFUL THEN SET THE MESSAGE FOR MESSAGE CENTER ACCORDINGLY
            setSaveInfo({
                ...saveInfo,
                isBtnDisabled: false,
                message: 'Successfully saved',
                messageColor:'green'
            })
            setTimeout(()=>{
                setSaveInfo({
                    ...saveInfo,
                    message: '',
                    messageColor:null
                })
            },10000)
        }).catch(err=>{
            setSaveInfo({
                isBtnDisabled: false,
                message: 'Error : '+err.message,
                messageColor:'red'
            })
            setTimeout(() => {
                setSaveInfo({
                    ...saveInfo,
                    message: '',
                    messageColor:null
                })
            }, 10000)
        })
    }

    const inputChangedHandler = (value, controlName) => {
        let updatedControls;

        //IF THERE IS ANY DEPENDENCY OF THE CONTROL WHOSE DATA IS BEING CHANGED
        //THEN THAT DATA WILL ALSO BE SET IN DEPENDENCY VALUE OF DEPENDANT CONTROL
        if(state.controls[controlName].dependency){
            //GETTING THE DEPENDENCY
            const dependency = state.controls[controlName].dependency;
            updatedControls = {
                ...state.controls,
                //SETTING CONTROL DATA VALUE 
                [controlName]:{
                    ...state.controls[controlName],
                    //IF VALUE IS OBJECT THEN THERE WILL ANOTHER VALUE 
                    value: value && typeof(value)==='object'   ? value.value : value,
                    elementConfig:{
                        ...state.controls[controlName].elementConfig,
                        showValue:value.showValue
                    },
                    //NO NEED TO CHECK VALIDITY IF VALUE IS OBJECT(AS IN IMAGE OR DATE)
                    //valid: typeof (value) !== 'object' ? checkValidity(value, state.controls[controlName].validation) : null,
                    valid:true,
                    touched: true
                },
                //SETTING THE DEPENCY VALUE
                [dependency]:{
                    ...state.controls[dependency],
                    elementConfig: {
                        ...state.controls[dependency].elementConfig,
                        //HERE DEPENDENCY VALUE WILL BE SET 
                        dependencyValue: typeof value === 'object' ? value.value : value,
                        showValue: ''
                    },
                    value: ''
                }
            }
        }
        else{
            //UPDATING THE VALUE OF CONTROLS
            updatedControls = {
                ...state.controls,
                [controlName]: {
                    ...state.controls[controlName],
                    value: value && value.value ? value.value : value,
                    elementConfig: {
                        ...state.controls[controlName].elementConfig,
                        showValue: value && typeof(value) === 'object' ? value.showValue:value
                    },
                    //NO NEED TO CHECK VALIDITY IF VALUE IS OBJECT(AS IN IMAGE OR DATE)
                    //valid: typeof (value) !== 'object' ? checkValidity(value, state.controls[controlName].validation) : null,
                    valid:true,
                    touched: true
                },
            } 
            // updateObject(state.controls, {
            //     [controlName]: updateObject(state.controls[controlName], {
            //         value: value,
            //         //NO NEED TO CHECK VALIDITY IF VALUE IS OBJECT(AS IN IMAGE OR DATE)
            //         valid: typeof(value) !== 'object'? checkValidity(value, state.controls[controlName].validation):null,
            //         touched: true
            //     })
            // });
        }
        setState({ controls: updatedControls });

    }

    //THIS METHOD IS USED TO TRANSFER THE FOCUS TO NEXT CONTROL IN THE FORM ON PRESSING "ENTER"
    const onKeyUp = (event) =>{
        event.preventDefault();
        if(event.keyCode == 13){
            //GETTING THE FORM 
            const form = event.target.form;
            // console.log(form.elements.length);
            //GETTING THE INDEX
            const index = Array.prototype.indexOf.call(form, event.target);
            if(index + 1 == form.elements.length) return;
            setTimeout(()=>{
                //TRANSFERRING THE FOCUS
                form.elements[index + 1].focus();

            })
            event.preventDefault();
        }
    }
    //THIS METHOD IS CALLED WHEN THE "ENTER" IS PRESSED WHEN BUTTON SUBMIT IS FOCUSED
    //ON ENTER IT WILL ADD DATA AND FIRST TXTBOX WILL BE FOCUSED
    const onBtnKeyUp = (e) =>{
        if(e.keyCode === 13){
            const form = e.target.form;
            const focusControlIdx = Object.keys(state.controls)[2];
            
            onAddData(e,()=>{
                console.log('hello',form.elements[focusControlIdx]);
                form.elements[focusControlIdx].focus();
            });

            e.preventDefault();
        }
    }
    //TO CLEAR THE FORM DATA THIS IS USED
    const clearFormData = () =>{
        //HERE JUST PROPS.CONTROLS IS SET IN STATE AND THE WORK IS DONE
        setState({
            ...state,
            controls: props.controls
        })
    }
    const formElementsArray = [];
    //HERE THE CONTROLS DATA IS BEING SET IN FORM ELEMENT ARRAY
    for (let key in state.controls) {
        formElementsArray.push({
            id: key,
            config: state.controls[key]
        });
    }

    let form = formElementsArray.map((formElement,i) => (
        <Input
            autoFocus={i===2}
            key={formElement.id}
            id={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            valid={formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(value) => inputChangedHandler(value, formElement.id)}
            label={formElement.id}
            keyPressed={(e)=>{onKeyUp(e)}}/>
    ));
    return (
        <React.Fragment>
            <div className="message_center"  style={{top:props.row?0:50}}>
                <span style={{ color:'#b63131',textDecoration:'underline' }}>{(props.row?'Update ':'Add ')+props.name}</span>
                <span style={{ color:saveInfo.messageColor, marginTop:12,fontSize:16}}>
                    {saveInfo.message}
                </span>
            </div>

            <div style={{display:'flex',flexDirection:'column',marginTop:'82px'}}>
                <form 
                className="form">
                    {form}
                    {/* TO KEEP THE SUBMIT BUTTON IN THE MIDDLE THIS ADJUSTMENT HAS BEEN DONE */}
                    {/* IF EVEN NUMBER OF INPUT ELEMENT THEN NO DIV IF ODD NUMBER THEN THIS EXTRA DIV WILL BE ADDED */}
                    {
                        state.controls.length %2==0
                        ?null
                        :<div style={{width:'100%'}}></div>
                    }
                    <Button
                        onBtnKeyUp = {(e)=>{onBtnKeyUp(e)}}
                        clicked={(e) => onAddData(e)} disabled={saveInfo.isBtnDisabled}
                        btnType="Success" style={{ margin: 'auto', marginTop: 30, padding: 10, alignSelf:'center'}}>Submit</Button>
                </form>
            </div>
        </React.Fragment>

    )

}

export default InputForm;