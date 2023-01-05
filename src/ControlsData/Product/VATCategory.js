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
            labelName: 'VAT category name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    vatRate: {
        elementType: 'input',
        elementConfig: {
            labelName: 'VAT Rate'
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
    name: { name: 'VAT category name', type: 'string'},
    vatRate: { name: 'VAT Rate', type: 'number'},
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        name: Joi.string().required(),
        vatRate: Joi.number().required(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}