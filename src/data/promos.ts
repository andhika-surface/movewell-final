export interface Rate {
  duration: string;
  price: string;
  regularPrice: string;
}

export interface VoucherPack {
  title: string;
  price: string;
  pricePerSession: string;
}

export interface PromoData {
  header: {
    title: string;
    subtitle: string;
    location: string;
    period: string;
    booking: string;
  };
  openingRates: Rate[];
  voucherPacks: VoucherPack[];
  voucherFlexibility: string[];
}

export const promosData: PromoData = {
  header: {
    title: "Movewell Recovery Opening Promo",
    subtitle: "Founding Month Special!",
    location: "Padel Pro Signature, Permata Hijau",
    period: "Valid for first 30 days after opening.",
    booking: "Via WhatsApp only — limited daily slots."
  },
  openingRates: [
    {
      duration: "15 minutes",
      price: "IDR 80K",
      regularPrice: "90k"
    },
    {
      duration: "30 minutes",
      price: "IDR 150K",
      regularPrice: "175k"
    },
    {
      duration: "60 minutes",
      price: "IDR 280K",
      regularPrice: "325k"
    },
    {
      duration: "90 minutes",
      price: "IDR 420K",
      regularPrice: "485k"
    }
  ],
  voucherPacks: [
    {
      title: "10 sessions (30 min each)",
      price: "IDR 1.4M",
      pricePerSession: "IDR 140k per session"
    },
    {
      title: "20 sessions (30 min each)",
      price: "IDR 2.7M",
      pricePerSession: "IDR 135k per session"
    }
  ],
  voucherFlexibility: [
    "1 voucher = 30 min (or 15 min before + 15 min after workout)",
    "2 vouchers = 60 min",
    "3 vouchers = 90 min"
  ]
};
