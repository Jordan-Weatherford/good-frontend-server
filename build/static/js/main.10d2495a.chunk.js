(this["webpackJsonpgood-frontend"]=this["webpackJsonpgood-frontend"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),r=c(31),o=c.n(r),i=c(4),j=c(15),u=c(12),l=c(5),d=c(2),b=(c(40),c(41),c(42),"http://localhost:3001/api"),h="https://good-store-resources.s3-us-west-2.amazonaws.com/resources",O=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){r(e.cart)}),[e.cart]),Object(s.jsxs)(i.b,{to:"/cart",className:"CartSummaryContainer",children:[Object(s.jsx)("img",{src:"".concat(h,"/assets/cart-icon.jpeg"),alt:"cart icon",height:30}),a.length>0&&Object(s.jsx)("span",{className:"CartCount",children:a.length})]})},m=function(e){return Object(s.jsx)("div",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbarContainer",children:[Object(s.jsx)(i.b,{to:"/",className:"TextLogo",children:"Farwest Fungi"}),Object(s.jsxs)("div",{className:"navLinks",children:[Object(s.jsx)(i.c,{to:"/shop",children:"Shop"}),Object(s.jsx)(i.c,{to:"/about",children:"About"})]}),Object(s.jsx)(O,{cart:e.cart})]})})},g=(c(48),function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("h3",{children:"\xa9 Farwest Fungi"})})}),x=(c(49),function(){var e=Object(d.f)();return Object(s.jsxs)("div",{className:"JumbotronContainer",children:[Object(s.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"JumbotronVideo",children:Object(s.jsx)("source",{src:"https://good-store-resources.s3-us-west-2.amazonaws.com/resources/assets/dope-background.mp4",type:"video/mp4"})}),Object(s.jsxs)("div",{className:"VideoOverlayContainer",children:[Object(s.jsx)("span",{className:"JumbotronMessage",children:"The Goods"}),Object(s.jsx)("span",{onClick:function(){return e.push("/shop")},className:"ShopButton",children:"Shop"})]})]})}),f=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(x,{message:"Welcome to Goods"})})},p=c(11),v=c.n(p),N=(c(68),function(e){var t=Object(n.useState)(),c=Object(l.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),u=j[0],d=j[1];return Object(n.useEffect)((function(){console.log("Using Effect - Shop.js"),e.setLoading(!0),v.a.get("".concat(b,"/products")).then((function(t){r(t.data),e.setLoading(!1)})).catch((function(t){console.log(t.message),d(t.message),e.setLoading(!1)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"PageTitle",children:"Products"}),Object(s.jsxs)("div",{className:"ProductsContainer",children:[a&&a.map((function(e){return Object(s.jsxs)(i.b,{to:"/shop/".concat(e.slug),className:"ProductThumbnail",children:[Object(s.jsx)("img",{className:"ProductImage",src:"".concat(h,"/product_images/").concat(e.slug,"/").concat(e.images[0]),alt:"product"}),Object(s.jsx)("h1",{children:e.name}),Object(s.jsxs)("p",{children:["$",e.price]}),Object(s.jsx)("p",{className:"ProductDescription",children:e.description})]},e.slug)})),u&&Object(s.jsxs)("p",{children:["Uh oh! There seems to be something wrong with our servers... ",u]})]})]})}),C=c(21),y=c.n(C),S=c(33),I=c(34),k=(c(70),Object(I.a)("pk_test_51HEhAgAX9HHAr5HrTmBPQ9cPS7oGlGOfI2cNYOADmRtCsUmmitjAdrBrsDA2Ne7l1TYzvvfUWbMAebEQmJ1vzuhh00uzyGHwpt")),w=function(e){console.log("cart rendered");var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],r=c[1],o=function(){var t=Object(S.a)(y.a.mark((function t(){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoading(!0),t.next=3,k;case 3:c=t.sent,v.a.post("".concat(b,"/create-checkout-session"),e.cart).then((function(t){t.data.success?(localStorage.setItem("Cart",JSON.stringify(e.cart)),c.redirectToCheckout({sessionId:t.data.id}).then((function(e){console.log("response from create checkout session=",e)})).catch((function(e){console.log(e),r(e.message)}))):(r(t.data.message),console.log("error creating checkout session",t.data.message)),e.setLoading(!1)})).catch((function(t){r(t.message),e.setLoading(!1),console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"CartPageContainer",children:[Object(s.jsx)("h1",{className:"PageTitle",children:"Cart"}),Object(s.jsxs)("div",{className:"CartContainer",children:[a&&Object(s.jsx)("h1",{children:a}),0===e.cart.length&&Object(s.jsx)("p",{children:"You have no items in your cart!"}),e.cart&&e.cart.map((function(t){return Object(s.jsxs)("div",{className:"CartItem",children:[Object(s.jsx)("div",{className:"CartItemImage",children:Object(s.jsx)("img",{src:"".concat(h,"/product_images/").concat(t.slug,"/1.jpeg"),alt:"item",width:"100%"})}),Object(s.jsx)("p",{className:"CartItemName",children:t.name}),Object(s.jsx)("button",{className:"QtyAdjustmentButton",onClick:function(){return e.adjustQty(t,"down")},children:"\u21a2"}),Object(s.jsxs)("p",{className:"QtyLabel",children:["qty:",Object(s.jsx)("span",{children:t.qty})]}),Object(s.jsx)("button",{className:"QtyAdjustmentButton",onClick:function(){return e.adjustQty(t,"up")},children:"\u21a3"}),Object(s.jsxs)("p",{className:"CartItemPrice",children:["$",(t.price*t.qty).toFixed(2)]})]},t.slug)}))]}),e.cart.length>0&&Object(s.jsx)("span",{className:"Button CheckoutButton",onClick:function(){return o()},children:"Checkout"})]})},P=(c(71),c(72),function(e){return console.log("FullScreenImage rendered"),Object(s.jsx)("div",{className:"FullScreenImageContainer",onClick:function(){return e.setShowFullScreenImg(!1)},children:Object(s.jsx)("div",{className:"FullScreenImage",children:e.image})})}),L=function(e){var t=Object(n.useState)(1),c=Object(l.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(null),i=Object(l.a)(o,2),j=i[0],u=i[1],d=Object(n.useState)([]),O=Object(l.a)(d,2),m=O[0],g=O[1],x=Object(n.useState)([]),f=Object(l.a)(x,2),p=f[0],N=f[1],C=Object(n.useState)(!1),y=Object(l.a)(C,2),S=y[0],I=y[1];Object(n.useEffect)((function(){console.log("Using Effect - Slug.js"),e.setLoading(!0),v.a.get("".concat(b,"/products/").concat(e.slug,"/")).then((function(t){var c=[];t.data.images.forEach((function(e,t){c.push(Object(s.jsx)("img",{src:"".concat(h,"/product_images/").concat(p.slug,"/").concat(e),className:"productImages",alt:"product",width:"100%"}))})),g(c),u(c[0]),N(t.data),e.setLoading(!1)})).catch((function(t){e.setLoading(!1),console.log(t)}))}),[p.slug]);var k=function(e){"up"===e?r(a+1):a>1&&r(a-1)};return Object(s.jsxs)("div",{className:"ProductContainer",children:[Object(s.jsx)("h1",{className:"PageTitle",children:p.name}),Object(s.jsxs)("div",{children:[S&&Object(s.jsx)(P,{image:j,setShowFullScreenImg:I}),Object(s.jsxs)("div",{className:"ProductImagesContainer",children:[Object(s.jsx)("div",{className:"SelectedProductImage",onClick:function(){return I(!0)},children:j}),Object(s.jsx)("div",{className:"ThumbnailsContainer",children:m.map((function(e,t){return Object(s.jsx)("div",{className:"ThumbnailImageContainer",onClick:function(){return u(e)},children:e},t)}))})]}),Object(s.jsxs)("div",{className:"ProductInfoContainer",children:[Object(s.jsx)("p",{className:"ProductDescription",children:p.description}),Object(s.jsxs)("h1",{children:["$",p.price]}),Object(s.jsxs)("div",{className:"QtyAdjustmentContainer",children:[Object(s.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return k("down")},children:"\u21a2"}),Object(s.jsxs)("p",{className:"QtyLabel",children:["qty: ",Object(s.jsx)("span",{children:a})]}),Object(s.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return k("up")},children:"\u21a3"})]}),Object(s.jsx)("span",{className:"Button AddToCartButton",onClick:function(){return e.addItemToCart(p,a)},children:"Add to Cart"})]})]})]})},T=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Thank you for you purchase!"}),Object(s.jsx)(i.b,{to:"/shop",children:"Please buy more!"})]})},A=function(){return Object(s.jsx)("div",{children:"Canceled"})},B=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"404. Page not found."}),Object(s.jsx)(i.b,{to:"/",children:"Go Home"})]})},E=(c(73),function(){return Object(s.jsx)("div",{className:"Loader",children:Object(s.jsxs)("div",{className:"lds-ellipsis",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),Q=(c(74),function(){return Object(s.jsxs)("div",{className:"AboutPageContainer",children:[Object(s.jsx)("h1",{className:"PageTitle",children:"Our Mission"}),Object(s.jsx)("p",{children:"Our mission at Farwest is to get dat money with as little effort as possible, in a way that provides some value to those around us. We can achieve that together."})]})}),q=function(){var e=Object(d.f)(),t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),b=i[0],h=i[1];Object(n.useEffect)((function(){try{var e=JSON.parse(localStorage.getItem("Cart"));e&&r(Object(u.a)(e))}catch(t){console.log(t)}}),[]);var O=function(t,c){var s=a.find((function(e){return e.slug===t.slug}));if(s){var n=a;n.forEach((function(e){e.slug===s.slug&&(e.qty+=c)})),r(Object(u.a)(n)),localStorage.setItem("Cart",JSON.stringify(n))}else r([].concat(Object(u.a)(a),[Object(j.a)(Object(j.a)({},t),{},{qty:c})])),localStorage.setItem("Cart",JSON.stringify([].concat(Object(u.a)(a),[Object(j.a)(Object(j.a)({},t),{},{qty:c})])));e.push("/cart")},x=function(e,t){console.log("qty adjustment");var c=a,s=!1;c.forEach((function(c,n){c.slug===e.slug&&("up"===t?c.qty+=1:1===c.qty?s=!0:c.qty-=1)})),s&&(c=c.filter((function(t){return t.slug!==e.slug}))),r(Object(u.a)(c)),localStorage.setItem("Cart",JSON.stringify(c))};return Object(s.jsxs)("div",{className:"appContainer",children:[Object(s.jsx)(m,{cart:a}),b&&Object(s.jsx)(E,{}),Object(s.jsx)("main",{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/cart",render:function(){return Object(s.jsx)(w,{cart:a,adjustQty:x,setLoading:h})}}),Object(s.jsx)(d.a,{exact:!0,path:"/shop",render:function(){return Object(s.jsx)(N,{setLoading:h})}}),Object(s.jsx)(d.a,{exact:!0,path:"/shop/:slug",render:function(e){return Object(s.jsx)(L,{slug:e.match.params.slug,addItemToCart:O,setLoading:h})}}),Object(s.jsx)(d.a,{exact:!0,path:"/success",component:T}),Object(s.jsx)(d.a,{exact:!0,path:"/canceled",component:A}),Object(s.jsx)(d.a,{exact:!0,path:"/about",component:Q}),Object(s.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(s.jsx)(f,{})}}),Object(s.jsx)(d.a,{path:"/",component:B})]})}),Object(s.jsx)(g,{})]})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(q,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.10d2495a.chunk.js.map