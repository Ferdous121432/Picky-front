import React from "react";
import { useAuth } from "../../../context/AuthProvider";
import Constants from "../../../../constants";
import Button from "../../Compents/Button/Button";
import { Edit } from "@mui/icons-material";
import EditProfile from "./EditProfile";

export default function UserDetails({ handleEditProfile }) {
  const { state, dispatch, logout } = useAuth();
  const userData = state.userData ? state.userData : [];
  console.log(userData);

  const user = {
    address: userData.address,
    avatar: userData.avatar,
    dateOfBirth: userData.dateOfBirth,
    email: userData.email,
    firstName: userData.firstName,
    fullName: userData.fullName,
    id: userData.id,
    lastName: userData.lastName,
    phoneNumber: userData.phoneNumber,
    userName: userData.userName,
    _id: userData._id,
  };

  return (
    <div className="flex w-full max-w-[800px] flex-col justify-self-center">
      <div className="flex w-full flex-col">
        <div className="relative mb-6 flex w-full flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">Name</h2>
          <h2 className="text-lg">{user.fullName}</h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">User Name</h2>
          <h2 className="text-lg">{user.userName}</h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">Email</h2>
          <h2 className="text-lg">{user.email}</h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">Phone Number</h2>
          <h2 className="text-lg">{user.phoneNumber}</h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">Gender</h2>
          <h2 className="text-lg">{user.gender}</h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">Date of Birth</h2>
          <h2 className="text-lg">
            {new Date(user.dateOfBirth).toLocaleDateString()}
          </h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <h2 className="text-sm text-slate-600">Address</h2>
          <h2 className="text-lg">
            {user.address
              ? user.address !== null
                ? user.address
                : "No address provided"
              : "No address provided"}
          </h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
        </div>
      </div>

      <div className="z-10 bg-red-100"></div>

      <div className="flex flex-col justify-center gap-4 py-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Button
            handleClick={handleEditProfile}
            width={"full"}
            color={Constants.YELLOW_PRIMARY}
          >
            Edit Profile
          </Button>
        </div>
        <div className="w-full sm:w-1/2">
          <Button width={"full"} color={Constants.YELLOW_PRIMARY}>
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}
