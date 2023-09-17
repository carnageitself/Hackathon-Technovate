

import React from "react";

export default function CheckBox({ name }: { name: string },handleChange:()=>void): React.ReactElement {
   
    
  return (
    <div className="flex justify-center items-center gap-2">
      <input type="checkbox" onChange={handleChange}  id="" />
      <span>{name}</span>
    </div>
  );
}

