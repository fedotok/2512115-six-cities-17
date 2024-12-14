import { CityName, OfferType } from './types';

type OfferGroups = Record<CityName, OfferType[]>;
export function getOfferGroups(offers: OfferType[]): OfferGroups {
  const result: OfferGroups = {};
  offers.forEach((offer) => {
    const name: CityName = offer.city.name;

    if (result[name]) {
      result[name].push(offer);
    } else {
      result[name] = [offer];
    }
  });

  return result;
}
