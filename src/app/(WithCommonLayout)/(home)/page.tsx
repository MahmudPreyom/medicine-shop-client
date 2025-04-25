

import BrandingSection from "@/components/modules/home/BrandingSection";
import CustomerReviews from "@/components/modules/home/customerReview";
import FeaturedMedicines from "@/components/modules/home/FeaturedMedicine";
import MedicineSearchBar from "@/components/modules/home/MedicineSearchBar";

const HomePage = async () => {
  const res = await fetch("https://medicine-shop-server-mu.vercel.app/api/medicine");
  const result = await res.json();
  const medicine = result.data;

  return (
    <div>
      <BrandingSection />
      <MedicineSearchBar />
      <FeaturedMedicines medicine={medicine} />
      <CustomerReviews />
    </div>
  );
};

export default HomePage;
