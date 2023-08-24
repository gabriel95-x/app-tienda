import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, precio, category, stock, img }) => {

  const formPhoto = {
    backgroundImage: "url("+img+") ",
    backgroundPosition: "center",
    backgroundSize: "contain", 
    backgroundRepeat:"no-repeat"

   }

  return (
    <div key={id} className="   col-3 m-2  border border-danger p-2 rounded" style={{   height:"500px"}}>

      <div style={formPhoto} className="card-img-top w-100 h-50"  alt="Card image cap" ></div>

      <div className="card-body w-100 h-30" >

        <div className="card-title   text-uppercase  fw-bold " > {nombre}</div>
        <p  style={{lineHeight: "5rem"}} className="card-text  text-start ">{descripcion}</p>
        <div className="price fw-bold">$ {precio}</div>

      </div>

      <div className="card-footer mt-2 h-10"> <Link to={`/item/${id}`}>
        <button className="btn  btn-success btn-block">Ver Detalle</button>
      </Link>
      </div>
    </div>
  );
};

export default Item;
