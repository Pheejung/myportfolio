import React from 'react'
// import { social, links } from './data'
// import { useGlobalContext } from './context'

const Sidebar = () => {
//   const { isSidebarOpen, closeSidebar } = useGlobalContext()

const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: '',
    },
    {
      id: 2,
      url: '/#about',
      text: 'team',
      icon: '',
    },
    {
      id: 3,
      url: '/projects',
      text: 'projects',
      icon: '',
    },
    {
      id: 4,
      url: '/calendar',
      text: 'calendar',
      icon: '',
    },
    {
      id: 5,
      url: '/documents',
      text: 'documents',
      icon: '',
    },
  ];
  
const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: ''
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: '',
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: '',
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: '',
    },
    {
      id: 5,
      url: 'https://www.twitter.com',
      icon: '',
    },
  ];

  return (
    <aside className={`'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <button className="close-btn">
        </button>
      </div>
      {/* 사이드바 메뉴 목록 */}
      <ul className="links">
        {links.map((link) => {
          const {id, url, text, icon} = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      {/* social 아이콘 */}
      <ul className='social-icons'>
        {social.map((link) => {
          const {id, url, icon} = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar