import React, { act } from 'react'
import { Container, Header, Logo, LogoutBtn } from '../index';
import {Link} from 'react-router-dom'
import{useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

function header()
 {
  const authStatus = useSelector( (state ) => state.auth.status)
  const navigate = useNavigate()

  const navItem = [
    {
      name: 'Home',
      slug:'/',
      active: true
    },
    {
      name: 'Login',
      slug:'/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug:'/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug:'/all-posts',
      active: authStatus
    },
    {
      name: 'All Posts',
      slug:'/all-posts',
      active: authStatus
    },
  

  ]
  return (
    <Header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className='flex'>
          <div className='mr-4'> 
            <link to
            ="/">
              <logo width='70px'>

              </logo>
            </link>
          </div>
          <ul className='flex' ml-auto>
           {navItem.map(( item)=> 
           item.active ? (
            <li key={item.name}> 
            <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'

            onClick={() => navigate(item.slug)}
            >
               { item.name}</button>
            </li>
           ) : null
          )}

          {authStatus && ( 
            <li>
              <LogoutBtn/>
            </li>
          ) }
          </ul>
        </nav>
      </Container>
    </Header>
  )
}

export default header
