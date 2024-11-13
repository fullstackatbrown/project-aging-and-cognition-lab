export default function Button({ text, className }: any) {
    return (
        <button className="transition ease-in-out delay-50 hover:bg-gray-300 bg-white border border-blue-500 border-2 py-2 px-8 rounded-full text-base">{text}</button>
    )
}