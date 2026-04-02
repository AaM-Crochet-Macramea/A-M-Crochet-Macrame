// Sample products data - You can manually add/edit this data
const productsData = [
    {
        id: 1,
        name: "مثال منتج كروشيه",
        category: "crochet",
        price: 50,
        originalPrice: 70,
        discount: 30,
        description: "منتج مصنوع بعناية فائقة باستخدام أفضل الخيوط والمواد، مصمم خصيصاً لإضافة لمسة فنية جميلة إلى منزلك.",
        material: "خيط كروشيه عالي الجودة",
        size: "حسب الطلب",
        colors: "متعددة الألوان",
        production: "3-7 أيام",
        images: [
            "https://via.placeholder.com/500x500?text=صورة+المنتج+1",
            "https://via.placeholder.com/500x500?text=صورة+المنتج+2",
            "https://via.placeholder.com/500x500?text=صورة+المنتج+3",
            "https://via.placeholder.com/500x500?text=صورة+المنتج+4"
        ]
    },
    {
        id: 2,
        name: "مثال منتج مكراميه",
        category: "macrame",
        price: 75,
        originalPrice: 95,
        discount: 20,
        description: "تصميم راقي من المكراميه مصنوع يدويا بأسلوب حديث يناسب الديكور العصري.",
        material: "خيط مكراميه طبيعي",
        size: "80 × 100 سم",
        colors: "أبيض، بيج، وردي",
        production: "5-10 أيام",
        images: [
            "https://via.placeholder.com/500x500?text=منتج+مكراميه+1",
            "https://via.placeholder.com/500x500?text=منتج+مكراميه+2",
            "https://via.placeholder.com/500x500?text=منتج+مكراميه+3",
            "https://via.placeholder.com/500x500?text=منتج+مكراميه+4"
        ]
    }
];

// Contact information
const contactInfo = {
    whatsappNumber: "966501234567", // Replace with your actual WhatsApp number (without +)
    phone: "+966 50 123 4567",
    email: "info@brandname.com",
    instagram: "https://instagram.com/brandname",
    facebook: "https://facebook.com/brandname",
    tiktok: "https://tiktok.com/@brandname"
};

// ==================== MAIN PAGE FUNCTIONALITY ====================

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the main page
    if (document.getElementById('productsGrid')) {
        initializeMainPage();
    }
    
    // Check if we're on the product details page
    if (document.getElementById('productDetails')) {
        loadProductDetails();
    }
});

function initializeMainPage() {
    // Add event listeners to category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter products
            const category = this.dataset.category;
            filterProducts(category);
        });
    });
    
    // Load all products initially
    renderProducts('all');
}

function filterProducts(category) {
    renderProducts(category);
}

function renderProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = ''; // Clear existing products
    
    // Filter products
    let filteredProducts = productsData;
    if (category !== 'all') {
        filteredProducts = productsData.filter(product => product.category === category);
    }
    
    // Render each product
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
            <div class="discount-badge">${product.discount}%</div>
            <div class="product-overlay">
                <button class="view-details-btn" onclick="viewProductDetails(${product.id})">
                    <i class="fas fa-eye"></i>
                    <span>عرض التفاصيل</span>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-category">${getCategoryName(product.category)}</p>
            <div class="product-price">
                <span class="price">${product.price} ر.س</span>
                <span class="original-price">${product.originalPrice} ر.س</span>
            </div>
        </div>
    `;
    
    return card;
}

function getCategoryName(category) {
    const categoryNames = {
        'crochet': 'كروشيه',
        'macrame': 'مكراميه',
        'accessories': 'اكسسوارات'
    };
    return categoryNames[category] || category;
}

function viewProductDetails(productId) {
    // Store the product ID in localStorage to use on the details page
    localStorage.setItem('selectedProductId', productId);
    // Redirect to product details page
    window.location.href = 'product-details.html';
}

// ==================== PRODUCT DETAILS PAGE FUNCTIONALITY ====================

function loadProductDetails() {
    const productId = parseInt(localStorage.getItem('selectedProductId')) || 1;
    const product = productsData.find(p => p.id === productId);
    
    if (product) {
        updateProductDetails(product);
    }
}

function updateProductDetails(product) {
    // Update header information
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productCategory').textContent = getCategoryName(product.category);
    document.getElementById('productPrice').textContent = `${product.price} ر.س`;
    document.getElementById('productDescription').textContent = product.description;
    
    // Update specifications
    document.getElementById('material').textContent = product.material;
    document.getElementById('size').textContent = product.size;
    document.getElementById('colors').textContent = product.colors;
    document.getElementById('production').textContent = product.production;
    
    // Update gallery
    document.getElementById('mainImage').src = product.images[0];
    
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    thumbnailGallery.innerHTML = '';
    product.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = product.name;
        img.className = 'thumbnail';
        img.onclick = function() { changeMainImage(this); };
        thumbnailGallery.appendChild(img);
    });
    
    // Store product info in a global variable for WhatsApp
    window.currentProduct = product;
}

function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnail.src;
}

function orderWhatsApp() {
    if (!window.currentProduct) return;
    
    const product = window.currentProduct;
    const message = `السلام عليكم، أود الطلب عن المنتج التالي:\n\n` +
                   `📦 المنتج: ${product.name}\n` +
                   `🏷️ الفئة: ${getCategoryName(product.category)}\n` +
                   `💰 السعر: ${product.price} ر.س\n` +
                   `📝 الوصف: ${product.description}\n\n` +
                   `شكراً لكم!`;
    
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function contactUs() {
    // You can customize this function based on your needs
    // Option 1: Open phone dial
    // window.location.href = `tel:${contactInfo.phone}`;
    
    // Option 2: Open email
    window.location.href = `mailto:${contactInfo.email}`;
}

// ==================== UTILITY FUNCTIONS ====================

// Export function to help you add new products
// Usage: Call this in the browser console to add a new product
function addNewProduct(productData) {
    if (!productData.id || !productData.name || !productData.category) {
        console.error('يجب تحديد id, name, وcategory للمنتج');
        return;
    }
    
    productsData.push(productData);
    console.log('تم إضافة المنتج بنجاح:', productData);
    
    // If on main page, refresh the display
    if (document.getElementById('productsGrid')) {
        renderProducts('all');
    }
}

// Example of how to add a new product:
// addNewProduct({
//     id: 3,
//     name: "منتج جديد",
//     category: "crochet",
//     price: 100,
//     originalPrice: 150,
//     discount: 33,
//     description: "وصف المنتج",
//     material: "الخيط المستخدم",
//     size: "الحجم",
//     colors: "الألوان",
//     production: "وقت الإنتاج",
//     images: ["url1", "url2", "url3", "url4"]
// });
