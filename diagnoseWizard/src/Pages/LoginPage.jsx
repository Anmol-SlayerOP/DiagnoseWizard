import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        }),
      })
     
      if(response.ok){
        sessionStorage.setItem("jwt",response.token);
    
      }
      if (!response.ok) {
        console.log("The status code :", response.status)
        console.log("login failed");
        if (response.status === 401) {
          console.log("Invalid Credentials")
        }
        const errorData = await response.json();
        throw new Error(errorData.error);


      }
      window.location.reload();
    } catch (err) {
      console.error(`Error logging the user`, err.message);
    }
    setEmail("");
    setPassword("");

  }
  return (
    <section className="flex justify-between my-[100px] py-[100px]">
      <div>
        <img src="assets/undraw_medicine_b-1-ol.svg" className="h-[400px] " alt="" />
      </div>

      <div className=" w-[475px] shadow-lg px-[35px] py-[20px] rounded-lg">
        <h1 className='text-[40px] font-bold mb-[30px]'>Welcome Back</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />

        <button 
        className="w-[400px] h-[50px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-xl my-[10px] "
        onClick={handleLogIn}
        >Login</button>
        <div className='mt-[10px]'>Not registered yet? <a href="#" className='text-[#3b82f6] hover:underline'>Create account</a></div>
        <a href="#" className='text-[#3b82f6] hover:underline'>Forget Password?</a>
      </div>

    </section>
  );
}

export default LoginPage;