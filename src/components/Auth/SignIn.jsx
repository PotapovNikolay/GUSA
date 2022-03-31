// import React from "react";
// import {app} from "../../Base";
// import firebase from "firebase/compat";
//
//
// const SignIn = ()=> {
//
//     const SignInWithFirebase=()=>{
//         let google_provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(google_provider)
//             .then((re)=>{
//                 console.log(re);
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
//     }
//
//     return(<button onClick={SignInWithFirebase}>Sign in With Google</button>)
// }
//
// export default SignIn