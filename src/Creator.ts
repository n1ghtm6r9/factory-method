import { ICreator } from ".";

export default abstract class Creator implements ICreator {

    public abstract create(): any;

}