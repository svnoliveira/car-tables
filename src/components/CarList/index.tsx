import { carDatabase } from "@/app/data/database"
import { Header } from "../Header"
import { CarCard } from "../CarCard"

export const CarList = () => {
    return (
        <section>
            {/* <Header /> */}
            <ul>
                {carDatabase.map((car) => <CarCard key={car.id} car={car}/>)}
            </ul>
        </section>
    )
}