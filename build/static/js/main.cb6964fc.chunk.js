(this["webpackJsonpgood-frontend"]=this["webpackJsonpgood-frontend"]||[]).push([[0],{40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},68:function(t,e,c){},70:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c(1),a=c.n(n),o=c(31),r=c.n(o),i=c(4),j=c(15),u=c(12),l=c(5),d=c(2),b=(c(40),c(41),c(42),"http://localhost:3001/api"),h="https://good-store-resources.s3-us-west-2.amazonaws.com/resources",O=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){o(t.cart)}),[t.cart]),Object(s.jsxs)(i.b,{to:"/cart",className:"CartSummaryContainer",children:[Object(s.jsx)("img",{src:"".concat(h,"/assets/cart-icon.jpeg"),alt:"cart icon",height:30}),a.length>0&&Object(s.jsx)("span",{className:"CartCount",children:a.length})]})},m=function(t){return Object(s.jsx)("div",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbarContainer",children:[Object(s.jsx)(i.b,{to:"/",className:"TextLogo",children:"Farwest Fungi"}),Object(s.jsxs)("div",{className:"navLinks",children:[Object(s.jsx)(i.c,{to:"/shop",children:"Shop"}),Object(s.jsx)(i.c,{to:"/about",children:"About"})]}),Object(s.jsx)(O,{cart:t.cart})]})})},x=(c(48),function(){return Object(s.jsx)("footer",{children:"dis me footer"})}),f=(c(49),function(){var t=Object(d.f)();return Object(s.jsxs)("div",{className:"JumbotronContainer",children:[Object(s.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"JumbotronVideo",children:Object(s.jsx)("source",{src:"https://good-store-resources.s3-us-west-2.amazonaws.com/resources/assets/dope-background.mp4",type:"video/mp4"})}),Object(s.jsxs)("div",{className:"VideoOverlayContainer",children:[Object(s.jsx)("span",{className:"JumbotronMessage",children:"Checkout our goods"}),Object(s.jsx)("span",{onClick:function(){return t.push("/shop")},className:"ShopButton",children:"Shop"})]})]})}),g=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(f,{message:"Welcome to Goods"})})},p=c(11),v=c.n(p),N=(c(68),function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){console.log("Using Effect - Shop.js"),t.setLoading(!0),v.a.get("".concat(b,"/products")).then((function(e){console.log("product respons e===",e),o(e.data),t.setLoading(!1)})).catch((function(e){console.log(e),t.setLoading(!1)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"PageTitle",children:"Products"}),Object(s.jsx)("div",{className:"ProductsContainer",children:Array.isArray(a)?a.map((function(t){return Object(s.jsxs)(i.b,{to:"/shop/".concat(t.slug),className:"ProductThumbnail",children:[Object(s.jsx)("img",{className:"ProductImage",src:"".concat(h,"/product_images/").concat(t.slug,"/").concat(t.images[0]),alt:"product"}),Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("p",{children:["$",t.price]}),Object(s.jsx)("p",{className:"ProductDescription",children:t.description})]},t.slug)})):Object(s.jsx)("h1",{children:"fetching products..."})})]})}),C=c(21),y=c.n(C),S=c(33),k=c(34),I=(c(70),Object(k.a)("pk_test_51HEhAgAX9HHAr5HrTmBPQ9cPS7oGlGOfI2cNYOADmRtCsUmmitjAdrBrsDA2Ne7l1TYzvvfUWbMAebEQmJ1vzuhh00uzyGHwpt")),P=function(t){console.log("cart rendered");var e=Object(n.useState)(""),c=Object(l.a)(e,2),a=c[0],o=c[1],r=function(){var e=Object(S.a)(y.a.mark((function e(){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoading(!0),e.next=3,I;case 3:c=e.sent,v.a.post("".concat(b,"/create-checkout-session"),t.cart).then((function(e){e.data.success?c.redirectToCheckout({sessionId:e.data.id}).then((function(t){console.log("response from create checkout session=",t)})).catch((function(t){console.log(t),o(t.message)})):(o(e.data.message),console.log("error creating checkout session",e.data.message)),t.setLoading(!1)})).catch((function(e){o(e.message),t.setLoading(!1),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"PageTitle",children:"Cart"}),Object(s.jsxs)("div",{className:"CartContainer",children:[a&&Object(s.jsx)("h1",{children:a}),0===t.cart.length&&Object(s.jsx)("p",{children:"You have no items in your cart!"}),t.cart&&t.cart.map((function(e){return Object(s.jsxs)("div",{className:"CartItem",children:[Object(s.jsx)("div",{className:"CartItemImage",children:Object(s.jsx)("img",{src:"".concat(h,"/product_images/").concat(e.slug,"/1.jpeg"),alt:"item",width:"100%"})}),Object(s.jsx)("p",{className:"CartItemName",children:e.name}),Object(s.jsx)("button",{className:"QtyAdjustmentButton",onClick:function(){return t.adjustQty(e,"down")},children:"\u21a2"}),Object(s.jsxs)("p",{children:["qty:",e.qty]}),Object(s.jsx)("button",{className:"QtyAdjustmentButton",onClick:function(){return t.adjustQty(e,"up")},children:"\u21a3"}),Object(s.jsxs)("p",{className:"CartItemPrice",children:["$",(e.price*e.qty).toFixed(2)]})]},e.slug)}))]}),t.cart.length>0&&Object(s.jsx)("p",{className:"Button CheckoutButton",onClick:function(){return r()},children:"Checkout"})]})},w=(c(71),function(t){var e=Object(n.useState)(1),c=Object(l.a)(e,2),a=c[0],o=c[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),j=i[0],u=i[1],d=Object(n.useState)([]),O=Object(l.a)(d,2),m=O[0],x=O[1],f=Object(n.useState)([]),g=Object(l.a)(f,2),p=g[0],N=g[1];Object(n.useEffect)((function(){console.log("Using Effect - Slug.js"),v.a.get("".concat(b,"/products/").concat(t.slug,"/")).then((function(t){var e=[];t.data.images.forEach((function(t,c){e.push(Object(s.jsx)("img",{src:"".concat(h,"/product_images/").concat(p.slug,"/").concat(t),className:"productImages",alt:"product",width:"100%"}))})),x(e),u(e[0]),N(t.data)})).catch((function(t){return console.log(t)}))}),[p.name,p.slug,t.slug]);var C=function(t){"up"===t?o(a+1):a>1&&o(a-1)};return Object(s.jsxs)("div",{className:"ProductContainer",children:[Object(s.jsxs)("div",{className:"ProductImagesContainer",children:[Object(s.jsx)("div",{className:"SelectedProductImage",children:j}),Object(s.jsx)("div",{className:"ThumbnailsContainer",children:m.map((function(t,e){return Object(s.jsx)("div",{className:"ThumbnailImageContainer",onClick:function(){return u(t)},children:t},e)}))})]}),Object(s.jsxs)("div",{className:"ProductInfoContainer",children:[Object(s.jsx)("h1",{className:"ProductName",children:p.name}),Object(s.jsx)("p",{className:"ProductDescription",children:p.description}),Object(s.jsxs)("h3",{children:["$",p.price," each"]}),Object(s.jsxs)("div",{className:"QtyAdjustmentContainer",children:[Object(s.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return C("down")},children:"\u21a2"}),Object(s.jsxs)("h2",{className:"QtyLabel",children:["qty: ",Object(s.jsx)("span",{children:a})]}),Object(s.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return C("up")},children:"\u21a3"})]}),Object(s.jsx)("button",{className:"Button",onClick:function(){return t.addItemToCart(p,a)},children:"add to cart"})]})]})}),A=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Thank you for you purchase!"}),Object(s.jsx)(i.b,{to:"/shop",children:"Please buy more!"})]})},T=function(){return Object(s.jsx)("div",{children:"Canceled"})},E=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"404. Page not found."}),Object(s.jsx)(i.b,{to:"/",children:"Go Home"})]})},L=(c(72),function(){return Object(s.jsx)("div",{className:"Loader",children:Object(s.jsxs)("div",{className:"lds-ellipsis",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),q=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"PageTitle",children:"Our Mission"}),Object(s.jsx)("p",{children:"Our mission at Farwest is to get dat money with as little effort as possible, in a way that provides some value to those around us. We can achieve that together."})]})},B=function(){var t=Object(d.f)(),e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],o=c[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),b=i[0],h=i[1];Object(n.useEffect)((function(){try{var t=JSON.parse(localStorage.getItem("Cart"));t&&o(Object(u.a)(t))}catch(e){console.log(e)}}),[]);var O=function(e,c){var s=a.find((function(t){return t.slug===e.slug}));if(s){var n=a;n.forEach((function(t){t.slug===s.slug&&(t.qty+=c)})),o(Object(u.a)(n)),localStorage.setItem("Cart",JSON.stringify(n))}else o([].concat(Object(u.a)(a),[Object(j.a)(Object(j.a)({},e),{},{qty:c})])),localStorage.setItem("Cart",JSON.stringify([].concat(Object(u.a)(a),[Object(j.a)(Object(j.a)({},e),{},{qty:c})])));t.push("/cart")},f=function(t,e){console.log("qty adjustment");var c=a,s=!1;c.forEach((function(c,n){c.slug===t.slug&&("up"===e?c.qty+=1:1===c.qty?s=!0:c.qty-=1)})),s&&(c=c.filter((function(e){return e.slug!==t.slug}))),o(Object(u.a)(c)),localStorage.setItem("Cart",JSON.stringify(c))};return Object(s.jsxs)("div",{className:"appContainer",children:[Object(s.jsx)(m,{cart:a}),b&&Object(s.jsx)(L,{}),Object(s.jsx)("main",{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/cart",render:function(){return Object(s.jsx)(P,{cart:a,adjustQty:f,setLoading:h})}}),Object(s.jsx)(d.a,{exact:!0,path:"/shop",render:function(){return Object(s.jsx)(N,{setLoading:h})}}),Object(s.jsx)(d.a,{exact:!0,path:"/shop/:slug",render:function(t){return Object(s.jsx)(w,{slug:t.match.params.slug,addItemToCart:O})}}),Object(s.jsx)(d.a,{exact:!0,path:"/success",component:A}),Object(s.jsx)(d.a,{exact:!0,path:"/canceled",component:T}),Object(s.jsx)(d.a,{exact:!0,path:"/about",component:q}),Object(s.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(s.jsx)(g,{})}}),Object(s.jsx)(d.a,{path:"/",component:E})]})}),Object(s.jsx)(x,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(B,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.cb6964fc.chunk.js.map