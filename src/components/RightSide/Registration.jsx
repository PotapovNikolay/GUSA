import React, {useRef, useState} from "react";
import {logOut, login, signup, useAuth} from "../../Base";
import {getAuth} from "firebase/auth";

const Registration = (props) => {

    const [loading, setLoading] = useState(false)

    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const message = []
    const mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    // passwordRef.current.value.length<6
    async function handleSignUp() {
        setLoading(true);

            if(emailRef.current.value===''||
                passwordRef.current.value===''||
                emailRef.current.value===null||
                passwordRef.current.value===null||
                emailRef.current.value.match(mailformat)||
                passwordRef.current.value.length<5
                ){
                message.push('Некореткно введен email или пароль')
                props.setError(true);
            }
            else {
                await signup(emailRef.current.value, passwordRef.current.value);
                props.setSignIn(true);
                console.log('signin')
            }
        setLoading(false)
    }

    async function handleLogin() {
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        props.setLogIn(true);

        setLoading(false)
    }

    const handleName = (e) => {
        props.setName(e.target.value);
        props.setSubmitted(false);
    };

    const handleSername = (e) => {
        props.setSername(e.target.value);
        props.setSubmitted(false);
    };

    const [regist, setRegist] = useState(false)

    function handleClick() {
        setRegist(!regist)
    }

    const handleReg = (e) => {
        const {handleSignUp, handleSubmit} = props;
        handleSignUp();
        handleSubmit(e);
    }

    return <div className={" flex flex-col space-y-5 p-2 "}>
        {!props.logIn && !regist ?
        <div>
            Для просмотра информации о профиле <button className={'underline'} onClick={handleClick}> войдите</button> в
            аккаунт
        </div>:null}

        {!props.logIn && !regist ? <div>
            {/*<form action={'/'} method={"GET"}>*/}
                <div className="relative z-0 mb-6 w-full group">
                    <input ref={emailRef} type="email" name="floating_email"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#46629a] peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#46629a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Почта
                    </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input ref={passwordRef} type="password" name="floating_password" id="floating_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#] peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_password"
                           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#46629a] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Пароль</label>
                </div>

                <div className={'flex flex-row justify-center'}>
                    <button
                        // disabled={props.loading||currentUser}
                        onClick={handleLogin}

                        // type="submit"
                        className="text-[#46629a] bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Готово!
                    </button>
                </div>

            {/*</form>*/}
        </div> : null}
        {!props.signIn ? <div>
            <div>
                Или <button onClick={handleClick} className={'underline'}>зарегистрируйтесь</button>
            </div>
        </div> : null}
        {props.signIn || regist ?
            <div className={''}>
                {/*<form action={'/'} method={'GET'}>*/}
                    <div className="relative z-0 mb-6 w-full group">
                        <input ref={emailRef} type="email" name="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#46629a] peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#46629a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Почта
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input ref={passwordRef} type="password" name="floating_password" id="floating_password"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#46629a] peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_password"
                               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#46629a]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Пароль</label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleName} type="text" name="floating_first_name" id="floating_first_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#46629a] peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_first_name"
                                   className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#46629a] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Имя</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleSername} type="text" name="floating_last_name"
                                   id="floating_last_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#46629a] peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_last_name"
                                   className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#46629a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Фамилия</label>
                        </div>
                    </div>
                    <div className={'flex flex-row justify-center'}>
                        <button
                            // disabled={props.loading||currentUser}
                            onClick={handleSignUp}
                            // type={"submit"}
                            className="text-[#46629a] bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Готово!
                        </button>
                    </div>

                {/*</form>*/}
            </div> : null}
    </div>
}

export default Registration