import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  orderData: null,
  wishList: null,
};

// Reducer function
const userProfileReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "CLEAR_USER_DATA":
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

// Create context
const UserProfileContext = createContext();

// Context provider component
export const UserProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userProfileReducer, initialState);

  return (
    <UserProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Custom hook to use the UserProfileContext
export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
