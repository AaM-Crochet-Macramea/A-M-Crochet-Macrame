// نموذج إضافة منتج جديد
// Copy and paste this template and modify the values

/*

const newProduct = {
    id: [رقم المنتج - يجب أن يكون مختلفاً عن الموجودة],
    name: "[اسم المنتج]",
    category: "[crochet / macrame / accessories]",
    price: [السعر الحالي],
    originalPrice: [السعر الأساسي قبل الخصم],
    discount: [النسبة المئوية للخصم],
    description: "[وصف المنتج بالتفصيل]",
    material: "[نوع الخيط أو المادة]",
    size: "[حجم المنتج]",
    colors: "[الألوان المتاحة]",
    production: "[وقت الإنتاج]",
    images: [
        "[رابط الصورة الأولى]",
        "[رابط الصورة الثانية]",
        "[رابط الصورة الثالثة]",
        "[رابط الصورة الرابعة]"
    ]
};

*/

// ==================== أمثلة منتجات جاهزة ====================

// Example 1: منتج كروشيه
const example1 = {
    id: 10,
    name: "سلة كروشيه مزخرفة",
    category: "crochet",
    price: 95,
    originalPrice: 130,
    discount: 27,
    description: "سلة كروشيه أنيقة مزخرفة بأسلوب حديث، مصنوعة من خيط قطني ناعم، مناسبة للتخزين والديكور",
    material: "خيط قطني 100% عالي الجودة",
    size: "35 × 30 سم",
    colors: "أبيض، بيج، وردي، رمادي",
    production: "5-8 أيام",
    images: [
        "https://via.placeholder.com/500x500?text=سلة+كروشيه+1",
        "https://via.placeholder.com/500x500?text=سلة+كروشيه+2",
        "https://via.placeholder.com/500x500?text=سلة+كروشيه+3",
        "https://via.placeholder.com/500x500?text=سلة+كروشيه+4"
    ]
};

// Example 2: منتج مكراميه
const example2 = {
    id: 11,
    name: "ستارة معلقة مكراميه",
    category: "macrame",
    price: 150,
    originalPrice: 200,
    discount: 25,
    description: "ستارة معلقة من المكراميه بتصاميم فنية جميلة، تضيف جمالاً وأناقة لأي مكان",
    material: "خيط مكراميه طبيعي 100%",
    size: "120 × 150 سم",
    colors: "أبيض، عاج، بيج طبيعي",
    production: "7-10 أيام",
    images: [
        "https://via.placeholder.com/500x500?text=ستارة+مكراميه+1",
        "https://via.placeholder.com/500x500?text=ستارة+مكراميه+2",
        "https://via.placeholder.com/500x500?text=ستارة+مكراميه+3",
        "https://via.placeholder.com/500x500?text=ستارة+مكراميه+4"
    ]
};

// Example 3: منتج اكسسوارات
const example3 = {
    id: 12,
    name: "دعايات كوب مكروشيه",
    category: "accessories",
    price: 45,
    originalPrice: 60,
    discount: 25,
    description: "دعايات كوب مصنوعة من كروشيه ناعم، تحافظ على حرارة المشروبات وتضيف لمسة فنية",
    material: "خيط كروشيه عالي الجودة",
    size: "10 × 10 سم",
    colors: "متعدد الألوان",
    production: "2-4 أيام",
    images: [
        "https://via.placeholder.com/500x500?text=دعايات+كوب+1",
        "https://via.placeholder.com/500x500?text=دعايات+كوب+2",
        "https://via.placeholder.com/500x500?text=دعايات+كوب+3",
        "https://via.placeholder.com/500x500?text=دعايات+كوب+4"
    ]
};

// ==================== كيفية الاستخدام ====================

/*

1. انسخ أحد الأمثلة أعلاه
2. غير البيانات حسب منتجك
3. أذهب إلى ملف script.js
4. ابحث عن: const productsData = [
5. أضف المنتج الجديد داخل القوس المربع [ ]
6. احفظ الملف وأعد تحميل الموقع

مثال كامل في script.js:

const productsData = [
    {
        // المنتج الأول الموجود
    },
    {
        // منتجك الجديد هنا
    }
];

*/

// ==================== نصائح لإضافة الصور ====================

/*

الطريقة 1: استخدام روابط من الإنترنت
images: [
    "https://example.com/product1.jpg",
    "https://example.com/product2.jpg"
]

الطريقة 2: استخدام صور محلية
images: [
    "images/product1.jpg",
    "images/product2.jpg"
]
(تأكد من وجود مجلد images بنفس المسار)

الطريقة 3: استخدام رابط من موقع تخزين الصور
- رفع صوره على imgur.com أو cloudinary.com
- انسخ الرابط المباشر للصورة
- ضعه في القائمة images

*/

// ==================== اختبار إضافة منتج ====================

/*

في متصفح الويب:
1. افتح الموقع
2. اضغط على F12 لفتح أدوات المتطور
3. انسخ واحدة من الأمثلة أعلاه
4. في Console اكتب:
   addNewProduct(example1);
   
5. المنتج سيتم إضافته فوراً!

*/
