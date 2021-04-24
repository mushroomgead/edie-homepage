export default function Card({ icon, header, description, bordered }) {
  const borderedStyle = bordered ? "rounded-3xl shadow-lg" : "";
  return (
    <div
      className={`pt-12 pb-12 flex flex-col items-start bg-white px-8 py-6 my-6 ${borderedStyle}`}
    >
      {icon}
      <span className="text-2xl font-bold py-8">{header}</span>
      <span className="text-base pb-7">{description}</span>
      <button className="text-base py-2 px-3.5 bg-gray-200 text-gray-500 rounded-xl">Get started</button>
    </div>
  );
}
