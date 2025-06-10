import React from "react"
interface Fsystem{
    id:number;
    name:string;
    type:"file"|"folder";
    children? : Fsystem[];
}

interface Props{
    fdata:Fsystem;
}
const Folder = ({fdata}:Props)=>{
    console.log(fdata);
    return (
        <div className="container-folder text-white px-6 pt-1">
            {
                (fdata.type=="file")?(
                    <div className="file-type m-1 p-2 hover:border-1">🗄️{fdata.name}</div>
                ):(
                    <div className="folder-type  ">
                    <div className=" p-2 m-1 hover:border-1">⬇️📁{fdata.name}</div>
                    {
                        fdata.children?.map(child => (<Folder fdata = {child}/>))
                    }
                    </div>
                )
            }
        </div>
    );
};

export default Folder