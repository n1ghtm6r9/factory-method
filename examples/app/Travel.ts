import Creator from "../../src/Creator";
import { ITransport } from "./models";

export default abstract class Travel extends Creator {

    public abstract create(): ITransport;

    public travel() {
        console.log('Start travel');

        const transport = this.create();

        transport.go();
    }

}