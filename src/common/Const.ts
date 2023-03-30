import {ECommonlyUsedRanges, EMonths, ETimeRangeUnits} from "common/Models";
import {T} from "common/Text";
import {getTimeList} from 'common/Utils';

export const UNIT_DICTIONARY = [
    {
        id: ETimeRangeUnits.SECOND,
        label: T.UnitDictionary[ETimeRangeUnits.SECOND],
        value: 1000,
    },
    {
        id: ETimeRangeUnits.MINUTE,
        label: T.UnitDictionary[ETimeRangeUnits.MINUTE],
        value: 1000 * 60,
    },
    {
        id: ETimeRangeUnits.HOUR,
        label: T.UnitDictionary[ETimeRangeUnits.HOUR],
        value: 1000 * 60 * 60,
    },
    {
        id: ETimeRangeUnits.DAY,
        label: T.UnitDictionary[ETimeRangeUnits.DAY],
        value: 1000 * 60 * 60 * 24,
    },
    {
        id: ETimeRangeUnits.WEEK,
        label: T.UnitDictionary[ETimeRangeUnits.WEEK],
        value: 1000 * 60 * 60 * 24 * 7,
    },
    {
        id: ETimeRangeUnits.MONTH,
        label: T.UnitDictionary[ETimeRangeUnits.MONTH],
        value: 1000 * 60 * 60 * 24 * 30,
    },
    {
        id: ETimeRangeUnits.YEAR,
        label: T.UnitDictionary[ETimeRangeUnits.YEAR],
        value: 1000 * 60 * 60 * 24 * 365,
    },
];

export const MONTHS_DICTIONARY = [
    T.monthsDictionary[EMonths.JANUARY],
    T.monthsDictionary[EMonths.FEBRUARY],
    T.monthsDictionary[EMonths.MARCH],
    T.monthsDictionary[EMonths.APRIL],
    T.monthsDictionary[EMonths.MAY],
    T.monthsDictionary[EMonths.JUNE],
    T.monthsDictionary[EMonths.JULY],
    T.monthsDictionary[EMonths.AUGUST],
    T.monthsDictionary[EMonths.SEPTEMBER],
    T.monthsDictionary[EMonths.OCTOBER],
    T.monthsDictionary[EMonths.NOVEMBER],
    T.monthsDictionary[EMonths.DECEMBER],
];

export const COMMONLY_USED_RANGES_DICTIONARY = [
    {
        id: ECommonlyUsedRanges.TODAY,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.TODAY]
    },
    {
        id: ECommonlyUsedRanges.YESTERDAY,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.YESTERDAY]
    },
    {
        id: ECommonlyUsedRanges.THIS_WEEK,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.THIS_WEEK]
    },
    {
        id: ECommonlyUsedRanges.WEEK_TO_DATE,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.WEEK_TO_DATE]
    },
    {
        id: ECommonlyUsedRanges.THIS_MONTH,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.THIS_MONTH]
    },
    {
        id: ECommonlyUsedRanges.MONTH_TO_DATE,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.MONTH_TO_DATE]
    },
    {
        id: ECommonlyUsedRanges.THIS_YEAR,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.THIS_YEAR]
    },
    {
        id: ECommonlyUsedRanges.YEAR_TO_DATE,
        text: T.commonlyUsedRangesDictionary[ECommonlyUsedRanges.YEAR_TO_DATE]
    },
]

export const TIME_DICTIONARY = getTimeList();
