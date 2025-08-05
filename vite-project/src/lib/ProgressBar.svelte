<script>
    let { currentIndex } = $props();
</script>

<label>Questions { currentIndex + 1}/4 :</label>
<progress value={currentIndex + 1} max="4"></progress>

<style>
    .progress{
        border: none;

    }
</style>