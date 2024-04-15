import BlogSection from "@/components/Blogs/BlogSection";
import ContactSection from "@/components/Contact/ContactSection";
import FooterSection from "@/components/Footer/FooterSection";
import HeroSection from "@/components/Hero/HeroSection";
import HeroCategoryCards from "@/components/HeroCategoryCards/HeroCategoryCards";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import ProductsAndServices from "@/components/ProductsAndServices/ProductsAndServices";
import SolutionsSection from "@/components/Solutions/SolutionsSection";

export default function Home() {
  return (
    <main className="">
      <nav className="fixed top-0 w-full h-36 z-50">
        <NavbarComponent/>
      </nav>
      <section className="h-[50vh] bg-slate-200">
        <HeroSection/>
      </section>
      <section className="h-[50vh] bg-slate-200">
        <HeroCategoryCards/>
      </section>
      <section className="h-[50vh] bg-slate-200">
        <SolutionsSection/>
      </section>
      <section className="h-[50vh] bg-slate-200">
        <ProductsAndServices/>
      </section>
      <section className="h-[50vh] bg-slate-200">
        <BlogSection/>
      </section>
      <section className="h-[50vh] bg-slate-200">
        <ContactSection/>
      </section>
      <section className="h-[50vh] bg-slate-200">
        <FooterSection/>
      </section>
    </main>
  );
}
