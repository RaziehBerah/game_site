import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  text: string;
}
const ExpandbleText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 250;
  if (text.length <= limit) return <Text>{text}</Text>;
  const textSummerized = text.slice(0, limit) + "...";
  const visibleText = expanded ? text : textSummerized;
  return (
    <Text>
      {visibleText}
      <Button onClick={() => setExpanded(!expanded)} paddingX={"10px"} size={"xs"} colorScheme="yellow">
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandbleText;
