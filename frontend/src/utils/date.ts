import dayjs from 'dayjs';
import type { TimeblockDate } from '~f/types/date';

export function dayjsFromTimeblockDate({ year, month, day }: TimeblockDate) {
	return dayjs(0).set('year', year).set('month', month).set('day', day);
}