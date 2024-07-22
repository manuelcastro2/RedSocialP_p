import MessagesModel from "../models/messagesModel.js";
import { Messages } from "../schemas/messagesSchema.js";

export class MessagesService {
  async getAll(senderId: string, receiverId: string) {
    return MessagesModel.find({
      senderId: senderId,
      receiverId: receiverId,
    });
  }

  async create(Input: Messages) {
    const messages = new MessagesModel(Input);
    return messages.save();
  }

  async delete(id: string) {
    return MessagesModel.findOneAndDelete({ _id: id });
  }
}
