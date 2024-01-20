import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
const index = () => {
  const [pageNo, setPageNo] = useState(1);
  return (
    <>
      {pageNo == 1 ? (
        <Login setPageNo={setPageNo} />
      ) : (
        <Register setPageNo={setPageNo} />
      )}
    </>
  );
};

export default index;
