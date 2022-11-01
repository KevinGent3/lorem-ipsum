import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Content
        title={"Lorem"}
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolor consectetur officiis voluptas, reprehenderit illum aut eligendi laborum aperiam maiores et tempora explicabo, quibusdam earum totam pariatur dolores temporibus iste!"
        }
      />
      <Content
        title={"Ipsum"}
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolor consectetur officiis voluptas, reprehenderit illum aut eligendi laborum aperiam maiores et tempora explicabo, quibusdam earum totam pariatur dolores temporibus iste!"
        }
      />
    </>
  );
}
export default App;
