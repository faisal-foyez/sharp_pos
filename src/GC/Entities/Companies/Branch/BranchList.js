import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateBranchComponent from './BranchAddForm';
import {columns} from '../../../../ControlsData/Company/Branch';
const BranchList = (props) =>{

    return (
        <Table columns={columns} service="branchServices" page="Branch" addItemRoute={"/branchadd"}>
            <UpdateBranchComponent />
        </Table>
    )
}
export default BranchList;