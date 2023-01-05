import React from 'react';
import Table from '../../../UI/Table/Table';
import UserRoleUpdateComponent from './UserRoleAddForm';
import {columns} from '../../../../ControlsData/User/UserRole';
const UserRoleList = (props) => {
    return (
        <Table columns={columns} service="userRoleServices" page="User Role" addItemRoute={"/userroleadd"}>
            <UserRoleUpdateComponent />
        </Table>
    )
}
export default UserRoleList;