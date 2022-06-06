import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "./Product/Product";

const Products = () => {
  const { data } = useContext(CartContext);

  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/products").then((d) => {
  //     console.log(d.data);
  //     setdata(d.data);
  //   });
  // }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
      }}
    >
      {data.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Products;
