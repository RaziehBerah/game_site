import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardContainer from "./CardContainer";

const GameSkeleton = () => {
  return (
    <CardContainer>
      <Card>
        <Skeleton height={"200px"} />
        <SkeletonText />
      </Card>
    </CardContainer>
  );
};

export default GameSkeleton;
