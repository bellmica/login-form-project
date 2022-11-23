import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import * as Util from '../utils/toastify';
import { useNavigate } from 'react-router-dom' // for redirecting
import {  useDispatch } from 'react-redux' // get user to check data [token]
import { removeToken } from "../features/tokenSlice";

const ProfilePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutUser = async (event: any) => {
        event.preventDefault();
        dispatch(removeToken());
        navigate("/");
    }

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-5">
            <div className=" container mx-auto px-4 relative bg-white  pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 my-8 sm:max-w-lg sm:rounded-lg ">
                <div className="mx-auto max-w-md">
                    <div className="mx-auto max-w-md">
                        <div className="text-center">
                            <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Welcome!</h4>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={logoutUser}>
                            <div className="text-center pt-1 mb-12 pb-1">
                                <button
                                    className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                    type="submit"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light" style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }} >
                                    Log out
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProfilePage;
