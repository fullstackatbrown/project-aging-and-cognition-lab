export default function Button({ text, className }: any) {
    return (
        <button className="transition ease-in-out delay-50 hover:bg-gray-300 bg-white border border-cyan-600 border-2 py-3 px-10 rounded-full text-xl">{text}</button>
    )
}