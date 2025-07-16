import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

function Productdetail(){

     const navigate = useNavigate();
     const params = useParams();//to fetch id from url
     console.log(params);
     console.log(params.id);
     const{products:prod}  = useApi(`http://localhost:3000/product/${params.id}`);
     console.log(prod);
    return (<>
        <p>Product Detail</p>
        <div className="card"  id="prod1">
  <img className="card-img-top" src={prod.img1} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">{prod.id}</h4>
    <p className="card-text">{prod.name}</p>
        <p className="card-text">{prod.category}</p>
        <p className="card-text">{prod.price}</p>
         <p className="card-text">{prod.description}</p>
     <button className="btn btn-success"
     onClick={()=>{
       setTimeout(()=>{
          navigate("/product")
       },2000)  
     }}
     >GoBack</button>
  </div>
</div>

    </>);
}
export default Productdetail;