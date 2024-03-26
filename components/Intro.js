export default function Intro() {
  return (
    <div className="flex flex-col items-center text-white justify-center p-4 h-full text-xl font-sans">
      <h2 className="text-3xl mb-2">Find your next read in seconds!</h2>
      <p>Enter your last read books or find by genre or author.</p>
      <div className="mt-2">
        All{" "}
        <span className="text-blue-400 font-mono border border-blue-400 px-2 py-1 rounded">
          AI
        </span>{" "}
        Powered!
      </div>
    </div>
  );
}
