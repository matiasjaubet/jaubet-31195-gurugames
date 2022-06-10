import ItemDetailContainer from "../../pages/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../../pages/ItemListContainer/ItemListContainer"

const Main = () => {
  return (
    <>
      <ItemListContainer />
      <hr />
      <h4 className="text-center my-5">(Desafío: Mostramos un solo producto)</h4>
      <ItemDetailContainer />
    </>
  )
}

export default Main