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
            labelName: 'Company Name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    TIN: {
        elementType: 'input',
        elementConfig: {
            labelName: 'TIN'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    vatRegNo: {
        elementType: 'input',
        elementConfig: {
            labelName: 'VAT Reg No'
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
    },
    fiscalYearStartDate: {
        elementType: 'datepicker',
        elementConfig: {
            labelName: 'Fiscal Year',
        },
        value: '',
        validation: {
            required: true
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
    sequence: {name:'Sequence',type:'number'},
    code: {name:'Code',type:'string'},
    name: {name:"Company Name",type:'string'},
    TIN: {name:"TIN",type:'string'},
    vatRegNo: { name: "VAT Reg No", type: 'string'},
    fiscalYearStartDate: { name: "Fiscal Year", type: 'date'},
    country: { name: "Country", type: 'string'},
    division: { name: "Division", type: 'string'},
    district: { name: "District", type: 'string'},
    contactPerson: { name: "Contact Person", type: 'string'},
    address1: { name: "Address 1", type: 'string'},
    address2: { name: "Address 2", type: 'string'},
    phone1: { name: "Phone 1", type: 'string'},
    phone2: { name: "Phone 2", type: 'string'},
    email: { name: "Email", type: 'string'},
    website: { name: "Website", type: 'string'},
    comments: { name: "Comments", type: 'string'}
}

export const validation = () =>{
    const schema = Joi.object({
        images:Joi.array(),
        image: [Joi.string().allow('').allow(null).optional(), Joi.object().allow(null).optional()],

        name: Joi.string().required(),
        TIN: Joi.string().allow('').allow(null),
        vatRegNo: Joi.string().allow('').allow(null).optional(),
        fiscalYearStartDate: Joi.date().allow('').allow(null).optional(),
        country: Joi.string().allow('').allow(null).optional(),
        division: Joi.string().allow('').allow(null).optional(),
        district: Joi.string().allow('').allow(null).optional(),
        contactPerson: Joi.string().allow('').allow(null).optional(),
        address1: Joi.string().required(),
        address2: Joi.string().allow('').allow(null).optional(),
        phone1: Joi.string().allow('').allow(null).optional(),
        phone2: Joi.string().allow('').allow(null).optional(),
        email: Joi.string().allow('').allow(null).optional(),
        website: Joi.string().allow('').allow(null).optional(),
        comments: Joi.string().allow('').allow(null).optional(),
        isActive:Joi.bool()
    })
    return schema;
}