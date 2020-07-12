import TravelCreator from '../TravelCreator';
import Ship from '../models/Ship';

export default class ShipTravel extends TravelCreator {

    public create(): Ship {
        return new Ship();
    }

}