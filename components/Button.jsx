export default function Button(props) {
  return (
    <button
      className="text-white bg-red-500 text-sm py-1 px-2  sm:text-lg sm:py-1 sm:px-4 cursor-pointer disabled:bg-red-900 hover:bg-red-600 rounded-lg"
      onClick={props.func}
      disabled={props.counter > 0 ? false : true}
    >
      {props.text}
    </button>
  );
}
