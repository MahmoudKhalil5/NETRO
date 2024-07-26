import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.PNG';
import './Menu.css';
import { LiaDotCircleSolid } from "react-icons/lia";
import { TbSmartHome, TbTypography, TbBrandTabler  } from 'react-icons/tb';
import { IoCartOutline, IoChatbubbleEllipsesOutline, IoSquareOutline  } from 'react-icons/io5';
import { MdOutlineSchool, MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { LiaCarSideSolid, LiaFileInvoiceSolid  } from 'react-icons/lia';
import { FiCopy, FiUser } from 'react-icons/fi';
import { BsCalendar2Event } from 'react-icons/bs';
import { CiFileOn } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiChartBarLight } from "react-icons/pi";



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
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

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

      <ul id="mainMenu">
        <Icon icon={<TbSmartHome />} path="/dashboards" name="Dashboards" />
        {!collapsed && (
        <div className="Parag">
          <p>APPS & PAGES</p>
        </div>
      )};
        <Icon icon={<IoCartOutline />} path="/ecommerce" name="eCommerce" />
        <Icon icon={<MdOutlineSchool />} path="/academy" name="Academy" />
        <Icon icon={<LiaCarSideSolid />} path="/logistics" name="Logistics" />
        <Icon icon={<FiUser />} path="/users" name="Users" />
        <Icon icon={<MdOutlineEmail />} path="/email" name="Email" />
        <Icon icon={<IoChatbubbleEllipsesOutline />} path="/chat" name="Chat" />
        <Icon icon={<BsCalendar2Event />} path="/calendar" name="Calendar" />
        <Icon icon={<FiCopy />} path="/kanban" name="Kanban" />
        <Icon icon={<LiaFileInvoiceSolid  />} path="/invoice" name="invoice" />
        <Icon icon={<MdLockOutline />} path="/rolesAndPermissions" name="Roles & Permissions" />
        {!collapsed && (
        <div className="Parag">
          <p>PAGES</p>
        </div>
        )};
        <Icon icon={<CiFileOn  />} path="/pages" name="Pages" />
        <Icon icon={<GoShieldLock />} path="/authentications" name="Authentications" />
        <Icon icon={<HiOutlineDotsHorizontal />} path="/wizardExamples" name="Wizard Examples" />
        <Icon icon={<IoSquareOutline />} path="/dialogExamples" name="Dialog Examples" />
        {!collapsed && (
        <div className="Parag">
          <p>USER INTERFACE</p>
        </div>
        )};
        <Icon icon={<TbTypography />} path="/typography" name="Typography" />
        <Icon icon={<TbBrandTabler />} path="/icons" name="Icons" />
        <Icon icon={<PiChartBarLight />} path="/cards" name="Cards" />
      </ul>
    </menu>
  );
}

export default Menu;
