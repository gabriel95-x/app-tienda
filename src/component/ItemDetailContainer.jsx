import "../style/firstStyle.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const {id} = useParams()

  const products = [
    
    {id:1, nombre:"Producto 1", descripcion:"esto es una descripcion del producto numero 1", stock:5 , category:"catA" ,precio:70.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:2, nombre:"Producto 2", descripcion:"esto es una descripcion del producto numero 1", stock:8 , category:"catC" ,precio:50.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:3, nombre:"Producto 3", descripcion:"esto es una descripcion del producto numero 1", stock:24 , category:"catC" ,precio:34.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:4, nombre:"Producto 4", descripcion:"esto es una descripcion del producto numero 1", stock:7, category:"catB" ,precio:72.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:5, nombre:"Producto 5", descripcion:"esto es una descripcion del producto numero 1", stock:2 , category:"catB" ,precio:500.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:6, nombre:"Producto 6", descripcion:"esto es una descripcion del producto numero 1", stock:8 , category:"catA" ,precio:45.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:7, nombre:"Producto 7", descripcion:"esto es una descripcion del producto numero 1", stock:9 , category:"catA" ,precio:75.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:8, nombre:"Producto 8", descripcion:"esto es una descripcion del producto numero 1", stock:4 , category:"catA" ,precio:575.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:9, nombre:"Producto 9", descripcion:"esto es una descripcion del producto numero 1", stock:7 , category:"catB" ,precio:754.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:10, nombre:"Producto 10", descripcion:"esto es una descripcion del producto numero 1", stock:9, category:"catA",precio:18.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:11, nombre:"Producto 11", descripcion:"esto es una descripcion del producto numero 1", stock:45, category:"catB",precio:500.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}, 
    {id:12, nombre:"Producto 12", descripcion:"esto es una descripcion del producto numero 1", stock:23, category:"catC",precio:72.4, img:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}
  ];


  const getProducts = async () => {
    if (products.length>0 ){
      setTimeout(()=>{
        resolveBaseUrl(products)
      },3000);
    }
    else{
      reject(new Error("no hay productos"));
    }
  };

 

  const productFilterById = products.find(pro =>  pro.id == id );

  return (
    <div className=" ">
        <ItemDetail
        product = {productFilterById}
        />

    </div>
  );
};

export default ItemDetailContainer;
