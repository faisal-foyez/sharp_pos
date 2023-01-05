const Joi = require('@hapi/joi');

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
        valid: true,
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
        valid: true,
        touched: false
    },
    code: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Code'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    firstName: {
        elementType: 'input',
        elementConfig: {
            labelName: 'First Name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    lastName: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Last Name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    username: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Username'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    password: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Password',
            type: "password"
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    presentAddress: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Present Address'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    permanentAddress: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Permanent Address'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    gender: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Gender',
            options: {
                selectedValue: "value",
                displayValue: "value",

                columns: {
                    value: "Gender",
                }
                ,
                rows: [
                    { _id: 0, value: "male" },
                    { _id: 1, value: "female" },
                ],
            },
        },
        value: '',
        validation: {
            //required: true
        },
        valid: true,
        touched: false

    },
    phone1: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Phone 1'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    phone2: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Phone 2'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    email: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Email'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    comments: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Comments'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    isActive: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Active'
        },
        value: false,
    },
}

export const columns = {
    sequence: { name: 'Sequence', type: 'number'},
    code: { name: 'Code', type: 'string'},
    firstName: { name: 'First Name', type: 'string'},
    lastName: { name: 'Last Name', type: 'string'},
    username: { name: 'Username', type: 'string'},
    password: { name: 'Password'},
    presentAddress: { name: 'Present address', type: 'string'},
    permanentAddress: { name: 'Permanent address', type: 'string'},
    gender: { name: 'Gender', type: 'string'},
    phone1: { name: 'Phone 1', type: 'string'},
    phone2: { name: 'Phone 2', type: 'string'},
    email: { name: 'Email', type: 'string'},
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        code: Joi.string().allow('').allow(null).optional(),
        firstName: Joi.string().required(),
        lastName: Joi.string().allow('').allow(null).optional(),
        username: Joi.string().required(),
        password:Joi.string().min(5).required(),
        presentAddress: Joi.string().allow('').allow(null).optional(),
        permanentAddress: Joi.string().allow('').allow(null).optional(),
        gender: Joi.string().required(),
        phone1: Joi.string().allow('').allow(null).optional(),
        phone2: Joi.string().allow('').allow(null).optional(),
        email: Joi.string().email({ tlds: { allow: false } }).allow('').allow(null).optional(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}