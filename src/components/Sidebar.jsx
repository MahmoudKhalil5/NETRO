import React,{useState} from 'react';
import { FaCommentAlt, FaBars, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const [isOpen , setIsOpen] = useState(false)
  const toggle = ()=>{ setIsOpen (!isOpen);
  }
  const menuItem = [
    {
      path:"/",
      name:"Dashboard",
      icon:<FaTh />
    },
    {
      path:"/eCommerce",
      name:"eCommerce",
      icon:<FaUserAlt />
    },
    {
      path:"/academy",
      name:"Academy",
      icon:<FaRegChartBar />
    },
    {
      path:"/email",
      name:"email",
      icon:<FaCommentAlt />
    },
    {
      path:"/product",
      name:"Product",
      icon:<FaShoppingBag />
    },
    {
      path:"/productList",
      name:"ProductList",
      icon:<FaThList />
    }
  ];
  return (
    <div className="container">
      <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">logo</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
      </div>
      <main>{children}</main>
    </div>
   );
};
export default Sidebar;