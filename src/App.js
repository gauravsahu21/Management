import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedOut>
        <div className="flex flex-row justify-center items-center content-center h-[100vh]">
        <SignIn/>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </header>
  )
}