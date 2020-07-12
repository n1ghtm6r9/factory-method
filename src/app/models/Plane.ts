import { ITransport } from '.'

export default class Plane implements ITransport {

    go() {
        console.log('flew');
    }

}