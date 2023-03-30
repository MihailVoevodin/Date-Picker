import {ECommonlyUsedRanges, EMonths, ETimeRangeUnits} from "common/Models";

export const T = {
    UnitDictionary: {
        [ETimeRangeUnits.SECOND]: 'seconds',
        [ETimeRangeUnits.MINUTE]: 'minutes',
        [ETimeRangeUnits.HOUR]: 'hours',
        [ETimeRangeUnits.DAY]: 'days',
        [ETimeRangeUnits.WEEK]: 'weeks',
        [ETimeRangeUnits.MONTH]: 'months',
        [ETimeRangeUnits.YEAR]: 'years',
    },
    monthsDictionary: {
        [EMonths.JANUARY]: 'Jan',
        [EMonths.FEBRUARY]: 'Feb',
        [EMonths.MARCH]: 'Mar',
        [EMonths.APRIL]: 'Apr',
        [EMonths.MAY]: 'May',
        [EMonths.JUNE]: 'Jun',
        [EMonths.JULY]: 'Jul',
        [EMonths.AUGUST]: 'Aug',
        [EMonths.SEPTEMBER]: 'Sep',
        [EMonths.OCTOBER]: 'Oct',
        [EMonths.NOVEMBER]: 'Nov',
        [EMonths.DECEMBER]: 'Dec',
    },
    commonlyUsedRangesDictionary: {
        [ECommonlyUsedRanges.TODAY]: 'Today',
        [ECommonlyUsedRanges.YESTERDAY]: 'Yesterday',
        [ECommonlyUsedRanges.THIS_WEEK]: 'This week',
        [ECommonlyUsedRanges.WEEK_TO_DATE]: 'Week to date',
        [ECommonlyUsedRanges.THIS_MONTH]: 'This month',
        [ECommonlyUsedRanges.MONTH_TO_DATE]: 'Month to date',
        [ECommonlyUsedRanges.THIS_YEAR]: 'This year',
        [ECommonlyUsedRanges.YEAR_TO_DATE]: 'Year to date',
    },
}
