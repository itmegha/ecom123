import { useForm } from "react-hook-form";


function Services(){
    const{register,handleSubmit,formState: { errors },} = useForm();

    const handleSubmit1 = (data)=>{
        console.log(data);
    }
    return(<>
        <form onSubmit={handleSubmit(handleSubmit1)}>
            <input 
                {...register('fname',{required:true})}
            /><br/><br/>
            <input 
                 {...register('lname',{required:'Please fill this'})}
            />
            { errors.lname && <span style={{color:'red'}}>{errors.lname.message}</span>}
            <br/><br/>
            <input 
                 {...register('email',{pattern:{
                    value: /^\S+@\S+\.\S+$/	,
                    message:'Should be in correct form'
                 }})}
            />
                 { errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
            <br/><br/>
            <input 
                 {...register('password',{pattern:{
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/	,
                    message:'Should be in correct form'
                 }}
                 )}
            />
                { errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
            <br/><br/>
             <input 
                 {...register('age',{min:{
                    value:18,
                    message:'min age should be 18'
                 },max:{
                    value:65,
                    message:'max age should be 65' 
                 }} 
                 )}
            />
                 { errors.age && <span style={{color:'red'}}>{errors.age.message}</span>}
            <br/><br/>
          
            <input type="checkbox" 
                 {...register('subcribe')}
            /><br/><br/>
            <button>Submit</button>
        </form>
               <p style={{color:'#e74c3c'}}>Services Page</p>
        <p style={{color:'#3498db'}}>Services Page2</p>
         <p style={{color:'#9b59b6'}}>Services Page3</p>
        <p style={{color:'#e91e63'}}>Services Page pink</p>
        <p style={{color:'#f4f0f0ff'}}>Services Page</p>
    </>);
}
export default Services;