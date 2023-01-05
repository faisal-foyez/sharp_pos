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
    name: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Warehouse Name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    company: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Company',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Company"
                },
                api: "companyServices",
            },
            showValue: ''
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false,
        dependency: 'branch'

    },
    branch: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Branch',
            options: {
                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Branch"
                },
                api: "branchServices",
            },
            showValue: '',
            dependencyValue: '',
            dependencyCollection: 'company',
            dependencyFields: ""
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    contactPerson: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Contact Person'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    address1: {
        elementType: 'textarea',
        elementConfig: {
            labelName: 'Address 1'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    address2: {
        elementType: 'textarea',
        elementConfig: {
            labelName: 'Address 2'
        },
        value: '',
        validation: {
            required: true
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
    }
}

export const columns = {
    sequence: { name: 'Sequence', type: 'number'},
    code: { name: 'Code', type: 'string'},
    name: { name: 'Warehouse Name', type: 'string'},
    company: { field: 'name', name: 'Company' },
    branch: { field: 'name', name: 'Branch' },
    contactPerson: { name: 'Contact Person', type: 'string'},
    address1: { name: 'Address 1', type: 'string'},
    address2: { name: 'Address 2', type: 'string'},
    phone1: { name: 'Phone 1', type: 'string'},
    phone2: { name: 'Phone 2', type: 'string'},
    email: { name: 'Email', type: 'string'},
    comments: { name: 'Comments', type: 'string'},
    isActive: { name: 'Active', type: 'boolean'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        name: Joi.string().required(),
        company: Joi.string().required(),
        branch: Joi.string().required(),
        contactPerson: Joi.string().allow('').allow(null).optional(),
        address1: Joi.string().required(),
        address2: Joi.string().allow('').allow(null).optional(),
        phone1: Joi.string().allow('').allow(null).optional(),
        phone2: Joi.string().allow('').allow(null).optional(),
        email: Joi.string().allow('').allow(null).optional(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}