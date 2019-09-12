<template>
    <div>
        <navbar />
        <app-main />
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
    name: 'Layout',
    components: {
        AppMain,
        Navbar,
    }

}
</script>

<style>

</style>