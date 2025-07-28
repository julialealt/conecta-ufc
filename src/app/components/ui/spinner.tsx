export function Spinner() {
  return (
    <div className="flex justify-center items-center py-4">
      <div
        className="
          h-8 w-8
          animate-spin
          rounded-full
          border-3 border-solid border-zinc-400
          border-t-transparent
        "
      ></div>
    </div>
  );
}