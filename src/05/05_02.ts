import {GovernmentBuildingsType, HousesType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HousesType>) {
    let callbackfn = (h: HousesType) => `Hello guys from ${h.address.street.title}`
    return houses.map(callbackfn)
}