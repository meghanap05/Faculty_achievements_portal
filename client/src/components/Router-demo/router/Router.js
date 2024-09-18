import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Dashboard from '../dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import Achievement from '../achievement/Achievement';
import AchievementsByFaculty from '../achievementsbyfaculty/AchievementsByFaculty';
import AddArticle from '../addarticle/AddArticle';
import Error from '../error/Error';
import FacultyProfile from '../facultyprofile/FacultyProfile';
import Home from '../home/Home';
import Login from '../login/Login';
import Main from '../main/Main';
import Register from '../register/Register';
import Achievements from '../achievements/Achievements';
//import StudentProfile from '../studentprofile/StudentProfile';



function Router() {
    let router = createBrowserRouter([
        {
            path: '',
            element: <Main />,
            errorElement: <Error />,
            children: [
                {
                    path: '',
                    element: <Navigate to='Home'/>
                },
                {
                    path:'all-achievements',
                    element: <Achievements/>
                },
                {
                    path: 'Home',
                    element: <Home />
                },
                {
                    path: 'Login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'achievement/:achievementId',
                    element: <Achievement/>
                },
                {
                    path: 'faculty-profile',
                    element: <FacultyProfile/>,
                    children:[
                        {
                            path: '',
                            element: <Navigate to='achievements/:username'/>
                        },
                        // {
                        //     path: 'all-achievements',
                        //     element: <Achievements/>
                        // },
                        {
                            path: 'add-achievement',
                            element: <AddArticle/>
                        },
                        {
                            path: 'achievements/:username',
                            element: <AchievementsByFaculty/>
                        },
                        {
                            path: 'achievement/:achievementId',
                            element: <Achievement/>
                        },
                    ]
                },
                // {
                //     path: 'student-profile',
                //     element: <StudentProfile/>,
                //     children:[
                //         {
                //             path: '',
                //             element: <Achievements/>
                //         },
                //         {
                //             path: 'achievement/:achievementId',
                //             element: <Achievement/>
                //         },
                //     ]
                // },
                
            ]
        }
    ])

    return (
        <div className="App" >

            <RouterProvider router={router} />
            

        </div>
    );
}

export default Router