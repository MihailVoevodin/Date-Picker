import React, {Dispatch, SetStateAction} from 'react';
import {dateInFormat} from 'common/Utils';
import styles from 'components/Now/Now.module.scss';

interface IProps {
    date: string,
    text: string,
    setDate: Dispatch<SetStateAction<string>>,
}

export const Now: React.FC<IProps> = ({date, text, setDate}) => {

    const handleSetDate = () => {
        setDate(dateInFormat(new Date()))
    }

    return (
        <div>
            <button className={styles.btn} onClick={handleSetDate}>Set now date</button>
            <div className={styles.dateContainer}>
                <span className={styles.text}>{text} date</span>
                <div className={styles.date}>{date}</div>
            </div>
        </div>
    )
}