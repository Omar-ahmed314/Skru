import Action from "./Action";
import ActionType from "./ActionType";

export type ActionCallbackFunction = (data?: any) => void;

export default class EventEmitter {
    private eventMap: Map<ActionType, Action>;

    on(actionType: ActionType, action: Action): void {
        let event = this.eventMap.get(actionType);
        if (event == undefined) {
            event = action;
        }
        this.eventMap.set(actionType, event);
    }

    emit(actionType: ActionType): void {
        let event = this.eventMap.get(actionType);
        if (!event) return;
        event.execute();
    }
}
