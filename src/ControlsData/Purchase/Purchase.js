export const controls = {
    images: {
        elementType: 'images',
        elementConfig: {
            labelName: ''
        },
        value: [],
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },
    image: {
        elementType: 'image',
        elementConfig: {
            labelName: ''
        },
        value: null,
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },
    purchaseDate: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Purchase Date'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    totalQuantity: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Total Quantity'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },
    discountInPercentage: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Discount Percentage'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    discountInAmount: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Discount Amount'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    totalAmount: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Total Amount',
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    netAmount: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Net Amount'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    
    paidAmount: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Paid Amount'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    changeAmount: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Change Amount'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    dueAmount: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Due Amount'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },

    paymentType: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Payment Type'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    cardType: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Card Type'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    cardNumber: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Card Number'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    bankName: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Bank Name'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },

    chequeNo: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Cheque No'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    cardType: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Card Type'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    chequeDate: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Card Type'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    comments: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Card Type'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    isActive: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Active'
        },
        value: false,
    }
}
export const columns = {
    sequence: { name: 'Sequence', type: 'number'},
    code: { name: 'Code', type: 'string'},
    invoiceNo: { name: 'Invoice No', type: 'string'},
    purchaseDate: { name: 'Purchase Date', type: 'date'},
    totalQuantity: { name: 'Total Quantity', type: 'number'},
    discountInPercentage: { name: 'Discount Percentage', type: 'number'},
    discountInAmount: { name: 'Discount Amount', type: 'number'},
    totalAmount: { name: 'Total Amount', type: 'number'},
    netAmount: { name: 'Net Amount', type: 'number'},
    paidAmount: { name: 'Paid Amount', type: 'number'},
    changeAmount: { name: 'Change Amount', type: 'number'},
    dueAmount: { name: 'Due Amount', type: 'number'},
    paymentType: { name: 'Payment Type', type: 'string'},
    cardType: { name: 'Card Type', type: 'string'},
    cardNumber: { name: 'Card Number', type: 'string'},
    bankName: { name: 'Bank Name', type: 'string'},
    chequeNo: { name: 'Cheque No', type: 'string'},
    chequeDate: { name: 'Cheque Date', type: 'date'},
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}