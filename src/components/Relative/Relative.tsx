import {T} from 'common/Text';
import {calculateSelectOptionDate, dateInFormat} from 'common/Utils';
import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import styles from 'components/Relative/Relative.module.scss';

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
 * Компонент установки относительной даты.
 */
export const Relative: React.FC<IProps> = ({date, text, setDate}) => {
    const [inputValue, setInputValue] = useState<number>(15)
    const [selectedRange, setSelectedRange] = useState<string>('Seconds ago')

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(Number(value))
    }

    useEffect(() => {
        calculateSelectOptionDate(selectedRange, setDate, inputValue)
    }, [inputValue, selectedRange])

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRange(e.target.value)
    }

    return (
        <div>
            <div className={styles.inputsContainer}>
                <input className={styles.input} type='number' value={inputValue} onChange={handleChangeInput} />
                <select className={styles.select} onChange={handleChangeSelect}>
                    {T.selectItems.map((item: string, id: number) => <option key={id} value={item}>{item}</option>)}
                </select>
            </div>
            <div className={'nowDateContainer'}>
                <span className={'nowDateText'}>{text} date</span>
                <div className={'nowDate'}>{dateInFormat(date)}</div>
            </div>
        </div>
    )
}
