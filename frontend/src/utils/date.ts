import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { TimeblockDate } from '~f/types/date';

export function timeblockDateToDayjs({ year, month, day }: TimeblockDate) {
	return dayjs.tz(0).set('year', year).set('month', month).set('date', day);
}

export function dayjsToTimeblockDate(d: Dayjs): TimeblockDate {
	return {
		year: d.get('year'),
		month: d.get('month'),
		day: d.get('date'),
	};
}

export function getTodayTimeblockDate(): TimeblockDate {
	return dayjsToTimeblockDate(dayjs().tz());
}

export function getTodayDayjs(): Dayjs {
	return timeblockDateToDayjs(getTodayTimeblockDate());
}
