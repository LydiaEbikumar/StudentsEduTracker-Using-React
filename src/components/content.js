import React, { useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { FaUserTie } from 'react-icons/fa';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import { GiWhiteBook } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiFileCodeLine } from "react-icons/ri";
import { FaClinicMedical } from "react-icons/fa";
function Content() {
  const [cards, setCards] = useState([
    { id: 1, icon: <IoPerson style={{fontSize:"80px"}} />, count: 0, label: 'Regular Students', color: 'red' },
    { id: 2, icon: <FaUserTie style={{fontSize:"80px"}} />, count: 0, label: 'Remedial Students', color: 'purple' },
    { id: 3, icon: <BsFileEarmarkPersonFill style={{fontSize:"80px"}}/>, count: 0, label: 'In Paid Clubs', color: 'green' },
  ]);
const handleCardClick = (id) => {setCards(cards.map(card =>card.id === id ? { ...card, count: card.count + 1 } : card)); };
return (
    <div className="main">
      <div className="header">
        <h1>Student Management</h1>
        <div className="summary-cards">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`card ${card.color}`}
              onClick={() => handleCardClick(card.id)}
            >
              {card.icon}
              <div>
                <h3>{card.count}</h3>
                <p>{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      <h3>Menu</h3>
      <div className="menu-grid">
        <div className="menu-item"><IoPerson style={{fontSize:"50px",color:"blue"}}/> Regular Enrollment</div>
        <div className="menu-item"><GiWhiteBook style={{fontSize:"50px",color:"blue"}} /> Remedial Enrollment</div>
        <div className="menu-item"><BsFileEarmarkPersonFill style={{fontSize:"50px",color:"blue"}}/> Club Management</div>
        <div className="menu-item"><FaBookReader style={{fontSize:"50px",color:"blue"}}/> Classroom Management</div>
        <div className="menu-item"><IoMdMail style={{fontSize:"50px",color:"blue"}}/> SMS / EMAIL</div>
        <div className="menu-item"><RiFileCodeLine style={{fontSize:"50px",color:"blue"}} /> Attendance</div>
        <div className="menu-item"><FaClinicMedical style={{fontSize:"50px",color:"blue"}} /> Clinic</div>
      </div>
    </div>
  );
}

export default Content;
