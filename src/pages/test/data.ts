const code = `#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`;
const options = ["Hello, World", "Goodbye, World", "Hello!", "World"];
export const questions = [
    {
      ansIndex: 0,
      options: options,
      index: 1,
      question: code,
      code: true,
    },
    {
      ansIndex: 3,
      options: ["int number", "float rate", "int variable_count", "int $main"],
      index: 2,
      question: "Which of the following is not a valid C variable name?",
      code: false,
    },
  ];