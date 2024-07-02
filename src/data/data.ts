export type ListingItem = {
  id: number;
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
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4,
    img: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 4,
    img: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    img: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    img: 'img/apartment-03.jpg',
    isPremium: false,
    isFavorite: false,
  },
  {
    id: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Room',
    price: 80,
    rating: 4,
    img: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
  },
];
