import { ICreator } from "./Creator.interface";

export default abstract class Creator implements ICreator {

    public abstract create(): any;

}