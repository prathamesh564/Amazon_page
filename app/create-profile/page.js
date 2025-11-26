"use client";
import { useRouter } from "next/navigation";
import profileStore from "../data-store/profile-store";
import { useState } from "react";

export default function CreateProfilePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
const{ addProfile }= profileStore();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div>Create Profile</div>

      <input
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />

      <input
        placeholder="Phone"
        onChange={(event) => setPhone(event.target.value)}
      />

      <input
        placeholder="Place"
        onChange={(event) => setPlace(event.target.value)}
      />

      <button
        onClick={() => {
          console.log(email);
          console.log(name); 
          console.log(phone)
          console.log(place);
          addProfile({
            name: name,email: email,place: place,phone: phone,

          });
          router.push(`/view-profile`);
        }}
      >
        Create Profile
      </button>
    </div>
  );
}
