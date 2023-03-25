import {T} from 'common/Text';

export const dateInFormat = (date: Date) => {
    return `${T.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}
