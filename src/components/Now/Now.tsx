import React, {Dispatch, SetStateAction} from 'react';
import {dateInFormat} from 'common/Utils';
import styles from 'components/Now/Now.module.scss';
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
 * Компонент выбора даты на настоящий момент.
 */
export const Now: React.FC<IProps> = ({date, text, onDateChange}) => {

    const onSetDate = () => {
        onDateChange(new Date())
    }

    return (
        <div>
            <button className={styles.btn} onClick={onSetDate}>Set now date</button>
            <div className={commonStyles.nowDateContainer}>
                <span className={commonStyles.nowDateText}>{text} date</span>
                <div className={commonStyles.nowDate}>{dateInFormat(date)}</div>
            </div>
        </div>
    )
}
