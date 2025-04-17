import React from 'react'
import {Navigate} from 'react-router-dom'
import useUserStore from '../stores/useUserStore'
import Mypage from '../pages/Mypage/Mypage';

const PrivateRoute = () => {
    const { authenticate } = useUserStore();
  return (
    authenticate === true ? <Mypage/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute