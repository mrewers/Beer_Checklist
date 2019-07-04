import { allBeers } from '../mockdata';

export const unfinishedBeers = allBeers.filter(beer => beer.checked === false);
