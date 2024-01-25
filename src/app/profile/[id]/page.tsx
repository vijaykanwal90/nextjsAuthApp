export default function userprofile({params}: any){
    return (
        <div className="text-white flex flex-col items-center justify-center bg-black min-h-screen py-2">
            <h1>profile </h1>
            <hr />
            <p className="text-4xl" >profile  page  <span ml-2 className="p-2 rounded bg-orange-500">{params.id}</span></p>
        </div>
    )
}