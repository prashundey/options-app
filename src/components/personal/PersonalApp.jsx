import React from "react";
import { Container } from "react-bootstrap";
import { ProfileCard } from "./profile/ProfileCard";

export class PersonalApp extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <ProfileCard/>
        </Container>
      </div>
    );
  }
}

 