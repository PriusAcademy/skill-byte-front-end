import React from "react";
import Container from "./container";

interface ContainerWithBackgroundProps {
  children: React.ReactNode;
}

const ContainerWithBackground = ({
  children,
}: ContainerWithBackgroundProps) => {
  return (
    <>
      <div className="flex flex-col gap-6 h-40 bg-yellow-pattern bg-no-repeat bg-cover" />
      <Container>
        <div className="relative -top-40">
          <div className="">{children}</div>
        </div>
      </Container>
    </>
  );
};

export default ContainerWithBackground;
