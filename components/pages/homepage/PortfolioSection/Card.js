export default function Card({ image, type, name }) {
  return (
    <div className="pt-12">
      <img src={image} alt={name} className="rounded-2xl" />
      <div className="flex flex-col">
        <span className="pt-2 font-light text-gray-400 text-sm">{type}</span>
        <span className="font-medium text-lg">{name}</span>
      </div>
    </div>
  );
}
