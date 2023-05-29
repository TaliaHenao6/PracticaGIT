import Producto from "./producto";

const Productos = ({ListaProductos, addToCar, removeToCar}) =>{

      return (
        <>
        <h1>Lista de Productos</h1>
        <p>Catidad de productos: { ListaProductos.length}</p>
        <div className="items-list">
          {ListaProductos.map(producto =>
            <Producto key={producto.id} infoProducto={producto} addToCar={addToCar} removeToCar={removeToCar}/>)}
        </div>
        </>
      )
}
export default Productos;