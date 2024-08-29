import React from 'react';
import logo from './assests/logo.png';
import { MdPeopleAlt } from "react-icons/md";
import { CgDesktop } from "react-icons/cg";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaDelicious } from "react-icons/fa";
import { RiFileCodeLine } from "react-icons/ri";
function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>
      <ul>
        <i className='icon'><MdPeopleAlt /></i>
        <li>Student Management</li>
        <i className='icon'><CgDesktop /></i>
        <li>Financial Management</li>
        <i className='icon'><RiDiscountPercentFill /></i>
        <li>Quality Control</li>
        <i className='icon'><FaDelicious /></i>
        <li>Report Delivery</li>
        <i className='icon'><RiFileCodeLine /></i>
        <li>Attendance</li>
      </ul>
    </div>
  );
}

export default Nav;
