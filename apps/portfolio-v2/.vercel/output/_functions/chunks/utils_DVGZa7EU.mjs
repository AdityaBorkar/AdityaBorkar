import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const SOCIALS = {
  // TODO: Make sure to use this property and avoid hard-coded links at all costs
  image: "https://adityaborkar.com/aditya-borkar.png",
  linkedin: "https://www.linkedin.com/in/adityab-tech/",
  strava: "https://www.strava.com/athletes/adityab-borkar",
  github: "https://github.com/MrAdityaBorkar",
  email: "hi@adityaborkar.com"
};

const Person_AdityaBorkar = {
  "@id": "https://adityaborkar.com/about",
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Borkar",
  honorificPrefix: "Mr.",
  familyName: "Borkar",
  givenName: "Aditya",
  gender: "Male",
  alternateName: "Adi Borkar",
  additionalName: "Aditya Sanjay Borkar",
  brand: "Aditya Borkar",
  description: "Aditya Borkar is a software engineer and entrepreneur.",
  image: SOCIALS.image,
  sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.strava],
  url: "https://adityaborkar.com/about",
  mainEntityOfPage: "https://adityaborkar.com/about",
  email: SOCIALS.email,
  contactPoint: {
    "@type": "ContactPoint",
    email: SOCIALS.email
  },
  workLocation: [
    {
      "@type": "Place",
      name: "Remote"
    },
    {
      "@type": "Place",
      name: "Mumbai, India"
    }
  ],
  jobTitle: "Software Engineer",
  knowsAbout: "",
  owns: [
    {
      "@type": "OwnershipInfo",
      name: "Platipie",
      url: "https://platipie.com",
      ownedFrom: ""
    }
    // {
    //   '@type': 'OwnershipInfo',
    //   name: 'Replocal',
    //   url: 'https://replocal.app',
    //   ownedFrom: '',
    // },
    // {
    //   '@type': 'OwnershipInfo',
    //   name: 'DynamoDB SDK',
    //   url: 'https://dynamodb-sdk.com',
    //   ownedFrom: '',
    // },
    // {
    //   '@type': 'OwnershipInfo',
    //   name: 'Vasundhara Transport Service',
    //   url: 'https://vasundhara.cc',
    //   ownedFrom: '',
    // },
  ],
  //   hasCredential: '',
  //   alumniOf: '',
  //   award: '',
  //   knows: '',
  //   funder: '',
  //   funding: '',
  //   sponser: '',
  //   "hasOfferCatalog"
  makesOffer: {
    "@type": "Offer",
    name: "Software Development Services",
    alternateName: "Software Development Services",
    description: "Custom software development services",
    url: "https://adityaborkar.com/services",
    mainEntityOfPage: "https://adityaborkar.com/services",
    // acceptedPaymentMethod: {
    //   '@type': 'PaymentMethod',
    //   name: 'Credit Card',
    // },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1"
    }
    // review
  }
  //   https://schema.org/docs/actions.html
  //   ConsumeAction: 'viewers'
  //   AchieveAction
  // AssessAction
  // ControlAction
  // CreateAction
  // FindAction
  // InteractAction
  // MoveAction
  // OrganizeAction
  // PlayAction
  // SearchAction
  // SeekToAction
  // SolveMathAction
  // TradeAction
  // TransferAction
  // UpdateAction
  // 'potentialAction'
};
const Contact_AdityaBorkar = {
  "@id": "https://adityaborkar.com/contact",
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  name: "Contact",
  url: "https://adityaborkar.com/contact",
  email: SOCIALS.email,
  // telephone
  // areaServed: 'US',
  // contactOption: 'TollFree',
  availableLanguage: ["English"],
  contactType: "Customer Service"
};

const SCHEMA_MARKUPS = {
  // Organization
  person: Person_AdityaBorkar,
  contact: Contact_AdityaBorkar
  //   SameAs (within Person or ContactPoint)
  //   Specify your social media profiles or professional links for better verification.
  // SocialMediaPosting (if social media links are provided)
  //   Logo
  // Email
  // Telephone
  // PostalAddress
  // Place (optional, for location data)
  // GeoCoordinates (optional, if location details are shared)
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const getSchemaMarkup = (type) => SCHEMA_MARKUPS[type];

export { cn as c, getSchemaMarkup as g };
