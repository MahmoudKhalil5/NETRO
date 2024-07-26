import React, { useEffect } from 'react';
import { IoSearchOutline, IoChevronDown  } from "react-icons/io5";
import { FaRegBell  } from "react-icons/fa";
import Mahmoud1 from '../img/Mahmoud1.jpg';


function Topcontainer() {
  useEffect(() => {
    const menuTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");



    menuTarget.addEventListener("mouseenter", ()=>{
      menuTarget.style.transfrom = "rotate(180deg)";
      menuContainer.style.transform = "translate(0px)";
    });

    menuContainer.addEventListener("mouseleave", ()=>{
      menuTarget.style.transfrom = "rotate(0deg)";
      menuContainer.style.transform = "translate(300px)";
    });
 }, []);

  return (
    <div className='topContainer'>
        <div className='inputBox'>
          <input type='text' placeholder='Search'/>
          <i>
            <IoSearchOutline />
          </i>
        </div>

        <div className="profileContainer">
            <i className='profileIcone'>
            <FaRegBell  />
            </i>
            <div className="profileImage">
              <img src={Mahmoud1} alt="" />
            </div>
            <p className="profileName">Mahmoud Khalil</p>
            <i className="menuChevron" id="menuChevron">
            <IoChevronDown />
            </i>
            <div className="menuContainer" id="menuContainer">
              <ul>
                <li>Web Disign</li>
                <li>UI / UX</li>
                <li>Form Disign</li>
                <li>ReactJS</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Topcontainer