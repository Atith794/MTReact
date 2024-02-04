import React from "react";
import Home from '../Assets/Home_active.svg';
import Dot from '../Assets/Ellipse 341.svg';
import person from '../Assets/person.svg';
import Saved from '../Assets/Saved_inactive.svg';
import bell from '../Assets/bell.svg';

function Header(){
    return(
        <div>
          <div className='navbar'>
            <div className='div1'>
                <p className='title'>Travelmedia.in</p>
            </div>
            <div className='icons'>
                <img className='imgs'src={Home} alt='Home'/>
                {/* <img src={Dot} alt='Dot'/> */}
                <img className='imgs'src={person} alt='person'/>
                <img className='imgs'src={Saved}alt='Saved'/>
                <img className='imgs'src={bell} alt='Bell'/>
            </div>
            <div className='empty'></div>
        </div>
      
        </div>
    )
}

export default Header;