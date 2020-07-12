import TravelCreator from '../TravelCreator';
import Plane from '../models/Plane';

export default class CarTravel extends TravelCreator {

    public create(): Plane {
        return new Plane();
    }

}