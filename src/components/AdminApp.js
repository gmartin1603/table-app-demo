import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useAuthState } from '../context/auth/AuthProvider';
import usePostsListener from '../helpers/postsListener';
import Edit from './Edit';
import Header from './Header';
import MiscForm from './MiscForm';
import PopUpForm from './PopUpForm';
import Schedual from './Schedual';


import {a} from '../testData/cascData'


//************ TODO ************* */
// form for filling misc overtime
// manage users page
//  - add user
//  - assign role
//  - update user
//      - password reset
//      - change roles
// style dept select


function AdminApp({rows}) {

    const {show, showWeek} = useAuthState()

    
    const view = [a.rota,]

    const [depts, setDepts] = useState()
    
    

    

    
    
    return (
        <div >
            
            {
                show &&
                <PopUpForm
                dept={view && view[0].dept}
                shifts={view && view[0].shifts}
                />
            }
            {
                showWeek &&
                <MiscForm
                shifts={view && view[0].shifts}
                
                />
            }
            
            {
                view &&
                <Outlet/>
            }
            
        </div>
    );
}

export default AdminApp;