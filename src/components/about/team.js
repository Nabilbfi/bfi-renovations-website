import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, Flex } from "../layoutComponents"

const Employee = props => {
  return (
    <>
      <Flex>
        <img src={props.img} alt="bfi renovations team member" />
        <div>
          <p>{props.bio}</p>
          <p className="caps bold">
            {props.name}, {props.position}
          </p>
        </div>
      </Flex>
      <hr />
    </>
  )
}

export default function Team() {
  return (
    <Section>
      <Container className="spacing-lg">
        <p className="title">meet the BFI team</p>
        <div className="spacing">
          <Employee
            img={"../../images/company/nabil-khatib.png"}
            bio="this is the bio of employee 1"
            name="first last"
            position="position"
          />
          <Employee
            img="../../images/company/ph.png"
            bio="this is the bio of employee 1"
            name="first last"
            position="position"
          />
          <Employee
            img="../../images/company/ph.png"
            bio="this is the bio of employee 1"
            name="first last"
            position="position"
          />
          <Employee
            img="../../images/company/ph.png"
            bio="this is the bio of employee 1"
            name="first last"
            position="position"
          />
        </div>
      </Container>
    </Section>
  )
}
