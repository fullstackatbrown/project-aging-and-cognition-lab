export default function Button({ text, className }: any) {
    return (
        <button className="transition ease-in-out delay-50 hover:bg-gray-300 bg-gray-200 p-2 rounded-md">{text}</button>
    )
}