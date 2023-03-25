import classNames from 'classnames';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Now} from 'components/Now/Now';
import {ITab} from 'common/Models';
import styles from 'components/Popup/Popup.module.scss';

interface IProps {
    date: string,
    text: string,
    setDate: Dispatch<SetStateAction<string>>,
}

export const Popup: React.FC<IProps> = ({date, text, setDate}) => {
    const [selectedTab, setSelectedTab] = useState<number>(1)

    const handleChangeTab = (id: number) => {
        setSelectedTab(id)
    }

    const tabs: ITab[] = [
        {
            id: 1,
            label: 'Absolute',
            children: <div>calendar</div>
        },
        {
            id: 2,
            label: 'Relative',
            children: <div>relative</div>
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

