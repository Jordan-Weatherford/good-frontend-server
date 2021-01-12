(this["webpackJsonpgood-frontend"]=this["webpackJsonpgood-frontend"]||[]).push([[0],{41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){},6:function(t,e){e.API_URL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL||"http://localhost:3001/api",e.BUCKET=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BUCKET||"https://good-store-resources.s3-us-west-2.amazonaws.com/resources"},69:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),r=c.n(s),a=c(32),o=c.n(a),i=c(4),u=c(15),j=c(17),l=c(10),d=c(2),h=(c(41),c(42),c(43),c(6)),b=function(t){var e=Object(s.useState)([]),c=Object(l.a)(e,2),r=c[0],a=c[1];return Object(s.useEffect)((function(){a(t.cart)}),[t.cart]),Object(n.jsxs)(i.b,{to:"/cart",className:"CartSummaryContainer",children:[Object(n.jsx)("img",{src:"".concat(h.BUCKET,"/assets/cart-icon.jpeg"),alt:"cart icon",height:30}),r.length>0&&Object(n.jsx)("span",{className:"CartCount",children:r.length})]})},O=function(t){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsxs)("div",{className:"navbarContainer",children:[Object(n.jsx)(i.b,{to:"/",children:Object(n.jsx)("img",{src:"".concat(h.BUCKET,"/assets/logo-white.jpeg"),alt:"logo",height:50})}),Object(n.jsxs)("div",{className:"navLinks",children:[Object(n.jsx)(i.c,{to:"/shop",children:"Shop"}),Object(n.jsx)(i.c,{to:"/about",children:"About"})]}),Object(n.jsx)(b,{cart:t.cart})]})})},m=(c(49),function(){return Object(n.jsx)("footer",{children:"dis me footer"})}),p=(c(50),function(){var t=Object(d.f)();return console.log("jumbotron rendered"),Object(n.jsxs)("div",{className:"JumbotronContainer",children:[Object(n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"JumbotronVideo",children:Object(n.jsx)("source",{src:"https://good-store-resources.s3-us-west-2.amazonaws.com/resources/assets/dope-background.mp4",type:"video/mp4"})}),Object(n.jsxs)("div",{className:"VideoOverlayContainer",children:[Object(n.jsx)("h1",{children:"Welcome to Goods"}),Object(n.jsx)("span",{onClick:function(){return t.push("/shop")},className:"ShopButton",children:"Shop"})]})]})}),x=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{message:"Welcome to Goods"})})},f=c(12),g=c.n(f),v=(c(69),function(){var t=Object(s.useState)([]),e=Object(l.a)(t,2),c=e[0],r=e[1];return Object(s.useEffect)((function(){console.log("Using Effect - Shop.js"),g.a.get("".concat(h.API_URL,"/products")).then((function(t){console.log("product respons e===",t),r(t.data)})).catch((function(t){return console.log(t)}))}),[]),Object(n.jsxs)("div",{children:[Array.isArray(c)?Object(n.jsx)("h1",{children:"products"}):Object(n.jsx)("h1",{children:"Uh oh! There seems to be some sort of error with our servers! Please try again in 2 seconds!"}),Object(n.jsx)("div",{className:"ProductsContainer",children:Array.isArray(c)?c.map((function(t){return Object(n.jsxs)(i.b,{to:"/shop/".concat(t.slug),className:"ProductThumbnail",children:[Object(n.jsx)("img",{className:"ProductImage",src:"".concat(h.BUCKET,"/product_images/").concat(t.slug,"/").concat(t.images[0]),alt:"product"}),Object(n.jsxs)("p",{children:["$",t.price]}),Object(n.jsx)("h1",{children:t.name}),Object(n.jsx)("p",{children:t.description})]},t.slug)})):Object(n.jsx)("h1",{children:"fetching products..."})})]})}),C=c(22),N=c.n(C),S=c(34),y=c(35),E=(c(71),Object(y.a)("pk_test_51HEhAgAX9HHAr5HrTmBPQ9cPS7oGlGOfI2cNYOADmRtCsUmmitjAdrBrsDA2Ne7l1TYzvvfUWbMAebEQmJ1vzuhh00uzyGHwpt")),T=function(t){var e=function(){var e=Object(S.a)(N.a.mark((function e(){var c,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E;case 2:return c=e.sent,e.next=5,g.a.post("".concat(h.API_URL,"/create-checkout-session"),t.cart).catch((function(t){return console.log("error from create-checkout-session request === ",t)}));case 5:return n=e.sent,e.next=8,c.redirectToCheckout({sessionId:n.data.id});case 8:e.sent.error;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Cart"}),Object(n.jsxs)("div",{className:"CartContainer",children:[0===t.cart.length&&Object(n.jsx)("p",{children:"You have no items in your cart!"}),t.cart&&t.cart.map((function(e){return Object(n.jsxs)("div",{className:"CartItem",children:[Object(n.jsx)("div",{className:"CartItemImage",children:Object(n.jsx)("img",{src:"".concat(h.BUCKET,"/product_images/").concat(e.slug,"/1.jpeg"),alt:"item",width:"100%"})}),Object(n.jsx)("p",{className:"CartItemName",children:e.name}),Object(n.jsx)("button",{className:"QtyAdjustmentButton",onClick:function(){return t.adjustQty(e,"down")},children:"\u21a2"}),Object(n.jsxs)("p",{children:["qty:",e.qty]}),Object(n.jsx)("button",{className:"QtyAdjustmentButton",onClick:function(){return t.adjustQty(e,"up")},children:"\u21a3"}),Object(n.jsxs)("p",{className:"CartItemPrice",children:["$",(e.price*e.qty).toFixed(2)]})]},e.slug)}))]}),t.cart.length>0&&Object(n.jsx)("p",{className:"Button CheckoutButton",onClick:function(){return e()},children:"Checkout"})]})},_=(c(72),function(t){var e=Object(s.useState)(1),c=Object(l.a)(e,2),r=c[0],a=c[1],o=Object(s.useState)(null),i=Object(l.a)(o,2),u=i[0],j=i[1],d=Object(s.useState)([]),b=Object(l.a)(d,2),O=b[0],m=b[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),f=x[0],v=x[1];Object(s.useEffect)((function(){console.log("Using Effect - Slug.js"),g.a.get("".concat(h.API_URL,"/products/").concat(t.slug,"/")).then((function(t){var e=[];t.data.images.forEach((function(t,c){e.push(Object(n.jsx)("img",{src:"".concat(h.BUCKET,"/product_images/").concat(f.slug,"/").concat(t),className:"productImages",alt:"product",width:"100%"}))})),m(e),j(e[0]),v(t.data)})).catch((function(t){return console.log(t)}))}),[f.name,f.slug,t.slug]);var C=function(t){"up"===t?a(r+1):r>1&&a(r-1)};return Object(n.jsxs)("div",{className:"ProductContainer",children:[Object(n.jsx)("h1",{className:"ProductName",children:f.name}),Object(n.jsxs)("div",{className:"ProductImagesContainer",children:[Object(n.jsx)("div",{className:"SelectedProductImage",children:u}),Object(n.jsx)("div",{className:"ThumbnailsContainer",children:O.map((function(t,e){return Object(n.jsx)("div",{className:"ThumbnailImageContainer",onClick:function(){return j(t)},children:t},e)}))})]}),Object(n.jsxs)("div",{className:"ProductInfoContainer",children:[Object(n.jsx)("p",{className:"ProductDescription",children:f.description}),Object(n.jsxs)("h3",{children:["$",f.price]}),Object(n.jsxs)("div",{className:"QtyAdjustmentContainer",children:[Object(n.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return C("down")},children:"\u21a2"}),Object(n.jsxs)("h2",{className:"QtyLabel",children:["qty: ",Object(n.jsx)("span",{children:r})]}),Object(n.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return C("up")},children:"\u21a3"})]}),Object(n.jsx)("button",{className:"Button",onClick:function(){return t.addItemToCart(f,r)},children:"add to cart"})]})]})}),A=function(){return Object(n.jsx)("div",{children:"Thank you for your purchase!"})},P=function(){return Object(n.jsx)("div",{children:"Canceled"})},I=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"404. Page not found."}),Object(n.jsx)(i.b,{to:"/",children:"Go Home"})]})},U=function(){var t=Object(d.f)(),e=Object(s.useState)([]),c=Object(l.a)(e,2),r=c[0],a=c[1];Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem("Cart"))||[];a(t)}),[]);var o=function(e,c){var n=r.find((function(t){return t.slug===e.slug}));if(n){var s=r;s.forEach((function(t){t.slug===n.slug&&(t.qty+=c)})),a(s)}else a([].concat(Object(j.a)(r),[Object(u.a)(Object(u.a)({},e),{},{qty:c})])),localStorage.setItem("Cart",JSON.stringify([].concat(Object(j.a)(r),[Object(u.a)(Object(u.a)({},e),{},{qty:c})])));t.push("/cart")},i=function(t,e){var c=r,n=!1;c.forEach((function(c,s){c.slug===t.slug&&("up"===e?c.qty+=1:1===c.qty?n=!0:c.qty-=1)})),n&&(c=c.filter((function(e){return e.slug!==t.slug}))),a(Object(j.a)(c))};return Object(n.jsxs)("div",{className:"appContainer",children:[Object(n.jsx)(O,{cart:r}),Object(n.jsx)("main",{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/cart",render:function(){return Object(n.jsx)(T,{cart:r,adjustQty:i})}}),Object(n.jsx)(d.a,{exact:!0,path:"/shop",component:v}),Object(n.jsx)(d.a,{exact:!0,path:"/shop/:slug",render:function(t){return Object(n.jsx)(_,{slug:t.match.params.slug,addItemToCart:o})}}),Object(n.jsx)(d.a,{exact:!0,path:"/success",component:A}),Object(n.jsx)(d.a,{exact:!0,path:"/canceled",component:P}),Object(n.jsx)(d.a,{exact:!0,path:"/",component:x}),Object(n.jsx)(d.a,{path:"/",component:I})]})}),Object(n.jsx)(m,{})]})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(U,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b3b75309.chunk.js.map