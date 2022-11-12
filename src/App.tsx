import React, {FC, useEffect} from 'react';
import Router from "./pages/router/Router";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import './App.css'
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useAuthActions} from "./hooks/useAction";


const App: FC = () => {

    const {isAuth, loading} = useTypedSelector(state => state.auth)
    const {setAuth} = useAuthActions();
    useEffect(() => {
        setAuth()
    }, [])

    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <div className="content">
                {loading
                    ? 'Загрузка'
                    : <Router isAuth={isAuth}/>
                }
            </div>
        </div>
    );
};

export default App;