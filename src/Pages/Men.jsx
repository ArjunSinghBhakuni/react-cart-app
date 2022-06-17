import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ProdContext } from "../context/ProdContext";
import { Button } from "@chakra-ui/react";
import "./Products.css";
export const Men = () => {
  const [page, setPage] = useState(1);
  const  {id}  = useParams();
  const { setGender } = useContext(ProdContext);
  const navigate = useNavigate();
  const [men, setmen] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/men/?_page=${page}&_limit=6`).then((r) => {
      console.log(r);

      console.log(r.data);
      setmen(r.data);
    });
  }, [page]);

  const handleClick = (id) => {
    setGender("men");
    // console.log(id)
    navigate(`${id}`);
  };

  return (
    <div>
 
      <div className="btn-grooup">
        <Button  disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={page === 2} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
      <div className="show-products">
        {men.map((e) => {
          return (
            <div className="single-product" key={e.img}>
              <h4>{e.title}</h4>
              <img
                className="single-img"
                // onClick={() => handleClick(e.id)}
                src={e.img}
                alt=""
              />
              <p>{`Price: $ ${e.price}`}</p>
              <button
                onClick={() => handleClick(e.id)}
                className="products-button"
              >
                More Info
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
