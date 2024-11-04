export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = UserType & {
    books: Array<string>
}

export type CompaniesType = {
    id: number,
    title: string
}

export type WithCompaniesType = {
    companies: CompaniesType[]
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, comp: string) {
    console.log(u)
    return {
        ...u,
        address: {
            ...u.address
        },
        laptop: {
            ...u.laptop,
            title: comp
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, house: number) {
    console.log(u)
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUSer(u: UserWithLaptopType & UserWithBookType, add: string[]) {
    return {
        ...u,
        books: [
            ...u.books,
            ...add
        ]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBookType, del: string, update: string) {
    return {
        ...u,
        books: [
            ...u.books.map(el => el === del ? update : el)
        ]
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBookType, delBook: string) {
    return {
        ...u,
        books: [
            ...u.books.filter(b => b !== delBook)
        ]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, id: number, company: string) {
    return {
        ...u,
        companies: [
            u.companies.map(c => c.id === id ? {...c, title: company} : c)
        ]
    }
}