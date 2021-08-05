const people = [
  { name: "arnob", year: 2009 },
  { name: "animesh", year: 2009 },
  { name: "anupom", year: 2009 },
  { name: "anirban", year: 1996 },
];
const comments = [
  { text: "loved it", id: 28467 },
  { text: "Nailed it man", id: 45672 },
  { text: "that was great", id: 78345 },
  { text: "appreciate that", id: 65348 },
];
const index = comments.findIndex((comment) => {
  if (comment.id == 45672) {
    return true;
  }
});
console.log({ index });
const newComments = [...comments.slice(0, index), ...comments.slice(1)];
console.table(newComments);
