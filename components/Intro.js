import { useState } from "react";

export default function Intro() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search query submission
    console.log("Search query:", searchQuery);
    // You can add further logic here to handle the search query, such as sending it to ChatGPT for processing.
  };

  return (
    <div className="flex flex-col items-center text-white justify-center p-4 h-full text-xl font-indieFlower">
      <div className="text-3xl">Find your next read in seconds!!</div>
      <div>Enter your last read few books or find by genre or author.</div>
      <div>
        All{" "}
        <span className="text-yellow-500 font-mono border border-yellow-500 px-2 font-normal">AI</span>{" "}
        Powered!
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for ..."
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>
    </div>
  );
}
