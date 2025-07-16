import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import light from '../img/contrast_24dp_434343_FILL0_wght400_GRAD0_opsz24 (2).svg';
import dark from '../img/brightness_2_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg';

function Nav(){
  
  const {theme,setTheme} = useContext(ThemeContext);
  console.log(theme);

  let myStyle = {};
  if(theme === 'light'){
   myStyle = {
    background:'#3498db',
    color:'#111010ff'
   } 
  }
  else{
    myStyle = {
     background:'#9b59b6',
    color:'#f4f0f0ff'
    }  
  }
    return (<>
    <header>
         {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> */}
         {/* onClick={()=>setTheme('dark')} */}
          <nav  className="navbar navbar-expand-sm " style={myStyle} 
          >
  <div className="container-fluid">
    <img className="navbar-brand rounded-circle" src={'https://www.shutterstock.com/image-illustration/cool-anime-guy-casual-outfit-600nw-2258372421.jpg'} id="logo" />
        <ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link active" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">ContactUs</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/services">Services</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/product">Products</Link>
  </li>
  <li>
    {
      theme === 'light'?
      (
         <img src={dark}  onClick={()=>setTheme('dark')}/>
      )
      :
      (
         <img src={light} onClick={()=>setTheme('light')}/>
      )
    }
  </li>

</ul>
</div>
</nav>
    </header>
    <main>
        <Outlet/>
    </main>
   
    </>);
}
export default Nav; 