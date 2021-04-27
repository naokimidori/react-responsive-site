import React, { useState } from 'react'
import './index.scss'

const menus = [
  {
    title: 'Blog',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Login',
    path: '/login'
  }
]

export const Navigation: React.FC = () => {
  const [ active, setActive ] = useState<boolean>(true)
  return(
    <nav className="site-nav">
      <span className="menu-title">My Site</span>
      <div className="menu-container">
        <ul className="menu-list">
          {menus.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        <span className="menu-icon" onClick={() => setActive(true)}>
          <i className="ionicons icon ion-ios-menu" />
        </span>
      </div>
    </nav>
  )
}

export default Navigation
