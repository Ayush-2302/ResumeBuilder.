import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./store/features/counter/counterSlice";
// import RegistrationForm from "./components/RegistrationForm'";
import ResumeForm from "./components/ResumeForm";
import ContactInfoForm from "./components/ContactInfoForm";

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> */}
      {/* <RegistrationForm /> */}
      {/* <ResumeForm /> */}
      <ContactInfoForm />
    </>
  );
};

export default App;
