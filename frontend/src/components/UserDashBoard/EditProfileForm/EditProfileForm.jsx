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
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userEmail">Email</Label>
            <Input type="email" id="userEmail" fluid disabled />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userDOB">Date Of Birth</Label>
            <Input />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userContact">Primary Number</Label>
            <Input type="number" id="userContact" />
          </InputGroup>
        </ModalBody>
        <Button type="submit" disabled="">
          Update
        </Button>
      </ModalForm>
    </Modal>
  );
};

export default EditProfileForm;
