import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "@components/Home";
import Chat from "@components/Chat/Chat";
import socketIO from "socket.io-client";

const socket = socketIO("http://localhost:82");

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<Chat socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
