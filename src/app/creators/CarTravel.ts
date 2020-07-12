import TravelCreator from '../TravelCreator';
import Car from '../models/Car';

export default class CarTravel extends TravelCreator {

    public create(): Car {
        return new Car();
    }

}