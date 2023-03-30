import {MONTHS_DICTIONARY} from 'common/Const';
import {Dispatch, SetStateAction} from 'react';


export const toCamelCase = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Добавление нуля к отрисовке дат.
 * @param num Число для прибавления нуля.
 */
const addZero = (num: number) => {
    if (num < 10 && num >= 0) {
        return `0${num}`
    } else {
        return num
    }
}

export const getTimeList = () => {
    const result: string[] = []
    const endTime = 23 * 3600000 + 30 * 60000
    const step = 30 * 60000
    for (let i = 0; i <= endTime; i += step) {
        const hours = Math.floor((i / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((i / (1000 * 60)) % 60)

        result.push(`${addZero(hours)}:${addZero(minutes)}`)
    }
    return result
}



/**
 * Форматирование даты в нужный формат.
 * @param date Дата для форматирования.
 */
export const dateInFormat = (date: Date) => {
    return `${MONTHS_DICTIONARY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} @ ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}:${addZero(date.getMilliseconds())}`
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

/**
 * Объединение выбранных даты и времени.
 * @param date Выбранная дата.
 * @param time Выбранное время.
 */
export const uniteDate = (date: Date, time: string) => {
    const pickedHours = Number(time.split(':')[0])
    const pickedMinutes = Number(time.split(':')[1])

    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), pickedHours, pickedMinutes, 0, 0)
}
/**
 *  * Вычисление и установка диапазона дат для быстрого выбора.
 * @param fromValue Тип выбранного промежутка.
 * @param number Число единиц промежутка дат.
 * @param value Множители времени.
 * @param onStartDateChange Установка начала промежутка.
 * @param onEndDateChange Установка конца промежутка.
 */
export const calculateQuickSelectRanges = (fromValue: string,
                                           number: number,
                                           value: number,
                                           onStartDateChange: Dispatch<SetStateAction<Date>>,
                                           onEndDateChange: Dispatch<SetStateAction<Date>>) => {
    if (fromValue === 'Last') {
        onStartDateChange(new Date(Date.now() - number * value))
        onEndDateChange(new Date())
    } else if (fromValue === 'Next') {
        onStartDateChange(new Date())
        onEndDateChange(new Date(Date.now() + number * value))
    }
}

/**
 * Вычисление и установка диапазона часто используемых промежутков.
 * @param value Значение промежутка.
 * @param setStart Аргумент установки новой даты в состояние компонента.
 * @param setEnd Аргумент установки новой даты в состояние компонента.
 */
export const calculateCommonRangesDates = (value: string, setStart: Dispatch<SetStateAction<Date>>, setEnd: Dispatch<SetStateAction<Date>>) => {
    const date = new Date()
    const currentWeekDay = date.getDay();
    const startWeekDate = Number(date.getDate() - currentWeekDay)
    const endWeekDate = Number(date.getDate() - currentWeekDay + 6)
    switch (value) {
        case 'Today':
            setStart(new Date(date.setHours(0,0,0,0)))
            setEnd(new Date(date.setHours(23,59,59,999)))
            break
        case 'This week':
            setStart(new Date(date.getFullYear(), date.getMonth(), startWeekDate, 0, 0, 0, 0))
            setEnd(new Date(date.getFullYear(), date.getMonth(), endWeekDate,23,59,59,999))
            break
        case 'This month':
            setStart(new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0))
            setEnd(new Date(date.getFullYear(), date.getMonth() + 1, 0,23,59,59,999))
            break
        case 'This year':
            setStart(new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0))
            setEnd(new Date(date.getFullYear(), 12, 0,23,59,59,999))
            break
        case 'Yesterday':
            setStart(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 0, 0, 0, 0))
            setEnd(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1,23,59,59,999))
            break
        case 'Week to date':
            setStart(new Date(date.getFullYear(), date.getMonth(), startWeekDate, 0, 0, 0, 0))
            setEnd(date)
            break
        case 'Month to date':
            setStart(new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0))
            setEnd(date)
            break
        case 'Year to date':
            setStart(new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0))
            setEnd(date)
            break
    }

}
