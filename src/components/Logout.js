import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Logout = () => {
    let navigate = useNavigate()

    useEffect(() =>{
        localStorage.removeItem('email')
        localStorage.removeItem('password')

        navigate('/')
        
    })

  return (
    <div>
      
    </div>
  )
}
