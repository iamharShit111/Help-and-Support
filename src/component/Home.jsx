import React, { useState } from 'react';
import { FaQuestionCircle, FaBook, FaCommentDots, FaShareAlt, FaPaperPlane,  FaTelegramPlane, FaWhatsapp, FaComments } from 'react-icons/fa'; // Import icons

// Dropdown Component
const Dropdown = ({ title, isOpen, onToggle, children, icon }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event propagation
    onToggle();
  };

  return (
    <div className={`card dropdown ${isOpen ? 'open' : ''}`} onClick={handleClick}>

      <div className="card-header">
        <div className="card-title-wrapper">
          {icon}
          <h2 className="card-title">{title}</h2>
        </div>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && 
        <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
          {children}</div>}
    </div>
  );
};

// Input Field Component
const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
    />
  );
};

// TextArea Component
const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}  
      placeholder={placeholder}
      value={value}
      onChange={onChange}  
      className="input-field textarea"
    />
  );

};

// Button Component
const Button = ({ children, onClick, className , type='button'}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// Main Component
const Home = () => {
  const [openCards, setOpenCards] = useState({
    chat: true,
    social: true,
    query: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toggleDropdown = (card) => {
    setOpenCards((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Query submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="help-section">
      {/* Header Section */}
      <div className="help-header">
        <h1>Hello, how can we help you?</h1>
        <p>Find chat support, social media, and send queries</p>
      </div>

      {/* Cards Container */}
      <div className="help-cards">
        {/* Static Cards */}
        <div className="card card-css">
          <FaQuestionCircle className="card-icon" /> 
          <div className='card-div'>
          <h2>FAQ</h2>
          <p>Get answers to common questions</p>
          </div>
        </div>
        <div className="card card-css">
          <FaBook className="card-icon" />

          <div className='card-div'>          
          <h2>Travel Guide</h2>
          <p>Discover top destinations & tips</p>
          </div>
        </div>

        <Dropdown
          title="Chat"
          isOpen={openCards.chat}
          onToggle={() => toggleDropdown('chat')}
          icon={<FaCommentDots className="card-icon" />}
        >
          <div className="chat-options">
      <Button className="telegram">
        <FaTelegramPlane />
      </Button>
      <Button className="whatsapp">
        <FaWhatsapp />
      </Button>
      <Button className="livechat">
        <FaComments />
      </Button>
    </div>
        </Dropdown>

        {/* Social Card - Dropdown */}
        <Dropdown
          title="Social"
          isOpen={openCards.social}
          onToggle={() => toggleDropdown('social')}
          icon={<FaShareAlt className="card-icon" />}
        >
          <p>Connect with us on social media</p>
        </Dropdown>

        {/* Send Query Card - Dropdown */}
        <Dropdown
          title="Send Query"
          isOpen={openCards.query}
          onToggle={() => toggleDropdown('query')}
          icon={<FaPaperPlane className="card-icon" />} 
        >
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button type="submit" className="submit-btn">
              Submit
            </Button>
          </form>
        </Dropdown>
      </div>
    </div>
  );
};

export default Home;