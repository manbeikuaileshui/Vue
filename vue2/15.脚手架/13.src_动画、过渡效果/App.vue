<template>
    <div>
        <DongHua/>
        <GuoDu/>
        <DiSanFang/>
    </div>
</template>

<script>
    import DongHua from './components/DongHua.vue'
    import GuoDu from './components/GuoDu.vue'
    import DiSanFang from './components/DiSanFang.vue'
    export default {
        name: 'App',
        components: { DongHua, GuoDu, DiSanFang }
    }
</script>

<style>

</style>