import Header from "@/components/header/Header";
import SecInformation from "@/components/SecInformation/SecInformation";
import Footer from "@components/footer/Footer";
import SecIndustries from "@components/SecIndustries/SecIndustries";
import SecMap from "@components/SecMap/SecMap";
import SecMarquee from "@components/SecMarquee";
import SecParticipants from "@components/SecParticipants/SecParticipants";
import SecQuestion from "@components/SecQuestion/SecQuestion";
import SecReason from "@components/SecReason/SecReason";
import SecSlider from "@components/SecSlider/SecSlider";
import SecTimeline from "@components/SecTimeline/SecTimeline";

export default function Home() {
  return (
    <>
      <Header />
      <SecMarquee />
      <SecInformation />
      <SecParticipants />
      <SecReason />
      <SecIndustries />
      <SecTimeline />
      <SecSlider />
      <section
        className="bg-repeat mt-[-6rem] pt-[5rem]"
        style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
      >
        <SecQuestion />
        <SecMap />
        <Footer />
      </section>
    </>
  );
}
