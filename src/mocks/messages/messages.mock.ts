
import { Message } from "../../models/messages/message.model";

import {USER_LIST} from '../user/user.mocks'

export const messageList: Message[] = [
    {user:USER_LIST[0], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {user:USER_LIST[1], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {user:USER_LIST[2], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {user:USER_LIST[3], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}
];

export const MESSAGE_LIST = messageList;