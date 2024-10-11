import {CityType, GovernmentBuildingsType, HousesType} from '../02/02_02';

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export function repairHouse(housesType: HousesType) {
    housesType.repaired = true
}

export const toFireStaff = (city: CityType, number: number) => {
    city.governmentBuildings[0].staffCount -= number
}

export function toHireStaff(building: GovernmentBuildingsType, number: number) {
    building.staffCount += number
}