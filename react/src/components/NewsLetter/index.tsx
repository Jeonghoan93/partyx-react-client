import {
  CheckBoxGroup,
  Container,
  Form,
  FormButton,
  FormLabel,
  Input,
  InputGroup,
  SubTitle,
  Title,
} from "./styles";

type Props = {
  emailPlaceholder?: string;
  buttonText?: string;
  checkboxLabel?: string;
  mainTitle?: string;
  subTitle?: string;
};

const NewsLetter: React.FC<Props> = ({
  emailPlaceholder = "Your email",
  buttonText = "Subscribe",
  checkboxLabel = "Send me a link to get the FREE PartyX app!",
  mainTitle = "Save time, save money!",
  subTitle = "Sign up and we'll send the best deals to you",
}) => {
  return (
    <Container>
      <Title>{mainTitle}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Form>
        <InputGroup>
          <Input type="email" placeholder={emailPlaceholder} />
          <FormButton>{buttonText}</FormButton>
        </InputGroup>
        <CheckBoxGroup>
          <Input type="checkbox" />
          <FormLabel>{checkboxLabel}</FormLabel>
        </CheckBoxGroup>
      </Form>
    </Container>
  );
};

export default NewsLetter;
