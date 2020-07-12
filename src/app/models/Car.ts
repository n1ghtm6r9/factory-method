import { ITransport } from '.'

export default class Car implements ITransport {

    go() {
        console.log('drive');
    }

}