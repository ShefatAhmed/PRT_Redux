import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const {count} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen flex justify-center items-center bg-red-50">
      <div className="flex items-center p-5 rounded-2xl gap-5">
        <button
          onClick={() => dispatch(increment())}
          className="bg-amber-300 text-5xl rounded-full p-5"
        >
          Increment
        </button>
        <h1 className="text-amber-950">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-blue-300 text-5xl rounded-full p-5"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
