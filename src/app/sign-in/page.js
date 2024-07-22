import React from 'react'
import { SignIn } from '@clerk/nextjs'
import Navbar from '../components/Navbar'


const SignInPage = () => {
  return (
    <>
      <Navbar />
      <SignIn />
    </>
  )
}

export default SignInPage
