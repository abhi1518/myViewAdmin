import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";


function AllContact() {
 
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">What India Think</h5>
          </div>
        </div>
        <div className="" style={{marginLeft: "300px", marginTop:"200px"}}>
         <h1>Welcome to What India Think Admin Pannel</h1>
        </div>
        
      </div>
    </>
  );
}

export default adminLayout(AllContact);
