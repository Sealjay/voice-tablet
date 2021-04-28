export default function CornerButton(props) {
  return <button
    type="button"
    onClick={props.onClick}
    className="items-center ml-2 p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
                    <props.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
  </button>;
}