import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getResponse = async () => {
      let response = await axios({
        method: "get",
        url: "https://spe-academy.spesolution.net/api/recruitment",
        headers: { "Content-Type": "application/json", Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y" },
      });
      setData(response.data);

      let convert = response.data.map((item) => item.quantity * item.product.price);
      console.log(convert);
      let accTotal = convert.reduce((acc, curr) => {
        return acc + curr;
      });
      setTotal(accTotal);
    };
    getResponse();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
      <table style={{ width: "90%", overflowX: "scroll" }} cellspacing="0">
        <thead style={{ backgroundColor: "black", color: "white", height: "60px" }}>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {data.length
            ? data.map((item, index) => {
                let { product } = item;
                return (
                  <tr>
                    <td>
                      <img src={product.media_url} alt="car product" style={{ width: "200px", height: "200px" }} />
                    </td>
                    <td>{product.name}</td>
                    <td>{item.quantity}</td>
                    <td> {`Rp ${(item.quantity * product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`} </td>
                  </tr>
                );
              })
            : null}
          <tr style={{ backgroundColor: "black", color: "white", height: "60px" }}>
            <td></td>
            <td></td>
            <td>TOTAL</td>
            <td>{total ? `Rp ${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}` : "0"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
