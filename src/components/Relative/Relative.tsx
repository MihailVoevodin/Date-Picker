import {T} from 'common/Text';
import {calculateSelectOptionDate, dateInFormat} from 'common/Utils';
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
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
 * Компонент относительного выбора даты.
 */
export const Relative: React.FC<IProps> = ({date, text, setDate}) => {
    const [inputValue, setInputValue] = useState<number>(15)
    const [selectedRange, setSelectedRange] = useState<string>('Seconds ago')

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value))
        calculateSelectOptionDate(selectedRange, setDate, inputValue)
    }

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        calculateSelectOptionDate(e.target.value, setDate, inputValue)
        setSelectedRange(e.target.value)
    }

    return (
        <div>
            <div className={styles.inputsContainer}>
                <input className={styles.input} type='number' value={inputValue} onChange={handleChangeInput} />
                <select className={styles.select} onChange={handleChangeSelect}>
                    {T.selectRangeItems.map((item: string, id: number) => <option key={id} value={item}>{item}</option>)}
                </select>
            </div>
            <div className={'nowDateContainer'}>
                <span className={'nowDateText'}>{text} date</span>
                <div className={'nowDate'}>{dateInFormat(date)}</div>
            </div>
        </div>
    )
}
