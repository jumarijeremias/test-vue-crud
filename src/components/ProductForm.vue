<template>
    <div class="row">
        <div class="col-md-5">
            <label class="form-label d-block">Product Image: <span class="text-danger">*</span></label>
            <img :src="form.image" class="img-fluid mb-3">
            <div class="mb-3">
                <input type="text" class="form-control" id="productImage" v-model="form.image" aria-describedby="imageHelp">
                <div id="imageHelp" class="form-text">Insert image url. An image preview will show if the input is valid.</div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="mb-3">
                <label class="form-label">Category: <span class="text-danger">*</span></label>
                <select class="form-select text-capitalize" aria-label="Default select example" v-model="form.category">
                    <option value="">Select category</option>
                    <option v-for="category in state.categories" :value="category">{{ category }}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="productName">Product Name: <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="productName" v-model="form.title">
            </div>
            <div class="mb-3">
                <label for="price">Price: <span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="price" v-model="form.price" min="0">
            </div>
            <div class="mb-3">
                <label for="description">Description: <span class="text-danger">*</span></label>
                <textarea class="form-control" id="description" rows="3" v-model="form.description"></textarea>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-success" @click="handleSubmit">{{ state.productId ? 'Update' : 'Submit' }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { fetchCategoriesApi, createProductApi, updateProductApi } from '../Helpers/ApiHelpers';

const props = defineProps([
    'product'
]);

const router = useRouter();

const state = reactive({
    categories: [],
    imageFromFile: "",
    productId: null,
});

const form = reactive({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
});

onMounted(() => {
    getCategories();
    getValueFromProps();
});

watch(() => props.product, () => { 
    getValueFromProps();
});

function getCategories() {
  fetchCategoriesApi().then((data) => {
    state.categories = data;
  });
}

function getValueFromProps() {
    if (props.product) {
        state.productId = props.product.id;
        form.title = props.product.title;
        form.price = props.product.price;
        form.description = props.product.description;
        form.category = props.product.category;
        form.image = props.product.image;
    }
}

function isInputValid() {
    /// Simple validation
    if (form.title == '' || form.price < 0 || form.description == '' || form.category == '' || form.image == '') {
        return false;
    }
    return true;
}

function submitApi(form) {
    if (state.productId) {
        return updateProductApi(state.productId, form);
    }
    return createProductApi(form);
}

function handleSubmit() {
    if (isInputValid()) {
        submitApi(form).then(() => {
            Swal.fire(
                'Success!',
                'Product has been saved.',
                'success'
            ).then(() => {
                router.push({ name: 'home'})
            });
        });
    } else {
        Swal.fire(
            'Validation error',
            'Please populate all required fields.',
            'error'
        );
    }
}

</script>