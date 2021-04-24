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
      <div className="flex flex-row pb-16">
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/instagram.svg" className="mr-2" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src="/linkedin.svg" className="mr-2" />
        </a>

        <a href="https://twitter.com/" target="_blank">
          <img src="/twitter.svg" className="mr-2" />
        </a>
      </div>
      <ContactButton />
      <span className="pt-36">created by kate - devChallenges.io</span>
    </footer>
  );
}
