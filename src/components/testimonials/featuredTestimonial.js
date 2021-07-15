import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"
import Stars from "./stars"
import Avatar from "./avatar"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
`

const Review = styled.div`
  background: var(--clr-light);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);

  p {
    font-style: italic;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--txt-dark);
`

export default function FeaturedTestimonial() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing-lg">
          <h3 className="title">featured reviews</h3>
          <div className="spacing">
            <Flex>
              <Review className="spacing">
                <Stars />
                <p>
                  "Loved Nabil. Great guy. Explained everything he did before
                  starting. Quick to call and easy to reach. Highly recommend."
                </p>
                <Avatar company="home owner in Ottawa" />
              </Review>
              <Review className="spacing">
                <Stars />
                <p>
                  "Efficient, very knowledgeable, even suggested that a new ramp
                  was not required and a simple adjustment to my old ramp to
                  level it off thus saving me money on material. Totally happy
                  with his work and would not hesitate in recommending him."
                </p>
                <Avatar company="home owner in Ottawa" />
              </Review>
              <Review className="spacing">
                <Stars />
                <p>
                  "Nabil was polite friendly and efficient. My husband and I
                  highly recommend him and will definitely have him back to do
                  more jobs."
                </p>
                <Avatar company="home owner in Ottawa" />
              </Review>
            </Flex>
            <Link className="inline-link" to="/reviews">
              View all reviews &#8594;
            </Link>
          </div>
        </Container>
      </Section>
    </Wrapper>
  )
}
