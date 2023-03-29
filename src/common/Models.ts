import {ReactNode} from 'react';

export interface ITab {
    id: number,
    label: string,
    children: ReactNode,
}

export enum ETimeRangeUnit {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
}
