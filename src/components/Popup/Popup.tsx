import React, {Dispatch, SetStateAction, useState} from 'react';
import classNames from 'classnames';
import {Relative} from 'components/Relative/Relative';
import {Now} from 'components/Now/Now';
import {Absolute} from 'components/Absolute/Absolute';
import {ITab} from 'common/Models';
import styles from 'components/Popup/Popup.module.scss';

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
 * Компонент выпадающего окна с табами видов установки даты.
 */
export const Popup: React.FC<IProps> = ({date, text, setDate}) => {
    const [selectedTab, setSelectedTab] = useState<number>(1)

    const handleChangeTab = (id: number) => {
        setSelectedTab(id)
    }

    const tabs: ITab[] = [
        {
            id: 1,
            label: 'Absolute',
            children: <Absolute date={date} text={text} setDate={setDate} />
        },
        {
            id: 2,
            label: 'Relative',
            children: <Relative date={date} text={text} setDate={setDate} />
        },
        {
            id: 3,
            label: 'Now',
            children: <Now date={date} text={text} setDate={setDate} />
        }
    ]

    return (
        <div className={styles.popup}>
            <div className={styles.popupLabels}>
                {tabs.map((tab) =>
                    <div
                    key={tab.id}
                    className={selectedTab === tab.id ? classNames(styles.popupLabel, styles.active) : styles.popupLabel}
                    onClick={() => handleChangeTab(tab.id)}
                    >
                        {tab.label}
                    </div>)}
            </div>
            <div className={styles.popupTabContainer}>
                {tabs.map((tab) =>
                    <div className={selectedTab === tab.id ?  classNames(styles.popupTabContent, styles.active) : styles.popupTabContent} key={tab.id}>
                        <div>{tab.children}</div>
                    </div>)}
            </div>

        </div>
    )
}
