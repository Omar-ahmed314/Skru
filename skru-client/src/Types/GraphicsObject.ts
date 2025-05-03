import ObjectPosition from "./ObjectPosition";

export default interface GraphicsObject {
    // object interface
    id: string;
    objectPosition: ObjectPosition;
    orientation: number;
}
