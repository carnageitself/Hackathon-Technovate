import React, { useState, useEffect } from "react";


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
          id: "username",
          label: "Username",
          type: "text",
          placeholder: "john_doe",
        },
        {
          id: "displayName",
          label: "Name and surname",
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
          id: "password",
          label: "Password",
          type: "password",
        },
        {
          id: "address",
          label: "Address",
          type: "text",
          placeholder: "Elton St. 216 NewYork",
        },
        {
          id: "country",
          label: "Country",
          type: "text",
          placeholder: "USA",
        },
      ];
      
    
    const [file, setFile] = useState<File | null>();
  const  handleAdd=() => {}
  const  handleInput=() => {}

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>title</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                   Image: {/*<DriveFolderUploadOutlinedIcon className="icon" /> */}
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e:any) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={()=>handleInput()}
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