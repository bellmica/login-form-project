import './App.css';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <div className="App">
       <Router>
          <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="profile" element={<ProfilePage />} />
            </Routes>
            </Router>
            <ToastContainer/>
            </div>
    );
}
export default App;
