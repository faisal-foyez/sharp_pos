const Joi = require('@hapi/joi');
export const controls = {
    // images: {
    //     elementType: 'images',
    //     elementConfig: {
    //         labelName: ''
    //     },
    //     value: [],
    //     validation: {
    //         required: true,
    //     },
    //     valid: true,
    //     touched: false
    // },
    // image: {
    //     elementType: 'image',
    //     elementConfig: {
    //         labelName: ''
    //     },
    //     value: null,
    //     validation: {
    //         required: true,
    //     },
    //     valid: true,
    //     touched: false
    // },
    name: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Role Name'
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
    isAdd: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Can Add'
        },
        value: false,
    },
    isEdit: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Can Edit'
        },
        value: false,
    },
    isDelete: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Can Delete'
        },
        value: false,
    },
    isView: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Can View'
        },
        value: true,
    },
    
    isActive: {
        elementType: 'checkbox',
        elementConfig: {
            labelName: 'Active'
        },
        value: true,
    }
}

export const columns = {
    sequence: { name: 'Sequence', type: 'number'},
    code: { name: 'Code', type: 'string'},
    name: { name: 'Role Name', type: 'string'},
    isAdd: { name: 'Can Add', type: 'boolean'},
    isEdit: { name: 'Can Edit', type: 'boolean'},
    isDelete: { name: 'Can Delete', type: 'boolean'},
    isView: { name: 'Can View', type: 'boolean'},
    isActive: { name: 'Active', type: 'boolean'},
    comments: { name: 'Comments', type: 'string'}
}

export const validation = () => {
    const schema = Joi.object({
        name: Joi.string().required(),
        comments: Joi.string().allow('').allow(null).optional(),
        isAdd: Joi.bool(),
        isEdit: Joi.bool(),
        isDelete: Joi.bool(),
        isView: Joi.bool(),
        isActive: Joi.bool()
    })
    return schema;
}