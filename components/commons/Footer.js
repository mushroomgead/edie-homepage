import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <footer className="bg-gray-900 text-white flex flex-col pt-8 pb-6 px-12">
      <div className="flex flex-col pb-16">
        <span>Home</span>
        <span>Services</span>
        <span>Our Works</span>
        <span>Clients</span>
        <span>Contact</span>
      </div>
      <Logo />
      <div className="pb-16">
        <span>ig</span>
        <span>linkedin</span>
        <span>tw</span>
      </div>
      <ContactButton />
      <span className="pt-36">created by kate - devChallenges.io</span>
    </footer>
  );
}
