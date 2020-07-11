import Travel from "../Travel";
import Ship from "../models/Ship";

export default class ShipTravel extends Travel {

    public create(): Ship {
        return new Ship();
    }

}