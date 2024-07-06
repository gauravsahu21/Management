import { SignedIn, SignedOut, SignIn, UserButton,useUser  } from "@clerk/clerk-react";
import {  useNavigate } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"
import { useEffect } from 'react';

export default function App() {
  const { isSignedIn, user, isLoaded } = useUser();
  
  console.log(user?.emailAddresses[0].emailAddress||"dsaf");
  const { userId} = useAuth()
  const navigate = useNavigate();

  console.log('test', userId)

  useEffect(() => {
      if (userId) {
          navigate("/dashboard")
      }
  }, [isLoaded])
  
  return (
    <header>
      <SignedOut>
        <div className="flex flex-row justify-center items-center content-center h-[100vh]">
        <SignIn/>
        </div>
      </SignedOut>
      <SignedIn>
      <div>Hello {user?.fullName||"full"}!</div>
      <div>Hello {user?.firstName||"first"}!</div>
      <div>Hello {user?.firstName||"first"}!</div>

        <UserButton showName />
      </SignedIn>
    </header>
  )
}