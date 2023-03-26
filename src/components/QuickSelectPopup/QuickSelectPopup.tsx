import {T} from 'common/Text';
import {calculateQuickSelectOptionDate} from 'common/Utils';
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import styles from 'components/QuickSelectPopup/QuickSelectPopup.module.scss';

/**
 * @param setStart Проп установки старта диапазона.
 * @param setEnd Проп установки конца диапазона.
 */
interface IProps {
    setStart: Dispatch<SetStateAction<Date>>;
    setEnd: Dispatch<SetStateAction<Date>>;
}

/**
 * Компонент быстрого выбора относительных промежутков.
 */
export const QuickSelectPopup: React.FC<IProps> = ({setStart, setEnd}) => {
    const [inputValue, setInputValue] = useState<number>(15)
    const [fromValue, setFromValue] = useState<string>('Last')
    const [selectedRange, setSelectedRange] = useState<string>('seconds')

    const handleChangeFromSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setFromValue(e.target.value)
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value))
    }

    const handleChangeRangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRange(e.target.value)
    }

    const onApplyDate = () => {
        calculateQuickSelectOptionDate(fromValue, selectedRange, setStart, setEnd, inputValue)
    }

    return (
        <div className={styles.popup}>
            <span>Quick select</span>
            <div className={styles.inputsContainer}>
                <select className={styles.selectFrom} onChange={handleChangeFromSelect}>
                    <option value='Last'>Last</option>
                    <option value='Next'>Next</option>
                </select>
                <input className={styles.input} type='number' value={inputValue} onChange={handleChangeInput} />
                <select className={styles.selectRange} onChange={handleChangeRangeSelect}>
                    {T.selectRangeQuickItems.map((item: string, id: number) => <option key={id} value={item}>{item}</option>)}
                </select>
                <button className={styles.btn} onClick={onApplyDate}>Apply</button>
            </div>
            <span>Commonly used</span>
            <div className={styles.commonly}>
                {T.commonlyUsedItems.map((item: string) => <div key={item} className={styles.commonlyItem}>{item}</div>)}
            </div>
        </div>
    )
}
