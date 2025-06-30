export default function ClickButton({ onClick }) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded
                 hover:bg-blue-600 active:scale-95 transition-transform duration-100"
      onClick={onClick}
    >
      Click Me!
    </button>
  );
}