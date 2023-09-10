import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AllUser';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllUser from './pages/AllUser';
import AllContact from './pages/AllContact';
import BlogPost from './pages/BlogPost';
import LandingPage from './pages/LandingPage';
import BlogComment from './pages/BlogComment';
import PollPost from './pages/PollPost';
import PollComment from './pages/PollComment ';

function App() {
  return (
    
        <Router>
            <Routes>
                {/* <Route exact path='/' element={<DashboardPage/>} /> */}
                <Route exact path='/' element={<LoginPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/all-user' element={<AllUser/>} />
                <Route exact path='/all-contact' element={<AllContact/>} />
                <Route exact path='/blog-post' element={<BlogPost/>} />
                <Route exact path='/blog-comment' element={<BlogComment/>} />
                <Route exact path='/poll-comment' element={<PollComment/>} />
                <Route exact path='/landing-page' element={<LandingPage/>} />
                <Route exact path='/poll-post' element={<PollPost/>} />
            </Routes>  
        </Router>
    )
}

export default App;
