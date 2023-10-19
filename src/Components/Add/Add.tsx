
import { GridColDef } from '@mui/x-data-grid';

type Props = {
    users: string,
    columns: GridColDef[],
    seOpen: React.Dispatch<React.SetStateAction<boolean>>,

}

export default function Add(props: Props) {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // add the Item 


    }
    return (
        <div className="Add absolute top-0 left-0 backdrop-blur-sm bg-darkOverlay w-screen h-screen z-40 flex justify-center items-center flex-wrap" >

            <div className="innerWrapper p-10 bg-mainBg rounded relative">
                <div className="Modal flex justify-between p-4 ">
                    <h2 className='font-bold text-2xl'> Add new {props.users}</h2>
                    <span onClick={() => { props.seOpen(false) }} className=' w-7 h-7 p-2 border border-1 hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer absolute top-5 right-5 rounded-full flex justify-center items-center'> X </span>
                </div>
                <form onSubmit={handleSubmit} className=' p-5'>
                    {props.columns.filter((item) => item.field !== 'id' && item.field !== "img").map((column) => {
                        return <div className="item mt-4">
                            <label className='block mb-2 text-sm text-gray-200' htmlFor={column.field}> {column.field}</label>
                            <input className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800 font-bold' type={column.type} placeholder={column.field} id={column.field} />
                        </div>
                    })}
                    <button className='w-32 bg-gradient-to-r from-cyan-400 mt-7 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2' > Submit </button>
                </form>
            </div>
        </div>
    )
}
