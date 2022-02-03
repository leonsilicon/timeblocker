<script setup lang="ts">
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { onMounted } from 'vue';

const calendarRef = $ref<HTMLDivElement>();

let calendar: Calendar;

onMounted(() => {
	calendar = new Calendar(calendarRef, {
		plugins: [dayGridPlugin, timeGridPlugin],
		initialView: 'dayGridMonth',
		headerToolbar: false,
	});

	calendar.render();
});

function onLeftMonthArrowClick() {
	calendar.prev();
}

function onRightMonthArrowClick() {
	calendar.next();
}
</script>

<template>
	<div class="column items-center">
		<div class="overflow-auto max-w-full">
			<div class="px-8 pb-8 bg-yellow w-[1000px]">
				<div class="row center">
					<svg viewBox="0 0 10 10" class="arrow-svg">
						<polygon
							style="pointer-events: visibleFill"
							class="cursor-pointer"
							points="1,5 10,0 10,10"
							fill="white"
							@click="onLeftMonthArrowClick"
							@mousedown.prevent
						/>
					</svg>
					<div
						class="text-white text-center text-[3rem] md:text-[6rem] font-bold my-6 mx-14 flex-grow"
						style="text-shadow: 5px 5px rgba(230, 4, 0, 0.4)"
					>
						{ Current Month }
					</div>
					<svg viewBox="0 0 10 10" class="arrow-svg">
						<polygon
							style="pointer-events: visibleFill"
							class="cursor-pointer"
							points="0,0 0,10 9,5"
							fill="white"
							@click="onRightMonthArrowClick"
							@mousedown.prevent
						/>
					</svg>
				</div>
				<div id="fc" ref="calendarRef" class="bg-white"></div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.arrow-svg {
	@apply w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] hover:scale-110 transition-transform;
}
</style>

<style lang="postcss">
.fc-event {
	@apply cursor-pointer;
}

.fc-daygrid-event {
	display: grid;
	grid-template-columns: 20px auto;
	grid-template-rows: auto auto;
}

.fc-event-time {
	@apply hidden;
}

.fc-daygrid-event {
	@apply transform hover:scale-95 transition-transform;
}

.fc-daygrid-event-dot {
	@apply hidden;
}

#fc .fc-event-title {
	@apply text-center font-medium text-md;
	white-space: normal !important;
	overflow: auto !important;
	grid-column: 1 / -1;
}

.fc .fc-toolbar-title {
	@apply text-white text-6xl font-bold;
}

.fc .fc-col-header-cell-cushion {
	@apply text-gray;
	font-size: 0.6rem;
	text-transform: uppercase;
	vertical-align: top;
}

.fc .fc-scrollgrid-sync-inner {
	@apply text-left;
}

.fc-day-today {
	@apply relative;
}

.fc-day-today::before {
	content: '';
	@apply absolute inset-0;
	border: 2px solid red;
}

#fc .school-event {
	@apply bg-red-dark;
}

#fc .club-event {
	@apply bg-yellow-deep text-white;
}

#fc .fc-day-today {
	@apply bg-white;
}

#fc .fc-daygrid-day-top {
	@apply pl-[5px] pt-[3px] flex flex-row;
}

#fc .fc-daygrid-day-number {
	@apply font-bold;
}

.fc .fc-day-other {
	background-color: rgba(0, 0, 0, 0.1);
}

.fc .fc-daygrid-day-number {
}
</style>

<style scoped lang="scss">
@use 'sass:math';

$triangle-width: 3rem;
$triangle-ratio: 1.8;

.triangle-left {
	width: 0;
	height: 0;
	border-top: math.div($triangle-width, $triangle-ratio) solid transparent;
	border-right: $triangle-width solid white;
	border-bottom: math.div($triangle-width, $triangle-ratio) solid transparent;
}

.triangle-right {
	width: 0;
	height: 0;
	border-top: math.div($triangle-width, $triangle-ratio) solid transparent;
	border-left: $triangle-width solid white;
	border-bottom: math.div($triangle-width, $triangle-ratio) solid transparent;
}

.arrow-svg:hover {
	transform: scale(1.1);
}
</style>
