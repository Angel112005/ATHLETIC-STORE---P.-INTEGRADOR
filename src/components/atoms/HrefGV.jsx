import { useNavigate } from "react-router-dom";

function HrefGV(props){
    const navigate = useNavigate();

    const handlerClick = (e) =>{
        navigate(`${props.ruta}`)
    }

    return(
        <button onClick={handlerClick} class>
            <img> </img>
            <span> </span>
        </button>
        
    )
}

export default HrefGV;