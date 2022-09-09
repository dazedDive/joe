import '../ProductCard/ProductCard.css'

const ProductCard = ({id,image,title,description,desciptionList,price}) =>{
const listDescprition = desciptionList.map(item=><ul key={Math.random()*1000}><li>{item.option1}</li><li>{item.option2}</li>
<li>{item.option3}</li><li>{item.option4}</li><li>{item.option5}</li><li>{item.option6}</li></ul>)

    return(
        <>
        <div className="card mb-3 shadow p-3 mb-5 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start h-100" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                     
                    <h4 className="card-text price-text text-center mt-2"> A partir de {price} €</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductCard