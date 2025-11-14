import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import CustomersSection from '@/components/sections/CustomersSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <CustomersSection />
      <Footer />
    </main>
  );
}
