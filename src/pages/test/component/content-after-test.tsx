import Container from "../../../components/container";

interface ContentAfterTestProps {
  totalMarks: number;
  obtainedMarks: number;
  name: string;
}

const ContentAfterTest = ({
  totalMarks,
  obtainedMarks,
  name,
}: ContentAfterTestProps) => {
  return (
    <Container>
      <div>{totalMarks}</div>
      <div>{obtainedMarks}</div>
      <p>{name}</p>
    </Container>
  );
};

export default ContentAfterTest;
