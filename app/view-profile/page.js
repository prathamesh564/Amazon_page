"use client";
import profileStore from "../data-store/profile-store";

export default function ViewProfilePage() {
  const { profiles } = profileStore();

  return (
    <div>
      {profiles.map((profile, index) => {
        return (
          <div
            key={index}
            className="flex flex-col text-black border-2 bg-yellow-300 border-amber-800 m-4 p-2"
          >
            <div>{profile.name}</div>
            <div>{profile.email}</div>
            <div>{profile.phone}</div>
            <div>{profile.place}</div>
          </div>
        );
      })}
    </div>
  );
}
