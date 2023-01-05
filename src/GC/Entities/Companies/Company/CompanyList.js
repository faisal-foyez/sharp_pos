import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateCompanyComponent from './CompanyAddForm';
import {columns} from '../../../../ControlsData/Company/Company'
const CompanyList = (props) => {
    // const columns = {
    //     sequence:'Sequence',
    //     code:'code',
    //     name:'Company name',
    //     TIN:'TIN',
    //     vatRegNo:'Vat reg No.',
    //     fiscalYearStartDate:'Fiscal year',
    //     country:'Country',
    //     division:'Division',
    //     district:'District',
    //     contactPerson:'Contact Person',
    //     address1:'Address 1',
    //     address2:'Address 2',
    //     // phone1:'Phone 1',
    //     // phone2:'Phone 2',
    //     // email:'Email',
    //     // website:'Website',
    //     isActive:'Active',
    //     // comments:'Comments'
    // }

    return (
        <Table columns={columns} service="companyServices" page="Company" addItemRoute={"/companyadd"}>
            <UpdateCompanyComponent />
        </Table>
    )
}
export default CompanyList;