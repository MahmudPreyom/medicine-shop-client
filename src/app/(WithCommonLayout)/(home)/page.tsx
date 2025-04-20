
// import SearchBar from "@/components/modules/home/SearchBar";

import BrandingSection from "@/components/modules/home/BrandingSection";
import CustomerReviews from "@/components/modules/home/customerReview";
import FeaturedMedicines from "@/components/modules/home/FeaturedMedicine";
import MedicineSearchBar from "@/components/modules/home/MedicineSearchBar";

const HomePage = () => {
  return (
    <div>
      <BrandingSection />
      <MedicineSearchBar />
      <FeaturedMedicines />
      <CustomerReviews />
    </div>
  );
};

export default HomePage;
