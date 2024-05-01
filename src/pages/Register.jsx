import {useState} from 'react'
import axios from 'axios'


const Register = ()=>{
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()
   try {
   const createUser= await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`,{username,password})
   console.log(createUser.data)

   } catch (error) {
    // Handle errors
    console.error("Error:", error);
    // You can check error.response for more details on the response received from the server
    if (error.response) {
      setErrorMessage("Something went wrong: " + error.response.data.message);
    }

  }
  }
  return (
    <section >
    <h2 className="text-center text-3xl font-semibold text-blue-300">Register</h2>

    <form
    className="w-[36rem] h-[20rem] flex flex-col p-5 gap-4 m-auto shadow-md"
    onSubmit={handleSubmit}
    >
   <input
    type="text"
    placeholder='username'
    className="border-2 py-3 pl-2"
    name={username}
    onChange= {e=>setUserName(e.target.value)}
    />
   <input
    type="password"
    placeholder='password' 
    className="border-2 py-3 pl-2"
    name={username}
    onChange= {e=>setPassword(e.target.value)}
    />
   <button type='submit' className="border-2 w-36 m-auto py-3 pl-2 rounded-lg bg-blue-300 text-white">Register</button>
    {errorMessage && <p>{errorMessage}</p>}
 </form>
</section>
  );
}

export default Register
