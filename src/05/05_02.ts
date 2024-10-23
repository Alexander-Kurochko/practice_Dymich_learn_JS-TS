import {GovernmentBuildingsType, HousesType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HousesType>) {
    return houses.map(s => `Hello guys from ${s.address.street.title}`)
}