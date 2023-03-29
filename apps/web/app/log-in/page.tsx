"use client";

import { Field, Form } from "houseform";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorMessage, Button, Input } from "ui";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 0 auto;
  padding-top: 10rem;
  width: 416px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    width: 90%;
    padding-top: 8rem;
  }
`;

const FieldsWrapper = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 5;
`;

export default function LogInPage() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");

  const closeErrorMessage = (): void => {
    setErrMsg("")
  }

  return (
      <Form
        onSubmit={(values) => {
          values.email === "smutnarzaba@png.pl" &&
          values.password === "frytki123"
            ? router.push("/")
            : setErrMsg("Invalid credentials. Please try again.");
        }}
      >
        {({ submit }) => (
          <FormWrapper>
            {errMsg && (
              <ErrorWrapper>
                <ErrorMessage message={errMsg} onClose={closeErrorMessage} />
              </ErrorWrapper>
            )}
            <FieldsWrapper>
              <Field name="email">
                {({ value, setValue }) => (
                  <Input
                    label="Email"
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onFocus={closeErrorMessage}
                    onInputCleared={() => setValue("")}
                  />
                )}
              </Field>
              <Field name="password">
                {({ value, setValue }) => (
                  <Input
                    type="password"
                    label="Password"
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onFocus={closeErrorMessage}
                  />
                )}
              </Field>
            </FieldsWrapper>
            <Button onClick={submit}>Log In</Button>
          </FormWrapper>
        )}
      </Form>
  );
}

