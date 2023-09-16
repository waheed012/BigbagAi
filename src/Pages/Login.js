import React,{useEffect,useState} from "react";
import { ReactComponent as FaceIcon }  from "../Icon/face.svg"
import { ReactComponent as Close }  from "../Icon/close.svg"


import { ReactComponent as GoogleIcon }  from "../Icon/google.svg"
import { useSelector, useDispatch } from 'react-redux';
import { clearError, loginAction } from '../Store/Actions/UserAction';
import { useNavigate } from 'react-router-dom';
import Register from "./Register";
const Login = ({close}) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  // console.log('name    =>', data);

  const dispatch = useDispatch();

  const Navgate = useNavigate();

  const RegisterShow = () => {
    setIsComponentVisible(!isComponentVisible);
    
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
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
  
  const login = async (e) => {
    e.preventDefault();
    console.log( user.email);
    console.log(user.password);
    dispatch(
      
      loginAction(user.email, user.password)
    );
  };

  useEffect(() => {
    if (error) {
      alert(error);
      
      dispatch(clearError());
    }
    if (isAuthenticated) {
      Navgate('/Home');
    }
  }, [dispatch, error, isAuthenticated]);

    
      return (


        
        <div className="bg-transparent bg-red-200 bg-opacity-10 fixed top-0 left-4 w-full h-full flex items-center justify-center">
      <div className="popup-overlay">
          <div className="popup-content bg-white p-6 rounded-lg shadow-xl max-w-md w-11/12">
          <div className="flex justify-end  ">
            <Close className="w-5 h-5 cursor-pointer border rounded-3xl " onClick={close} />
          </div>
          
           <div className="flex justify-between">
           <h2 className="text-center text-2xl mb-4">Sign In</h2>
            <button className="text-end text-sm text-red-500 pb-3" onClick={RegisterShow}>Do you have an account</button>
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
              <p className="text-s text-left my-4 " >Forgot Password</p>
              <button
                value="Agree and Sign In"
                onClick={login}
                className="bg-red-400 text-white w-full p-2 rounded h-full"
              >
                Agree and Sign In
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
          {isComponentVisible && (
        <>
          <Register close={close} />
          
        </>
      )}
        </div>
    </div>

        
      );
    };

export default Login
