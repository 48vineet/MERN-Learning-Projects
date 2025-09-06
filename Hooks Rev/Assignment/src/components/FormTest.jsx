import React from "react";
import { useRef } from "react";

const FormTest = () => {
  let fname = useRef();
  let lname = useRef();
  let phone = useRef();
  let email = useRef();
  let gender = useRef();
  let check = useRef();

  const handelForm = async (e) => {
    e.preventDefault();
    const Data = {
      name: fname.current.value,
      last_name: lname.current.value,
      phone: phone.current.value,
      email: email.current.value,
      gender: gender.current.value,
      check: check.current.checked,
    };

    const response = await fetch("http://localhost:5000/", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
      method: "POST",
    })
      .then((res) => res.json())
      .catch((e) => console.log("object,", e));
  };

  return (
    <div className="bg-white">
      <form method="POST" className="flex flex-col gap-4" onSubmit={handelForm}>
        <div className="">
          <label>First Name</label>
          <input
            ref={fname}
            type="text"
            className="block p-2 w-[50%] rounded-lg bg-gray-300 "
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            ref={lname}
            type="text"
            className="block p-2 w-[50%] rounded-lg bg-gray-300 "
          />
        </div>
        <div>
          <label htmlFor="">Mobile Number</label>
          <input
            ref={phone}
            type="text"
            className="block p-2 w-[50%] rounded-lg bg-gray-300 "
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            ref={email}
            type="text"
            className="block p-2 w-[50%] rounded-lg bg-gray-300 "
          />
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <select name="" id="" ref={gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="" id="" required ref={check} />
          <label htmlFor="">Are You 18+</label>
        </div>
        <button
          type="submit"
          className="bg-green-600 px-2 py-4 rounded-lg max-w-22"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormTest;
