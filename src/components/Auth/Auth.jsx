// import React, {useEffect,useState} from "react";
// import app from "../../Base"
//
// export const AuthContext = React.createContext();
//
// const AuthProvider = ({children})=>{
//     const [currentUser, setCurrentUser] = useState(null);
//
//     useEffect(()=>{
//         app.auth().onAuthStateChanged(setCurrentUser);
//     }, []);
//
//     return (
//         <AuthContext.Proveider value={{currentUser}}>
//             {children}
//         </AuthContext.Proveider>
//     )
//
// }
//
// export default AuthProvider