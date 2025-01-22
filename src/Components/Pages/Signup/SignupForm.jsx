import React from "react";
import { useState, useEffect } from "react";
import Button from "../../Compents/Button/Button";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import Constants from "../../../../constants";
import CheckIcon from "@mui/icons-material/Check";
import dayjs from "dayjs";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import validator from "validator";
// import { handleValidation } from "../../../hooks/formValidation";

export default function SignupForm() {
  const { signup, state } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "Ferdous",
    lastName: "Azam",
    email: "admin@a.com",
    password: "test1234",
    passwordConfirm: "test1234",
    role: "admin",
    dateOfBirth: "1990-07-13",
    phoneNumber: "01521427421",
    userName: "atsss",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    if (formData.password !== formData.passwordConfirm) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }, [formData.password, formData.passwordConfirm]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
    } catch (error) {
      alert("❌❌❌😒", error.response.message);
      console.log(error.response);
    }
  };

  const navigate = useNavigate();
  const handleValidation = (e) => {
    const { name, value } = e.target;
    let error = "";
    switch (name) {
      case "firstName":
        if (!validator.isAlpha(value, "en-US", { ignore: " " })) {
          error = "Invalid name format";
        }
        break;
      case "lastName":
        if (!validator.isAlpha(value, "en-US", { ignore: " " })) {
          error = "Invalid name format";
        }
        break;
      case "userName":
        if (!validator.isAlphanumeric(value, "en-US", { ignore: "_" })) {
          error = "Invalid user name format";
        }
        break;
      case "email":
        if (!validator.isEmail(value)) {
          error = "Invalid email format";
        }
        break;
      case "phoneNumber":
        if (!validator.isMobilePhone(value, "any", { strictMode: true })) {
          error = "Invalid phone number format";
        }
        break;
      case "gender":
        if (!/^[A-Za-z ]+$/.test(value)) {
          error = "Invalid gender format";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  //   useEffect(() => {
  //     if (state.signupStatus === "fail") {
  //       //FIXME: Toaster for error messages
  //       console.log(state.signupData);
  //       // Display error message using a toast notification
  //       toast.error(`✌️✌️😒❌ ${state.signupData}`);
  //     }
  //     if (state.signupStatus === "success") {
  //       toast(`✌️✌️ ${state.signupData}`);
  //       navigate("/signin");
  //     }
  //   }, [state.signupStatus, navigate]);

  const muiCustomInput = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: Constants.YELLOW_PRIMARY },
      "&:hover fieldset": { borderColor: Constants.EMARALD_PRIMARY },
      "&.Mui-focused fieldset": {
        borderColor: Constants.YELLOW_PRIMARY,
      },
    },
    "& .MuiInputLabel-root": {
      color: Constants.BLACK_PRIMARY,
      "&:hover": { color: Constants.EMARALD_PRIMARY },
      "&.Mui-focused": { color: Constants.YELLOW_PRIMARY },
    },
  };

  return (
    <div className="bg-grey-lighter flex min-h-screen w-full flex-col">
      <div className="container mx-auto flex flex-1 flex-col items-center justify-start px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <TextField
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleValidation}
                label="First Name"
                sx={muiCustomInput}
                variant="outlined"
                fullWidth
                margin="normal"
                inputProps={{
                  pattern: "[A-Za-z0-9@.]+",
                  title: "Please enter a valid email address",
                }}
                error={!!errors.firstName && formData.firstName !== ""}
                helperText={
                  formData.firstName === "" ? (
                    <span style={{ color: "black" }}>
                      First Name is required
                    </span>
                  ) : errors.firstName && formData.firstName !== "" ? (
                    errors.lastName
                  ) : formData.firstName &&
                    /^[A-Za-z ]+$/.test(formData.firstName) ? (
                    <CheckIcon
                      style={{
                        color: "green",
                        background: Constants.YELLOW_SECONDARY,
                        borderRadius: "100%",
                        fontSize: "1rem",
                      }}
                    />
                  ) : null
                }
              />
              <TextField
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleValidation}
                label="Last Name"
                sx={muiCustomInput}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.lastName && formData.lastName !== ""}
                helperText={
                  formData.lastName === "" ? (
                    <span style={{ color: "black" }}>
                      Last Name is required
                    </span>
                  ) : errors.lastName && formData.lastName !== "" ? (
                    errors.lastName
                  ) : formData.lastName &&
                    /^[A-Za-z ]+$/.test(formData.lastName) ? (
                    <CheckIcon
                      style={{
                        color: "green",
                        background: Constants.YELLOW_SECONDARY,
                        borderRadius: "100%",
                        fontSize: "1rem",
                      }}
                    />
                  ) : null
                }
              />
              <TextField
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleValidation}
                label="Email"
                sx={muiCustomInput}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.email && formData.email !== ""}
                helperText={
                  formData.email === "" ? (
                    <span style={{ color: "black" }}>Email is required</span>
                  ) : errors.email && formData.email !== "" ? (
                    errors.email
                  ) : formData.email && validator.isEmail(formData.email) ? (
                    <CheckIcon
                      style={{
                        color: "green",
                        background: Constants.YELLOW_SECONDARY,
                        borderRadius: "100%",
                        fontSize: "1rem",
                      }}
                    />
                  ) : null
                }
              />
              <TextField
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                sx={muiCustomInput}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={formData.passwordConfirm}
                onChange={handleChange}
                label="Confirm Password"
                sx={muiCustomInput}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!passwordMatch}
                helperText={
                  !passwordMatch ? (
                    "Passwords do not match"
                  ) : (
                    <CheckIcon
                      style={{
                        color: "green",
                        background: Constants.YELLOW_SECONDARY,
                        borderRadius: "100%",
                        fontSize: "1rem",
                      }}
                    />
                  )
                }
              />
              <div className="py-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={dayjs(formData.dateOfBirth)}
                    onChange={(newValue) => {
                      setFormData({
                        ...formData,
                        dateOfBirth: newValue.format("YYYY-MM-DD"),
                      });
                    }}
                    sx={{
                      ...muiCustomInput,
                      "& .MuiIconButton-root": {
                        color: Constants.YELLOW_PRIMARY,
                      },
                      ".MuiPopper-root .MuiPickersLayout-root": {
                        backgroundColor: Constants.YELLOW_PRIMARY,
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center justify-start py-10">
                <Button
                  width="full"
                  hover="hover:bg-slate-800 hover:font-bold  hover:text-slate-200  "
                  color="text-slate-50 bg-slate-900"
                  //   disabled={state.loading}
                >
                  ff
                  {/* {state.loading ? "Creating Account..." : "Create Account"} */}
                </Button>
              </div>
            </div>
          </form>
          <div className="text-grey-dark mt-4 text-center text-sm">
            By signing up, you agree to the
            <a
              className="border-grey-dark text-grey-dark border-b no-underline"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="border-grey-dark text-grey-dark border-b no-underline"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6 flex items-center justify-center">
          Already have an account?
          <a
            className="border-b pl-4 text-lg font-semibold text-blue-500 no-underline hover:text-yellow-primary"
            href="/signin"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
