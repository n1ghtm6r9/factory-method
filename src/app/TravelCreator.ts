import { ITransport } from './models';

export interface ITravelCreator {
    create();
}

export default abstract class Travel implements ITravelCreator {

    public abstract create(): ITransport;

    public travel() {
        console.log('Start travel');

        const transport = this.create();

        transport.go();
    }

}