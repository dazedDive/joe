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
    fetch("http://joe.api/flipper/0",{
    method : "post" , body : JSON.stringify({with:['image']})})
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
  console.log(flippers[page])
}


  return (
    <>
        <div className="container-fluid">
          <div className="row">
          <button className="d-md-none btn col-3 fakeButton mt-5 mb-1 mx-4" onClick={HandlePrevious}>
              <BiLeftArrow className="text-dark fs-1"/>
          </button>
          
          <button className="d-md-none col-3 btn fakeButton mt-5 mb-1 mx-4 " onClick={HandleNext}>
            <BiRightArrow className="text-dark fs-1"/>
          </button>
            <div className="col-1">
              <button className="d-none d-md-block btn fakeButton mt-5 " onClick={HandlePrevious}>
              <BiLeftArrow className="text-dark fs-1"/>
              </button>
              
            </div>
            <div className="col-10">
      
          <div className="card mb-3 shadow p-3 mb-5 bg-body rounded"
          >
            <div className="row g-0">
              <div className="col-md-7">
                <Swiper pagination={true}
                modules={[Pagination]}
                className="mySwiper">
                  {flippers[page]?.image_list?.map(img=>{
                    return(
                <SwiperSlide key={img?.Id_image}>
                  <img
                    src={img?.img_src}
                    className="img-fluid rounded-start h-100"
                    alt={img?.alt}
                    
                  />
                  </SwiperSlide>)})}
                  
                
                </Swiper>
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">{flippers[page]?.name}</h5>
                  <p className="card-text">{flippers[page]?.description}</p>
                    <ul>
                        <li>{flippers[page]?.first_argument}</li>
                        <li>{flippers[page]?.second_argument}</li>
                        <li>{flippers[page]?.third_argument}</li>
                        <li>{flippers[page]?.fourth_argument}</li>
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
      <button className="d-none d-md-block btn fakeButton mt-5 " onClick={HandleNext}>
        <BiRightArrow className="text-dark fs-1"/>
      </button>
      </div>
      </div>
      </div>
    </>
  );
};
export default ProductCard;
