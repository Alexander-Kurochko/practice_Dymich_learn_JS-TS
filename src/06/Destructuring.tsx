import React from 'react';

type TitleType = {
    title: string
}

type StreetType = {
    street: TitleType
}

type LessonType = {
    title: string
    name?: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    /*    lessons: Array<{title: string}>*/
    address: StreetType
    /*    address: {
            street: {
                title: string
            }
        }*/
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}: PropsType) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
                {man.name}
            </div>
        </div>
    )
}