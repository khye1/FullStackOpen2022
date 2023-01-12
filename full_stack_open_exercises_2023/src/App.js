//* Import Components 

//! Part 1 Components Start
import Intro_to_React from "./part1/courseinfo/Intro_to_React";
import Exercise1_1to2 from "./part1/courseinfo/Exercise1_1to2";
import Exercise1_3to5 from "./part1/courseinfo/Exercise1_3to5";
import Exercises1_6to11 from "./part1/unicafe/Exercises1_6to11";
import Exercises1_12to14 from "./part1/anedotes/Exercises1_12to14";



//! Part 1 Components End

//* Import Components Ends

const Header = props =>
  <h1>
    {props.course}
  </h1>;

const Part = props =>
  <p>{props.part} {props.exercise}</p>;

const Content = props =>
  <>
    <Part part={props.part1} exercise={props.exercises1} />
    <Part part={props.part2} exercise={props.exercises2} />
    <Part part={props.part3} exercise={props.exercises3} />
  </>;


const Total = props => {
  <p>Number of exercises {props.total}</p>;
};



//! Part 1 Ends



function App() {


  //* Part 1 Intro to React
  console.log("hello from components");
  const now = new Date();
  const a = 10;
  const b = 20;
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  //* Part 1 Ends

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];


  return (
    <>
      <div className="App">

        {/* Part 1 Starts */}

        <Intro_to_React />
        <section className="introReact">
          <h2>Part 1</h2>
          <p>{a} plus {b} is {a + b}</p>
        </section>

        <div>
          <Exercise1_1to2 anecdotes={anecdotes} />
          <Header course={course} />
          <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
          <Total total={exercises1 + exercises2 + exercises3} />
        </div>

        <Exercise1_3to5 />

        <Exercises1_6to11 />
        
        <Exercises1_12to14 anecdotes={anecdotes} /> 

        {/* Part 1 Ends */}
      </div>
    </>
  );
}

export default App;
