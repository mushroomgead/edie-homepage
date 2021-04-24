import Card from "./Card";
import Icon from "../../../commons/Icon";

export default function ServicesSection() {
  return (
    <div className="pt-12 pb-12">
      <div className="flex flex-col pl-8 pb-12">
        <span className="text-2xl">We offer high</span>
        <span className="text-2xl">demand services</span>
      </div>
      <Card
        icon={<Icon color="bg-blue-500" name="edit" />}
        header="UI/UX Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
      />
      <Card
        bordered
        icon={<Icon color="bg-green-500" name="code" />}
        header="Front End"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
      />
      <Card
        icon={<Icon color="bg-red-500" name="storage" />}
        header="Back End"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
      />
    </div>
  );
}
