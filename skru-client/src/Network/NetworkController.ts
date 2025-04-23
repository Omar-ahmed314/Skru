export default interface NetworkController {
    // network controller instance
    socket: WebSocket | null;
    connected: boolean;
    connect(url: string): void;
    disconnect(): void;
    sendMessage(message: string): void;
    onMessage(callback: (message: string) => void): void;
    onError(callback: (error: Error) => void): void;
    onClose(callback: () => void): void;
}
