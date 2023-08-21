import "../style/firstStyle.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);

  const [oneProduct, setOneProduct] = useState([]);

  useEffect(() => {
    setLoader(false)
    const db = getFirestore();
    const oneItem = doc(db, "productos", id);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setOneProduct({ ...snapshot.data(), id: snapshot.id });
        setLoader(true)

      }

    });
  }, []); 

  return (
    <div className=" ">
      {loader ? <ItemDetail product={oneProduct} /> : <Loader />}
    </div>
  );
};

export default ItemDetailContainer;
