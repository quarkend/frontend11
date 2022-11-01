
// import React, { useEffect, useState } from "react";
// import { AuthContext } from "./../../App";
 import "./login.css";
// import useCookie from "../../useCookie";
import { useHistory } from "react-router-dom";
// // import axios from "axios";



// // eslint-disable-next-line
// // import SimpleCrypto from 'simple-crypto-js';

// // const saveToken = (token = '') => {
// //       const encryptInit = new SimpleCrypto('PRIVATE_KEY_STORED_IN_ENV_FILE');
// //       const encryptedToken = encryptInit.encrypt(token);

// //       localStorage.setItem('token', encryptedToken);
// //  }

// export const Login = () => {
  

// // user = 'hhllooiinn'
// //   const cookies = new Cookies();
// //  const checkToken = cookies.get("checkToken");
// //  const [user, setUser] = useState(checkToken);
//   // const [cookie, updateCookie] = useCookie("user", "");
//   const { dispatch } = React.useContext(AuthContext);
//   const initialState = {
//     email: "",
//     password: "",
//     isSubmitting: false,
//     errorMessage: null,
//   };
//   const [data, setData] = React.useState(initialState);
//   const handleInputChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setData({
//       ...data,
//       isSubmitting: true,
//       errorMessage: null,
//     });

// //     const cookies = new Cookies();
// // const checkToken = cookies.get("checkToken");


// // // eslint-disable-next-line
// //  const [user, setUser] = useState(checkToken);

//   // useEffect(() => {
//   //   async function checkToken() {
//   //     await axios
//   //       .post("http://localhost:6868/api/auth/login", {
//   //         method: "post",
//   //         withCredentials: true,    // IMPORTANT!!!
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           email: data.email,
//   //           password: data.password,
//   //         }),
//   //       }).then(function (res) {
//   //         console.log(res);
//   //       })
        

//   //   };
  
//   //   checkToken();
//   // }, []);

//   // Implement your login behavior here

//     //${process.env.REACT_APP_API_URL}
//     fetch(`http://localhost:6868/api/auth/login`, {
//       method: "post",
//       withCredentials: true,    // IMPORTANT!!!
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: data.email,
//         password: data.password,
//       }),
//     })
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = props => {
    const history = useHistory();
    const [info, setInfo] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    // fetch(`http://localhost:6868/api/auth/login`, {
    //   method: "post",
    //   withCredentials: true,    // IMPORTANT!!!
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })

    const onSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:4040/api/auth/login', {
             withCredentials: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: info.email, password: info.password })
        }).then(res => res.json()).then(data => {
            if(!data.success) setError(data.message)
            
            else 
            window.setTimeout(function() {
                history.push('/');
            }, 1000);
           
            window.location.reload(); 
            
            
            
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", JSON.stringify(data.token));
        });
    }

    const onChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
      // .then((res) => {
        history.push("/login");

        //       } catch (err) {
        //         console.log(err);
        //         window.location.reload(); const history = useHistory();
//       if (res.ok) {
//         // res
//         // .cookie("token", res.token, {
//         //   origin: "http://localhost:3000",
//         //   expires: 24,
//         //   httpOnly: true,
//         //   secure: true,
//         //   sameSite: "none",
//         // })
//         // .cookie("checkToken", true, {
//         //   origin: "http://localhost:3000",
//         //   expires: 24,
//         //   secure: true,
//         //   sameSite: "none",
//         // })
//        return res.json();
//       }
//       throw res;
//       })

//       .then((res) => {
//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//             localStorage.setItem("user", JSON.stringify(res.user));
//             localStorage.setItem("token", JSON.stringify(res.token));
//           throw new TypeError("Oops, we haven't got JSON!");
//         }
//         return res.json();
//       })
// //  .then((res)=>{
// //   localStorage.setItem("user", JSON.stringify(res.user));
// //   localStorage.setItem("token", JSON.stringify(res.token));
// //  })
//        .catch(error => console.error(error))

//       .then((resJson) => {
//         dispatch({
//           type: "LOGIN",
//           payload: resJson,
//         });
//       })
//       .catch((error) => {
//         setData({
//           ...data,
//           isSubmitting: false,
//           errorMessage: error.message || error.statusText,
//         });
//       });
//   };
return (
  <div>
      <h1 className="text-center">Sign In</h1>
      <form className="w-25 mx-auto" onSubmit={onSubmit}>
          {error && <div className="alert alert-danger" role="alert">
              {error}
          </div>}
          <input onChange={onChange} name="email" type="email" className="form-control" placeholder="Enter email" />     
          <input onChange={onChange} name="password" type="password" className="form-control mt-2" placeholder="Password" />
          <div className="mt-2 d-flex w-50 justify-content-between mx-auto">
              <button type="submit" className="btn btn-primary">Sign In</button>
              <Link to="/signup">
                  <button className="btn btn-primary">Sign Up</button>
              </Link>
          </div>
      </form>
  </div>
);
}

export default Login;
//   return (
//     <div className="login-container">
//             <div>
//       <h1>Coco Cookie</h1>
//       <h1>{cookie}</h1>
//       <button
//         onClick={() => {
//           updateCookie(data.email, 10);
//         } }
//       >
//         Store Cookie
//       </button>
//     </div>
//       <div className="cardlogin">
//         <div className="container">
//           <form onSubmit={handleFormSubmit}>
//             <h1>Login</h1>
//             <label htmlFor="email">
//               Email Address
//               <input
//                 type="email"
//                 value={data.email}
//                 onChange={handleInputChange}
//                 name="email"
//                 id="email"
//               />
//             </label>
//             <label htmlFor="password">
//               Password
//               <input
//                 type="password"
//                 value={data.password}
//                 onChange={handleInputChange}
//                 name="password"
//                 id="password"
//               />
//             </label>
//             {data.errorMessage && (
//               <span className="form-error">{data.errorMessage}</span>
//             )}
//             <button disabled={data.isSubmitting}>
//               {data.isSubmitting ? "Loading..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
