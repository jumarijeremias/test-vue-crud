<template>
    <div class="card mb-4">
        <div class="card-body">
            <img :src="imageUrl" class="card-img-top mb-2" :alt="title">
            <h5 class="card-title">{{ title }}</h5>
            <span class="category">{{  category  }}</span>
            <div class="d-flex align-items-end">
                <div class="me-auto fs-4">${{ price }}</div>
                <div class="d-flex align-items-center">
                    <div class="me-1 fs-5">{{  rating.rate  }}</div>
                    <StarRating :rating="rating.rate" :stars="1" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import StarRating from '../components/StarRating.vue';
defineProps([
    'title',
    'price',
    'category',
    'imageUrl',
    'rating',
]);
</script>

<style scoped>
.card {
    cursor: pointer;
}
.card-img-top {
    height: 200px;
    object-fit: contain;
}
.card-title {
    height: 48px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
            line-clamp: 2; 
    -webkit-box-orient: vertical;
    margin-bottom: 0;
}
.category {
    font-size: 12px;
}
</style>