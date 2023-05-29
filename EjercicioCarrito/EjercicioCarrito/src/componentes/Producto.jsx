import { Button, BottomNavigationAction } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Delete, AddShoppingCart } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Favorite from "./Heart";

import { useContext } from "react";

import Carrito from "./Carrito";
import "./styles.css";
import { CarritoContext } from "../context/CarritoContext";

const Producto = ({ infoProducto }) => {
    const [carrito, setCarrito] = useContext(CarritoContext);
    const  idProducto = infoProducto.id;

    //   Agregamos el producto al carrito
  const addToCar = () => {
    setCarrito((currentItems) => {
      // Verificamos si el id del producto se encuentra o no agregado
      const elementFound = currentItems.find(
        (element) => element.id === infoProducto.id
      );
      // Si lo encuentra iteramos los elementos de carrito
      if (elementFound) {
        return currentItems.map((item) => {
          // si encuentra el producto que vamos a agregar la aumenta la cantidad en 1
          if (item.id === infoProducto.id) {
            return { ...item, cantidad: item.cantidad + 1 };
          } else {
            return item;
          }
        });
        // Si el producto no esta agregado, lo agregamos y le definimos la cantidad en 1
      } else {
        return [...currentItems, { infoProducto, cantidad: 1 }];
      }
    });
  }
  
    //Eliminar un producto del carrito   
    const removeFromCar = (idProducto) => {
        console.log("eliminamos producto" + idProducto);
        setCarrito((currentItems)=>{
            // Buscamos el id si hay por lo menos 1 lo borramos
            if(currentItems.find((element)=> element.id === idProducto) ?.cantidad === 1) {
                // retornamos la misma lista
                console.log("Encotramos el producto: " + idProducto);
                return currentItems.fliter((element) => element.id !== idProducto)
            }else{
                return currentItems.map((element) => {

                    if(element.id === idProducto) {
                        console.log("voy a eliminar a:" + idProducto);
                        return { ...element, cantidad: element.cantidad - 1 };
                    }else{
                        return element;
                    }
                });
            }
        });
    }

    const getCantidadById = (id) =>{
        return carrito.find((element) => element.id === id)?.cantidad || 0;
    }

    const cantidadXProducto = getCantidadById(idProducto);



  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="item">
            {cantidadXProducto > 0 && (
                <p className="cantidad">cart: {cantidadXProducto}</p>
            )}
        <CardMedia sx={{ height: 140 }}>
          <img src={infoProducto.image} alt={infoProducto.nombre} />
        </CardMedia>
        <CardContent>
          <h3 className="name">{infoProducto.nombre}</h3>
          <p className="price">{infoProducto.precio}</p>
          <p className="description">{infoProducto.descripcion}</p>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addToCar(infoProducto)}
          >
            Agregar
          </Button>

          <Button
            variant="contained"
            color="error"
            
            startIcon={<Delete />}
            onClick={() => removeFromCar(infoProducto.id)}
          >
            eliminar
          </Button>
          <Favorite infoProducto={infoProducto.nombre} />
        </CardActions>
      </Card>
    </>
  );
};

export default Producto;
