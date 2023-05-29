import { Favorite, FavoriteBorder } from "@mui/icons-material";
import  {useState}  from "react";

import "./Styles.css";

const Heart =()=>{

    const [like, setLike] = useState(false);

    const handleClick = () => {
      
        if(like == true){
            setLike(false);
            // console.log(`se quito de favoritos! ${infoProducto.nombre}`);
        }else{
            setLike(true);
            
            // console.log(`Se agrego a favoritos ${infoProducto.nombre}`);
        }
        // Operador ternarios
        // like == true ? setLike(false) : setLike(true)
    }
    return(
        <>
            <div className="liked" color="primary" onClick={handleClick}>
                {like == true ? <Favorite color="error"/> :<FavoriteBorder color="error" /> }
            </div>
        </>
    )

}

export default Heart;