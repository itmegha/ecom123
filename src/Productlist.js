import Product from "./Product";

function Productlist(props){
     
     const prod = props.products1;
    return(
        <>
            {/* <Product {...prod[0]}/>
             <Product {...prod[1]}/>
              <Product {...prod[2]}/>
               <Product {...prod[3]}/> */}
               {
                prod && prod.map((p,ind)=>{
                    return (
                        <Product {...p} key={ind}/>
                    );
                })
               }
        </>
    );
}
export default Productlist;