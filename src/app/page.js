import HeroSection from "../components/Home/HeroSection";
import JobSearch from "../components/Home/JobSearch";
import FeaturedJobs from "../components/Home/FeaturedJobs";
import WhyWorkInJapan from "../components/Home/WhyWorkInJapan";
import Testimonials from "../components/Home/Testimonials";
import AdditionalInfo from "../components/Home/AdditionalInfo";
import Footer from "../components/Layout/Footer";

export default function HomePage() {
  return (
    <div className="container">
      <HeroSection />
      <JobSearch />
      <FeaturedJobs />
      <WhyWorkInJapan />
      <Testimonials />
      <AdditionalInfo />
    </div>
  );
}
