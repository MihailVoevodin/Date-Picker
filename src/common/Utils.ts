import {T} from 'common/Text';
import {Dispatch, SetStateAction} from 'react';

/**
 * Форматирование даты в нужный формат.
 * @param date Дата для форматирования.
 */
export const dateInFormat = (date: Date) => {
    return `${T.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}

/**
 * Вычисление даты(месяцев назад).
 * @param inputValue Дата для форматирования.
 */
const monthsAgo = (inputValue: number) => {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth() - inputValue, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

/**
 * Вычисление даты(месяцев вперед).
 * @param inputValue Дата для форматирования.
 */
const monthsFromNow = (inputValue: number) => {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth() + inputValue, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

/**
 * Вычисление даты(лет назад).
 * @param inputValue Дата для форматирования.
 */
const yearsAgo = (inputValue: number) => {
    const date = new Date()
    return new Date(date.getFullYear() - inputValue, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

/**
 * Вычисление даты(лет вперед).
 * @param inputValue Дата для форматирования.
 */
const yearsFromNow = (inputValue: number) => {
    const date = new Date()
    return new Date(date.getFullYear() + inputValue, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

/**
 * Вычисление относительной даты.
 * @param value Тип выбранного промежутка.
 * @param setter Аргумент установки новой даты в состояние компонента.
 * @param inputValue Дата для форматирования.
 */
export const calculateSelectOptionDate = (value: string, setter: Dispatch<SetStateAction<Date>>, inputValue: number) => {
    switch (value) {
        case 'Seconds ago':
            setter(new Date(Date.now() - inputValue * 1000))
            break
        case 'Minutes ago':
            setter(new Date(Date.now() - inputValue * 1000 * 60))
            break
        case 'Hours ago':
            setter(new Date(Date.now() - inputValue * 1000 * 60 * 60))
            break
        case 'Days ago':
            setter(new Date(Date.now() - inputValue * 1000 * 60 * 60 * 24))
            break
        case 'Weeks ago':
            setter(new Date(Date.now() - inputValue * 1000 * 60 * 60 * 24 * 7))
            break
        case 'Months ago':
            setter(new Date(monthsAgo(inputValue)))
            break
        case 'Years ago':
            setter(new Date(yearsAgo(inputValue)))
            break
        case 'Seconds from now':
            setter(new Date(Date.now() + inputValue * 1000))
            break
        case 'Minutes from now':
            setter(new Date(Date.now() + inputValue * 1000 * 60))
            break
        case 'Hours from now':
            setter(new Date(Date.now() + inputValue * 1000 * 60 * 60))
            break
        case 'Days from now':
            setter(new Date(Date.now() + inputValue * 1000 * 60 * 60 * 24))
            break
        case 'Weeks from now':
            setter(new Date(Date.now() + inputValue * 1000 * 60 * 60 * 24 * 7))
            break
        case 'Months from now':
            setter(new Date(monthsFromNow(inputValue)))
            break
        case 'Years from now':
            setter(new Date(yearsFromNow(inputValue)))
            break
    }
}
