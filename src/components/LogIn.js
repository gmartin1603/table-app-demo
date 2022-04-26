import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../context/auth/AuthProvider';
import style from '../context/style/style';
import FormInput from './FormInput';

//***************** TODO ****************** */
// Login error displaying
// style

function LogIn(props) {
    const [state, setState] = useState({userName: '', password: '',})
    const [show,setShow] = useState(false)

    const nav = useNavigate()

    const {passReset, signin, errors} = useAuthState()

    const handleChange = (e) => {
        let newStr = e.target.value

        if (newStr.length > state[e.target.name].length) {
            setState(prev => ({...prev, [e.target.name]: e.target.value}))
            
        } else {
            setState(prev => ({...prev, [e.target.name]: e.target.value}))
            
        }
    }

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault()
        }

        if (state.userName && state.password) {
            
            let email = state.userName.trim()
            let pass = state.password.trim()
            
            if (e.target.id) {
                passReset(email)
                setState({userName: '', password:''})
            } else {
                signin(email,pass)
                setState({userName: '', password:''})
            }
        }

    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        switch (e.target.value) {
            case "cc":
                setShow(true)
                setState(prev => ({...prev, userName: "georgemartin1603@yahoo.com"}))
                break
            case "admin":
                setState({userName: 'admin@testTable.com', password: 'Admin031122'})
                handleSubmit()
                break
            case "sup":
                setState({userName: 'sup@testTable.com', password: 'Sup031122'})
                handleSubmit()
                break
            case "op":
                setState({userName: 'op@testTable.com', password: 'Op031122'})
                handleSubmit()
                break
            case "ee":
                setState({userName: 'ee@testTable.com', password: 'Ee031122'})
                handleSubmit()
                break
            default: 
                console.log("No Value")

        } 
        
    }

    

    // useEffect(() => {
    //     console.log(state)
    // },[state])   
    

    return (
        <div 
        className={`bg-cover h-screen flex items-center justify-center`}
        style={{backgroundImage:"url('https://lh3.googleusercontent.com/HP9vG5qMnym4cUblWIMtshPXQLDHiduXdqf7qGGAZqDdNM81GhgBxjiCRHkd09f67-FXaTGugoWE0mNlGq7R0oyckwCDe_bR1Ky_QkPawRsB9IFQR3nCg5N8jMVkS4hE6SMVAnJRVA=w2400')" }}
        >
            <div 
            className='bg-clearBlack w-min h-max p-.02  rounded-lg border-4'>
                <form className={` flex-column w-200 justify-around`}>
                    
                    <button value="admin"
                    className={`${style.button.green} w-full`}
                    onClick={(e)=>handleClick(e)}

                    >Admin View</button>
                    
                    <button value="sup"
                    className={`${style.button.green} w-full`}
                    onClick={(e)=>handleClick(e)}

                    >Supervisor View</button>
                    
                    <button value="ee"
                    className={`${style.button.green} w-full`}
                    onClick={(e)=>handleClick(e)}

                    >Employee View</button>
                    
                    <button value="op"
                    className={`${style.button.green} w-full`}
                    onClick={(e)=>handleClick(e)}

                    >Break Room View</button>
                    
                    <button value="cc"
                    className={`${style.button.green} w-full`}
                    onClick={(e)=>handleClick(e)}

                    >CountryCoder</button>
                    
                    {
                        show &&
                        <>
                        <FormInput 
                        type="password" 
                        label="Password"
                        name="password"
                        setValue={handleChange}
                        value={state.password}
                        
                        />
                        <button 
                        className='bg-blue font-bold text-lg p-.01 w-full border mt-.05' 
                        type="submit" 
                        onClick={(e) => handleSubmit(e)}
                        >
                            Log In
                        </button>
                        <button 
                        className='bg-blue font-bold p-.01 w-full border mt-.05' 
                        id="reset" 
                        onClick={(e) => handleSubmit(e)}
                        >
                            Reset Password
                        </button>
                        </>
                    }
                </form>
                    {
                        errors && 
                        <div className={`border-2 border-clearRed bg-clearRed p-.02 mt-.05`}>
                            <h4 className={`font-bold`}>ERROR:</h4>
                            <h6 className={`font-semibold`}>{errors}</h6>
                        </div>

                    }
            </div>
        </div>
    );
}

export default LogIn;
