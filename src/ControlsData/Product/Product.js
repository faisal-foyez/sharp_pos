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
            labelName: 'Product Code'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    name: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Product Name'
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
            },
            showValue:''
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false,
        dependency:'subCategory'

    },
    subCategory: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Product Subcategory',
            options: {
                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Product Subcategory"
                },
                api: "productSubcategoryServices",
            },
            showValue:'',
            dependencyValue:'',
            dependencyCollection:'category',
            dependencyFields:""
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    vatCategory: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'VAT Category',
            options: {

                selectedValue: "_id",
                displayValue: "vatRate",

                columns: {
                    name: "VAT Category",
                    vatRate:'Rate'
                },
                api: "vatCategoryServices",
            }
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    supplier: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Supplier',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Supplier"
                },
                api: "supplierServices",
            }
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    brand: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Brand',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Brand"
                },
                api: "brandServices",
            }
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    group: {
        elementType: 'dropdown',
        elementConfig: {
            labelName: 'Group',
            options: {

                selectedValue: "_id",
                displayValue: "name",

                columns: {
                    name: "Group"
                },
                api: "groupServices",
            }
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false

    },
    purchasePrice: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Product Price'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    salesPrice: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Sales Price',
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    commissionPerUnit: {
        elementType: 'input',
        elementConfig: {
            labelName: 'Commission Per Unit'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
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
        valid: true,
        touched: false
    },
    expiryDate: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Expiry Date'
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
    sequence: {name:'Sequence',type:'number'},
    code: {name:'Product Code',type:'string'},
    name: {name:'Product Name',type:'string'},
    category: { field: 'name', name: 'Product Category',type:'nested' },
    subCategory: { field: 'name', name: 'Product Sub Category', type: 'nested' },
    vatCategory: { field: 'vatRate', name: 'VAT Category', type: 'nested' },
    supplier: { field: 'name', name: 'Supplier', type: 'nested' },
    brand: { field: 'name', name: 'Brand', type: 'nested' },
    group: { field: 'name', name: 'Group', type: 'nested' },
    purchasePrice: {name:'Product Price',type:'number'},
    salesPrice: {name:'Sales Price',type:'number'},
    commissionPerUnit: {name:'Commission Per Unit',type:'number'},
    discountInPercentage: {name:'Discount Percentage',type:'number'},
    expiryDate: {name:'Expiry Date',type:'date'},
    isActive: {name:'Active',type:'boolean'},
    comments: {name:'Comments',type:'string'}
}

export const validation = () => {
    const schema = Joi.object({
        images: Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(),Joi.object().allow(null).optional()],
        code:Joi.string().allow('').allow(null).optional(),
        name: Joi.string().required().messages({'string.empty':'Product name is required'}),
        category: Joi.string().allow('').allow(null).optional(),
        subCategory: Joi.string().allow('').allow(null).optional(),
        vatCategory: Joi.string().allow('').allow(null).optional(),
        supplier: Joi.string().allow('').allow(null).optional(),
        brand: Joi.string().allow('').allow(null).optional(),
        group: Joi.string().allow('').allow(null).optional(),
        purchasePrice: Joi.number().required().messages({'number.base':'Purchase price must be a number', 'string.empty': 'Sales price is required' }),
        salesPrice: Joi.number().required().messages({ 'number.base': 'Sales price must be a number', 'string.empty': 'Purchase price is required' }),
        commissionPerUnit: Joi.number().allow('').allow(null).optional(),
        discountInPercentage: Joi.number().allow('').allow(null).optional(),
        expiryDate: Joi.date().allow('').allow(null).optional(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive: Joi.bool()
    })
    return schema;
}