import React,{ useEffect, useState} from "react";
import { ReactComponent as FaceIcon }  from "../Icon/face.svg"
import { ReactComponent as GoogleIcon }  from "../Icon/google.svg"
import { ReactComponent as Close }  from "../Icon/close.svg"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, RegisterAction } from '../Store/Actions/UserAction';
import Login from "./Login";

const Register = ({close}) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const dispatch = useDispatch();
  const Navgate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state ) => state.user
  );

  const Loginshow = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (
    e
  ) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };


  const register = async (e) =>{
    e.preventDefault();
    if (user.email && user.password && user.confirmPassword) {
      if(user.password === user.confirmPassword){
       
        console.log( user.email);
        console.log(user.password);
        dispatch(
       
          RegisterAction( user.email, user.password)
        );
      }
      else{
        alert("Password is not match")
      }
     
    }else{
      alert("Please fill all Fields")
    }
    

    //
  };

  useEffect(() => {
    if (error) {
      alert(error);
     
      dispatch(clearError());
    }
    if (isAuthenticated) {
      alert('Success Registered');
      Navgate('/');
    }
  }, [dispatch, error, isAuthenticated]);
  
    return (
      <div>
        {!isComponentVisible && (
        <>
          <div className="bg-transparent  bg-red-200 bg-opacity-10 fixed top-0 left-4 w-full h-full flex items-center justify-center">
      <div className="popup-overlay">
          <div className="popup-content bg-white p-6 rounded-lg shadow-xl max-w-md w-11/12">
          <div className="flex justify-end">
            <Close className="w-5 h-5 cursor-pointer border rounded-3xl" onClick={close} />
          </div>
          
           <div className="flex justify-between">
           <h2 className="text-center text-2xl mb-4">Sign Up</h2>
            <button className="text-end text-sm text-red-500 pb-3"onClick={Loginshow} >I have an account</button>
           </div>
           
            <form id="signup-form" className="mb-4">
              <input
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
                required
                className="mb-2 p-2 border border-gray-300 rounded bg-white w-full"
              />
                
                <input
                type="password"
                placeholder="Password"
                id="password"
                value={user.password}
                onChange={(e) => handleInputChange(e)}
                
                required
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
               <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) => handleInputChange(e)}
  
                required
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <p className="text-xs opacity-50 mb-3 text-justify ">
              By signing up, you agree to the Terms and Conditions and Privacy Policy.California residents, see our CA Privacy Notice.
              </p>
              <button
                type="submit"
                value="Agree and Sign Up"
                onClick={register}
                className="bg-red-400 text-white w-full p-2 rounded"
              >
                Agree and Sign Up
              </button>
            </form>
            <p className="text-center text-sm mb-2">OR SIGN IN WITH</p>
            
              <div className=" flex justify-center">
              <button className=" border  border-gray-500 rounded mx-3 w-100% ">
              
              <h1 className="p-2 flex  "> <FaceIcon className="w-6 h-6 pr-2"/> Facebook</h1> 
              </button>
              <button className=" border  border-gray-500 rounded w-100%">
              <h1 className="px-5 py-2 flex"> <GoogleIcon className="w-6 h-6 pr-2"/>Google</h1> 
               
              </button>
              </div>
              <div className="text-center">
              <p className="text-xs mt-4 opacity-50 mb-3  text-start">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
              <p className="text-xs opacity-50 mb-3 text-start ">
                You also agree to receive product-related marketing emails from Designership, which you can unsubscribe from at any time.
              </p>
           
            </div>
      
          </div>
        
        </div>
    </div>
          
        </>
      )}

    {isComponentVisible && (
        <>
          <Login close={close} />
          
        </>
      )}
    </div>
      );
    };


export default Register
