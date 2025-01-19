export default function Button({ text, className }: any) {
  return (
    <button className={`transition ease-in-out delay-50 text-xl ${className}`}>
      {text}
    </button>
  );
}
