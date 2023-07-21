export const fetchProductsApi = async (filters = {}) => {
    let url = "https://fakestoreapi.com/products";
  
    if (filters.category !== undefined && filters.category != "") {
      url += "/category/" + filters.category;
    }
  
    return await fetch(url).then((res) => {
        return res.json();
    });
}

export const fetchCategoriesApi = async () => {
    let url = "https://fakestoreapi.com/products/categories";
  
    return await fetch(url).then((res) => {
        return res.json();
    });
}

export const fetchProductDataApi = async (id) => {
    let url = "https://fakestoreapi.com/products/" + id;
  
    return await fetch(url).then((res) => {
        return res.json();
    });
}

export const createProductApi = async (data) => {
    let url = "https://fakestoreapi.com/products";
  
    return await fetch(url,{
        method:"POST",
        body: JSON.stringify(data)
    }).then((res) => {
        return res.json();
    });
}

export const updateProductApi = async (id, data) => {
    let url = "https://fakestoreapi.com/products/" + id;
  
    return await fetch(url,{
        method:"PUT",
        body: JSON.stringify(data)
    }).then((res) => {
        return res.json();
    });
}


export const deleteProductApi = async (id) => {
    let url = "https://fakestoreapi.com/products/" + id;
  
    return await fetch(url,{
        method:"DELETE"
    }).then((res) => {
        return res.json();
    });
}
