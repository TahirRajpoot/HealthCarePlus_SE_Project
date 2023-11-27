import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../Global/components/Button/Button";
import Input from "../../../Global/components/Input/Input";
import Label from "../../../Global/components/Label/Label";
import LoginLayout from "../../../Global/components/LoginLayout/LoginLayout";
import { userRegisterAction } from "../../../../actions/userActions";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const {
      username,
      useremail,
      userDateOfBirth,
      userpassword,
      userprimarycontact,
    } = data;

    try {
      await dispatch(
        userRegisterAction(
          username,
          useremail,
          userDateOfBirth,
          userprimarycontact,
          userpassword
        )
      );
      navigate("/user_login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <LoginLayout>
      <div className="FormContainer">
        <h2 className="Title">Client Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="InputGroup">
            <Label htmlFor="username">Name</Label>
            <Input
              fluid
              type="text"
              error={errors.username ? true : false}
              id="username"
              aria-invalid={errors.username ? "true" : "false"}
              {...register("username", {
                required: { value: true, message: "Name Required" },
                minLength: {
                  value: 8,
                  message: "Minimum Length of name should be 8 characters",
                },
              })}
            />
            {errors.username && (
              <div className="Error" role="alert">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="InputGroup">
            <Label htmlFor="useremail">Email</Label>
            <Input
              fluid
              type="email"
              id="useremail"
              error={errors.useremail ? true : false}
              aria-invalid={errors.useremail ? "true" : "false"}
              {...register("useremail", {
                required: { value: true, message: "Email required" },
              })}
            />
            {errors.useremail && (
              <div className="Error" role="alert">
                {errors.useremail.message}
              </div>
            )}
          </div>
          <div className="TwoColumnGroups">
            <div className="InputGroup">
              <Label htmlFor="userprimarycontact">Primary Contact</Label>
              <Input
                fluid
                type="number"
                id="userprimarycontact"
                error={errors.userprimarycontact ? true : false}
                aria-invalid={errors.userprimarycontact ? "true" : "false"}
                {...register("userprimarycontact", {
                  required: {
                    value: true,
                    message: "Primary Contact required",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum Length of Contact should be 8 characters",
                  },
                  maxLength: {
                    value: 14,
                    message: "Minimum Length of Contact should be 8 characters",
                  },
                })}
              />
              {errors.userprimarycontact && (
                <div className="Error" role="alert">
                  {errors.userprimarycontact.message}
                </div>
              )}
            </div>
            <div className="InputGroup">
              <Label htmlFor="userprimarycontact">Date Of Birth</Label>
              <Input
                fluid
                type="date"
                id="userDateOfBirth"
                error={errors.userDateOfBirth ? true : false}
                aria-invalid={errors.userDateOfBirth ? "true" : "false"}
                {...register("userDateOfBirth", {
                  required: {
                    value: true,
                    message: "Date Of Birth is required",
                  },
                })}
              />
              {errors.userDateOfBirth && (
                <div className="Error" role="alert">
                  {errors.userDateOfBirth.message}
                </div>
              )}
            </div>
          </div>
          <div className="InputGroup">
            <Label htmlFor="userpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="userpassword"
              error={errors.userpassword ? true : false}
              aria-invalid={errors.userpassword ? "true" : "false"}
              {...register("userpassword", {
                required: { value: true, message: "Password required" },
                minLength: {
                  value: 8,
                  message: "Minimum Length of password should be 8 characters",
                },
              })}
            />
            {errors.userpassword && (
              <div className="Error" role="alert">
                {errors.userpassword.message}
              </div>
            )}
          </div>
          <Button
            className="SubmitButton"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </LoginLayout>
  );
};

export default Register;
