import { Injectable } from '@angular/core';
import { Car } from '../redux-store/models/car.model';

const MARKS: Array<string> = ['Audi', 'Volkswagen', 'Skoda', 'Seat', 'BMW', 'Honda', 'Toyota', 'Ford', 'Hyundai'];
const CONDITIONS: Array<string> = ['new', 'used', 'damaged'];
const ORIGINS: Array<string> = ['EU', 'US', 'UK'];
const FUELS: Array<string> = ['diesel', 'gas'];
const NUM_OF_SEATS: Array<number> = [2, 4, 5];
const GEARBOX_TYPES: Array<string> = ['manual', 'automatic'];
const COLORS: Array<string> = ['black', 'white', 'red', 'blue', 'green', 'gray'];

@Injectable()
export class CarGeneratorService {

    constructor() { }

    newCar(): Car {
        const randomFromArray = (arr: Array<any>) => arr[Math.floor(Math.random() * arr.length)];
        const randomBetweenRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

        const newCar: Car = {
            mark: randomFromArray(MARKS),
            price: randomBetweenRange(2000, 25000),
            condition: randomFromArray(CONDITIONS),
            origin: randomFromArray(ORIGINS),
            power: randomBetweenRange(90, 240) + 'hp',
            fuel: randomFromArray(FUELS),
            mileage: randomBetweenRange(20000, 350000),
            numOfSeats: randomFromArray(NUM_OF_SEATS),
            gearbox: randomFromArray(GEARBOX_TYPES),
            color: randomFromArray(COLORS)
        };

        return newCar
    }
}