<template>
    <div class="discount"><h4>지금 결제하면 {{discountRate}}% 할인</h4></div>
</template>

<script>
export default {
    name: 'DiscountVue',

    data(){
        return{
            discountRate :30,
        }
    },
    mounted(){
        setInterval(() => {
            this.discountRate -= 1;
        }, 1000);
    }
    
}
</script>

<style>

</style>