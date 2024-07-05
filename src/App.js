import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignIn/>
      </SignedOut>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </header>
  )
}