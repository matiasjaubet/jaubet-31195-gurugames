import Item from "../Item/Item";


const ItemList = ({productos}) => {
  return (
      <>
     {
        productos.map(({ id, nombre, precio, stock, portada }) => {
            return <Item key={id} id={id} nombre={nombre} precio={precio} stock={stock} portada={portada} />
        })
      }
      </>
  )
}

export default ItemList