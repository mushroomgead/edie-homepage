export default function ContactButton() {
  return (
    <div className="flex flex-col">
      <span className="text-xs pb-1.5">Want us to contact you?</span>
      <div className="bg-gray-100 rounded-xl w-full flex flex-row justify-between p-1.5">
        <input name="contact" placeholder="Email" className="bg-gray-100 pl-3.5" />
        <button className="bg-blue-500 rounded-xl w-20 h-11">
          <span className="text-white">Join</span>
        </button>
      </div>
    </div>
  );
}
