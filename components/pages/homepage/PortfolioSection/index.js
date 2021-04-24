import Card from './Card'

export default function PortfolioSection() {
  return (
    <div className="pt-12 pb-12">
      <div className="flex flex-col pl-8">
        <span className="text-2xl">Good design means</span>
        <span className="text-2xl">good business</span>
      </div>
      <Card image="/smarthome.jpg" type="Full stack application" name="Smart home dashboard"/>
      <Card image="/onboard.png" type="UX/UI design" name="Onboard application"/>
      <Card image="/booking.png" type="Mobile application" name="Booking system"/>
      <Card image="/juice-product.png" type="FrontEnd application" name="Juice product homepage"/>
      <div>
        <span className="font-medium text-lg text-blue-400">see more</span>
      </div>
    </div>
  );
}
