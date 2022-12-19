import styled from "styled-components";

const AnimalCard = ({ animal }) => {
    return (
        <Wrapper background={animal.photo.file.url}>
            <TextContainer>
                <Title>{animal.name}</Title>
            </TextContainer>
        </Wrapper>
    );
};

export default AnimalCard;

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 300px;
  height: 300px;
  margin-left: 300px;
  margin-top: 50px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
        props.background && `url(${props.background}) center no-repeat`};
`;

const TextContainer = styled.div`
  cursor: pointer;
  display: grid;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  gap: 10px;

  :hover {
    height: fit-content;
    width: auto;

    p:last-child {
      visibility: visible;
      display: block;
    }
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 0px;
`;