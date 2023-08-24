import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div className=' row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>

      {
        products.map((p) => {
          return (

            <Item
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              descripcion={p.descripcion}
              category={p.category}
              precio={p.precio}
              img={p.img}
              stock={p.stock}
            />
          )
        })

      }
    </div>
  );
};

export default ItemList;     