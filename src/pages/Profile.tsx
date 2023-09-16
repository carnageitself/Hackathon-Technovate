import {useState,useContext, useEffect} from "react";
import CheckBox from "../component/Checkbox";
import {
    doc,
    setDoc,
    serverTimestamp,
    updateDoc,  
    getDoc} from "firebase/firestore";
    import {db} from '../firebase'
import { AuthContext } from "../context/authContext";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Profile: React.FC = () => {
  const [user,setUser]=useState({})
    const {currentUser} =useContext(AuthContext)

    useEffect(()=>{
      const unsub=async()=>{
await getDoc(doc(db, "users", currentUser.uid)).then((data)=>{
  setUser(data.data());
  
})
      }
      unsub()
    },[])

    const [data, setData] = useState({});
  const inputs = [
    {
        id: "First Name",
        label: "First Name",
        type: "text",
        placeholder: "john_doe",
        
      },
      {
        id: "Middle Name",
        label: "Middle Name",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "Last Name",
        label: "Last Name",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "Mother's/Father's Name",
        label: "Mother's/Father's Name",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "Current Residential Address",
        label: "Current Residential Address",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "Address Line 2",
        label: "Address Line 2",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "City",
        label: "City",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "District",
        label: "District",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "State",
        label: "State",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "PIN Code",
        label: "PIN Code",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "Mobile Number",
        label: "Mobile Number",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "Occupation",
        label: "Occupation",
        type: "text",
        placeholder: "+1 234 567 89",
      },
      {
        id: "Email",
        label: "Email",
        type: "text",
        placeholder: "Elton St. 216 NewYork",
      },
      {
        id: "Date Of Birth(DD/MM/YYYY)*",
        label: "Date Of Birth(DD/MM/YYYY)*",
        type: "text",
      },
      {
        id: "Age",
        label: "Age",
        type: "text",
      },
      {
        id: "Gender",
        label: "Gender",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Blood Group",
        label: "Blood Group",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Emergency Contact Name",
        label: "Emergency Contact Name",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Emergency Contact Number",
        label: "Emergency Contact Number",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Emergency Contact Address",
        label: "Emergency Contact Address",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Identity Card(PAN Card)",
        label: "Identity Card(PAN Card)",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Enter Identity Card Number",
        label: "Enter Identity Card Number",
        type: "text",
        placeholder: "USA",
      },
      {
        id: "Organ that I wish to donate",
        label: "Organ that I wish to donate",
        type: "text",
        placeholder: "USA",
      }
      
  ];

  const checkbox2 = [
   "I declare that I am a citizen of India and above 18 years of age.",
   "I agree to the privacy policy"
  ];

const [show,setShow] =useState(false)


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });


  };

  const handleAdd = async(e: any) => {
    e.preventDefault();
   
    

    const res = await setDoc(doc(db, "users", currentUser.uid), {
        donar:{...data,},
        timeStamp: serverTimestamp(),
       
      },{merge:true}).then((data)=>{
window.alert("Register As donar Successfully")

      }).catch((err)=>{
        console.log(err,"error");
        
      })
    console.log(res);
    
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className=" top flex justify-center items-center text-black">
          <h1 className=" font-bold text-2xl ">Organ Donation Form</h1>
        </div>
    {  !user.donar?  (<div className="bottom">
          <div className="right">
            <form onSubmit={(e) => handleAdd(e)}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>

                  <input
                    id={input.id}
                    type={input.type}
                    
                    onChange={handleInput}
                    required
                  />
                </div>
              ))}
              
<div className="flex px-14 w-full justify-start items-start flex-col">
              {checkbox2.map((item, index) => (
                <CheckBox name={item} key={index}    />
              ))}
</div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>):(<div className="flex flex-col cursor-pointer  justify-center items-center">
          <h1 className="font-bold text-3xl ">You are already Donar</h1>
          <div onClick={()=>setShow(true)}>click here to update data</div>
          </div>

        )}
      </div>
    </div>
  );
};

export default Profile;
