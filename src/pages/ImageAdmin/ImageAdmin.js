import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsLayoutTextSidebarReverse , BsEye} from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
import DiapoImage from '../../components/DiapoImage/DiapoImage';

const ImageAdmin = () => {

    const [flippers,setFlippers]=useState([])
    useEffect(()=>{
        fetch("http://joe.api/flipper")
        .then(resp=>resp.json())
        .then(json=>{
            setFlippers(json)
            })
    },[])
    

    
    const [imagesList,setImagesList] = useState()

    const HandleShow = (id) =>{
        
        fetch('http://joe.api/flipper/'+id,{
            method : "post" ,
            body : JSON.stringify({with:['image']})})
        .then(rep=>rep.json())
        .then(json=>setImagesList(json.image_list))
        }
    
    

    return (
        <div>
            <h3 className="bg-dark text-white p-1">Gestion des Images</h3>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <span className="d-flex justify-content-start">
                            <BsLayoutTextSidebarReverse className="fs-3 me-2"/>
                        <h4>Browser :</h4>
                        </span>
                        <ul className="bg-info">Liste des Flippers :</ul>
                        {flippers.map(flipper=>{
                            return(
                            <span className="d-flex justify-content-start mt-3 item"
                            key={flipper?.Id_flipper}
                            onClick={()=>{HandleShow(flipper.Id_flipper)}}>
                            <li >
                                {flipper?.name}
                            </li>
                            <BiShowAlt className="fs-4"/>
                            </span>)
                        })}     
                        
                    </div>
                    <div className="col-9">
                    <span className="d-flex justify-content-start">
                            <BsEye className="fs-3 me-2"/>
                        <h4>Visionneuse</h4>
                    </span>
                    <div className="row">
                    
                       {imagesList?.map(img=>     
                        <DiapoImage 
                         key={img?.Id_image}
                         source={img?.img_src}
                         name={img?.alt}/> 
                                
                         )}
                     
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ImageAdmin;