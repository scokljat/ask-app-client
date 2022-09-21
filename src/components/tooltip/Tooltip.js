import { Wrapper, Text } from "./TooltipStyle";

const Tooltip = ({ tooltipIsVisible }) => {
  return (
    <>
      {tooltipIsVisible && (
        <Wrapper>
          <Text>Click for more information</Text>
        </Wrapper>
      )}
    </>
  );
};

export default Tooltip;
