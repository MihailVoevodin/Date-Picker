import {ETimeRangeUnit} from "common/Models";
import {T} from "common/Text";

export const UNIT_DICTIONARY = [
    {
        id: ETimeRangeUnit.SECOND,
        label: T.UnitDictionary[ETimeRangeUnit.SECOND],
        value: 1000,
    },
    {
        id: ETimeRangeUnit.MINUTE,
        label: T.UnitDictionary[ETimeRangeUnit.MINUTE],
        value: 1000 * 60,
    },
    {
        id: ETimeRangeUnit.HOUR,
        label: T.UnitDictionary[ETimeRangeUnit.HOUR],
        value: 1000 * 60 * 60,
    },
    {
        id: ETimeRangeUnit.DAY,
        label: T.UnitDictionary[ETimeRangeUnit.DAY],
        value: 1000 * 60 * 60 * 24,
    },
    {
        id: ETimeRangeUnit.WEEK,
        label: T.UnitDictionary[ETimeRangeUnit.WEEK],
        value: 1000 * 60 * 60 * 24 * 7,
    },
    {
        id: ETimeRangeUnit.MONTH,
        label: T.UnitDictionary[ETimeRangeUnit.MONTH],
        value: 1000 * 60 * 60 * 24 * 30,
    },
    {
        id: ETimeRangeUnit.YEAR,
        label: T.UnitDictionary[ETimeRangeUnit.YEAR],
        value: 1000 * 60 * 60 * 24 * 365,
    },
];
