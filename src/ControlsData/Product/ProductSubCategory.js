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
            labelName: 'Product Subcategory Name'
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
            labelName: 'Product Category',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Product Category"
                },
                api: "productCategoryServices",
            }
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
    name: { name: 'Product Subcategory Name', type: 'string'},
    category: { field: 'name', name: 'Product Category' },
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        name: Joi.string().required(),
        category: Joi.string().required(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}