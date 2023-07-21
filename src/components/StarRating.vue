<template>
    <div class="star-ratings">
        <div class="fill-ratings" :style="'width: ' + ((rating * 100) / 5) + '%'">
            <span>
                <template v-for="star in stars">★</template>
            </span>
        </div>
        <div class="empty-ratings">
            <span>
                <template v-for="star in stars">★</template>
            </span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    rating: {
        type: Number,
        default: 5
    },
    stars: {
        type: Number,
        default: 5
    },
});
</script>