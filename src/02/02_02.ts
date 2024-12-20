import React from 'react'

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HousesType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION',
    budget: number
    staffCount: number
    address: GovernStreetType
}

export type GovernStreetType = {
    street: TitleType
}

export type TitleType = {
    title: string
}