import { useEffect, useState } from "react";
import Filter from "../filter/filter";
import SliderComponent from "../slider/slider";
import "./main.css"
import { useNavigate, Link } from "react-router-dom";
import RepositorySearch from "../RepositorySearch/repositorySearch ";

const Main = () => {

    const [logoSize, setLogoSize] = useState({ width: "500px", height: "500px" })
    const [showForm, setShowForm] = useState(false);
    const [showAuthGroups, setShowAuthGroups] = useState([false, false]);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLogoSize({ width: "100px", height: "100px" })
        }, 500)

        const formTimer = setTimeout(() => {
            setShowForm(true)
        }, 1500)

        const authGroupTimers = [2000, 2500]; // Задержки для каждого auth-group
        authGroupTimers.forEach((delay, index) => {
            setTimeout(() => {
                setShowAuthGroups(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                });
            }, delay);
        });

        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 3000); // Задержка для кнопки

        return () => {
            clearTimeout(timer);
            clearTimeout(formTimer);
            authGroupTimers.forEach((_, index) => clearTimeout(authGroupTimers[index]));
            clearTimeout(buttonTimer);
        }
    }, [])


    return (
        <div className="main">
            <div className="main-header">
                <div className="main-header-logo">

                    <svg xmlns="http://www.w3.org/2000/svg" id="animated-logo" widths={logoSize.width} height={logoSize.height} viewBox="0 0 50 50" >    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" /></svg>

                    <div id="auth-form" style={{ display: showForm ? 'block' : 'none', opacity: showForm ? 1 : 0, transition: 'opacity 1s' }}>
                        <div className="auth-group" style={{ opacity: showAuthGroups[1] ? 1 : 0, transition: 'opacity 0.5s ease-in-out 0.5s' }}>
                            <svg width="24px" height="24px" className="auth-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 21C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input className="auth-input" type="text" placeholder="Username" />
                        </div>
                        <div className="auth-group" style={{ opacity: showAuthGroups[1] ? 1 : 0, transition: 'opacity 0.5s ease-in-out 0.5s' }}>
                            <svg width="20px" height="20px" className="auth-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 10.9999V6.99988C7 4.23845 9.23858 1.99988 12 1.99988V1.99988C14.7614 1.99988 17 4.23845 17 6.99988V10.9999" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input className="auth-input" type="password" placeholder="Password" />
                        </div>
                        <button className="auth-btn" style={{ opacity: showButton ? 1 : 0, transition: 'opacity 0.5s ease-in-out 1s' }}>Login</button>
                    </div>
                </div>
                <div className="main-header-flex">
                    <div className="main-header-title">
                        Discover
                    </div>
                    <div className="main-filter">
                        <Link to="/repository" className="main-btn">
                            All
                        </Link>
                        {/* <div class="group">
                            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                            <input placeholder="Search" type="search" className="input" />
                        </div> */}
                        <RepositorySearch />
                    </div>
                </div>
            </div>
            {/* <SliderComponent /> */}
            {/* <Filter /> */}
        </div>
    )

}


export default Main;