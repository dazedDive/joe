import { useEffect } from "react";
import { useState } from "react";
import "../ProductCard/ProductCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation  } from "swiper";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductCard = ({
  id,
  image,
  title,
  description,
  desciptionList,
  price,
}) => {

  const [flippers, setFlippers] = useState([]);
  ///////recuperation api flipper//////////:
  useEffect(() => {
    fetch("http://joe.api/flipper")
      .then((resp) => resp.json())
      .then((json) => {
        setFlippers(json);
      });
  }, []);

////////////navigation du catlagogue////////////
const [page,setPage]=useState()

  return (
    <>
        
      {flippers.map((flipper) => {
        return (
          <div className="card mb-3 shadow p-3 mb-5 bg-body rounded">
            <div className="row g-0">
              <div className="col-md-4">
                <Swiper 
                Autoplay={true}
                pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                  <img
                    src={image}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img
                    src={image}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img
                    src={image}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{flipper?.name}</h5>
                  <p className="card-text">{flipper?.description}</p>
                    <ul>
                        <li>{flipper?.pointfort1}</li>
                        <li>{flipper?.pointfort2}</li>
                        <li>{flipper?.pointfort3}</li>
                        <li>{flipper?.pointfort4}</li>
                    </ul>
                  <h4 className="card-text price-text text-center mt-2">
                    A partir de {flipper?.price} €
                  </h4>
                </div>
              </div>
            </div>
          </div>
        
        );
      })}
    </>
  );
};
export default ProductCard;
