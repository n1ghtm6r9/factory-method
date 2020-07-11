import { ITransport } from '.'

export default class Ship implements ITransport {

    go() {
        console.log('sailed');
    }

}