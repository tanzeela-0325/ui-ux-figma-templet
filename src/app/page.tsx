import DressStyle from "@/components/DressStyle";
import HappyCustomer from "@/components/HappyCoustomer";
import HeroSection from "@/components/HeroSection";
import NewArrival from "@/components/NewArrival";
import TopSalling from "@/components/TopSaling";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <br/>
      <NewArrival/>
      <br />
      <TopSalling/>
      <br />
      <DressStyle/>
      <br />
      <HappyCustomer/>
    </div>
  );
}