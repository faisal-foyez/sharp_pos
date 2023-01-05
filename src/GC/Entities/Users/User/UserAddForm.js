import React, { useState } from 'react';
import InputFrom from '../../../UI/InputForm/InputForm';
import {controls} from '../../../../ControlsData/User/User';
const userAddForm = (props) => {

    // const controls = {
    //     images: {
    //         elementType: 'images',
    //         elementConfig: {
    //             labelName: ''
    //         },
    //         value: [],
    //         validation: {
    //             required: true,
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     image: {
    //         elementType: 'image',
    //         elementConfig: {
    //             labelName: ''
    //         },
    //         value: null,
    //         validation: {
    //             required: true,
    //         },
    //         valid: false,
    //         touched: false
    //     },
        
    //     code: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Code'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     firstName: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'First Name'
    //         },
    //         value: '',
    //         validation: {
    //             required: true,
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     lastName: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Last Name'
    //         },
    //         value: '',
    //         validation: {
    //             required: true,
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     username: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Username'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     password: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Password',
    //             type:"password"
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     presentAddress: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Present Address'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     permanentAddress: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Permanent Address'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     gender: {
    //         elementType: 'dropdown',
    //         elementConfig: {
    //             labelName: 'Gender',
    //             options: {
    //                 columns: {
    //                     displayValue: "Value",
    //                 }
    //                 ,
    //                 rows: [
    //                     { value: 0, displayValue: "Male" },
    //                     { value: 1, displayValue: "Female"},
    //                 ]
    //             }
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false

    //     },
    //     phone1: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Phone 1'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     phone2: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Phone 2'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     email: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Email'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     comments: {
    //         elementType: 'input',
    //         elementConfig: {
    //             labelName: 'Comments'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     isActive: {
    //         elementType: 'checkbox',
    //         elementConfig: {
    //             labelName: 'Active'
    //         },
    //         value: false,
    //     },


    // }
    return (
        <>
            <InputFrom controls={controls} service="userServices" entity="user" name="User" row={props.row}/>
        </>

    )

}

export default userAddForm;