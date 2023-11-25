import React from "react";
import Input from "../Global/components/Input/Input";
import Label from "../Global/components/Label/Label";
import Modal from "../Global/components/Modal/Modal";
import Button from "../Global/components/Button/Button";
import styled from "styled-components";
import TextArea from "../Global/components/TextArea/TextArea";

const InputGroup = styled.div`
  margin-bottom: 30px;
`;

const ModalTitle = styled.div`
  font-size: 57px;
  font-font-weight: medium;
`;
const ModalForm = styled.form``;

const ModalBody = styled.div`
  margin-top: 30px;
`;

function AppointmentButton({ open, setOpen }) {
  return (
    <Modal size="lg t" fullscreen={fullscreen} open={open} setOpen={setOpen}>
      <ModalTitle>Appointment Form</ModalTitle>
      <ModalForm onSubmit={submitAppointment}>
        <ModalBody>
          <InputGroup>
            <Label>Name</Label>
            <Input type="text" fluid placeholder="name" ref={name} />
          </InputGroup>
          <InputGroup>
            <Label>Age</Label>
            <Input type="number" placeholder="Age" ref={age} fluid />
          </InputGroup>
          <InputGroup>
            <Label>Services</Label>
            <Input fluid type="text" ref={services} placeholder="services" />
          </InputGroup>

          <InputGroup>
            <Label>Address</Label>
            <Input type="text" fluid placeholder="address" ref={location} />
          </InputGroup>
          <InputGroup>
            <Label>Date</Label>
            <Input type="date" fluid ref={date} />
          </InputGroup>
          <InputGroup>
            <Label>Time</Label>
            <Input type="time" fluid ref={time} />
          </InputGroup>
          <InputGroup>
            <Label>Contact</Label>
            <Input type="number" ref={contact} fluid placeholder="9967313931" />
          </InputGroup>

          <InputGroup>
            <Label>Description</Label>
            <br />
            <TextArea name="description" id="desc" ref={desc} fluid />
          </InputGroup>
          <Button disabled={isSubmitting}>Apply Apointments</Button>
        </ModalBody>
      </ModalForm>
    </Modal>
  );
}

export default AppointmentButton;
