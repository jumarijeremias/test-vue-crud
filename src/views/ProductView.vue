<template>
    <div v-if="state.product" class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-5 p-5">
                    <img :src="state.product.image" class="img-fluid mb-3" :alt="state.product.title">
                </div>
                <div class="col-md-7">
                    <br>
                    <h3>{{ state.product.title }}</h3>
                    <div class="d-flex align-items-center mb-3">
                        <div class="me-2 fs-5">
                            {{  state.product.rating.rate  }}
                        </div>
                        <StarRating :rating="state.product.rating.rate" />
                        <span class="me-3 ms-3">|</span>
                        <div>
                            {{  state.product.rating.count  }} Ratings
                        </div>
                    </div>
                    <h1 class="text-warning mb-3">
                       $ {{ state.product.price   }}
                    </h1>
                    <p>
                        {{  state.product.description  }}
                    </p>
                    <span class="text-capitalize fs-6">#{{  state.product.category  }}</span>
                    <hr>
                    
                    <RouterLink :to="{ name:'productUpdate', params: { id: state.product.id }}">
                        <button type="button" class="btn btn-primary me-3 mb-3">Edit</button>
                    </RouterLink>
                    <button type="button" class="btn btn-danger me-3 mb-3" @click="handleDelete">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { fetchProductDataApi, deleteProductApi } from '../Helpers/ApiHelpers';
import { useRoute, useRouter } from 'vue-router';
import StarRating from '../components/StarRating.vue';
import Swal from 'sweetalert2';

const router = useRouter()
const route = useRoute();
const state = reactive({
    product: null,
});

onMounted(() => {
    getProductData(route.params.id);
});

function handleDelete() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteProductApi(state.product.id).then(() => {
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success'
                ).then(() => {
                    router.push({ name: 'home'})
                });
            });
        }
    });
}

function getProductData(id) {
    fetchProductDataApi(id).then((data) => {
        state.product = data;
    });
}
</script>