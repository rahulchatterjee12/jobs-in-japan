// import Head from "next/head";
// import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import JobSearch from "../components/JobSearch";
import FeaturedJobs from "../components/FeaturedJobs";
import WhyWorkInJapan from "../components/WhyWorkInJapan";
import Testimonials from "../components/Testimonials";
import AdditionalInfo from "../components/AdditionalInfo";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="container">
      {/* <Head>
        <title>Work Opportunities in Japan</title>
        <meta
          name="description"
          content="Find your dream job in Japan. Browse job openings, learn about the benefits of working in Japan, and get valuable resources for job seekers."
        />
      </Head> */}
      <HeroSection />
      <JobSearch />
      <FeaturedJobs />
      <WhyWorkInJapan />
      <Testimonials />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}
