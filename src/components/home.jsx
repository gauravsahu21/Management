import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import Task from "./task";

const Home = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  console.log(user?.emailAddresses[0].emailAddress || "dsaf");
  return (
    <>
      <header>
        <SignedIn>
          {/* <div>Hello {user?.fullName||"full"}!</div>
      <div>Hello {user?.firstName||"first"}!</div>
      <div>Hello {user?.firstName||"first"}!</div> */}
          <div className="flex justify-end m-2 bg-blue-300 p-2 rounded-md">
            <UserButton showName />
          </div>
         <div className="flex justify-end w-[90%]">
            <div className="bg-blue-500 p-2 rounded-md  ">+ Add Task</div>       
         </div>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
        </SignedIn>
      </header>
    </>
  );
};

export default Home;
