import React,{useState} from "react"
function Form1(props){
    console.log(props)
    const{myfun}=props;
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const submit=(params)=>{
        params.preventDefault()
        myfun(username,password)
    }
    const usernameValue=(params)=>{
        console.log(params.target.value)
        setUsername(params.target.value)
    }
    const passwordValue=(params)=>{
        console.log(params.target.value)
        setPassword(params.target.value)
    }



    return(
        <>
        <form onSubmit={submit}>
          
        
            
            <input onChange={usernameValue} type="text" placeholder="username"/>
            {
                username.length===0?<span style={{color:"red"}}>FIELD IS NULL</span>:""
            }
            <input onChange={passwordValue} type="password" placeholder="password"/>
            {
                password.length===0?<span style={{color:"red"}}>FIELD IS NULL</span>:""
            }
            <button>submit</button>
           </form>

        {/* <div className="">{username}</div>
        <div className="">{password}</div> */}

         </>
    )
}
export default Form1