import Travel from "../Travel";
import Car from "../models/Car";

export default class CarTravel extends Travel {

    public create(): Car {
        return new Car();
    }

}