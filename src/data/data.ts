export type LocationName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export const locationsData: LocationName[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export type ListingItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  img: string;
  isPremium: boolean;
  isFavorite: boolean;
}

export const listingData: ListingItem[] = [
  {
    id: 'listing-item-1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4,
    img: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 'listing-item-2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4,
    img: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
  },
  {
    id: 'listing-item-3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    img: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
  },
  {
    id: 'listing-item-4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    img: 'img/apartment-03.jpg',
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 'listing-item-5',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4,
    img: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
  },
];

export const nearPlacesData: ListingItem[] = [
  {...listingData[1]},
  {...listingData[2]},
  {...listingData[3]},
];

export type FavoritesItem = {
  id: string;
  city: string;
  places: ListingItem[];
}

export const favoritesData: FavoritesItem[] = [
  {
    id: 'favorites-item-1',
    city: 'Amsterdam',
    places: [
      {
        ...listingData[3],
        img: 'img/apartment-small-03.jpg',
        isFavorite: true,
      },
      {
        ...listingData[1],
        img: 'img/room-small.jpg',
        isFavorite: true,
      },
    ],
  },
  {
    id: 'favorites-item-2',
    city: 'Cologne',
    places: [
      {
        id: 'listing-item-6',
        title: 'White castle',
        type: 'Apartment',
        price: 180,
        rating: 5,
        img: 'img/apartment-small-04.jpg',
        isPremium: false,
        isFavorite: true,
      },
    ],
  },
];

export type OfferGalleryItem = {
  id: string;
  src: string;
}

export const offerGalleryList: OfferGalleryItem[] = [
  {
    id: 'offer-gallery-list-item-1',
    src: 'img/room.jpg',
  },
  {
    id: 'offer-gallery-list-item-2',
    src: 'img/apartment-01.jpg',
  },
  {
    id: 'offer-gallery-list-item-3',
    src: 'img/apartment-02.jpg',
  },
  {
    id: 'offer-gallery-list-item-4',
    src: 'img/apartment-03.jpg',
  },
  {
    id: 'offer-gallery-list-item-5',
    src: 'img/studio-01.jpg',
  },
  {
    id: 'offer-gallery-list-item-6',
    src: 'img/apartment-01.jpg',
  },
];

export type InsideListItem = {
  id: string;
  title: string;
}

export const insideList: InsideListItem[] = [
  {
    id: 'inside-list-item-1',
    title: 'Wi-Fi',
  },
  {
    id: 'inside-list-item-2',
    title: 'Washing machine',
  },
  {
    id: 'inside-list-item-3',
    title: 'Towels',
  },
  {
    id: 'inside-list-item-4',
    title: 'Heating',
  },
  {
    id: 'inside-list-item-5',
    title: 'Coffee machine',
  },
  {
    id: 'inside-list-item-6',
    title: 'Baby seat',
  },
  {
    id: 'inside-list-item-7',
    title: 'Kitchen',
  },
  {
    id: 'inside-list-item-8',
    title: 'Dishwasher',
  },
  {
    id: 'inside-list-item-9',
    title: 'Cabel TV',
  },
  {
    id: 'inside-list-item-10',
    title: 'Fridge',
  },
];

export type ReviewsListItem = {
  id: string;
  userAvatar: string;
  userName: string;
  rating: number;
  text: string[];
  dateTime: string;
}

export const reviewsList: ReviewsListItem[] = [
  {
    id: 'review-1',
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    rating: 4,
    text: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    ],
    dateTime: '2019-04-24T16:00:00.000Z',
  },
];
