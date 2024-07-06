import { SignedIn, SignedOut, SignIn, UserButton,useUser  } from "@clerk/clerk-react";

const Home = () => {
    const { isSignedIn, user, isLoaded } = useUser();
  
  console.log(user?.emailAddresses[0].emailAddress||"dsaf");
  return <>
  <header>
  <SignedIn>
      {/* <div>Hello {user?.fullName||"full"}!</div>
      <div>Hello {user?.firstName||"first"}!</div>
      <div>Hello {user?.firstName||"first"}!</div> */}
     <div className="flex justify-end m-2 bg-blue-300 p-2 rounded-md">
     <UserButton showName />
     </div>
     <div className="">

     </div>
        
      </SignedIn>
  </header>
  </>;
};

export default Home;
