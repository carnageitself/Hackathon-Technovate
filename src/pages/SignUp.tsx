import React, { useState } from 'react';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Register:React.FC = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      // const date = new Date().getTime();
      // const storageRef = ref(storage, `${name + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName: name,
              photoURL: downloadURL,
            });

            // Create user on Firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
              playback: [],
            });

            navigate('/');
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Organ Donation</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" onChange={(e:any) => setImage(e.target.files[0])} />
          <label htmlFor="file" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img
              className="rounded-full"
              src={image ? URL.createObjectURL(image) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}
              style={{ height: '20px' }}
              alt=""
            />
            <span style={{ fontSize: '14px', color: '#4F3B78', paddingLeft: '5px' }}>Add an Avatar !</span>
          </label>

          <button>Sign Up</button>
          {loading && 'Uploading and compressing the image please wait...'}
          {err && <span>Something went wrong !</span>}
        </form>
        <p>
          Do you have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
