import { ShoppingCart } from "@mui/icons-material";
import { Button, Badge } from "@mui/material";

import Carrito from "./Carrito";
import "./styles.css";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

// Componente  de alerta
const BubbleAlert = (number) =>{
    const getNumber = (num) =>{
        if(!num){return ''}
        return num > 9 ? '+9' : num
    }
    return(
        <span className="bubbleAlert">
            {getNumber(number.value)}
        </span>
    )
}

// Componente  de boton
const NavCarrito =()=>{
    const [carrito, setCarrito] = useContext(CarritoContext);
    // Mostrar un total de productos en el carrito
    const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0);
    
    // console.log(carritoVisible);
    return(
        <>
        <Button className="carrito">
            <span className="bubble">Cart Items:
                {cantidad !== 0 ? <BubbleAlert value={cantidad}/> :null}
            </span>
            <ShoppingCart />
        </Button>
        
        
        </>
    )


}

export default NavCarrito;