import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import './dataTable.scss'
import { Link } from "react-router-dom";


type Props = {
    columns: GridColDef[],
    rows: object[],
    users: string,
}



export default function DataTable(props: Props) {

    const handleDelete = (id: number) => {
        console.log(id);
    }

    const actionsColumn = {
        field: 'actions', headerName: 'Actions', width: 200,
        renderCell: (params: any) => {
            return <div className="actions flex gap-4">
                <Link to={`/${props.users}/${params.row.id}`} className="text-sm px-1 py-1 ">
                    <img src="/view.svg" alt="view user Page" />
                </Link>
                <Link to={'/'} className="text-sm px-1 py-1 " onClick={() => { handleDelete(params.row.id) }}>
                    <img src="delete.svg" alt="delete user" />
                </Link>
            </div>
        }
    }


    return (
        <div className="usersTable max-w-96 overflow-hidden mt-5">
            <DataGrid
                className=" mt-5"
                rows={props.rows}
                columns={[...props.columns, actionsColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}
