interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className=" text-center text-4xl font-bold text-activeBlue">{title}</h1>
  );
};

export default Header;
