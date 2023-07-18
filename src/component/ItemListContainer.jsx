import '../style/firstStyle.css'


const ItemListContainer = ({texto}) => {
  return (
    <div className="divContainer">
      <div className="minimalCard">
        <h2>{texto}</h2>

        </div>
    </div>
  );
};

export default ItemListContainer;
