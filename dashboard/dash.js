const postsbtn = document.querySelector(".postsbtn");
const productsbtn = document.querySelector(".productsbtn");
const insightsbtn = document.querySelector(".insightsbtn");

const posts = document.querySelector(".posts-box");
const insights = document.querySelector(".insights-box");
const products = document.querySelector(".products-box");

// Initial state: show products by default or based on preference
products.style.display = "block";
insights.style.display = "none";
posts.style.display = "none";

postsbtn.addEventListener("click", () => {
    insights.style.display = "none";
    products.style.display = "none";
    posts.style.display = "block";
});
insightsbtn.addEventListener("click", () => {
    insights.style.display = "block";
    products.style.display = "none";
    posts.style.display = "none";
});
productsbtn.addEventListener("click", () => {
    insights.style.display = "none";
    products.style.display = "block";
    posts.style.display = "none";
});

const cancelBtns = document.querySelectorAll(".cancel");
const forms = document.querySelector(".forms");
const layer = document.querySelector(".layer");
const addProductBtn = document.querySelector(".products-box .head button");
const addPostBtn = document.querySelector(".posts-box .head button");
const productSaveBtn = document.querySelector(".addproduct .save");
const postSaveBtn = document.querySelector(".addpost .save"); // Select the save button for posts

cancelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        forms.style.display = "none";
        layer.style.display = "none";
        // Clear form fields when canceling - targeting by more specific selectors
        document.querySelector(".addproduct #title").value = "";
        document.querySelector(".addproduct input[name='desc'][id='desc']").value = ""; // Specific for product desc
        document.querySelector(".addproduct input[name='desc'][id='desc']:nth-of-type(3)").value = ""; // Specific for product price
        document.querySelector(".addproduct #img").value = "";

        document.querySelector(".addpost #desc").value = ""; // Specific for post desc
        document.querySelector(".addpost #img").value = ""; // Specific for post img
    });
});

addProductBtn.addEventListener("click", () => {
    forms.style.display = "flex";
    layer.style.display = "block";
    document.querySelector(".addproduct").style.display = "flex";
    document.querySelector(".addpost").style.display = "none";
});

productSaveBtn.addEventListener("click", () => {
    // Select inputs using more specific CSS selectors within the .addproduct form
    const productTitle = document.querySelector(".addproduct #title").value;
    const productDesc = document.querySelector(".addproduct input[name='desc'][id='desc']").value; // Targets the first 'desc' in addproduct
    const productPrice = document.querySelector(".addproduct input[name='desc'][id='desc']:nth-of-type(3)").value; // Targets the third input with name/id 'desc' for price
    const productImg = document.querySelector(".addproduct #img").value; // Targets the first 'img' in addproduct

    // Basic validation
    if (!productTitle || !productDesc || !productPrice || !productImg) {
        alert("Please fill in all product fields.");
        return;
    }

    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
        <h1>${productTitle}</h1>
        <p>${productDesc}</p>
        <h3>$${parseFloat(productPrice).toFixed(2)}</h3>
        <img src="${productImg}" alt="${productTitle}" width="250">
    `;
    document.querySelector(".products").appendChild(product);

    forms.style.display = "none";
    layer.style.display = "none";

    // Clear form fields after saving
    document.querySelector(".addproduct #title").value = "";
    document.querySelector(".addproduct input[name='desc'][id='desc']").value = "";
    document.querySelector(".addproduct input[name='desc'][id='desc']:nth-of-type(3)").value = "";
    document.querySelector(".addproduct #img").value = "";
});

addPostBtn.addEventListener("click", () => {
    forms.style.display = "flex";
    layer.style.display = "block";
    document.querySelector(".addpost").style.display = "flex";
    document.querySelector(".addproduct").style.display = "none";
});

postSaveBtn.addEventListener("click", () => {
    // Select inputs using more specific CSS selectors within the .addpost form
    const postDesc = document.querySelector(".addpost #desc").value; // Targets the 'desc' in addpost
    const postImg = document.querySelector(".addpost #img").value; // Targets the 'img' in addpost

    // Basic validation
    if (!postDesc || !postImg) {
        alert("Please fill in all post fields.");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
        <div class="pic">
            <i class="fa-solid fa-user"></i>
        </div>
        <p>${postDesc}</p>
        <img src="${postImg}" alt="Post Image" width="250">
    `;
    document.querySelector(".posts").appendChild(post);

    forms.style.display = "none";
    layer.style.display = "none";

    // Clear form fields after saving
    document.querySelector(".addpost #desc").value = "";
    document.querySelector(".addpost #img").value = "";
});
document.querySelector(".menubtn").addEventListener("click",()=>{
    document.querySelector(".sidemenu").style.display="block"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".sidemenu").style.display="none"

})