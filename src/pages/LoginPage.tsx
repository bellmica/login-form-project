import React, { useState, useRef } from "react";
import '../App.css';
import * as LoginService from "../api/authApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import * as Util from '../utils/toastify';
import { useNavigate } from 'react-router-dom' // for redirecting
import {  useDispatch } from 'react-redux' // get user to check data [token]
import {  saveToken } from "../features/tokenSlice";

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e: any) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const loginUser = async (event: any) => {
        event.preventDefault();
        await LoginService.Login(username, password).then(
            (response) => {
                Util.successMessage("Login successful!", 3000);
                dispatch(saveToken(response.data.data));
                navigate('profile');
            },
            (error) => {
                Util.errorMessage("Login failed!", 3000);
            }
        );
    }

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-5">
            <div className=" container mx-auto px-4 relative bg-white  pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 my-8 sm:max-w-lg sm:rounded-lg ">
                <div className="mx-auto max-w-md">
                    <div className="text-center">
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Login Form</h4>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={loginUser}>
                        <div className="mb-4">
                            <input type="email" placeholder="Email" name="username" value={username} onChange={onChangeUsername} required className="form-control block w-full px-4 py-2 text-xl sm:text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword} minLength={4} required className="form-control block w-full px-4 py-2 text-xl sm:text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                            <button
                                className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light" style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }} >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoginPage;
