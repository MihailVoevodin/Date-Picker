import {ArrowRightOutlined, ClockCircleTwoTone, DownOutlined} from '@ant-design/icons';
import classNames from 'classnames';
import {QuickSelectPopup} from 'components/QuickSelectPopup/QuickSelectPopup';
import React, {useEffect, useRef, useState} from 'react';
import {dateInFormat} from 'common/Utils';
import {Popup} from 'components/Popup/Popup';
import styles from 'components/DatePicker/DatePicker.module.scss';

/**
 * Общий компонент пикера.
 */
export const DatePicker: React.FC = () => {
    const [startDate, setStartDate] = useState<Date>(() => new Date())
    const [endDate, setEndDate] = useState<Date>(() => new Date(new Date().setMinutes(new Date().getMinutes() + 15)))
    const [startPopupShow, setStartPopupShow] = useState<boolean>(() => false);
    const [endPopupShow, setEndPopupShow] = useState<boolean>(() => false);
    const [quickSelectPopupShow, setQuickSelectPopupShow] = useState<boolean>(false)
    const [isValid, setIsValid] = useState<boolean>(false);
    const datePicker = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = datePicker.current

        if (!element) return;

        const onDocumentClick = (e: MouseEvent) => {
            if (!(e.target instanceof Node)) return;

            if (element.contains(e.target)) {
                return;
            }

            setEndPopupShow(false)
            setStartPopupShow(false)
            setQuickSelectPopupShow(false)
        }

        document.addEventListener('click', onDocumentClick)

        return () => {
            document.removeEventListener('click', onDocumentClick)
        }
    }, [])

    useEffect(() => {
        if (endDate.getTime() < startDate.getTime()) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [startDate, endDate])

    const toggleStartPopup = () => {
        setStartPopupShow(true)
        setEndPopupShow(false)
        setQuickSelectPopupShow(false)
    }

    const toggleEndPopup = () => {
        setEndPopupShow(true)
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
                {quickSelectPopupShow && <QuickSelectPopup setStart={setStartDate} setEnd={setEndDate} />}
            </div>
            <div className={styles.dateContainer}>
                <button
                    onClick={toggleStartPopup}
                    className={isValid ? classNames(styles.dateBtn, styles.notValid) : styles.dateBtn}
                >
                    {dateInFormat(startDate)}
                </button>
                {startPopupShow && <Popup date={startDate} text={'Start'} setDate={setStartDate} />}
            </div>
            <ArrowRightOutlined />
            <div className={styles.dateContainer}>
                <button
                    onClick={toggleEndPopup}
                    className={isValid ? classNames(styles.dateBtn, styles.notValid) : styles.dateBtn}
                >
                    {dateInFormat(endDate)}
                </button>
                {endPopupShow && <Popup date={endDate} text={'End'} setDate={setEndDate} />}
            </div>
        </div>
    )
}
