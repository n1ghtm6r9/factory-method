import TravelCreator from './app/TravelCreator';
import CarTravel from './app/creators/CarTravel';
import PlaneTravel from './app/creators/PlaneTravel';
import ShipTravel from './app/creators/ShipTravel';

let travel: TravelCreator;

travel = new CarTravel();
travel.travel();

travel = new PlaneTravel();
travel.travel();

travel = new ShipTravel();
travel.travel();