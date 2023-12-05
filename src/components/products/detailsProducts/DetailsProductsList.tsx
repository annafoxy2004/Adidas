import { useProducts } from "../../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const DetailsProductsList = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    gender: "",
    bishkek: "",
    astana: "",
    almaty: "",
    moscow: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

  return (
    <div>
      <div>
        <div>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <img src={product.image} alt="details" />
          <p>{product.description}</p>
        </div>
        <div>
          <div className="map bg-black flex justify-center h-60">
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={()=>nav("/map/bishkek")}
              />
              <p className="text-white text-xl">Bishkek</p>
            </div>
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={()=>nav("/map/almaty")}
              />
              <p className="text-white text-xl">Almaty</p>
            </div>
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={()=>nav("/map/astana")}
              />
              <p className="text-white text-xl">Astana</p>
            </div>
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={()=>nav("/map/moscow")}
              />
              <p className="text-white text-xl">Moscow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductsList;
