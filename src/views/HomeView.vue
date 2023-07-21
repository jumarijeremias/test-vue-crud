<template>
  <main>
    <div class="d-flex">
      <div class="mb-3 me-3">
        <label for="search" class="form-label">Search:</label>
        <input type="text" class="form-control" id="search" placeholder="Insert keyword" v-model="state.searchKey">
      </div>
      <div class="mb-3 me-3">
        <label class="form-label">Category:</label>
        <select class="form-select text-capitalize" aria-label="Default select example" v-model="state.category" @change="categorySelected">
          <option value="">Select category</option>
          <option v-for="category in state.categories" :value="category">{{ category }}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <template v-for="(product, pIndex) in productList" :key="pIndex">
        <div class="col-md-3">
          <RouterLink :to="{ name:'productView', params: { id: product.id }}" class="nav-link" aria-current="page">
            <ProductPanel
              :title="product.title"
              :price="product.price"
              :category="product.category"
              :imageUrl="product.image"
              :rating="product.rating"
            ></ProductPanel>
          </RouterLink>
        </div>
      </template>
    </div>
  </main>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue';
import { fetchProductsApi, fetchCategoriesApi } from '../Helpers/ApiHelpers';
import ProductPanel from '../components/ProductPanel.vue'

const state = reactive({
  products: [],
  categories: [],
  searchKey: "",
  category: "",
});

const productList = computed(() => {
  let listing = state.products;

  if (state.searchKey.length > 2) {
    listing = listing.filter((item) => {
      return item.title.toLowerCase().includes(state.searchKey.toLowerCase());
    })
  }

  return listing;
});

onMounted(() => {
  getCategories();
  getProducts();
});

function getProducts(filters = {}) {
  fetchProductsApi(filters).then((data) => {
    state.products = data;
  });
}

function getCategories() {
  fetchCategoriesApi().then((data) => {
    state.categories = data;
  });
}

function categorySelected() {
  getProducts({
    category: state.category,
  });
}
</script>

