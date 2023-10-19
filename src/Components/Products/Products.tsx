import './Products.scss'
import { products } from "../../Data";
import Add from "../Add/Add";
import DataTable from "../DataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from 'react'



export default function Products() {

    const [openAdd, setOpenAdd] = useState(false)

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "img",
            headerName: "Image",
            width: 100,
            renderCell: (params) => {
                return <img src={params.row.img || "/noavatar.png"} className="w-8 h-8 object-cover " alt="Avatar" />;
            },
        },
        {
            field: "title",
            type: "string",
            headerName: "Title",
            width: 250,
        },
        {
            field: "color",
            type: "string",
            headerName: "Color",
            width: 150,
        },
        {
            field: "price",
            type: "string",
            headerName: "Price",
            width: 200,
        },
        {
            field: "producer",
            headerName: "Producer",
            type: "string",
            width: 100,
        },
        // {
        //     field: "createdAt",
        //     headerName: "Created At",
        //     width: 200,
        //     type: "string",
        // },
        {
            field: "inStock",
            headerName: "In Stock",
            width: 150,
            type: "boolean",
        },
    ];

    return (
        <div className='Products'>
            <div className="info flex items-center justify-between">
                <h1 className="text-3xl font-bold">Products</h1>
                <button onClick={() => { setOpenAdd(true) }} className="px-3 py-2 bg-white text-black ml-3 hover:bg-red-600 hover:text-white transition-colors duration-200"> Add Product  </button>
            </div>

            <div className="usersDataGrid  bg-white">

                <DataTable users="Products" columns={columns} rows={products} />
                {openAdd && <Add users="Product" columns={columns} seOpen={setOpenAdd} />}
            </div>
        </div>
    )
}
