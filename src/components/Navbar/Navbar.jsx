import React, { useState } from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
  const [Toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
      {['home', 'about', 'work', 'skills', 'contact', 'resume', 'blogs'].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={item == 'resume' || item == 'blogs' ? (item == 'resume' ? `https://drive.google.com/file/d/1camWMhdpo62XqiGGhJaBZwIQnuzrmtVS/view?usp=sharing` : `https://yashgangwar7558.hashnode.dev/`) : (`#${item}`)}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact', 'resume', 'blogs'].map((item) => (
                <li key={item}>
                  <a href={item == 'resume' || item == 'blogs' ? (item == 'resume' ? `https://drive.google.com/file/d/1camWMhdpo62XqiGGhJaBZwIQnuzrmtVS/view?usp=sharing` : `https://yashgangwar7558.hashnode.dev/`) : `#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
