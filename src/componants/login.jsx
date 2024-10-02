import { useState } from "react"
import "../styles/form.css"
import { useNavigate } from "react-router-dom"


export function LogIn({ setUserName}) {
    let navigate = useNavigate()
    let [user , setUser] = useState("")
    let [pass , setPass] = useState("")
    let [isUser , setIsUser] = useState(false)
    let [isPass , setIsPass] = useState(false)
    let inputU = (e)=>{
        setUser(e.target.value)
        
    }
    let inputP = (e)=>{
        setPass(e.target.value)
    }


    let submit = (e)=>{
        e.preventDefault();
        if (user.length <= 3) {
            setIsUser(true)
        }else if(!(/^(?=.*[a-z])(?=.*[A-Z])/.test(pass))){
            setIsPass(true)
        }else{
            setUserName(user)
            navigate("/home")
        }
        
    }
    return ( <>
    
    <form className="row g-3 needs-validation sec-form" noValidate>
  <div className="col-md-12">
    <label htmlFor="validationCustom01" className="form-label">User name</label>
    <input type="text" className="form-control" required onChange={inputU}/>
    <div className="text-danger">
      {isUser && "Length must be more than 3 charts!"}
    </div>
  </div>
  <div className="col-md-12">
    <label htmlFor="validationCustom02" className="form-label">Password</label>
    <input type="password" className="form-control" required onChange={inputP} />
    <div className="text-danger">
      {isPass && "Must have uppercase and lowercase charts!"}
    </div>
  </div>

  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={submit}>Submit form</button>
  </div>
</form>
    </> );
}