
import { Message } from "../../models/messages/message.model";

import {PROFILE_LIST} from '../profile/profile.mocks'

export const messageList: Message[] = [
    {user:PROFILE_LIST[0], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {user:PROFILE_LIST[1], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {user:PROFILE_LIST[2], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {user:PROFILE_LIST[3], date: new Date(), lastMessage:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}
];

export const MESSAGE_LIST = messageList;