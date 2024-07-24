import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.PNG';
import './Menu.css';
import { LiaDotCircleSolid } from "react-icons/lia";
import { TbSmartHome } from 'react-icons/tb';
import { IoCartOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { MdOutlineSchool, MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { LiaCarSideSolid } from 'react-icons/lia';
import { FiCopy, FiUser } from 'react-icons/fi';
import { LuFileText } from 'react-icons/lu';
import { BsCalendar2Event } from 'react-icons/bs';

const Icon = ({ icon, path, name }) => (
  <li>
    <Link to={path}>
      {icon}
      <span>{name}</span>
    </Link>
  </li>
);

function Menu() {
  const [collapsed, setCollapsed] = useState(false);
  const [manualCollapse, setManualCollapse] = useState(false);

  const toggleMenu = () => {
    setManualCollapse(!manualCollapse);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 525) {
        setCollapsed(true); // Automatically collapse in mobile view
      } else {
        setCollapsed(false); // Expand in larger view
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isCollapsed = manualCollapse || collapsed;

  return (
    <menu className={isCollapsed ? 'collapsed' : ''}>
      <div className="header">
        {!isCollapsed && <img src={Logo} alt="Logo" />}
        {!collapsed && !manualCollapse && <h2>NETRO</h2>}
        <div className="bars" onClick={toggleMenu}>
          <LiaDotCircleSolid />
        </div>
      </div>
      {!collapsed && (
        <div className="Parag">
          <p>APPS & PAGES</p>
        </div>
      )}
      <ul id="mainMenu">
        <Icon icon={<TbSmartHome />} path="/dashboards" name="Dashboards" />
        <Icon icon={<IoCartOutline />} path="/ecommerce" name="eCommerce" />
        <Icon icon={<MdOutlineSchool />} path="/academy" name="Academy" />
        <Icon icon={<LiaCarSideSolid />} path="/logistics" name="Logistics" />
        <Icon icon={<FiUser />} path="/users" name="Users" />
        <Icon icon={<MdOutlineEmail />} path="/email" name="Email" />
        <Icon icon={<IoChatbubbleEllipsesOutline />} path="/chat" name="Chat" />
        <Icon icon={<BsCalendar2Event />} path="/calendar" name="Calendar" />
        <Icon icon={<FiCopy />} path="/copy" name="Copy" />
        <Icon icon={<LiaCarSideSolid />} path="/drive" name="Drive" />
        <Icon icon={<MdOutlineEmail />} path="/email2" name="Secondary Email" />
        <Icon icon={<LuFileText />} path="/docs" name="Documents" />
        <Icon icon={<IoChatbubbleEllipsesOutline />} path="/discussion" name="Discussion" />
      </ul>
    </menu>
  );
}

export default Menu;
