/* eslint-disable */
import React, { useEffect } from "react";
import { useState } from "react";

import { useAuth } from "../../../context/AuthProvider";
import Button from "../../Compents/Button/Button";
import CustopTabs from "./CustomTabs";
import UserDetails from "./UserDetails";
import UserOrders from "./UserOrders";
import Layout from "../../Utils/Layout";
import { getOrdersByUser } from "../../../hooks/order";
import SpinnerFullPage from "../../Compents/SpinnerFullPage";
import EditProfile from "./EditProfile";

const UserDashboard = () => {
  const { state, dispatch, logout } = useAuth();
  const userData = state.userData ? state.userData : [];
  console.log(userData);
  const [loading, setLoading] = useState(true);

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

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = "/signin";
  };

  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // User orders
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const orders = await getOrdersByUser(state.token);
        setOrders(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [state.token]);

  // Edit profile
  const [editProfile, setEditProfile] = React.useState(false);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setEditProfile(true);
  };

  // Tab data
  const tabData = [
    {
      label: "User Details",
      slug: "user-details",
      value: "0",
      content: editProfile ? (
        <EditProfile user={user} setEditProfile={setEditProfile} />
      ) : (
        <UserDetails handleEditProfile={handleEditProfile} />
      ),
    },
    {
      label: "My Orders",
      slug: "my-orders",
      value: "1",
      content: <UserOrders orders={orders} />,
    },
    {
      label: "Wishlist",
      slug: "wishlist",
      value: "2",
      content:
        "This is the wishlist content. Here you can add items to your wishlist.",
    },
    {
      label: "Reviews",
      slug: "reviews",
      value: "3",
      content:
        "This is the reviews content. Here you can add customer reviews and ratings.",
    },
  ];

  //  data loading error
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (!userData) {
      const timer = setTimeout(() => {
        <SpinnerFullPage />;
        setLoadingError(true);
      }, 5000); // 5 seconds timeout

      return () => clearTimeout(timer);
    }
  }, [userData]);

  if (loadingError) {
    return (
      <Layout>
        <div className="items-center justify-center align-middle">
          Error loading page
        </div>
      </Layout>
    );
  }

  return (
    <div className="relative flex w-full max-w-[1200px] flex-col justify-center gap-4 lg:mx-20 lg:gap-8 lg:py-10">
      <div className="flex w-full justify-center py-8 md:py-12">
        <img
          className="w-[100px] rounded-full md:w-[200px]"
          src={user.avatar}
          alt="User Avatar"
        />
      </div>
      <div className="flex justify-center">
        <CustopTabs
          tabData={tabData}
          flexDirection="column"
          orientation={window.innerWidth < 800 ? "vertical" : "horizontal"}
        />
      </div>
      <div className="flex w-full justify-center">
        <Button handleClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default UserDashboard;
