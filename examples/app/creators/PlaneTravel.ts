import Travel from "../Travel";
import Plane from "../models/Plane";

export default class CarTravel extends Travel {

    public create(): Plane {
        return new Plane();
    }

}