<script lang="ts">
	export let selectedDate: Date;

	const margin = 3;

    let dates: Date[] = []

    $:{
        let dateFrom = new Date(selectedDate.valueOf() - margin * 1000 * 3600 * 24);
        let dateTo = new Date(selectedDate.valueOf() + margin * 1000 * 3600 * 24);
    
        dates = [];

        for (let date = dateFrom; date <= dateTo; date.setDate(date.getDate() + 1)) {
            const cloned = new Date(date.valueOf());
            dates.push(cloned);
        }
    }


</script>

<div class="flex flex-row gap-4">
	{#each dates as date}
		<div class="w-16 h-16 grid place-items-center border-2 rounded-xl bg-white {date.getDate() === selectedDate.getDate() ? "selected" : "unselected"}" on:click={() => selectedDate = date}>
			<p class="text-2xl select-none">{date.getDate()}</p>
		</div>
	{/each}
</div>

<style lang="scss">
    .selected {
        @apply border-red-300;
    }

    .unselected {
        @apply border-slate-600;
    }
</style>
