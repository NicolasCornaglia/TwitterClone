import { timeStamp } from 'console';
import mongoose from 'mongoose';
import { format } from 'path';

const notificationSchema = new mongoose.Schema({
    form: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        required: true,
        enums: ['like', 'follow']
    },
    read: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification 