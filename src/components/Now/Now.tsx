import React, {Dispatch, SetStateAction} from 'react';
import {dateInFormat} from 'common/Utils';
import styles from 'components/Now/Now.module.scss';

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
 * Компонент выбора даты на настоящий момент.
 */
export const Now: React.FC<IProps> = ({date, text, setDate}) => {

    const handleSetDate = () => {
        setDate(new Date())
    }

    return (
        <div>
            <button className={styles.btn} onClick={handleSetDate}>Set now date</button>
            <div className={'nowDateContainer'}>
                <span className={'nowDateText'}>{text} date</span>
                <div className={'nowDate'}>{dateInFormat(date)}</div>
            </div>
        </div>
    )
}
