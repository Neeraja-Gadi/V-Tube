import React,{useContext} from "react";
import Button from "./Button" ;
import ApiContext from "../context/ContextApi";

const ListOfButtons= ["Algorithms" , "Music" , "Sports" , "News" , "Trading","programming" , "health","trending"]

const ButtonList =() =>  {
    const { getSuggestedSearch } = useContext(ApiContext);
    return  (
         <div className= "flex ml-10">
            {
                ListOfButtons?.map((button) => 
                    <Button name={button} key={button} onClick={() => getSuggestedSearch(button)}/>
                )
            }
            
      </div>
    )
}

export default ButtonList ;