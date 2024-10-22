export type CourseType = {
    title: string
    price: number
}

export const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]