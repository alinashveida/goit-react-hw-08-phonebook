import React from "react";
import { Container, ErrorText } from "./Error.styled";
import { MdError } from "react-icons/md";

export default function Error() {
  return (
    <Container>
      <ErrorText>
        <MdError size="20px" /> Oops something went wrong :( Try again!
      </ErrorText>
    </Container>
  );
}
