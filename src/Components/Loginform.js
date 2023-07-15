import React,{useState} from "react"; 


const Loginform = () => {
    // let [name, setName] = useState("")
    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")
    // let [confirmPassword, setConfirmPassword] = useState("")
    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    // console.log("user", user)

    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
           return  setError("Name should be min 3 char and max 30 char")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("Successfully Created")
        setError("")

    }

    return(
        <div className="page">
             {/* <img id="firstpic" src={require("./pic.png")}/> */}
        <div className="pic">
            <p>Find 3D Objects, Mockups and IIustration here</p>
             <img src={require("./pic.png")}/>
        </div>
        {/* <img id="img1" src={require("./pic.png")}/> */}
        <div className="form"> 
            <h1>Create Account</h1>
            <div className="btns">
            <button><img src={require("./google.png")}/>Sign up with Google</button>
            <button><img src={require("./facebook.png")} />Sign up with Facebook</button>
            </div>
            <span>- OR -</span>
            {/* <img src="./src/Components/google.png"/>  */}
            <form className="elements" onSubmit={validateForm}>
                <input type="text" placeholder="Enter Your Name" 
                    onChange={(event)=>setUser({...user, name: event.target.value})}
                />
                <input type="email" placeholder="Enter Your Email" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
                <input type="password" placeholder="Enter Your Password" 
                    onChange={(event)=>setUser({...user, password: event.target.value})}
                />
                <input type="password" placeholder="Enter Your Confirm Password" 
                    onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}
                />

                <button type="Submit" >Create Account</button>
            </form>
            {
                error && <p>Err:{error}</p>
            }
            {
                success && <p id="success">{success}</p>
            }
        </div>
        
    </div>
    )

}

export default Loginform;