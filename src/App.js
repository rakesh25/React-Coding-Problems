import "./styles.css";
import ReusableStateLogic from "./components/ReusableStateLogic";
import Consumer from "./Consumer";

export default function App() {
  return (
    <div className="App">
      {/* <ReusableStateLogic
        render={(event) => (
          <Consumer clientX={event.clientX} clientY={event.clientY} />
        )}
      /> */}
      <ReusableStateLogic>
        {/**
          Render props passes as children
        */}
        {(props) => <Consumer {...props} />}
      </ReusableStateLogic>
    </div>
  );
}
