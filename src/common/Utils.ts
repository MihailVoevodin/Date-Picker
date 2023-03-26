import {T} from 'common/Text';
import {Dispatch, SetStateAction} from 'react';

/**
 * Добавление нуля к отрисовке дат.
 * @param num Число для прибавления нуля.
 */
const addZero = (num: number) => {
    if (num < 10 && num >= 0) {
        return `0${num}`;
    } else {
        return num;
    }
}

/**
 * Форматирование даты в нужный формат.
 * @param date Дата для форматирования.
 */
export const dateInFormat = (date: Date) => {
    return `${T.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} @ ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}:${addZero(date.getMilliseconds())}`
}

/**
 * Округление времени для абсолютного выбора даты.
 * @param time Время для округления.
 */
export const formatTime = (time: Date) => {
    if (time.getMinutes() <= 45 && time.getMinutes() > 15) {
        return `${time.getHours()}:30`
    } else if (time.getMinutes() > 45) {
        return `${time.getHours() + 1}:00`
    } else {
        return `${time.getHours()}:00`
    }
}

export const uniteDate = (date: Date, time: string) => {
    const pickedTime = (Number(time.split(':')[0]) * 1000 * 60 * 60) + (Number(time.split(':')[1]) * 1000 * 60)

    return new Date(date.getTime() + pickedTime)
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
 * Вычисление и установка относительной даты.
 * @param range Тип выбранного промежутка.
 * @param setter Аргумент установки новой даты в состояние компонента.
 * @param inputValue Дата для форматирования.
 */
export const calculateSelectOptionDate = (range: string, setter: Dispatch<SetStateAction<Date>>, inputValue: number) => {
    switch (range) {
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

/**
 * Вычисление и установка диапазона дат для быстрого выбора.
 * @param fromValue Время до или после настоящего.
 * @param range Тип выбранного промежутка.
 * @param setStart Аргумент установки новой даты в состояние компонента.
 * @param setEnd Аргумент установки новой даты в состояние компонента.
 * @param inputValue Дата для форматирования.
 */
export const calculateQuickSelectOptionDate = (fromValue: string, range: string, setStart: Dispatch<SetStateAction<Date>>, setEnd: Dispatch<SetStateAction<Date>>, inputValue: number) => {
    if (fromValue === 'Last') {
        setEnd(new Date())
        switch (range) {
            case 'seconds':
                setStart(new Date(Date.now() - inputValue * 1000))
                break
            case 'minutes':
                setStart(new Date(Date.now() - inputValue * 1000 * 60))
                break
            case 'hours':
                setStart(new Date(Date.now() - inputValue * 1000 * 60 * 60))
                break
            case 'days':
                setStart(new Date(Date.now() - inputValue * 1000 * 60 * 60 * 24))
                break
            case 'weeks':
                setStart(new Date(Date.now() - inputValue * 1000 * 60 * 60 * 24 * 7))
                break
            case 'months':
                setStart(new Date(monthsAgo(inputValue)))
                break
            case 'years':
                setStart(new Date(yearsAgo(inputValue)))
                break
        }
    }
    if (fromValue === 'Next') {
        setStart(new Date())
        switch (range) {
            case 'seconds':
                setEnd(new Date(Date.now() + inputValue * 1000))
                break
            case 'minutes':
                setEnd(new Date(Date.now() + inputValue * 1000 * 60))
                break
            case 'hours':
                setEnd(new Date(Date.now() + inputValue * 1000 * 60 * 60))
                break
            case 'days':
                setEnd(new Date(Date.now() + inputValue * 1000 * 60 * 60 * 24))
                break
            case 'weeks':
                setEnd(new Date(Date.now() + inputValue * 1000 * 60 * 60 * 24 * 7))
                break
            case 'months':
                setEnd(new Date(monthsFromNow(inputValue)))
                break
            case 'years':
                setEnd(new Date(yearsFromNow(inputValue)))
                break
        }
    }
}
