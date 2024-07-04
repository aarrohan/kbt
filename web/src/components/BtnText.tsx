export default function BtnText({ color, text }: IBtnText) {
  return (
    <button
      className={`group flex items-center gap-3 text-xs font-medium uppercase tracking-[1.5px] ${
        color === "white" ? "text-white" : "text-dark"
      }`}
    >
      <span
        className={`w-[20px] group-hover:w-[10px] h-[1px] ${
          color === "white" ? "bg-white" : "bg-dark"
        } duration-300`}
      ></span>
      {text}
    </button>
  );
}
