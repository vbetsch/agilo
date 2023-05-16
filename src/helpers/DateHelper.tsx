import { Timestamp } from '@firebase/firestore';

export const formatFirebaseDate = (datetime: Timestamp | Date) => {
    let date: Date

    if (datetime instanceof Timestamp) {
        date = datetime.toDate();
    } else {
        date = datetime;
    }

    return date.toLocaleDateString('en-EN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
};