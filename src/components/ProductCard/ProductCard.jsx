import { useEffect } from "react";
import { useState } from "react";
import "../ProductCard/ProductCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation  } from "swiper";
import "swiper/css";
import { BiRightArrow,BiLeftArrow } from "react-icons/bi";

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
        setFlippers(json)
          });
      
  }, []);

////////////navigation du catlagogue////////////

const [page,setPage]=useState(0)
const pageMax = (flippers.length)-1

const HandleNext = () =>{
  setPage(page==pageMax?0:page+1)
 
}
const HandlePrevious = () =>{
  setPage(page==0?pageMax:page-1)
  
}


  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              <button className="btn fakeButton mt-5 " onClick={HandlePrevious}>
              <BiLeftArrow className="text-dark fs-1"/>
              </button>
              
            </div>
            <div className="col-10">
      
          <div className="card mb-3 shadow p-3 mb-5 bg-body rounded"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <Swiper 
                
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
                  <h5 className="card-title">{flippers[page]?.name}</h5>
                  <p className="card-text">{flippers[page]?.description}</p>
                    <ul>
                        <li>{flippers[page]?.pointfort1}</li>
                        <li>{flippers[page]?.pointfort2}</li>
                        <li>{flippers[page]?.pointfort3}</li>
                        <li>{flippers[page]?.pointfort4}</li>
                    </ul>
                  <h4 className="card-text price-text text-center mt-2">
                    A partir de {flippers[page]?.price} €
                  </h4>
                  <p className="d-flex justify-content-end bg-light p-1">Flipper{page+1}/{pageMax+1} </p>
                </div>
              </div>
            </div>
          </div>
        
        
      
      </div>
      <div className="col-1">
      <button className="btn fakeButton mt-5 " onClick={HandleNext}>
        <BiRightArrow className="text-dark fs-1"/>
      </button>
      </div>
      </div>
      </div>
    </>
  );
};
export default ProductCard;
