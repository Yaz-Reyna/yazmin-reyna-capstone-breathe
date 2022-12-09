import './home.scss';
import { NavLink } from "react-router-dom";

function HomePage() {

    return(
        <main>
            <div class="main-background"></div>
            <div class="main-background background-2"></div>
            <div class="main-background background-3"></div>
            <div class="main"> 
                <h1 className='main__title'>BREATHE</h1>
                <div className='main__links-container'>
                    <NavLink className='main__links-container--link' to='/music'>
                        Relaxing Music
                    </NavLink>
                    <NavLink className='main__links-container--link' to='/exercises'>
                        Breathing Exercises
                    </NavLink>
                    <NavLink className='main__links-container--link' to='/quotes'>
                        Quotes and Jokes
                    </NavLink>
                    
                </div>
           </div>
        </main>
    )
}

export default HomePage;