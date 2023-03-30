import {COMMONLY_USED_RANGES_DICTIONARY, UNIT_DICTIONARY} from 'common/Const';
import {calculateCommonRangesDates, calculateQuickSelectRanges} from 'common/Utils';
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import styles from 'components/QuickSelectPopup/QuickSelectPopup.module.scss';

/**
 * @param setStart Проп установки старта диапазона.
 * @param setEnd Проп установки конца диапазона.
 */
interface IProps {
    onStartDateChange: Dispatch<SetStateAction<Date>>;
    onEndDateChange: Dispatch<SetStateAction<Date>>;
}

/**
 * Компонент быстрого выбора относительных промежутков.
 */
export const QuickSelectPopup: React.FC<IProps> = ({onStartDateChange, onEndDateChange}) => {
    const [inputValue, setInputValue] = useState<number>(15)
    const [fromValue, setFromValue] = useState<string>('Last')
    const [selectedRange, setSelectedRange] = useState<string>('seconds')
    const [recentlyRanges, setRecentlyRanges] = useState<string[]>([])

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
        const dictItem = UNIT_DICTIONARY.find(item => item.label === selectedRange);

        if (dictItem) {
            calculateQuickSelectRanges(fromValue, inputValue, dictItem.value, onStartDateChange, onEndDateChange)
        }
        setRecentlyRanges([`${fromValue} ${inputValue} ${selectedRange}`, ...recentlyRanges])
    }

    const onSetCommonRanges = (item, setStart, setEnd) => {
        calculateCommonRangesDates(item, setStart, setEnd)
        setRecentlyRanges([item, ...recentlyRanges])
    }

    const onSetRecentlyRanges = (range: string) => {
        const ranges = range.split(' ')
        const dictItem = UNIT_DICTIONARY.find(item => item.label === ranges[2]);

        if (+ranges[1]) {
            if (dictItem) {
                calculateQuickSelectRanges(ranges[0], +ranges[1], dictItem.value, onStartDateChange, onEndDateChange)
            }
        } else {
            calculateCommonRangesDates(range, onStartDateChange, onEndDateChange)
        }
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
                    {UNIT_DICTIONARY.map(({id, label}) => <option key={id} value={label}>{label}</option>)}
                </select>
                <button
                    className={styles.btn}
                    onClick={onApplyDate}
                >
                    Apply
                </button>
            </div>
            <span>Commonly used</span>
            <div className={styles.commonly}>
                {COMMONLY_USED_RANGES_DICTIONARY.map(({id, text}) =>
                    <div
                        key={id}
                        onClick={() => onSetCommonRanges(text, onStartDateChange, onEndDateChange)}
                        className={styles.commonlyItem}
                    >
                        {text}
                    </div>
                )}
            </div>
            <span>Recently used date ranges</span>
            <div className={styles.recently}>
                {recentlyRanges.map((range, id) =>
                    <div
                        key={id}
                        className={styles.recentlyItem}
                        onClick={() => onSetRecentlyRanges(range)}
                    >
                        {range}
                    </div>
                )}
            </div>
        </div>
    )
}
