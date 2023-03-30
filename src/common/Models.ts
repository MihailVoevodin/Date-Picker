import {ReactNode} from 'react';

export interface ITab {
    id: number,
    label: string,
    children: ReactNode,
}

export enum ETimeRangeUnits {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
}

export enum EMonths {
    JANUARY = 'JANUARY',
    FEBRUARY = 'FEBRUARY',
    MARCH = 'MARCH',
    APRIL = 'APRIL',
    MAY = 'MAY',
    JUNE = 'JUNE',
    JULY = 'JULY',
    AUGUST = 'AUGUST',
    SEPTEMBER = 'SEPTEMBER',
    OCTOBER = 'OCTOBER',
    NOVEMBER = 'NOVEMBER',
    DECEMBER = 'DECEMBER',
}

export enum ECommonlyUsedRanges {
    TODAY = 'TODAY',
    YESTERDAY = 'YESTERDAY',
    THIS_WEEK = 'THIS_WEEK',
    WEEK_TO_DATE = 'WEEK_TO_DATE',
    THIS_MONTH = 'THIS_MONTH',
    MONTH_TO_DATE = 'MONTH_TO_DATE',
    THIS_YEAR = 'THIS_YEAR',
    YEAR_TO_DATE = 'YEAR_TO_DATE',
}
