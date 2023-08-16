import React, { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <Controls>
        <IconButton onClick={onReduce}>
          <AiOutlineMinus />
        </IconButton>
        <Value>{value}</Value>
        <IconButton onClick={onAdd}>
          <AiOutlinePlus />
        </IconButton>
      </Controls>
    </Container>
  );
};

export default Counter;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Subtitle = styled.div`
  font-weight: 300;
  color: #9ca3af; // Corresponds to text-gray-600 in Tailwind
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.div`
  width: 40px; // w-10 in Tailwind
  height: 40px; // h-10 in Tailwind
  border-radius: 50%;
  border: 1px solid #d1d5db; // Corresponds to border-neutral-400 in Tailwind
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af; // Corresponds to text-neutral-600 in Tailwind
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Value = styled.div`
  font-weight: 300;
  font-size: 1.25rem; // text-xl in Tailwind
  color: #9ca3af; // Corresponds to text-neutral-600 in Tailwind
`;
