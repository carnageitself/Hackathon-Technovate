import React from "react";


// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

interface Input {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

interface Data {
  [key: string]: string;
}

const Profile: React.FC = () => {
  const inputs = [
    {
      id: "First Name",
      label: "First Name",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: "Last Name",
      label: "Last Name",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: "email",
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
   
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: "city",
      label: "city",
      type: "text",
    },
    {
      id: "state",
      label: "state",
      type: "text",
    },
    {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "USA",
    },
  ];
      

  const  handleAdd=(e:any) => {
    e.preventDefault()
  }
  

  return (
    <div className="new">
      <div className="newContainer">
        <div className=" top flex justify-center items-center text-black">
          <h1 className=" font-bold text-2xl ">Profile</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form onSubmit={(e)=>handleAdd(e)}>
              

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    
                  />
                </div>
              ))}
              <button  type="submit">
                Send
              </button>
</form>
</div>
</div>
</div>
</div>
  )}

  export default Profile;