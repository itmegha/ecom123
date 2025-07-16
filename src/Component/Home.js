import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


function Home(){

    // const context = useContext(ThemeContext);
    const {theme:theme1} = useContext(ThemeContext);
    // console.log(context);
    console.log(theme1);
 
    return(<>
        <p>Home Us Page</p>
    </>);
}
export default Home;