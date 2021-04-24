import ContactButton from '../../../commons/ContactButton'

export default function IntroSection() {
  return (
    <div className="pt-12 pb-12">
      <div className="flex flex-col pl-8 pb-3.5">
        <span className="text-sm text-blue-400">Unhappy with your website?</span>
          <span className="text-2xl">We create beautiful</span>
          <span className="text-2xl">and fast web services</span>
      </div>
      <img src="/heroImage.jpg" alt="Hero Image" className="rounded-2xl"/>
      <div className="pl-8 pr-14">
        <div className="flex flex-col pt-5 pb-8">
          <span className="text-2xl">Story, emotion</span>
          <span className="text-2xl">and purpose</span>
        </div>
        <div className="pb-8">
          <span className="text-sm">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </span>
        </div>
        <ContactButton />
      </div>
    </div>
  );
}
