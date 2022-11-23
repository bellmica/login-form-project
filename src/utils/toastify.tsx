import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    export const infoMessage = (msg : String, delay: number) => {
        toast.info(msg, {
            position: 'top-center',
            autoClose: delay,
        });
    };
	
	    export const errorMessage = (msg : String, delay: number) => {
        toast.error(msg, {
            position: 'top-center',
            autoClose: delay,
        });
    };
	
	    export const successMessage = (msg : String, delay: number) => {
        toast.success(msg, {
            position: 'top-center',
            autoClose: delay,
        });
    };