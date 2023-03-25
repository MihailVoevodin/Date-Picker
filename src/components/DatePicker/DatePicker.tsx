import {ArrowRightOutlined} from '@ant-design/icons';
import React, {useEffect, useRef, useState} from 'react';
import {dateInFormat} from 'common/Utils';
import {Popup} from 'components/Popup/Popup';
import styles from 'components/DatePicker/DatePicker.module.scss';

export const DatePicker = () => {
    const nowDate = new Date()
    const end = new Date(new Date().setMinutes(new Date().getMinutes() + 3))

    const [startDate, setStartDate] = useState<string>(dateInFormat(nowDate))
    const [endDate, setEndDate] = useState<string>(dateInFormat(end))
    const [startPopupShow, setStartPopupShow] = useState<boolean>(false);
    const [endPopupShow, setEndPopupShow] = useState<boolean>(false);
    const datePicker = useRef<HTMLDivElement>(null)

    const toggleStartPopup = () => {
        setStartPopupShow(true)
        setEndPopupShow(false)
    }

    const toggleEndPopup = () => {
        setEndPopupShow(true)
        setStartPopupShow(false)
    }

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
        }

        document.addEventListener('click', onDocumentClick)

        return () => {
            document.removeEventListener('click', onDocumentClick)
        }
    })

    return (
        <div ref={datePicker} className={styles.rangeContainer}>
            <div className={styles.dateContainer}>
                <button onClick={toggleStartPopup} className={styles.dateBtn}>{startDate}</button>
                {startPopupShow && <Popup date={startDate} text={'Start'} setDate={setStartDate} />}
            </div>
            <ArrowRightOutlined />
            <div className={styles.dateContainer}>
                <button onClick={toggleEndPopup} className={styles.dateBtn}>{endDate}</button>
                {endPopupShow && <Popup date={endDate} text={'End'} setDate={setEndDate} />}
            </div>
        </div>
    )
}
