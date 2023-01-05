import React from 'react';
import Table from '../../../UI/Table/Table';
import UpdateWarehouseComponent from './WarehouseAddForm';
import {columns} from '../../../../ControlsData/Company/Warehouse';
const WarehouseList = (props) => {

    return (
        <Table columns={columns} service="warehouseServices" page="Warehouse" addItemRoute={"/warehouseadd"}>
            <UpdateWarehouseComponent />
        </Table>
    )
}
export default WarehouseList;