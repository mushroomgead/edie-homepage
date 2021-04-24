export default function TestimonialSection() {
  const content =
    "“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”";
  const image = "/person4.png";
  const name = "Carlos Tran";
  const position = "The Decorate Gatsby";

  return (
    <div className="pt-12 pb-12">
      <div className="pb-5 font-medium text-2xl">{content}</div>
      <div className="flex flex-row">
        <img src={image} alt={name} className="w-32 rounded-2xl"/>
        <div className="flex flex-col pl-8 justify-center">
          <span className="pb-5 font-medium text-2xl">{name}</span>
          <span className="pb-5 font-medium text-lg text-gray-400">{position}</span>
        </div>
      </div>
    </div>
  );
}
