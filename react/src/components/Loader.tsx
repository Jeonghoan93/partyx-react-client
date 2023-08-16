import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <PuffLoader size={100} color="red" />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
