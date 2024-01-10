import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center gap-5 pt-3 font-bold text-md sm:text-xl">

       <span>
        <div className="logo"> <img src= "https://i.pinimg.com/736x/0a/cd/50/0acd5002683fbcf2b720004f201ee530.jpg"></img>
        </div>
       </span>
       
        <span onClick={() => navigate('/')} 
        className="cursor-pointer hover:underline  py-4 px-6"
        >
          Books
        </span>

        <span onClick={() => navigate('/author')} 
        className="cursor-pointer hover:underline  py-4 px-6"
        >
          Authors
        </span>

    </div>
  )
}

export default Navigation