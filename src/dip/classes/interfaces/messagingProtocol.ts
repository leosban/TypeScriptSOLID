export interface MessagingProtocol {
  sendMessage(msg: string, msgDiscount: string): void;
}
