<script lang="ts">
	import ArtworkContainer from '$lib/components/artworkContainer.svelte';
	import DaySelector from '$lib/components/day-selector.svelte';
	import { token } from "$lib/stores/token";
	import type { Game } from '@prisma/client';
	import { onMount } from "svelte";
	import { writable } from 'svelte/store';

	const game = writable({
		imgUrl: "",
		name: "",
		id: 0,
		releaseDate: "",
		studio: "",
	});

	onMount(async () => {
		const response = await fetch(window.location.href + "api/get-daily-challenge");

		const obj = await response.json();

		game.set(obj);
	});


</script>

<div class="h-screen w-screen grid place-items-center">
	<DaySelector selectedDate={new Date(2022, 10, 3)}></DaySelector>
	<ArtworkContainer imgUrl={$game?.imgUrl} guessCount={1} />
	{$token}
</div>
