"use strict";(self.webpackChunkinterior=self.webpackChunkinterior||[]).push([[488],{6884:function(n,e,t){t(2791);var r=t(6747),i=t(8956),o=t(184);e.Z=function(n){var e=n.open,t=n.handleClose,l=n.children,a=n.width,s=n.styles,d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:a,bgcolor:"#2F66B8",border:"2px solid #2F66B8",boxShadow:"0px 0px 6px 4px gray",borderRadius:"10px",overflowY:"auto",height:n.height,p:2};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{open:e,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsx)(r.Z,{sx:d,style:s,children:l})})})}},4985:function(n,e,t){t.d(e,{Z:function(){return S}});var r,i=t(4165),o=t(5861),l=t(885),a=t(2791),s=t(9434),d=t(3342),u=(t(2530),t(6884)),c=t(168),p=t(8789),x=p.ZP.div(r||(r=(0,c.Z)(["\n    h3{\n        text-align: center;\n        font-size: 26px;\n    }\n    button{\n        padding: 15px;\n        font-size: 26px;\n        background-color: black;\n        border: 2px solid white;\n        border-radius: 10px;\n        color: white;\n        cursor: pointer;\n    }\n    .Buttons{\n        display: flex;\n        justify-content: space-around;\n        margin-top: 40px;\n    }\n"]))),h=t(184);var f,g=function(n){var e=n.openDelete,t=n.handleCloseDelete,r=n.HandleDelete;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{width:340,height:250,open:e,handleClose:t,children:(0,h.jsxs)(x,{children:[(0,h.jsx)("h3",{children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435?"}),(0,h.jsxs)("div",{className:"Buttons",children:[(0,h.jsx)("button",{onClick:r,children:"\u0414\u0430"}),(0,h.jsx)("button",{onClick:t,children:"\u041d\u0435\u0442"})]})]})})})},m=t(2925),j=p.ZP.form(f||(f=(0,c.Z)(['\n    display: flex;\n    flex-direction: column;\n    h3{\n        margin-bottom: 15px;\n        font-size: 24px;\n    }\n    input{\n        border: none;\n        padding: 15px;\n        border-bottom: 2px solid white;\n        color: white;\n        background-color: transparent;\n        margin-top: 15px;\n    }\n    input::placeholder{\n        color: whitesmoke;\n    }\n    input[type="file"] {\n    display: none;\n}\nlabel{\n    border-style: dotted;\n    text-align: center;\n    padding: 10px 10px 15px 10px;\n    cursor: pointer;\n}\n.loading{\n    position: absolute;\n    text-align: center;\n    background-color: #FFD700;\n    padding-top: 20px;\n    padding-bottom: 25px;\n    width: 90%;\n    margin-top: 2px;\n}\n.span-download{\n    font-size: 22px;\n    position: relative;\n    top: 7px;\n    margin-right: 5px;\n}\n'])));var b,v=function(n){var e=n.Open,t=n.HandleClose,r=(0,s.I0)(),l=(0,a.useRef)(),c=(0,a.useRef)(),p=(0,a.useRef)(),x=(0,a.useRef)(),f=(0,a.useRef)(),g=(0,s.v9)((function(n){return n.metadologiya.uploadImages})),b=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,d.Oc)(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),o={category_name:l.current.value,title_uz:p.current.value,title_en:x.current.value,title_ru:f.current.value,pdf:g.data,size:c.current.value},n.next=4,r((0,d.E8)(o));case 4:r((0,d.lM)()),t();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(u.Z,{height:370,width:400,open:e,handleClose:t,children:(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(j,{onSubmit:v,children:[(0,h.jsx)("h3",{children:" \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),1==g.Loading?(0,h.jsx)("span",{className:"loading",children:"loading..."}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"file",id:"file",onChange:b}),(0,h.jsxs)("label",{for:"file",class:"custom-file-upload",children:[(0,h.jsx)("span",{className:"span-download",children:(0,h.jsx)("ion-icon",{name:"cloud-download-outline"})}),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"]})]}),(0,h.jsx)("input",{type:"text",placeholder:"category name",required:!0,ref:l}),(0,h.jsx)("input",{type:"text",placeholder:"\u0443\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",required:!0,ref:p}),(0,h.jsx)("input",{type:"text",placeholder:"\u0440\u0443 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",required:!0,ref:f}),(0,h.jsx)("input",{type:"text",placeholder:"\u0435\u043d \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",required:!0,ref:x}),(0,h.jsx)("input",{type:"text",placeholder:"pdf size",required:!0,ref:c}),(0,h.jsx)(m.Z,{type:"submit",style:{marginTop:"20px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})},y=p.ZP.div(b||(b=(0,c.Z)(['\n    h3{\n        text-align: center;\n        font-size: 26px;\n        margin-bottom: 20px;\n    }\n    button{\n        padding: 15px;\n        font-size: 26px;\n        background-color: black;\n        border: 2px solid white;\n        border-radius: 10px;\n        color: white;\n        cursor: pointer;\n    }\n    .Buttons{\n        display: flex;\n        justify-content: space-around;\n        margin-top: 40px;\n    }\n    input::placeholder{\n        color: whitesmoke;\n    }\n    input[type="file"] {\n    display: none;\n}\nlabel{\n    border-style: dotted;\n    text-align: center;\n    padding: 15px 35px 18px 35px;\n    cursor: pointer;\n    width: 100%;\n}\n.loading{\n    position: absolute;\n    text-align: center;\n    background-color: #FFD700;\n    padding-top: 15px;\n    padding-bottom: 20px;\n    width: 86%;\n    margin-top: 2px;\n}\n.span-download{\n    font-size: 22px;\n    position: relative;\n    top: 7px;\n    margin-right: 5px;\n}\ninput{\n        border: none;\n        padding: 15px;\n        border-bottom: 2px solid white;\n        color: white;\n        width: 100%;\n        background-color: transparent;\n        margin-top: 15px;\n        margin-bottom: 20px;\n    }\n'])));var Z=function(n){var e=n.openPut,t=n.handleClosePut,r=n.HandlePut,l=(0,s.I0)(),c=(0,a.useRef)(),p=(0,a.useRef)(),x=(0,a.useRef)(),f=(0,a.useRef)(),g=(0,a.useRef)(),j=(0,s.v9)((function(n){return n.metadologiya.uploadImages})),b=(0,s.v9)((function(n){var e;return null===(e=n.metadologiya.MetadalogiyaGet)||void 0===e?void 0:e.data})),v=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l((0,d.Oc)(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),o={category_name:c.current.value,title_uz:x.current.value,title_en:f.current.value,title_ru:g.current.value,pdf:j.data,size:p.current.value},n.next=4,l((0,d.zG)({body:o,id:r}));case 4:l((0,d.lM)()),t();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{height:370,width:340,open:e,handleClose:t,children:(0,h.jsxs)(y,{children:[(0,h.jsx)("h3",{children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,h.jsxs)("form",{onSubmit:Z,children:[1==j.Loading?(0,h.jsx)("span",{className:"loading",children:"loading..."}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"file",id:"file",onChange:v}),(0,h.jsxs)("label",{for:"file",class:"custom-file-upload",children:[(0,h.jsx)("span",{className:"span-download",children:(0,h.jsx)("ion-icon",{name:"cloud-download-outline"})}),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"]})]}),b.map((function(n){return n.id==r?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"text",placeholder:n.category_name,ref:c}),(0,h.jsx)("input",{type:"text",placeholder:n.title_uz,ref:x}),(0,h.jsx)("input",{type:"text",placeholder:n.title_ru,ref:g}),(0,h.jsx)("input",{type:"text",placeholder:n.title_en,ref:f}),(0,h.jsx)("input",{type:"text",placeholder:n.size,ref:p})]}):null})),(0,h.jsx)(m.Z,{type:"submit",style:{marginTop:"20px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})})},w=t(9836),k=t(3382),C=t(2396),_=t(9281),z=t(6890),F=t(5855),D=t(5527),R=t(8797),P=t(7200);function H(n){var e=n.onClickDelete,t=n.onClickPut,r=(0,s.v9)((function(n){var e;return null===(e=n.metadologiya.MetadalogiyaGet)||void 0===e?void 0:e.data}));return(0,h.jsx)(_.Z,{component:D.Z,children:(0,h.jsxs)(w.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,h.jsx)(z.Z,{children:(0,h.jsx)(F.Z,{children:[{id:1,title:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"},{id:2,title:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f"},{id:2,title:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"},{id:5,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438 \u0438\u0437\u043c\u0438\u043d\u0435\u0442\u044c",algin:"right"}].map((function(n,e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(C.Z,{align:n.algin,children:n.title},e)})}))})}),(0,h.jsx)(k.Z,{children:r.map((function(n){return(0,h.jsxs)(F.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,h.jsx)(C.Z,{component:"th",scope:"row",children:(0,h.jsx)("a",{href:n.pdf,target:"_blank",children:(0,h.jsx)("img",{src:n.pdf,width:60,height:60,alt:""})})}),(0,h.jsx)(C.Z,{component:"th",scope:"row",children:n.title_ru}),(0,h.jsx)(C.Z,{component:"th",scope:"row",children:n.category_name}),(0,h.jsxs)(C.Z,{align:"right",children:[(0,h.jsx)("button",{style:{background:"white",border:"none",cursor:"pointer"},id:n.id,onClick:t,children:(0,h.jsx)("img",{id:n.id,src:R,width:25,height:25,alt:""})})," ",(0,h.jsx)("button",{style:{background:"white",border:"none",cursor:"pointer"},id:n.id,onClick:e,children:(0,h.jsx)("img",{id:n.id,src:P,width:25,height:25,alt:""})})]})]},n.id)}))})]})})}var S=function(n){var e=n.open,t=n.handleClose,r=(0,s.I0)(),u=(0,a.useState)(),c=(0,l.Z)(u,2),p=c[0],x=c[1],f=(0,a.useState)(!1),m=(0,l.Z)(f,2),j=m[0],b=m[1],y=function(){return b(!1)},w=(0,a.useState)(!1),k=(0,l.Z)(w,2),C=k[0],_=k[1],z=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,d.cG)(p));case 2:r((0,d.lM)()),y();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{Open:e,HandleClose:t}),(0,h.jsx)(H,{onClickDelete:function(n){x(n.target.id),b(!0)},onClickPut:function(n){x(n.target.id),_(!0)}}),(0,h.jsx)(g,{HandleDelete:z,openDelete:j,handleCloseDelete:y}),(0,h.jsx)(Z,{HandlePut:p,openPut:C,handleClosePut:function(){return _(!1)}})]})}},8510:function(n,e,t){t.d(e,{Z:function(){return S}});var r,i=t(4165),o=t(5861),l=t(885),a=t(2791),s=t(9434),d=t(2530),u=t(6884),c=t(168),p=t(8789),x=p.ZP.div(r||(r=(0,c.Z)(["\n    h3{\n        text-align: center;\n        font-size: 26px;\n    }\n    button{\n        padding: 15px;\n        font-size: 26px;\n        background-color: black;\n        border: 2px solid white;\n        border-radius: 10px;\n        color: white;\n        cursor: pointer;\n    }\n    .Buttons{\n        display: flex;\n        justify-content: space-around;\n        margin-top: 40px;\n    }\n"]))),h=t(184);var f,g=function(n){var e=n.openDelete,t=n.handleCloseDelete,r=n.HandleDelete;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{width:340,height:250,open:e,handleClose:t,children:(0,h.jsxs)(x,{children:[(0,h.jsx)("h3",{children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435?"}),(0,h.jsxs)("div",{className:"Buttons",children:[(0,h.jsx)("button",{onClick:r,children:"\u0414\u0430"}),(0,h.jsx)("button",{onClick:t,children:"\u041d\u0435\u0442"})]})]})})})},m=t(2925),j=p.ZP.form(f||(f=(0,c.Z)(['\n    display: flex;\n    flex-direction: column;\n    h3{\n        margin-bottom: 15px;\n        font-size: 24px;\n    }\n    input{\n        border: none;\n        padding: 15px;\n        border-bottom: 2px solid white;\n        color: white;\n        background-color: transparent;\n        margin-top: 15px;\n    }\n    input::placeholder{\n        color: whitesmoke;\n    }\n    input[type="file"] {\n    display: none;\n}\nlabel{\n    border-style: dotted;\n    text-align: center;\n    padding: 10px 10px 15px 10px;\n    cursor: pointer;\n}\n.loading{\n    position: absolute;\n    text-align: center;\n    background-color: #FFD700;\n    padding-top: 20px;\n    padding-bottom: 25px;\n    width: 90%;\n    margin-top: 2px;\n}\n.span-download{\n    font-size: 22px;\n    position: relative;\n    top: 7px;\n    margin-right: 5px;\n}\n'])));var b,v=function(n){var e=n.Open,t=n.HandleClose,r=(0,s.I0)(),l=(0,a.useRef)(),c=(0,a.useRef)(),p=(0,a.useRef)(),x=(0,a.useRef)(),f=(0,a.useRef)(),g=(0,a.useRef)(),b=(0,s.v9)((function(n){return n.uslugiy.uploadImages})),v=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,d.zv)(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),o={title_uz:l.current.value,title_en:c.current.value,title_ru:p.current.value,description_uz:x.current.value,description_en:f.current.value,description_ru:g.current.value,img:b.data},n.next=4,r((0,d.gb)(o));case 4:r((0,d.Ko)()),t();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(u.Z,{height:370,width:400,open:e,handleClose:t,children:(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(j,{onSubmit:y,children:[(0,h.jsx)("h3",{children:" \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),1==b.Loading?(0,h.jsx)("span",{className:"loading",children:"loading..."}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"file",id:"file",onChange:v}),(0,h.jsxs)("label",{for:"file",class:"custom-file-upload",children:[(0,h.jsx)("span",{className:"span-download",children:(0,h.jsx)("ion-icon",{name:"cloud-download-outline"})}),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"]})]}),(0,h.jsx)("input",{type:"text",placeholder:"\u0443\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",required:!0,ref:l}),(0,h.jsx)("input",{type:"text",placeholder:"\u0440\u0443 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",required:!0,ref:p}),(0,h.jsx)("input",{type:"text",placeholder:"\u0435\u043d \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",required:!0,ref:c}),(0,h.jsx)("input",{type:"text",placeholder:"\u0443\u0437 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",required:!0,ref:x}),(0,h.jsx)("input",{type:"text",placeholder:"\u0440\u0443 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",required:!0,ref:f}),(0,h.jsx)("input",{type:"text",placeholder:"\u0435\u043d \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",required:!0,ref:g}),(0,h.jsx)(m.Z,{type:"submit",style:{marginTop:"20px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})},y=p.ZP.div(b||(b=(0,c.Z)(['\n    h3{\n        text-align: center;\n        font-size: 26px;\n        margin-bottom: 20px;\n    }\n    button{\n        padding: 15px;\n        font-size: 26px;\n        background-color: black;\n        border: 2px solid white;\n        border-radius: 10px;\n        color: white;\n        cursor: pointer;\n    }\n    .Buttons{\n        display: flex;\n        justify-content: space-around;\n        margin-top: 40px;\n    }\n    input::placeholder{\n        color: whitesmoke;\n    }\n    input[type="file"] {\n    display: none;\n}\nlabel{\n    border-style: dotted;\n    text-align: center;\n    padding: 15px 35px 18px 35px;\n    cursor: pointer;\n    width: 100%;\n}\n.loading{\n    position: absolute;\n    text-align: center;\n    background-color: #FFD700;\n    padding-top: 15px;\n    padding-bottom: 20px;\n    width: 86%;\n    margin-top: 2px;\n}\n.span-download{\n    font-size: 22px;\n    position: relative;\n    top: 7px;\n    margin-right: 5px;\n}\ninput{\n        border: none;\n        padding: 15px;\n        border-bottom: 2px solid white;\n        color: white;\n        width: 100%;\n        background-color: transparent;\n        margin-top: 15px;\n        margin-bottom: 20px;\n    }\n'])));var Z=function(n){var e=n.openPut,t=n.handleClosePut,r=n.HandlePut,l=(0,s.I0)(),c=(0,a.useRef)(),p=(0,a.useRef)(),x=(0,a.useRef)(),f=(0,a.useRef)(),g=(0,a.useRef)(),j=(0,a.useRef)(),b=(0,s.v9)((function(n){return n.uslugiy.uploadImages})),v=(0,s.v9)((function(n){var e,t;return null===(e=n.uslugiy)||void 0===e||null===(t=e.UslugiyGet)||void 0===t?void 0:t.data})),Z=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l((0,d.zv)(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),o={title_uz:c.current.value,title_en:p.current.value,title_ru:x.current.value,description_uz:f.current.value,description_en:g.current.value,description_ru:j.current.value,img:b.data},n.next=4,l((0,d.VZ)({body:o,id:r}));case 4:l((0,d.Ko)()),t();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{height:370,width:340,open:e,handleClose:t,children:(0,h.jsxs)(y,{children:[(0,h.jsx)("h3",{children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,h.jsxs)("form",{onSubmit:w,children:[1==b.Loading?(0,h.jsx)("span",{className:"loading",children:"loading..."}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"file",id:"file",onChange:Z}),(0,h.jsxs)("label",{for:"file",class:"custom-file-upload",children:[(0,h.jsx)("span",{className:"span-download",children:(0,h.jsx)("ion-icon",{name:"cloud-download-outline"})}),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"]})]}),v.map((function(n){return n.id==r?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"text",placeholder:n.title_uz,ref:c}),(0,h.jsx)("input",{type:"text",placeholder:n.title_ru,ref:x}),(0,h.jsx)("input",{type:"text",placeholder:n.title_en,ref:p}),(0,h.jsx)("input",{type:"text",placeholder:n.description_uz,ref:f}),(0,h.jsx)("input",{type:"text",placeholder:n.description_en,ref:g}),(0,h.jsx)("input",{type:"text",placeholder:n.description_ru,ref:j})]}):null})),(0,h.jsx)(m.Z,{type:"submit",style:{marginTop:"20px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})})},w=t(9836),k=t(3382),C=t(2396),_=t(9281),z=t(6890),F=t(5855),D=t(5527),R=t(8797),P=t(7200);function H(n){var e=n.onClickDelete,t=n.onClickPut,r=(0,s.v9)((function(n){var e;return null===(e=n.uslugiy.UslugiyGet)||void 0===e?void 0:e.data}));return(0,h.jsx)(_.Z,{component:D.Z,children:(0,h.jsxs)(w.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,h.jsx)(z.Z,{children:(0,h.jsx)(F.Z,{children:[{id:1,title:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"},{id:2,title:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f"},{id:3,title:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{id:5,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438 \u0438\u0437\u043c\u0438\u043d\u0435\u0442\u044c",algin:"right"}].map((function(n,e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(C.Z,{align:n.algin,children:n.title},e)})}))})}),(0,h.jsx)(k.Z,{children:r.map((function(n){return(0,h.jsxs)(F.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,h.jsx)(C.Z,{component:"th",scope:"row",children:(0,h.jsx)("img",{src:n.img,width:60,height:60,alt:""})}),(0,h.jsx)(C.Z,{component:"th",scope:"row",children:n.title_ru}),(0,h.jsx)(C.Z,{component:"th",scope:"row",children:n.description_ru}),(0,h.jsxs)(C.Z,{align:"right",children:[(0,h.jsx)("button",{style:{background:"white",border:"none",cursor:"pointer"},id:n.id,onClick:t,children:(0,h.jsx)("img",{id:n.id,src:R,width:25,height:25,alt:""})})," ",(0,h.jsx)("button",{style:{background:"white",border:"none",cursor:"pointer"},id:n.id,onClick:e,children:(0,h.jsx)("img",{id:n.id,src:P,width:25,height:25,alt:""})})]})]},n.id)}))})]})})}var S=function(n){var e=n.open,t=n.handleClose,r=(0,s.I0)(),u=(0,a.useState)(),c=(0,l.Z)(u,2),p=c[0],x=c[1],f=(0,a.useState)(!1),m=(0,l.Z)(f,2),j=m[0],b=m[1],y=function(){return b(!1)},w=(0,a.useState)(!1),k=(0,l.Z)(w,2),C=k[0],_=k[1],z=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,d.rK)(p));case 2:r((0,d.Ko)()),y();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{Open:e,HandleClose:t}),(0,h.jsx)(H,{onClickDelete:function(n){x(n.target.id),b(!0)},onClickPut:function(n){x(n.target.id),_(!0)}}),(0,h.jsx)(g,{HandleDelete:z,openDelete:j,handleCloseDelete:y}),(0,h.jsx)(Z,{HandlePut:p,openPut:C,handleClosePut:function(){return _(!1)}})]})}},7488:function(n,e,t){t.r(e);var r=t(885),i=t(2791),o=t(5989),l=t(3851),a=t(9434),s=(t(8510),t(2530),t(4985)),d=t(3342),u=t(184);e.default=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],c=e[1],p=(0,a.I0)();return(0,i.useEffect)((function(){p((0,d.lM)())}),[]),(0,u.jsxs)(l.t4,{children:[(0,u.jsx)(o.Z,{title:"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f",onClick:function(){return c(!0)},textBtn:"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),(0,u.jsx)(s.Z,{handleClose:function(){return c(!1)},open:t})]})}}}]);
//# sourceMappingURL=488.e9bf5eee.chunk.js.map