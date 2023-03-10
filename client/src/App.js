// Using Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// Importing all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";

// Renders the "Navbar" and our 2 elements: "Create" and "RecordList"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/record" element={<RecordList />} />
      </Routes>
    </div>
  );
};

export default App;
