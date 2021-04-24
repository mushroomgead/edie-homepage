import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Icon({ color="bg-green-700", name }) {
  return (
    <div className={`w-16 h-16 rounded-2xl flex justify-center items-center material-icons ${color}`}>
      <span className="material-icons text-white">{name}</span>
    </div>
  );
}
