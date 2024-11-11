interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1400px] mx-auto h-auto p-2 sm:p-8 md:p-16">
      {children}
    </div>
  );
};

export default Container;
