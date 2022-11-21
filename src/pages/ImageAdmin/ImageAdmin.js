import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsLayoutTextSidebarReverse , BsEye} from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
import DiapoImage from '../../components/DiapoImage/DiapoImage';
import useFileUpload from '../../hooks/useFileUpload';

const ImageAdmin = () => {
    const [file,selectFile,clearFile] = useFileUpload(null)
    const [flippers,setFlippers]=useState([])
    useEffect(()=>{
        fetch("http://joe.api/flipper")
        .then(resp=>resp.json())
        .then(json=>{
            setFlippers(json)
            })
    },[])
    

    const [loading,setLoading] = useState(true);
    const [imagesList,setImagesList] = useState()

    const HandleShow = (id) =>{
        
        fetch('http://joe.api/flipper/'+id,{
            method : "post" ,
            body : JSON.stringify({with:['image']})})
        .then(rep=>rep.json())
        .then(json=>setImagesList(json.image_list))
        .then(setLoading(false))
        }
    /////////////////////recupere lid du selecteur/////////////////////////
    const HandleSelected =(e)=> {
        console.log(e.target.value);
        setIdFlipperSelected(e.target.value);
        setSelected(false);
        }

        const [selected, setSelected] = useState (true)
        const [idFlipperSelected, setIdFlipperSelected] = useState (1)

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
                        <span className="d-flex justify-content-start mt-4">
                        <p className=" p-2 bg-info">Ajouter une image :</p>
                        
                        
                        <button type="button" class="btn btn-dark mb-4 mx-2"
                            disabled = {selected}
                                onClick={()=>
                                selectFile({ accept: 'image/*'}, ({name , size ,src, file})=>
                                {console.log('Files Selected', {name, size, src,file})
                                })
                                }> uploader</button>
                        </span>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                        onChange={HandleSelected}>
                        <option selected >Flipper pour cette image</option>
                        {flippers?.map(flipp=>{
                            return(
                                <option value={flipp?.Id_flipper}
                                key={flipp?.Id_flipper}
                                
                            >{flipp?.name}</option>
                            )
                        })}
                    
                        </select>
                    </div>
                    <div className="col-9">
                    <span className="d-flex justify-content-start">
                            <BsEye className="fs-3 me-2"/>
                        <h4>Visionneuse</h4>
                    </span>
                    <div className="row">
                        {loading && 
                        (   <div className="d-flex justify-content-center mt-5 bg-light">
                            <h4>Selectionnez un flipper
                            dans le Browser
                            pour afficher ces Images</h4>
                            </div>
                            
                        )}
                    
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