export default function TeamSection() {
  return (
    <div className="pt-12 pb-12">
      <span className="font-medium text-lg text-red-400">Meet the team</span>
      <div className="flex flex-col">
        <span className="text-4xl">We are chilled</span>
        <span className="text-4xl">and a laidback</span>
        <span className="text-4xl">team</span>
      </div>
      <div className="flex flex-col">
        <span className="">Lorem ipsum dolor sit amet,</span>
        <span className="">consectetur adipiscing elit.</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <img src="/person1.png" alt="person1" className="rounded-3xl w-full col-start-2 col-end-3 row-start-1 row-end-3" />
        <img src="/person3.png" alt="person3" className="rounded-3xl w-full col-start-1 col-end-2 row-start-2 row-end-4" />
        <img src="/person2.png" alt="person2" className="rounded-3xl w-full col-start-2 col-end-3 row-start-3 row-end-5" />
      </div>
    </div>
  );
}
