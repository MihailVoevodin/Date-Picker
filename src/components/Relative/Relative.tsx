import {UNIT_DICTIONARY} from 'common/Const';
import {dateInFormat, toCamelCase} from 'common/Utils';
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import styles from 'components/Relative/Relative.module.scss';
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


const TIME_DICTIONARY = [
    ...UNIT_DICTIONARY.map(item => ({
        id: '-' + item.id,
        label: toCamelCase(item.label) + ' ago',
        value: -item.value
    })),
    ...UNIT_DICTIONARY.map(item => ({
        ...item,
        id: '+' + item.id,
        label: toCamelCase(item.label) + ' from now',
    }))
];


/**
 * Компонент относительного выбора даты.
 */
export const Relative: React.FC<IProps> = ({date, text, onDateChange}) => {
    const [count, setCount] = useState<number>(15)
    const [unitType, setUnitType] = useState<string>(TIME_DICTIONARY[0].id);

    const calculateDate = (nextCount, nextUnitType) => {
        const dictItem = TIME_DICTIONARY.find(item => item.id === nextUnitType);

        if (dictItem) {
            onDateChange(new Date(Date.now() + nextCount * dictItem.value))
        }
    }
    const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nextCount = Number(e.target.value);
        setCount(nextCount);
        calculateDate(nextCount, unitType);
    }

    const handleUnitTypeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextUnitType = e.target.value;
        setUnitType(nextUnitType);
        calculateDate(count, nextUnitType);
    }

    return (
        <div>
            <div className={styles.inputsContainer}>
                <input className={styles.input} type='number' value={count} onChange={handleCountChange} />
                <select className={styles.select} onChange={handleUnitTypeSelect}>
                    {TIME_DICTIONARY.map(({id, label}) => (
                        <option key={id} value={id}>{label}</option>
                    ))}
                </select>
            </div>
            <div className={commonStyles.nowDateContainer}>
                <span className={commonStyles.nowDateText}>{text} date</span>
                <div className={commonStyles.nowDate}>{dateInFormat(date)}</div>
            </div>
        </div>
    )
}
