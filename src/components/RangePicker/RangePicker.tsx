import {ArrowRightOutlined, ClockCircleTwoTone, DownOutlined} from '@ant-design/icons';
import classNames from 'classnames';
import {useOnDocumentClick} from 'common/Hooks';
import {QuickSelectPopup} from 'components/QuickSelectPopup/QuickSelectPopup';
import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {dateInFormat} from 'common/Utils';
import {Popup} from 'components/Popup/Popup';
import styles from 'components/RangePicker/RangePicker.module.scss';

interface IProps {
    startDate: Date;
    endDate: Date;
    onStartDateChange: Dispatch<SetStateAction<Date>>;
    onEndDateChange: Dispatch<SetStateAction<Date>>;
}

/**
 * Общий компонент пикера.
 */
export const RangePicker: React.FC<IProps> = ({startDate, endDate, onStartDateChange, onEndDateChange}) => {
    const [startPopupShow, setStartPopupShow] = useState<boolean>(() => false);
    const [endPopupShow, setEndPopupShow] = useState<boolean>(() => false);
    const [quickSelectPopupShow, setQuickSelectPopupShow] = useState<boolean>(false)
    const [notValid, setNotValid] = useState<boolean>(false);
    const datePicker = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        setStartPopupShow(false)
        setEndPopupShow(false)
        setQuickSelectPopupShow(false)
    }

    useOnDocumentClick(datePicker.current, handleClickOutside)

    useEffect(() => {
        if (endDate.getTime() < startDate.getTime()) {
            setNotValid(true)
        } else {
            setNotValid(false)
        }
    }, [startDate, endDate])

    const toggleStartPopup = () => {
        setStartPopupShow(!startPopupShow)
        setEndPopupShow(false)
        setQuickSelectPopupShow(false)
    }

    const toggleEndPopup = () => {
        setEndPopupShow(!endPopupShow)
        setStartPopupShow(false)
        setQuickSelectPopupShow(false)
    }

    const toggleQuickPopup = () => {
        setQuickSelectPopupShow(!quickSelectPopupShow)
        setEndPopupShow(false)
        setStartPopupShow(false)
    }

    return (
        <div ref={datePicker} className={styles.rangeContainer}>
            <div className={styles.quickSelectContainer}>
                <button className={styles.quickBtn} onClick={toggleQuickPopup}>
                    <ClockCircleTwoTone style={{paddingRight: 5}} />
                    <DownOutlined />
                </button>
                {quickSelectPopupShow && <QuickSelectPopup onStartDateChange={onStartDateChange} onEndDateChange={onEndDateChange} />}
            </div>
            <div className={styles.dateContainer}>
                <button
                    onClick={toggleStartPopup}
                    className={notValid ? classNames(styles.dateBtn, styles.notValid) : styles.dateBtn}
                >
                    {dateInFormat(startDate)}
                </button>
                {startPopupShow && <Popup date={startDate} text={'Start'} onDateChange={onStartDateChange} />}
            </div>
            <ArrowRightOutlined />
            <div className={styles.dateContainer}>
                <button
                    onClick={toggleEndPopup}
                    className={notValid ? classNames(styles.dateBtn, styles.notValid) : styles.dateBtn}
                >
                    {dateInFormat(endDate)}
                </button>
                {endPopupShow && <Popup date={endDate} text={'End'} onDateChange={onEndDateChange} />}
            </div>
        </div>
    )
}
