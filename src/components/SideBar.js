import React , {useState} from "react";
import  {Link} from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad, faMusic, faMoneyBill, faFilm } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const SideBar = () => {
    const navigate = useNavigate()
    const [feedQuery,setFeedQuery] = useState()

    const isMenuOpen  =useSelector((store)=> store.app.isMenuOpen)

    const onClickFeed =async(word) => {
        // setSearchQuery(word);
        navigate(`/feed?search_query=${word}`)  
      }
  

    //early return 
    if(!isMenuOpen) return null ; 
    
    return (
    //    <div className="p-5 shadow-lg w-48">

    //     <ul className="p-5">
         
    //          <li><Link to = "/" >Home</Link></li>
           
    //     </ul>
    //     <h1 className="font-bold"> Explore</h1>
    //     <ul className="p-5  ">
    //         <li>Gaming</li>
    //         <li>Music</li>
    //         <li>Trading</li>
    //         <li>Movies</li>
    //     </ul> 
    //    </div>

    <div className="p-5 shadow-lg w-15%">
    <ul className="p-5">
      <li>
        <Link to="/" className=" rounded-lg pb-2 py-2 px-3 pl-1  hover:bg-gray-200 hover:shadow flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-3 " />
          Home
        </Link>
      </li>
    </ul>
    
    <ul className="p-2">
    <h1 className="font-bold mb-4">Explore</h1>
    
       <li className="mb-5">
                    <div
                        onClick={() => onClickFeed('Gaming')}
                        className="py-2 px-3 rounded-lg  transition duration-300 hover:bg-gray-200 hover:shadow flex items-center cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faGamepad} className="mr-3" />
                        Gaming
                    </div>
                </li>
                <li className="mb-5">
                    <div
                        onClick={() => onClickFeed("music")}
                        className="py-2 px-3 rounded-lg  transition duration-300 hover:bg-gray-200 hover:shadow flex items-center cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMusic} className="mr-3" />
                        Music
                    </div>
                </li>
                <li className="mb-5">
                    <div
                        onClick={() => onClickFeed("Marketing")}
                        className="py-2 px-3 rounded-lg transition duration-300 hover:bg-gray-200 hover:shadow flex items-center cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMoneyBill} className="mr-3" />
                        Marketing
                    </div>
                </li>
                <li className="mb-5">
                    <div
                        onClick={() => onClickFeed("movies")}
                        className="py-2 px-3 rounded-lg duration-300 hover:bg-gray-200 hover:shadow flex items-center cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faFilm} className="mr-3" />
                        Movies
                    </div>
                </li>
    </ul>
  </div>
    )
}

export default SideBar;