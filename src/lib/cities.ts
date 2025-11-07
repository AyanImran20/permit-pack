export type CityPack = {
  city: string;
  renewalMonths: number;
  requirements: { id: string; title: string }[];
  forms: { id: string; file: string; fields: { key: string; label: string }[] }[];
};

export const CITY_PACKS: CityPack[] = [
  {
    city: "Miami, FL",
    renewalMonths: 12,
    requirements: [
      { id: "biz_tax", title: "Business Tax Receipt" },
      { id: "cert_use", title: "Certificate of Use" },
      { id: "zoning", title: "Zoning Confirmation" },
      { id: "fire", title: "Fire Safety Inspection" },
      { id: "state_tax", title: "Register for State/County Taxes" }
    ],
    forms: [
      {
        id: "miami_cert_use",
        file: "/forms/miami_certificate_of_use.pdf",
        fields: [
          { key: "owner_name", label: "Owner/LLC Name" },
          { key: "property_address", label: "Property Address" },
          { key: "contact_email", label: "Email" },
          { key: "contact_phone", label: "Phone" }
        ]
      }
    ]
  },
  {
    city: "Austin, TX",
    renewalMonths: 12,
    requirements: [
      { id: "str_license", title: "Short-Term Rental License" },
      { id: "occ_limit", title: "Occupancy Limit Disclosure" },
      { id: "smoke_detectors", title: "Smoke/CO Detectors" },
      { id: "hotel_tax", title: "Hotel Occupancy Tax Account" }
    ],
    forms: [
      {
        id: "austin_str",
        file: "/forms/austin_str_application.pdf",
        fields: [
          { key: "owner_name", label: "Owner/LLC Name" },
          { key: "property_address", label: "Property Address" },
          { key: "contact_email", label: "Email" },
          { key: "contact_phone", label: "Phone" }
        ]
      }
    ]
  },
  {
    city: "Los Angeles, CA",
    renewalMonths: 12,
    requirements: [
      { id: "home_share", title: "Home-Sharing Registration" },
      { id: "fire_extinguisher", title: "Fire Extinguisher + Placards" },
      { id: "transient_tax", title: "Transient Occupancy Tax Account" }
    ],
    forms: [
      {
        id: "la_hsr",
        file: "/forms/la_home_sharing_registration.pdf",
        fields: [
          { key: "owner_name", label: "Owner/LLC Name" },
          { key: "property_address", label: "Property Address" },
          { key: "contact_email", label: "Email" },
          { key: "contact_phone", label: "Phone" }
        ]
      }
    ]
  }
];
