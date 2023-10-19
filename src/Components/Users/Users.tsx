import { userRows } from "../../Data";
import Add from "../Add/Add";
import DataTable from "../DataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from 'react'

export default function Users() {

    const [openAdd, setOpenAdd] = useState(false)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'img', headerName: 'Avatar', width: 100,
            renderCell: (params) => <img className="w-8 h-8 object-cover rounded-full" src={params.row.img || "/noavatar.png"} alt="avatar" />
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },

        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'verified', headerName: 'Verified', width: 100, type: "boolean",
        },
    ];




    return (
        <div className='users '>
            <div className="info flex items-center justify-between">
                <h1 className="text-3xl font-bold">Users</h1>
                <button onClick={() => { setOpenAdd(true) }} className="px-3 py-2 bg-white text-black ml-3 hover:bg-red-600 hover:text-white transition-colors duration-200"> Add New User  </button>
            </div>

            <div className="usersDataGrid w-full bg-white">

                <DataTable users="users" columns={columns} rows={userRows} />
                {openAdd && <Add users="user" columns={columns} seOpen={setOpenAdd} />}
            </div>
        </div>
    )
}
