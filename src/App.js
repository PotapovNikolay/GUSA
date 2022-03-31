import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {Routes,  Route} from "react-router-dom"
import RightSide from "./components/RightSide/RightSide";
import SignIn from "./components/Auth/SignIn";
import {logOut,login, signup, useAuth} from "./Base";
import {getAuth} from "firebase/auth";


function FullApp(){
    const UserInfo = {
        'name': 'Николай',
        'sername': 'П',
        // 'avatar':{user},
    }

    const [IsOnLeftSide, SetLeftSide] = useState(false)
    const [IsOnRightSide, SetRightSide] = useState(false)


    const [name, setName] = useState('');
    const [sername, setSername] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const auth = getAuth()
    const user = auth.currentUser
    if (user !== null) {
        const m = user.email
        const n = user.displayName
        console.log(m)
        console.log(n)
    }
    console.log('app login', logIn)
    console.log('app signin', signIn)
    return(
        <div  className={'h-full'}>
            <div
                className={IsOnLeftSide ? 'p-5 grid grid-cols-6 gap-x-2 relative' :
                    IsOnRightSide ? 'p-5 grid grid-cols-6 gap-x-2 relative' :
                        (!IsOnLeftSide && IsOnRightSide)
                            ?'p-5 grid grid-cols-6 gap-x-2 relative': ' p-5 grid grid-cols-6 gap-x-5 '}>
                {IsOnLeftSide ? (<div className=" ">
                    <LeftSide/>
                </div>) : null
                }
                <div
                    className={(IsOnLeftSide && !IsOnRightSide) ?
                        "col-span-5 col-start-2 row-start-1 animate-MainToRight" : (!IsOnLeftSide && IsOnRightSide) ?
                            "col-span-5 col-start-1 row-start-1 z-10 animate-MainToLeft" : (IsOnLeftSide && IsOnRightSide) ?
                                "col-span-4 col-start-2 row-start-1 z-10 " : "col-span-6 row-start-1  animate-MainToLeft "}>
                    <CenterSide staterightside={IsOnRightSide} setstaterightside={SetRightSide}
                                stateleftside={IsOnLeftSide} setstateleftside={SetLeftSide}/>
                </div>
                {IsOnRightSide ? (<div className="bg-[#e4e7ec] rounded-xl drop-shadow-lg h-full h-[42rem]">
                    <RightSide
                        signIn={signIn}
                        setSignIn={setSignIn}
                        logIn={logIn}
                        setLogIn={setLogIn}
                        error={error}
                        setError={setError}
                        submitted={submitted}
                        setSubmitted={setSubmitted}
                        sername={sername}
                        setSername={setSername}
                        name={name}
                        setName={setName}
                        UserInfo={UserInfo}/>
                </div>) : null
                }
            </div>


        </div>

    );
}

function SignApp(){

    const [loading,setLoading] = useState(false)

    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const message = []

    async function handleSignUp(){
        setLoading(true);

        const mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    // ||emailRef.current.value.match(mailformat)
        try {
            if(emailRef.current.value===''||emailRef.current.value===null||emailRef.current.value.length<6){
                message.push('Введите email')
            }
            else {
                await signup(emailRef.current.value, passwordRef.current.value);
            }

        } catch {
            alert("error!");

        }
        setLoading(false)
    }

    async function handleLogin(){
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("error!");
        }
        setLoading(false)
    }

    async function handleLogOut(){
        try {
            await logOut();
        } catch {
            alert('error')
        }

    }

    return(
        <div>
            <div>Currently logged {currentUser?.email}</div>
            <div>{message}</div>
            <form action={'/'} method={"GET"}>
                <div>
                    <input required ref={emailRef} placeholder={'Email'} />
                    <input required ref={passwordRef} type={"password"} placeholder={"Password"} />
                </div>
                <button type={'submit'}  disabled={loading||currentUser} onClick={handleSignUp} > Sign Up </button> <br/>
                <button disabled={loading||currentUser} onClick={handleLogin} >Log in</button><br/>
                <button disabled={loading||!currentUser} onClick={handleLogOut} >Log out</button>
            </form>

        </div>
    )
}

function App() {

    return(
        <>
        <Routes>
            <Route path="/" element={<FullApp/>}/>
            <Route path="/login" element={<SignApp/>}/>
        </Routes>
        </>
    );

}

export default App;
