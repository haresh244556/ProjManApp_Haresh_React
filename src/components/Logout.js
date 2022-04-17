import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Logout = () => {
    var navigate = useNavigate()

    useEffect(() =>{
        localStorage.removeItem('email',email)
        localStorage.removeItem('password',password)

        navigate('/')
        
    })

  return (
    <div>
      
    </div>
  )
}
