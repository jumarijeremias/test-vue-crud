<template>
    <h3 class="mb-3">Update product</h3>
    <div class="card">
        <div class="card-body">
            <ProductForm :product="state.product"></ProductForm>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductForm from '../components/ProductForm.vue';
import { fetchProductDataApi } from '../Helpers/ApiHelpers';

const route = useRoute();

const state = reactive({
    product: null,
});

onMounted(() => {
    getProductData(route.params.id);
});

function getProductData(id) {
    fetchProductDataApi(id).then((data) => {
        state.product = data;
    });
}
</script>