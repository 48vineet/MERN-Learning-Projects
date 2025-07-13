import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="bg-gray-800">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="sm:ml-64">
          <Nav />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
