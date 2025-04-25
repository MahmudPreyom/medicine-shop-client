export type TMedicine = {
    _id: string;
    name: string;
    company: string;
    image: string;
    price: number;
    type: string;
    symptoms: string[];
    description: string;
    quantity: number;
    inStock: boolean;
    prescriptionRequired: boolean;
    expiryDate: Date;
    manufacturerDetails?: string;
  };

  export type Medicine = {
    _id: string;
    name: string;
    company: string;
    image: string;
    price: number;
    type: string;
    symptoms: string[];
    description: string;
    quantity: number;
    inStock: boolean;
    prescriptionRequired: boolean;
    manufactureDetails: string;
    expiryDate: string;
  };
  