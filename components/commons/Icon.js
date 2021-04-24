import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Icon({ color="bg-green-700" }) {
  return (
    <div className={`w-16 h-16 rounded-2xl flex justify-center items-center ${color}`}>
      <span>Icon</span>
    </div>
  );
}
