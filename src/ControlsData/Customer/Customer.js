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
            labelName: 'Customer Name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    category: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Customer Category',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Customer Category"
                },
                api: "customerCategoryServices",
            },
            showValue: ''
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false,
        dependency: 'subCategory'

    },
    subCategory: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Customer Subcategory',
            options: {
                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Customer Subcategory"
                },
                api: "customerSubcategoryServices",
            },
            showValue: '',
            dependencyValue: '',
            dependencyCollection: 'category',
            dependencyFields: ""
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    discountRate: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Discount Rate'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    country: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Country'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    division: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Division'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    district: {
        elementType: 'input',
        elementConfig: {
            labelName: 'District'
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
    website: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Website'
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
    name: { name: 'Customer Name', type: 'string'},
    category: { field: 'name', name: 'Customer Category' },
    subCategory: { field: 'name', name: 'Customer Sub Category' },
    discountRate: { name: 'Discount Rate', type: 'number'},
    country: { name: 'Country', type: 'string'},
    division: { name: 'Division', type: 'string'},
    district: { name: 'District', type: 'string'},
    address1: { name: 'Address 1', type: 'string'},
    address2: { name: 'Address 2', type: 'string'},
    phone1: { name: 'Phone 1', type: 'string'},
    phone2: { name: 'Phone 2', type: 'string'},
    email: { name: 'Email', type: 'string'},
    website: { name: 'Website', type: 'string'},
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        name: Joi.string().required(),
        category: Joi.string().allow('').allow(null).optional(),
        subCategory: Joi.string().allow('').allow(null).optional(),
        discountRate: Joi.number().allow('').allow(null).optional(),
        country: Joi.string().allow('').allow(null).optional(),
        division: Joi.string().allow('').allow(null).optional(),
        district: Joi.string().allow('').allow(null).optional(),
        address1: Joi.string().required(),
        address2: Joi.string().allow('').allow(null).optional(),
        phone1: Joi.string().allow('').allow(null).optional(),
        phone2: Joi.string().allow('').allow(null).optional(),
        email: Joi.string().allow('').allow(null).optional(),
        website: Joi.string().allow('').allow(null).optional(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}