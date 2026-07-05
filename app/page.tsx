import HomeNav from "@/components/home/HomeNav";
import HeroSection from "@/components/home/HeroSection";
import PlatformFocus from "@/components/home/PlatformFocus";
import GetToTheFSection from "@/components/home/GetToTheFSection";
import BookingSystemDemo from "@/components/home/BookingSystemDemo";
import WorkshopsMentoring from "@/components/home/WorkshopsMentoring";
import CoursesPreview from "@/components/home/CoursesPreview";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import NewsletterSection from "@/components/home/NewsletterSection";
import HomeFooter from "@/components/home/HomeFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFBF9] text-[#1C1B1A]">
      <HomeNav />
      <HeroSection />
      <PlatformFocus />
      <GetToTheFSection />
      <BookingSystemDemo />
      <WorkshopsMentoring />
      <CoursesPreview />
      <FeaturedCategories />
      <NewsletterSection />
      <HomeFooter />
    </main>
  );
}
