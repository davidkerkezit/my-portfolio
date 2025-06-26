import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageBubbleIcon,
} from "../assets/icons/icons";
import tw from "twin.macro";

const Container = tw.div`md:pb-8 lg:pb-28 pt-8 lg:pt-14 w-full flex mx-auto flex-col lg:flex-row px-4 max-w-[800px] lg:max-w-[1000px] pb-20`;
const LeftSection = tw.div`w-full `;
const Title = tw.p`uppercase font-semibold text-2xl mb-3 lg:mb-6`;
const SubTitleContainer = tw.div`flex gap-2.5 mb-5 lg:mb-8`;
const SubTitle = tw.p`uppercase font-thin`;
const ContactRow = tw.div`flex justify-between`;
const ContactBlock = tw.div``;
const ContactTitle = tw.p`text-xl uppercase font-light mb-1.5`;
const EmailLink = tw.a`text-orange-light text-sm bg-[#1A1A18] py-1.5 w-max px-3 rounded-md `;

const SocialsContainer = tw.div`flex gap-3 mt-1 items-center bg-[#1A1A18] py-[5px] w-max px-3 rounded-md`;
const SocialBlock = tw.div``;
const SocialTitle = tw.p`text-xl uppercase font-light mr-12`;

const FormContainer = tw.div`w-full mt-4 lg:mt-0 `;
const FormTitle = tw.p`text-xl uppercase font-light mb-2 mt-0.5`;
const Form = tw.form`flex flex-col w-[90%]`;
const Label = tw.label`ml-2 -mb-1.5  bg-black w-max bg-primary z-10 px-2 font-light text-sm`;
const Input = tw.input`bg-transparent border border-[#b3b3b3] rounded-md outline-none px-2 py-0.5 font-light   tracking-wide`;

const Button = tw.button`uppercase text-base font-light mt-7 border border-white w-max px-10 py-1 mx-auto relative overflow-hidden`;
const ButtonOverlay = tw.div`w-[1000px] h-[1000px] absolute rotate-45 bg-orange-500 duration-300 ease-in-out`;
const ButtonText = tw.p`z-10 relative`;

function Contact({ contactRef }) {
  const [test, setTest] = useState(false);
  const hoverHandler = () => {
    setTest(true);
  };
  const drugiHandler = () => {
    setTest(false);
  };

  return (
    <Container ref={contactRef}>
      <LeftSection>
        <Title
          style={{
            background: "linear-gradient(to right, #e64b10, #db9276)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Do you have a project to discuss?
        </Title>
        <SubTitleContainer>
          <SubTitle>Get in touch</SubTitle>
          <MessageBubbleIcon width={17} />
        </SubTitleContainer>
        <ContactRow>
          <ContactBlock>
            <ContactTitle>Contact</ContactTitle>
            <EmailLink href="mailto:davidkerkez@gmail.com">
              davidkerkez@gmail.com
            </EmailLink>
          </ContactBlock>
          <SocialBlock>
            <SocialTitle>Social Media</SocialTitle>
            <SocialsContainer>
              <a
                href="https://www.linkedin.com/in/davidkerkez/"
                target="_blank"
              >
                <LinkedinIcon width={18} height={18} color="#F36C38" />
              </a>
              <div className="h-5 w-[1px] bg-orange-900" />
              <a href="https://www.instagram.com/david.kerkez/" target="_blank">
                <InstagramIcon width={18} height={18} color="#F36C38" />
              </a>
              <div className="h-5 w-[1px] bg-orange-900" />

              <a href="https://www.facebook.com/djdavidkerkez" target="_blank">
                <FacebookIcon width={18} height={18} color="#F36C38" />
              </a>
            </SocialsContainer>
          </SocialBlock>
        </ContactRow>
      </LeftSection>

      <FormContainer>
        <FormTitle>Contact Form</FormTitle>
        <Form>
          <Label>Name</Label>
          <Input type="text" />
          <Label className="mt-2.5">Email</Label>
          <Input type="text" />
          <Label className="mt-2.5">Message</Label>
          <Input type="text" />
          <Button>
            <ButtonOverlay
              className={
                test
                  ? `-left-[200px] top-[-200px]`
                  : `-left-[800px] top-[-70px]`
              }
            />
            <ButtonText>Send</ButtonText>
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Contact;
