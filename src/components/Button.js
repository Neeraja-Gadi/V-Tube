import React from "react" ; 


const Button = ({name,   onClick={onClick}}) => {
   
    return (
        <div className="flex">
       <button className=" flex p-2  m-2 rounded-lg bg-gray-200 hover:bg-gray-400"
       onClick={onClick}>
        {name}
        </button>
        </div>
    )
}

export default Button;
