import React, { useState } from "react";
import Modal from "../../Global/components/Modal/Modal";
import Input from "../../Global/components/Input/Input";
import Label from "../../Global/components/Label/Label";
import Button from "../../Global/components/Button/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../colors";
import { useForm } from "react-hook-form";

const ModalTitle = styled.div`
  font-size: 57px;
  font-weight: medium;
`;

const ModalForm = styled.form``;

const ModalBody = styled.div`
  margin-top: 30px;
`;
const InputGroup = styled.div`
  margin-bottom: 30px;
`;

const Error = styled.div`
  margin-top: 5px;
  color: ${colors.error};
`;

const EditProfileForm = ({ open, setOpen }) => {
  const [userDescription, setuserDescription] = useState("");

  const dispatch = useDispatch();
  console.log(dispatch);
  const userLogin = useSelector((state) => {
    return state.userLogin;
  });

  let responseObject = { ...userLogin.userInfo };

  console.log(responseObject);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: responseObject.name,
      dob: responseObject.dob,
      contactNumber: responseObject.contacts,
      email: responseObject.email,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    //await dispatch(updateuserDescription(id, userDescription))
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>Edit User Profile</ModalTitle>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <InputGroup>
            <Label htmlFor="fullname">Name</Label>
            <Input
              type="text"
              id="fullname"
              error={errors.name ? true : false}
              {...register("name", { required: "This field is required" })}
              fluid
            />
            <Error>{errors?.name?.message}</Error>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userEmail">Email</Label>
            <Input
              type="email"
              id="userEmail"
              {...register("email")}
              fluid
              disabled
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userDOB">Date Of Birth</Label>
            <Input
              error={errors.dob ? true : false}
              type="date"
              id="userDOB"
              fluid
              {...register("dob", { required: "This field is required" })}
            />
            <Error>{errors?.dob?.message}</Error>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userContact">Primary Number</Label>
            <Input
              type="number"
              id="userContact"
              error={errors.contactNumber ? true : false}
              fluid
              {...register("contactNumber", {
                minLength: {
                  value: 8,
                  message: "Phone number should be atleast 8 characters long",
                },
                required: "This field is required",
              })}
            />
            <Error>{errors?.contactNumber?.message}</Error>
          </InputGroup>
        </ModalBody>
        <Button type="submit" disabled={isSubmitting}>
          Update
        </Button>
      </ModalForm>
    </Modal>
  );
};

export default EditProfileForm;
