import React, { useEffect, useState } from "react";

export default function MapAndFilter() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  //   FILTER USER
  const filterUser = () => {
    let filteredData = users.filter((user) => {
      //  return user.username === "Kamren";
      // return user.name.includes("C")
      return user.id < 5;
    });
    // console.log(filteredData);
    setUsers(filteredData);
  };

  //   FILTER NUMBER
  const filterNumbers = () => {
    // let square = numbers.map((number) => {
    //     return number * number
    // })
    // console.log(square);
    let numberLessThan5 = numbers
    //   .filter((number) => {
    //     return number >= 5;
    //   })
    //   .map((filtered) => filtered * filtered);
    // OR
    .map((filtered) => {
        return filtered * filtered;
    })
    .filter((number) => number <= 40)
    setNumbers(numberLessThan5);
  };

  return (
    <>
      {/* USERS------------------------------------------------------------------------------------------ */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl mb-4">Users</h1>
        <div className="w-full flex flex-wrap">
          {users.map((user) => (
            <div className="border-slate-600 rounded bg-slate-100 w-40 p-2 text-center m-2">
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
        <button
          onClick={filterUser}
          className="mt-6 border-slate-600 bg-orange-200 p-2 rounded-md"
        >
          Filter
        </button>
      </div>
      {/* NUMBERS----------------------------------------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="font-bold text-4xl mb-4">Numbers</h1>
        <div className="w-full flex flex-wrap">
          {numbers.map((number) => (
            <div className="border-slate-600 rounded bg-slate-100 w-40 p-2 text-center m-2">
              <p>{number}</p>
            </div>
          ))}
        </div>
        <button
          onClick={filterNumbers}
          className="mt-6 border-slate-600 bg-orange-200 p-2 rounded-md"
        >
          Filter
        </button>
      </div>
    </>
  );
}
