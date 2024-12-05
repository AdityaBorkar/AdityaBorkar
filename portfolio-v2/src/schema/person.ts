import type { Person, WithContext } from 'schema-dts'

const socials = {
  // TODO: Make sure to use this property and avoid hard-coded links at all costs
  image: 'https://adityaborkar.com/aditya-borkar.png',
  linkedin: 'https://www.linkedin.com/in/adityab-tech/',
  email: 'hi@adityaborkar.com',
}

const Person_AdityaBorkar: WithContext<Person> = {
  '@id': 'https://adityaborkar.com/about',
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aditya Borkar',
  honorificPrefix: 'Mr.',
  familyName: 'Borkar',
  givenName: 'Aditya',
  gender: 'Male',
  alternateName: 'Adi Borkar',
  additionalName: 'Aditya Sanjay Borkar',
  brand: 'Aditya Borkar',

  description: 'Aditya Borkar is a software engineer and entrepreneur.',
  //   disambiguatingDescription: '',
  image: socials.image,
  sameAs: [socials.linkedin],
  url: 'https://adityaborkar.com/about',
  mainEntityOfPage: 'https://adityaborkar.com/about',
  email: socials.email,
  contactPoint: {
    '@type': 'ContactPoint',
    email: socials.email,
  },
  workLocation: [
    {
      '@type': 'Place',
      name: 'Remote',
    },
    {
      '@type': 'Place',
      name: 'Mumbai, India',
    },
  ],

  jobTitle: 'Software Engineer',
  knowsAbout: '',
  owns: [
    {
      '@type': 'OwnershipInfo',
      name: 'Platipie',
      url: 'https://platipie.com',
      ownedFrom: '',
    },
    {
      '@type': 'OwnershipInfo',
      name: 'Replocal',
      url: 'https://replocal.app',
      ownedFrom: '',
    },
    {
      '@type': 'OwnershipInfo',
      name: 'DynamoDB SDK',
      url: 'https://dynamodb-sdk.com',
      ownedFrom: '',
    },
    // {
    //   '@type': 'OwnershipInfo',
    //   name: 'Vasundhara Transport Service',
    //   url: 'https://vasundhara.cc',
    //   ownedFrom: '',
    // },
  ],

  //   "hasOfferCatalog"
  makesOffer: {
    '@type': 'Offer',
    name: 'Software Development Services',
    alternateName: 'Software Development Services',
    description: 'Custom software development services',
    url: 'https://adityaborkar.com/services',
    mainEntityOfPage: 'https://adityaborkar.com/services',
    // acceptedPaymentMethod: {
    //   '@type': 'PaymentMethod',
    //   name: 'Credit Card',
    // },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
    // review
  },

  interactionStatistic: {
    '@type': 'InteractionCounter',
    interactionType: '',
    userInteractionCount: '',
    interactionService: {
      '@type': 'WebSite',
      name: 'Aditya Borkar',
      url: 'https://adityaborkar.com',
    },
  },
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

  //   hasCredential: '',
  //   alumniOf: '',
  //   award: '',
  //   knows: '',

  //   funder: '',
  //   funding: '',
  //   sponser: '',
}

export default Person_AdityaBorkar
