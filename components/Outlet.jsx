import React from 'react'
import Header from './Header'


const Outlet = ({children}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default Outlet