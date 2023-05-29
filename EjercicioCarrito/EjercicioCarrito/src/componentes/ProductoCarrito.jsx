import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./styles.css";

import { Button, BottomNavigationAction } from "@mui/material";
import { Delete, AddShoppingCart } from "@mui/icons-material";

const ProductoCarrito = ({data}) => {
    const cantidad = data.cantidad;

    console.log(data);
  return (
    <>
      <div className="item-carrito">
          <div className="item-img">
            <Avatar 
              src={data.infoProducto.image}
              alt={data.infoProducto.id + data.infoProducto.nombre}
            />
          </div>
          <div className="item-text">
            <h4>{data.infoProducto.nombre}</h4>
            <p className="">{data.infoProducto.precio}</p>
            <span className="">{cantidad}</span>
          </div>
          <div className="item-actions">
            <Button
              variant="contained"
              color="error"
              onClick={() => removeFromCar(infoProducto.id)}>
                <Delete />
            </Button>
          </div>
      </div>
    </>
  );
};

export default ProductoCarrito;
