import classNames from 'classnames';
import {T} from 'common/Text';
import {dateInFormat, formatTime, uniteDate} from 'common/Utils';
import React, {Dispatch, SetStateAction, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from 'components/Absolute/Absolute.module.scss';
import commonStyles from 'App.module.scss';

/**
 * @param date Дата.
 * @param text Текст начало или конец выбранного отрезка.
 * @param onDateChange Проп установки новой даты в состояние компонента.
 */
interface IProps {
    date: Date,
    text: string,
    onDateChange: Dispatch<SetStateAction<Date>>,
}
/**
 * Компонент абсолютного выбора даты.
 */
export const Absolute:React.FC<IProps> = ({date, text, onDateChange}) => {
    const [localDate, setLocalDate] = useState<Date>(date)
    const [time, setTime] = useState<string>(formatTime(date))

    const onChangeDate = (value) => {
        setLocalDate(value)
        onDateChange(uniteDate(value, time))
    }

    const onChangeTime = (time) => {
        setTime(time)
        onDateChange(uniteDate(localDate, time))
    }

    return (
        <div className={styles.absoluteContainer}>
            <div>
                <Calendar value={localDate} onChange={onChangeDate} />
                <div className={commonStyles.nowDateContainer}>
                    <span className={commonStyles.nowDateText}>{text} date</span>
                    <div className={commonStyles.nowDate}>{dateInFormat(date)}</div>
                </div>
            </div>
            <div className={styles.timeContainer}>
                <ul className={styles.timeList}>
                    {T.time.map((timeItem) =>
                        <li
                            key={timeItem}
                            className={timeItem === time ? classNames(styles.timeItem, styles.timeActive) : styles.timeItem}
                            onClick={() => onChangeTime(timeItem)}
                        >
                            {timeItem}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
