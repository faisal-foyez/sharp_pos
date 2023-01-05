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
            labelName: 'Expense Name'
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
            labelName: 'Expense Category',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Expense Category"
                },
                api: "expenseCategoryServices",
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
            labelName: 'Expense Subcategory',
            options: {
                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Expense Subcategory"
                },
                api: "expenseSubcategoryServices",
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
    expenseDate: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Expense Date'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    expenseAmount: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Expense Amount'
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
    name: { name: 'Expense Name', type: 'string'},
    category: { field: 'name', name: 'Expense Category' },
    subCategory: { field: 'name', name: 'Expense Sub Category' },
    expenseDate: { name: 'Expense Date', type: 'date'},
    expenseAmount: { name: 'Expense Amount', type: 'number'},
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
        expenseDate:Joi.date().allow('').allow(null).optional(),
        expenseAmount:Joi.number().required(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}