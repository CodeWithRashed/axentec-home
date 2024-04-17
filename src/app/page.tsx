import About from "@/components/About/About";
import BlogSection from "@/components/Blogs/BlogSection";
import ClientPortfolio from "@/components/ClientPortfolio/ClientPortfolio";
import ContactSection from "@/components/Contact/ContactSection";
import FooterSection from "@/components/Footer/FooterSection";
import HeroSection from "@/components/Hero/HeroSection";
import HeroCategoryCards from "@/components/HeroCategoryCards/HeroCategoryCards";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import ProductsAndServices from "@/components/ProductsAndServices/ProductsAndServices";
import SolutionsSection from "@/components/Solutions/SolutionsSection";

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <nav className="fixed top-0 w-full h-36 z-50">
        <NavbarComponent />
      </nav>
      <section>
        <HeroSection />
      </section>
      <section>
        <SolutionsSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <ClientPortfolio />
      </section>
      <section>
        <ProductsAndServices />
      </section>
      <section>
        <BlogSection />
      </section>
      <section>
        <ContactSection />
      </section>
      <section>
        <FooterSection />
      </section>
    </main>
  );
}
