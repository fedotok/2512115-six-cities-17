import { SortItem } from './const';
import { OfferType } from './types';

export const getRatingInPercents = (rating: number) => `${Math.round(rating) * 20}%`;

const sortOffers = (offers: OfferType[], sortingType: SortItem): OfferType[] => {
  switch (sortingType){
    case SortItem.Popular:
      return [...offers];

    case SortItem.PriceHigh:
      return [...offers].sort((left, right) => right.price - left.price);

    case SortItem.PriceLow:
      return [...offers].sort((left, right) => left.price - right.price);

    case SortItem.Rating:
      return [...offers].sort((left, right) => right.rating - left.rating);
  }
};

export {sortOffers};

export const formatDate = (isoDate: string): { formattedDate: string; dateTime: string } => {
  const date = new Date(isoDate);

  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);

  const dateTime = date.toISOString().split('T')[0];

  return { formattedDate, dateTime };
};
