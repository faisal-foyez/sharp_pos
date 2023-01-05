import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateGroupComponent from './GroupAddForm';
import { columns } from '../../../../ControlsData/Product/Group';
const GroupList = (props) => {

    return (
        <Table columns={columns} service="groupServices" page="Group" addItemRoute={"/groupadd"}>
            <UpdateGroupComponent />
        </Table>
    )
}
export default GroupList;