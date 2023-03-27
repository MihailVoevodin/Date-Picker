import classNames from 'classnames';
import {T} from 'common/Text';
import {dateInFormat, formatTime, setDateWithPickedTime, uniteDate} from 'common/Utils';
import React, {Dispatch, SetStateAction, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from 'components/Absolute/Absolute.module.scss';

/**
 * @param date Дата.
 * @param text Текст начало или конец выбранного отрезка.
 * @param setDate Проп установки новой даты в состояние компонента.
 */
interface IProps {
    date: Date,
    text: string,
    setDate: Dispatch<SetStateAction<Date>>,
}
/**
 * Компонент абсолютного выбора даты.
 */
export const Absolute:React.FC<IProps> = ({date, text, setDate}) => {
    const [localDate, setLocalDate] = useState<Date>(date)
    const [time, setTime] = useState<string>(formatTime(date))

    const onDateChange = (value) => {
        setLocalDate(value)
        setDateWithPickedTime(setDate, value, time)
    }

    const handleChangeTime = (time) => {
        setTime(time)
        setDate(uniteDate(localDate, time))
    }

    return (
        <div className={styles.absoluteContainer}>
            <div>
                <Calendar value={localDate} onChange={onDateChange} />
                <div className={'nowDateContainer'}>
                    <span className={'nowDateText'}>{text} date</span>
                    <div className={'nowDate'}>{dateInFormat(date)}</div>
                </div>
            </div>
            <div className={styles.timeContainer}>
                <ul className={styles.timeList}>
                    {T.time.map((timeItem) =>
                        <li
                            key={timeItem}
                            className={timeItem === time ? classNames(styles.timeItem, styles.timeActive) : styles.timeItem}
                            onClick={() => handleChangeTime(timeItem)}
                        >
                            {timeItem}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
