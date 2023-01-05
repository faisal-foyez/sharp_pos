import React from 'react';
import Table from '../../../UI/Table/Table';
import UserUpdateComponent from './UserAddForm';
import {columns} from '../../../../ControlsData/User/User';
const UserList = (props) => {
    return (
        <Table columns={columns} service="userServices" page="User" addItemRoute={"/useradd"}>
            <UserUpdateComponent />
        </Table>
    )
}
export default UserList;