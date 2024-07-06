import { SignedIn, SignedOut, SignIn, UserButton,useUser  } from "@clerk/clerk-react";


export default function App() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user?.emailAddresses[0].emailAddress||"dsaf")
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