import { useEffect, useState } from "react";
import "../style/firstStyle.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "./Loader";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);

    const db = getFirestore();
    const itemCollections = collection(db, "productos");

    getDocs(itemCollections).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));

      setProducts(products);
      setLoader(true);
    });
  }, []);

  const productFilter = products.filter(
    (pro) => pro.category === (category == "all" ? pro.category : category)
  );
 
  return (
    <div className=" container  mt-3">
      <>
        {loader ?

          <ItemList products={productFilter} />
          :
          <Loader />
        }
      </>
    </div>
  );
};

export default ItemListContainer;
