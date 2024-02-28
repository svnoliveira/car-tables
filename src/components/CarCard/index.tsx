import { TCar } from "@/app/data/database"

interface ICarCardProps {
    car: TCar 
}

export const CarCard = ({car}:ICarCardProps) => {
    return(
        <li>
            <div>
            image
            </div>
            <span>{car.name}</span>
            <span>{car.nextReservation.toDateString()}</span>
            <div>{car.status}</div>
            <div>{car.rating}</div>
            <div>action</div>
        </li>
    )
}