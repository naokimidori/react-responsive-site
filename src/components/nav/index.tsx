import React from 'react'
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
  return(
    <nav className="site-nav">
      <span className="menu-title">My Site</span>
      <ul className="menu-list">
        {menus.map((item, index) => (
           <li key={index}>{item.title}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
