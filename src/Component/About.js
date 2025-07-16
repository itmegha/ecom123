import { useRef, useState } from "react";

function Aboutus(){
  
    // const username = useRef();
    
    const [username,setUsername] = useState('abcd');
    const onhandlesubmit = (event)=>{
        event.preventDefault();
        // console.log(username);//object of input
        // console.log(username.current.value);//data
        console.log(username);
    }
    const onhandlechange = (event)=>{
        setUsername(event.target.value);
    }
    return(<>
        <p>About Us Page</p>
        <form onSubmit={onhandlesubmit}>
            <input 
                 name="username"
                 value={username}
                onChange={onhandlechange}
            />
            <button type="submit">Submit</button>
        </form>
    </>);
}
export default Aboutus;