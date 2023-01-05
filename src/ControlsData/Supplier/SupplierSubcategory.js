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
            labelName: 'Supplier Subcategory Name'
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
            labelName: 'Supplier Category',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Supplier Category"
                },
                api: "supplierCategoryServices",
            },
            showValue:''
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
    name: { name: 'Supplier Subcategory Name', type: 'string'},
    category:{name:'Supplier Category',field:'name'},
    discountRate: { name: 'Discount Rate', type: 'number'},
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        name: Joi.string().required(),
        category: Joi.string().required(),
        discountRate: Joi.number().allow('').allow(null).optional(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}