import { Group } from "../../interfaces/search";
import {
  Container,
  Counter,
  CounterButton,
  CounterText,
  Item,
  Title,
} from "./styles";

type Props = {
  group: Group;
  setGroup: React.Dispatch<Group>;
};

const GroupCounter = ({ group, setGroup }: Props) => {
  const handleChange = (propName: "adults", isIncrement = false) => {
    setGroup({
      ...group,
      [propName]: isIncrement ? group[propName] + 1 : group[propName] - 1,
    });
  };

  return (
    <Container>
      <Item>
        <Title>Adults</Title>
        <Counter>
          <CounterButton
            type="button"
            onClick={() => handleChange("adults")}
            disabled={group.adults <= 1}
          >
            -
          </CounterButton>
          <CounterText>{group.adults}</CounterText>
          <CounterButton
            type="button"
            onClick={() => handleChange("adults", true)}
          >
            +
          </CounterButton>
        </Counter>
      </Item>
    </Container>
  );
};

export default GroupCounter;
