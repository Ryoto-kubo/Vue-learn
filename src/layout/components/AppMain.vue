<template>
    <div class="appmain">
        <router-view :key="key" /> <!-- router/indexのcildren componentを描画-->
    </div>
</template>

<script>
export default {
    // name: 'AppMain',

}
</script>

<style>

</style>