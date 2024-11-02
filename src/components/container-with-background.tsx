import React from "react";
import Container from "./container";

interface ContainerWithBackgroundProps {
  children: React.ReactElement;
}

const ContainerWithBackground = ({
  children,
}: ContainerWithBackgroundProps) => {
  return (
    <div
      className="flex flex-col gap-6 h-40
      bg-yellow-pattern bg-no-repeat bg-cover
      relative"
    >
      <div className="absolute inset-0 z-20">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default ContainerWithBackground;
