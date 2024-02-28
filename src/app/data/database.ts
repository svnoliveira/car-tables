export type TCar = {
    id: number;
    name: string;
    picture: string;
    nextReservation: Date;
    status: boolean;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export const carDatabase:TCar[] = [
    {
        id: 1,
        name: "Mini Cooper 2020",
        picture: "/mini-cooper-2020.png",
        nextReservation: new Date("2024-11-07"),
        status: true,
        rating: 5
    },
    {
        id: 2,
        name: "Mini Cooper 2020",
        picture: "/mini-cooper-2020.png",
        nextReservation: new Date("2024-11-07"),
        status: true,
        rating: 5
    },
    {
        id: 3,
        name: "Mini Cooper 2020",
        picture: "/mini-cooper-2020.png",
        nextReservation: new Date("2024-11-07"),
        status: true,
        rating: 5
    },
    {
        id: 4,
        name: "Mini Cooper 2020",
        picture: "/mini-cooper-2020.png",
        nextReservation: new Date("2024-11-07"),
        status: true,
        rating: 5
    },
    {
        id: 5,
        name: "Mini Cooper 2020",
        picture: "/mini-cooper-2020.png",
        nextReservation: new Date("2024-11-07"),
        status: true,
        rating: 5
    },
    {
        id: 6,
        name: "Mini Cooper 2020",
        picture: "/mini-cooper-2020.png",
        nextReservation: new Date("2024-11-07"),
        status: true,
        rating: 5
    },
];