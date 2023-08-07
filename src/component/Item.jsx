import { Link } from "react-router-dom";

const Item = ({id,nombre,descripcion,precio,category,stock,img}) => {
  return (
    <div key={id} className="cardCustom">
      <img className="card-img-top" src={img} alt="Card image cap" width="100" height="100"></img>
      <div className="card-body">
        <h5 className="card-title"><b>{nombre}</b></h5>
        <p className="card-text">{  descripcion}...</p>
        <div className="price">$ {precio}</div>
        <Link to={`/item/${id}`}>
          <button  className="btn  btn-primary btn-block">Ver Detalle</button>
        </Link>

      </div>
    </div>
  );
};

export default Item;
