<script lang="ts">
	import { onMount } from "svelte";



    export let imgUrl: string;
    export let guessCount: 1 | 2 | 3 | 4 | 5;

    let canvas: HTMLCanvasElement;
    let context;

    onMount(() => {
        const img = new Image();
        img.src = imgUrl;

        canvas.width = img.width;
        canvas.height = img.height;

        const aspectRatio = img.width / img.height;

        const pixelCountWidth = 2**(guessCount + 1);
        const pixelCountHeight = Math.ceil(pixelCountWidth / aspectRatio);        

        const pixelPerSquareWidth = Math.ceil(canvas.width / pixelCountWidth);
        const pixelPerSquareHeight = Math.ceil(canvas.height / pixelCountHeight);

        console.log(pixelPerSquareWidth, pixelPerSquareHeight);
        

        context = canvas.getContext("2d");

        context?.drawImage(img, 0, 0);
    })

</script>

<div class="w-1/5 h-fit rounded-xl overflow-hidden">
    <canvas bind:this={canvas} class="w-full h-full"></canvas>
</div>