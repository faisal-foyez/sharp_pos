import React,{useState} from 'react';
import classes from './Input.module.css';
import Dropdown from '../Dropdown/Dropdown';
import ImageUploader from '../UploadImage/UploadImage';
import ImagesUploader from '../UploadImages/UploadImages';
import {iconsUrl} from '../../../Shared/CommonStrings';
const reqSvgs = require.context('../../../Assets', true, /\.svg$/);

const input = ( props ) => {
    // const [date,setDate] = useState(new Date())
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    // const handleChange = date => {
    //     this.setState({
    //         startDate: date
    //     });
    
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = 
                <input
                    id={props.id}
                    type="text"
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    style={{ ...props.style, border: 'none', borderBottom:'2px solid rgb(243, 120, 120)',borderRadius:0,boxShadow:'none'}}
                    value={props.value}
                    onChange={(event)=>{props.changed(event.target.value)}} 
                    onKeyUp={(event) => { props.keyPressed(event)}}
                    autoFocus={props.autoFocus}    
                />

            
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                style={{ ...props.style, resize: "none", height: 80 }}
                value={props.value}
                onChange={(event) => props.changed(event.target.value)} 
                onKeyUp={(event) => { props.keyPressed(event) }}/>;
            break;
        case ('datepicker'):
            inputElement = 
            <div style={{position:'relative'}}>
                <img style={{height:20,width:20, position:'absolute',top:8,left:7}} src={iconsUrl+'/calendar.svg'}/>
                <input
                    className={[...inputClasses,classes.dateInput].join(' ')}
                    type="date"
                    min='1899-01-01' 
                    max={new Date().toDateString()}
                    onChange={(event)=>{props.changed(event.target.value)}}
                    onKeyUp={(event) => { props.keyPressed(event) }}
                    value={props.value}
                    data-date-format="DD MMMM YYYY"
                    />
            </div>
            break;

        case('image'):
            inputElement =
                <ImageUploader
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    style={{ ...props.style, border: 'none', borderBottom: '2px solid rgb(243, 120, 120)', borderRadius: 0, boxShadow: 'none' }}
                    onChange={(file) => props.changed(file)}
                    value={props.value}
                    //onKeyUp={(event) => { props.keyPressed(event) }} 
                    />
            break;
        case ('images'):
            inputElement =
                <ImagesUploader
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    style={{ ...props.style, border: 'none', borderBottom: '2px solid rgb(243, 120, 120)', borderRadius: 0, boxShadow: 'none' }}
                    onChange={(files) => props.changed(files)}
                    value={props.value}
                //onKeyUp={(event) => { props.keyPressed(event) }} 
                />
            break;
        case ('dropdown'):
            inputElement = <Dropdown
                value={props.value}
                onChange={(value) => props.changed(value)} 
                options={props.elementConfig.options}
                className={classes.InputElement}
                keyPressed={(event) => { props.keyPressed(event) }}
                dependencyValue={props.elementConfig.dependencyValue}
                dependencyCollection={props.elementConfig.dependencyCollection}
                dependencyFields={props.elementConfig.dependencyFields}
                showValue={props.elementConfig.showValue}
                />;
            break;
        case ('checkbox'):
            inputElement = 

                <label className={classes.container}>
                    <input type="checkbox"
                    name="vehicle1"
                    type="checkbox"
                    style={{ ...props.style }}
                    checked={props.value}
                    onChange={(event)=>props.changed(event.target.checked)}
                    onKeyUp={(event) => { props.keyPressed(event) }}/>
                    <span className={classes.checkmark}></span>
                </label>
                    {/* <input
                    name="vehicle1" 
                    type="checkbox"
                    // className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed} />; */}
            break;
            case ( 'select' ):
                inputElement = (
                        <select
                            className={inputClasses.join(' ')}
                            value={props.value}
                            style={{ ...props.style }}
                            onChange={(event)=>props.changed(event.target.value)}
                        onKeyUp={(event) => { props.keyPressed(event) }}>
                            {props.elementConfig.options.map(option => (
                                <option key={option.displayValue} value={option.displayValue}>
                                    {option.displayValue}
                                </option>
                            ))}
                        </select>
                );
                break;
            case('void'):
                inputElement =null;
                break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    console.log(props.id,props.valid);
    return (
        <div style={{border:props.valid !== undefined &&!props.valid?'3px solid red':'none'}} className={classes.Input}>
            {
                !props.elementConfig.labelName ?
                null
                :<label className={classes.Label}>{props.elementConfig.labelName +" :"}</label>
            }
            {inputElement}
        </div>
    );

}

export default input;