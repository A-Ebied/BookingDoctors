import React, { useState } from "react";
import {assets } from "../assets/assets";

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:"precriptodev@gmail.com",
    phone:"+1  123 456 7890",
    address:{
      Line1:'57th Cross, Richmond ',
      Line2:'Circle, Church Road, London'
    },
    gender:"Male",
    dob:"2001-01-24"
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
 <div className=" max-w-lg flex flex-col gap-2 text-sm">
  <img className="w-36 rounded" src={userData.image} alt="profile" />
  {isEdit ? 
  <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4" type="text" value={userData.name} onChange={(e) => setUserData((prev)=>({ ...prev, name: e.target.value }))} />
  :<p className="text-3xl font-medium text-neutral-800 mt-4">{userData.name}</p>
  }

  <hr className="bg-zinc-400 h-[1px] border-none" />

  <div>
    <p className="text-neutral-500 mt-3 underline">CONTACT INFORMATION</p>

  <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
    <p className="font-medium">Email id:</p>
    {isEdit ? <input className="bg-gray-100" type="text" value={userData.email} onChange={(e) => setUserData((prev)=>({ ...prev,email: e.target.value }))} />
    :<p className="text-gray-500">{userData.email}</p>}
    <p className="font-medium">Phone:</p>
    {isEdit ?
    <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={(e) => setUserData((prev)=>({...prev, phone: e.target.value }))} />
    :<p className="text-blue-540">{userData.phone}</p>}

<p className="font-medium">Address:</p>
{isEdit ?
    <p>
    <input className="bg-gray-50" type="text" value={userData.address.Line1} onChange={(e) => setUserData((prev)=>({ ...prev,address:{Line1: e.target.value}   }))}/>
    <br/>
    <input className="bg-gray-50" type="text" value={userData.address.Line2} onChange={(e) => setUserData((prev)=>({ ...prev,address:{Line2: e.target.value}  }))} />
    </p>:<p className="text-gray-500">{userData.address.Line1}<br/>{userData.address.Line2}</p>}
  </div>
  </div>

  <div>
    <p className="text-neutral-500 mt-3 underline">BASIC INFORMATION</p>

   <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
   <p className="font-medium">Gender:</p>
    {isEdit ?
    <section className="max-w-20 bg-gray-100" onChange={(e) => setUserData((prev)=>({ ...prev, gender: e.target.value }))} value={userData.gender}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </section>
    :<p className="text-gray-400">{userData.gender}</p>}

    <p className="font-medium">Birthday:</p>
    {isEdit ?
    <input className="max-w-28 bg-gray-100 " type="date" value={userData.dob} onChange={(e) => setUserData((prev)=>({ ...prev, dob: e.target.value }))} />
    :<p className="text-gray-400">{userData.dob}</p>}
   </div>
  </div>  
 

 <div className="mt-10">
  {isEdit ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all " onClick={() => setIsEdit(false)}>Save information</button> 
  : <button className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(true)}>Edit</button>}
 </div>

 </div>

  );
};

export default MyProfile;
