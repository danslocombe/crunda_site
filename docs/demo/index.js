(()=>{var e,t,r,n,o,_,c,i,u,d,b,f,a,s,p,g,v,x,w,l,m,h,y,S,E,P,A,T,k,C,j,F,I,M,O,R,V,W,B,K,L,N,H,q,D,G,X,z,Q,Y,$,Z,U,J,ee,te,re,ne,oe,_e,ce,ie,ue,de,be,fe,ae,se,pe,ge,ve,xe,we,le,me,he,ye,Se,Ee,Pe,Ae,Te,ke,Ce,je,Fe,Ie,Me,Oe,Re,Ve,We,Be,Ke,Le,Ne,He,qe,De,Ge,Xe,ze,Qe,Ye,$e,Ze,Ue,Je,et,tt,rt,nt,ot,_t,ct,it,ut,dt,bt,ft,at,st,pt,gt,vt,xt,wt,lt,mt,ht,yt,St,Et,Pt,At,Tt,kt,Ct,jt,Ft,It,Mt,Ot,Rt,Vt,Wt,Bt,Kt,Lt,Nt,Ht,qt,Dt,Gt,Xt,zt,Qt,Yt,$t,Zt,Ut,Jt,er,tr,rr,nr,or,_r,cr,ir,ur,dr,br,fr,ar,sr,pr,gr,vr,xr,wr,lr,mr,hr,yr,Sr,Er,Pr,Ar,Tr,kr,Cr,jr,Fr,Ir,Mr,Or,Rr,Vr,Wr,Br,Kr,Lr,Nr,Hr,qr,Dr,Gr,Xr,zr,Qr,Yr,$r,Zr,Ur,Jr,en,tn,rn,nn,on,_n,cn,un,dn,bn,fn,an,sn,pn,gn,vn,xn,wn,ln,mn,hn,yn,Sn,En,Pn,An,Tn,kn,Cn,jn,Fn,In,Mn,On,Rn,Vn,Wn,Bn,Kn,Ln,Nn,Hn,qn,Dn,Gn,Xn,zn,Qn,Yn,$n,Zn,Un,Jn,eo,to,ro,no,oo,_o,co,io={858:(e,t,r)=>{r.e(668).then(r.bind(r,668)).catch((e=>console.error("Error importing `index.js`:",e)))}},uo={};function bo(e){var t=uo[e];if(void 0!==t)return t.exports;var r=uo[e]={id:e,loaded:!1,exports:{}};return io[e](r,r.exports,bo),r.loaded=!0,r.exports}bo.m=io,bo.c=uo,bo.d=(e,t)=>{for(var r in t)bo.o(t,r)&&!bo.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},bo.f={},bo.e=e=>Promise.all(Object.keys(bo.f).reduce(((t,r)=>(bo.f[r](e,t),t)),[])),bo.u=e=>e+".js",bo.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),bo.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),bo.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rust-webpack-template:",bo.l=(r,n,o,_)=>{if(e[r])e[r].push(n);else{var c,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var b=u[d];if(b.getAttribute("src")==r||b.getAttribute("data-webpack")==t+o){c=b;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,bo.nc&&c.setAttribute("nonce",bo.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[n];var f=(t,n)=>{c.onerror=c.onload=null,clearTimeout(a);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),t)return t(n)},a=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),i&&document.head.appendChild(c)}},bo.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;bo.g.importScripts&&(e=bo.g.location+"");var t=bo.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),bo.p=e})(),(()=>{var e={826:0};bo.f.j=(t,r)=>{var n=bo.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var _=bo.p+bo.u(t),c=new Error;bo.l(_,(r=>{if(bo.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),_=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+_+")",c.name="ChunkLoadError",c.type=o,c.request=_,n[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[_,c,i]=r,u=0;if(_.some((t=>0!==e[t]))){for(n in c)bo.o(c,n)&&(bo.m[n]=c[n]);i&&i(bo)}for(t&&t(r);u<_.length;u++)o=_[u],bo.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkrust_webpack_template=self.webpackChunkrust_webpack_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),oo={},_o={373:function(){return{"./index_bg.js":{__wbindgen_object_drop_ref:function(e){return void 0===r&&(r=bo.c[838].exports),r.ug$(e)},__wbg_remove_5b68b70c39041e2a:function(e){return void 0===n&&(n=bo.c[838].exports),n.Wq4(e)},__wbg_removeEventListener_b6cef5ad085bea8f:function(e,t,r,n){return void 0===o&&(o=bo.c[838].exports),o.kF$(e,t,r,n)},__wbindgen_object_clone_ref:function(e){return void 0===_&&(_=bo.c[838].exports),_.m_1(e)},__wbg_instanceof_Window_5012736c80a01584:function(e){return void 0===c&&(c=bo.c[838].exports),c.lNV(e)},__wbindgen_cb_drop:function(e){return void 0===i&&(i=bo.c[838].exports),i.G6U(e)},__wbg_clearInterval_df3409c32c572e85:function(e,t){return void 0===u&&(u=bo.c[838].exports),u.HlN(e,t)},__wbg_disconnect_1dbf7e19d9590abd:function(e){return void 0===d&&(d=bo.c[838].exports),d.BxV(e)},__wbg_addEventListener_e167f012cbedfa4e:function(e,t,r,n){return void 0===b&&(b=bo.c[838].exports),b.JdL(e,t,r,n)},__wbg_preventDefault_c55d86c27b2dfa6e:function(e){return void 0===f&&(f=bo.c[838].exports),f.ij2(e)},__wbg_stopPropagation_dd0d50059627b362:function(e){return void 0===a&&(a=bo.c[838].exports),a.a3M(e)},__wbg_setvalue_688819688274bec0:function(e,t,r){return void 0===s&&(s=bo.c[838].exports),s.KZV(e,t,r)},__wbg_deltaMode_d6b849e45efd0f5e:function(e){return void 0===p&&(p=bo.c[838].exports),p.AvG(e)},__wbg_deltaX_7f4a9de8338c7ca6:function(e){return void 0===g&&(g=bo.c[838].exports),g.FHN(e)},__wbg_deltaY_606f12aa66daba69:function(e){return void 0===v&&(v=bo.c[838].exports),v.VMS(e)},__wbg_altKey_d3fbce7596aac8cf:function(e){return void 0===x&&(x=bo.c[838].exports),x.IZy(e)},__wbg_ctrlKey_957c6c31b62b4550:function(e){return void 0===w&&(w=bo.c[838].exports),w.aj3(e)},__wbg_shiftKey_8c0f9a5ca3ff8f93:function(e){return void 0===l&&(l=bo.c[838].exports),l.I_S(e)},__wbg_metaKey_be0158b14b1cef4a:function(e){return void 0===m&&(m=bo.c[838].exports),m.XLn(e)},__wbg_clientX_6ea27dc5cef626dd:function(e){return void 0===h&&(h=bo.c[838].exports),h.mQj(e)},__wbg_clientY_78f18a39f2f06125:function(e){return void 0===y&&(y=bo.c[838].exports),y.Yat(e)},__wbg_instanceof_Element_cc034878d52a64fa:function(e){return void 0===S&&(S=bo.c[838].exports),S.FdZ(e)},__wbg_is_009b1ef508712fda:function(e,t){return void 0===E&&(E=bo.c[838].exports),E.BPm(e,t)},__wbg_dataTransfer_2fb708051ee2c64c:function(e){return void 0===P&&(P=bo.c[838].exports),P.aar(e)},__wbg_files_a4b6a9811697ac84:function(e){return void 0===A&&(A=bo.c[838].exports),A.AtK(e)},__wbg_length_f2469772b8ec9ea3:function(e){return void 0===T&&(T=bo.c[838].exports),T.gdx(e)},__wbg_get_6d8ff52d2078d871:function(e,t){return void 0===k&&(k=bo.c[838].exports),k.zO_(e,t)},__wbg_name_ed3cda975cce080d:function(e,t){return void 0===C&&(C=bo.c[838].exports),C.ZWC(e,t)},__wbg_type_942eb9d383a1178d:function(e,t){return void 0===j&&(j=bo.c[838].exports),j.iR6(e,t)},__wbg_lastModified_74d26354812e6299:function(e){return void 0===F&&(F=bo.c[838].exports),F._tb(e)},__wbg_arrayBuffer_c421744ca0e5f0bb:function(e){return void 0===I&&(I=bo.c[838].exports),I.Ilm(e)},__wbg_new_ea1883e1e5e86686:function(e){return void 0===M&&(M=bo.c[838].exports),M.dFT(e)},__wbg_length_8339fcf5d8ecd12e:function(e){return void 0===O&&(O=bo.c[838].exports),O.aNw(e)},__wbindgen_memory:function(){return void 0===R&&(R=bo.c[838].exports),R.oHO()},__wbg_buffer_b7b08af79b0b0974:function(e){return void 0===V&&(V=bo.c[838].exports),V.BOx(e)},__wbg_set_d1e79e2388520f18:function(e,t,r){return void 0===W&&(W=bo.c[838].exports),W.eFR(e,t,r)},__wbg_clipboardData_93c130a72996456a:function(e){return void 0===B&&(B=bo.c[838].exports),B.L3R(e)},__wbg_getData_b768ea3ff59e2a13:function(e,t,r,n){return void 0===K&&(K=bo.c[838].exports),K.AvC(e,t,r,n)},__wbg_data_ee8c1a738c70cbe1:function(e,t){return void 0===L&&(L=bo.c[838].exports),L.$US(e,t)},__wbg_matches_95beaf2233aaf53d:function(e){return void 0===N&&(N=bo.c[838].exports),N.Mcc(e)},__wbg_value_d4a95e7a0d390578:function(e,t){return void 0===H&&(H=bo.c[838].exports),H.pv2(e,t)},__wbg_isComposing_ca7496e67564f5b9:function(e){return void 0===q&&(q=bo.c[838].exports),q.v4c(e)},__wbg_blur_2097e550054a8dc8:function(e){return void 0===D&&(D=bo.c[838].exports),D.lwR(e)},__wbg_focus_06621101cc79f5d8:function(e){return void 0===G&&(G=bo.c[838].exports),G.S71(e)},__wbg_clientX_3967ecd5e962e1b2:function(e){return void 0===X&&(X=bo.c[838].exports),X.HGg(e)},__wbg_clientY_37d418b8d9c0bb52:function(e){return void 0===z&&(z=bo.c[838].exports),z.YeF(e)},__wbg_button_460cdec9f2512a91:function(e){return void 0===Q&&(Q=bo.c[838].exports),Q.F4_(e)},__wbg_location_af118da6c50d4c3f:function(e){return void 0===Y&&(Y=bo.c[838].exports),Y.wrf(e)},__wbg_hash_313d7fdf42f6e7d3:function(e,t){return void 0===$&&($=bo.c[838].exports),$.IjX(e,t)},__wbg_altKey_5a6eb49ec8194792:function(e){return void 0===Z&&(Z=bo.c[838].exports),Z.ohp(e)},__wbg_ctrlKey_319ff2374dc7f372:function(e){return void 0===U&&(U=bo.c[838].exports),U.If0(e)},__wbg_shiftKey_f38dee34420e0d62:function(e){return void 0===J&&(J=bo.c[838].exports),J.CE2(e)},__wbg_metaKey_00fdcfadf1968d45:function(e){return void 0===ee&&(ee=bo.c[838].exports),ee.H_(e)},__wbg_items_10520d7d65f12510:function(e){return void 0===te&&(te=bo.c[838].exports),te.x2M(e)},__wbg_length_dbcf0a2509bc8271:function(e){return void 0===re&&(re=bo.c[838].exports),re.Y9F(e)},__wbg_get_39fc1e9743f29cdd:function(e,t){return void 0===ne&&(ne=bo.c[838].exports),ne.TQo(e,t)},__wbg_type_2716f55e3b73bcf3:function(e,t){return void 0===oe&&(oe=bo.c[838].exports),oe.u4l(e,t)},__wbg_requestAnimationFrame_b4b782250b9c2c88:function(e,t){return void 0===_e&&(_e=bo.c[838].exports),_e.nbM(e,t)},__wbg_now_abd80e969af37148:function(e){return void 0===ce&&(ce=bo.c[838].exports),ce.zF5(e)},__wbg_matchMedia_170d35fd154463b2:function(e,t,r){return void 0===ie&&(ie=bo.c[838].exports),ie.cWi(e,t,r)},__wbg_isComposing_1c9533ed199eaf7b:function(e){return void 0===ue&&(ue=bo.c[838].exports),ue.oNV(e)},__wbg_keyCode_b06f25cc98035ed1:function(e){return void 0===de&&(de=bo.c[838].exports),de.d$(e)},__wbg_key_a626396efbca2b95:function(e,t){return void 0===be&&(be=bo.c[838].exports),be.gSo(e,t)},__wbg_document_8554450897a855b9:function(e){return void 0===fe&&(fe=bo.c[838].exports),fe.DlW(e)},__wbg_elementFromPoint_a7b17c0b42d50842:function(e,t,r){return void 0===ae&&(ae=bo.c[838].exports),ae.Wjc(e,t,r)},__wbg_devicePixelRatio_7ba8bc80d46340bd:function(e){return void 0===se&&(se=bo.c[838].exports),se.ysF(e)},__wbg_at_5fa66069579ac579:function(e,t){return void 0===pe&&(pe=bo.c[838].exports),pe.adb(e,t)},__wbg_instanceof_ResizeObserverEntry_2c660d999b961603:function(e){return void 0===ge&&(ge=bo.c[838].exports),ge.vH7(e)},__wbindgen_string_new:function(e,t){return void 0===ve&&(ve=bo.c[838].exports),ve.h4u(e,t)},__wbindgen_in:function(e,t){return void 0===xe&&(xe=bo.c[838].exports),xe.ybu(e,t)},__wbg_devicePixelContentBoxSize_8d531ca6a4331b28:function(e){return void 0===we&&(we=bo.c[838].exports),we.eG9(e)},__wbg_instanceof_ResizeObserverSize_200bcfcb71907f3f:function(e){return void 0===le&&(le=bo.c[838].exports),le.Odp(e)},__wbg_inlineSize_322ab111c2b5c9e3:function(e){return void 0===me&&(me=bo.c[838].exports),me.YN6(e)},__wbg_blockSize_981c4dfa6e1263a8:function(e){return void 0===he&&(he=bo.c[838].exports),he.EWA(e)},__wbg_contentBoxSize_a2d93ded171ea1de:function(e){return void 0===ye&&(ye=bo.c[838].exports),ye.eek(e)},__wbindgen_is_undefined:function(e){return void 0===Se&&(Se=bo.c[838].exports),Se.XP4(e)},__wbg_contentRect_c1a9045c459744d9:function(e){return void 0===Ee&&(Ee=bo.c[838].exports),Ee._27(e)},__wbg_width_e7964a50b174d035:function(e){return void 0===Pe&&(Pe=bo.c[838].exports),Pe.qQX(e)},__wbg_height_cd5c897b4d3fabe3:function(e){return void 0===Ae&&(Ae=bo.c[838].exports),Ae.DZ2(e)},__wbg_setwidth_e371a8d6b16ebe84:function(e,t){return void 0===Te&&(Te=bo.c[838].exports),Te.qIw(e,t)},__wbg_setheight_ba99ad2df4295e89:function(e,t){return void 0===ke&&(ke=bo.c[838].exports),ke.L9f(e,t)},__wbg_activeElement_1036a8ddc10ec3f1:function(e){return void 0===Ce&&(Ce=bo.c[838].exports),Ce.qxn(e)},__wbg_performance_fa12dc8712926291:function(e){return void 0===je&&(je=bo.c[838].exports),je.Vye(e)},__wbg_now_a69647afb1f66247:function(e){return void 0===Fe&&(Fe=bo.c[838].exports),Fe.o$u(e)},__wbg_getBoundingClientRect_35fc4d8fa10e0463:function(e){return void 0===Ie&&(Ie=bo.c[838].exports),Ie.KXy(e)},__wbg_left_ec3af38bed003a86:function(e){return void 0===Me&&(Me=bo.c[838].exports),Me.J4h(e)},__wbg_top_322638693276a225:function(e){return void 0===Oe&&(Oe=bo.c[838].exports),Oe.c4i(e)},__wbg_right_8b5d6a4fd660b15f:function(e){return void 0===Re&&(Re=bo.c[838].exports),Re.o4K(e)},__wbg_bottom_9c5a8538fdbb5e16:function(e){return void 0===Ve&&(Ve=bo.c[838].exports),Ve.x1n(e)},__wbg_getComputedStyle_ba4609b39055f674:function(e,t){return void 0===We&&(We=bo.c[838].exports),We.tvF(e,t)},__wbg_getPropertyValue_b0f0858c3b5f17dd:function(e,t,r,n){return void 0===Be&&(Be=bo.c[838].exports),Be.u1Z(e,t,r,n)},__wbg_touches_91ecfe75e4e0bff0:function(e){return void 0===Ke&&(Ke=bo.c[838].exports),Ke.u2t(e)},__wbg_length_a547e4226b069330:function(e){return void 0===Le&&(Le=bo.c[838].exports),Le.vRe(e)},__wbg_changedTouches_8a2627b3dec12eed:function(e){return void 0===Ne&&(Ne=bo.c[838].exports),Ne.KNA(e)},__wbg_get_6bee5bc8192fd59e:function(e,t){return void 0===He&&(He=bo.c[838].exports),He.jOu(e,t)},__wbg_identifier_e39f89e9c0a1a3fc:function(e){return void 0===qe&&(qe=bo.c[838].exports),qe.KEH(e)},__wbg_item_4a685286202e2739:function(e,t){return void 0===De&&(De=bo.c[838].exports),De.izQ(e,t)},__wbg_force_f43e873103b4f9c8:function(e){return void 0===Ge&&(Ge=bo.c[838].exports),Ge.SaD(e)},__wbg_new_5a0c9fd4e0a0fcbe:function(){return void 0===Xe&&(Xe=bo.c[838].exports),Xe.QuO()},__wbg_stack_97b8ae9669382e90:function(e,t){return void 0===ze&&(ze=bo.c[838].exports),ze.Vdf(e,t)},__wbg_error_ecb8b2ef9f17fff0:function(e,t){return void 0===Qe&&(Qe=bo.c[838].exports),Qe.RKy(e,t)},__wbg_hidden_b3b8c1dc2ee4fc2a:function(e){return void 0===Ye&&(Ye=bo.c[838].exports),Ye.GjH(e)},__wbg_width_53a5bd0268e99485:function(e){return void 0===$e&&($e=bo.c[838].exports),$e.HVE(e)},__wbg_height_6fb32e51e54037ae:function(e){return void 0===Ze&&(Ze=bo.c[838].exports),Ze.qi3(e)},__wbg_body_b3bb488e8e54bf4b:function(e){return void 0===Ue&&(Ue=bo.c[838].exports),Ue.FGQ(e)},__wbg_style_e06c9e03355741e9:function(e){return void 0===Je&&(Je=bo.c[838].exports),Je.jum(e)},__wbg_setProperty_ff389e5a7fb9910e:function(e,t,r,n,o){return void 0===et&&(et=bo.c[838].exports),et.Ql7(e,t,r,n,o)},__wbg_open_43b3c6577af2a808:function(e,t,r,n,o){return void 0===tt&&(tt=bo.c[838].exports),tt.TCL(e,t,r,n,o)},__wbg_navigator_6210380287bf8581:function(e){return void 0===rt&&(rt=bo.c[838].exports),rt.vW_(e)},__wbg_clipboard_0d7b5c390c14b0e6:function(e){return void 0===nt&&(nt=bo.c[838].exports),nt.HWh(e)},__wbg_writeText_20fb3f7393d34052:function(e,t,r){return void 0===ot&&(ot=bo.c[838].exports),ot.cfu(e,t,r)},__wbg_userAgent_58dedff4303aeb66:function(e,t){return void 0===_t&&(_t=bo.c[838].exports),_t.CAO(e,t)},__wbg_offsetTop_3f1fbd1d48327b28:function(e){return void 0===ct&&(ct=bo.c[838].exports),ct.zXG(e)},__wbg_createTexture_e49c36c5f31925a3:function(e){return void 0===it&&(it=bo.c[838].exports),it.hMP(e)},__wbg_createTexture_2426b031baa26a82:function(e){return void 0===ut&&(ut=bo.c[838].exports),ut.pK2(e)},__wbg_bindTexture_bffa89324927e23a:function(e,t,r){return void 0===dt&&(dt=bo.c[838].exports),dt.a_y(e,t,r)},__wbg_bindTexture_840f7fcfd0298dc4:function(e,t,r){return void 0===bt&&(bt=bo.c[838].exports),bt.yLg(e,t,r)},__wbg_disable_d73e59fee5b5e973:function(e,t){return void 0===ft&&(ft=bo.c[838].exports),ft.Sb(e,t)},__wbg_disable_8908871f2334e76b:function(e,t){return void 0===at&&(at=bo.c[838].exports),at.PWr(e,t)},__wbg_viewport_efc09c09d4f3cc48:function(e,t,r,n,o){return void 0===st&&(st=bo.c[838].exports),st.Bg4(e,t,r,n,o)},__wbg_viewport_536c78dd69c44351:function(e,t,r,n,o){return void 0===pt&&(pt=bo.c[838].exports),pt.V35(e,t,r,n,o)},__wbg_clearColor_ac713fa6931cef3c:function(e,t,r,n,o){return void 0===gt&&(gt=bo.c[838].exports),gt.urZ(e,t,r,n,o)},__wbg_clearColor_837d30f5bf4f982b:function(e,t,r,n,o){return void 0===vt&&(vt=bo.c[838].exports),vt.Rsm(e,t,r,n,o)},__wbg_clear_780c4e5384fe3fc6:function(e,t){return void 0===xt&&(xt=bo.c[838].exports),xt.Hpr(e,t)},__wbg_clear_7a2a7ca897047e8d:function(e,t){return void 0===wt&&(wt=bo.c[838].exports),wt.WyK(e,t)},__wbg_scissor_d06b14c4966727fa:function(e,t,r,n,o){return void 0===lt&&(lt=bo.c[838].exports),lt.cOA(e,t,r,n,o)},__wbg_scissor_2b172ca4e459dd16:function(e,t,r,n,o){return void 0===mt&&(mt=bo.c[838].exports),mt.$T3(e,t,r,n,o)},__wbg_bindVertexArrayOES_37868a5a4265ea0a:function(e,t){return void 0===ht&&(ht=bo.c[838].exports),ht.ZU5(e,t)},__wbg_bindBuffer_1f581c747176e7d7:function(e,t,r){return void 0===yt&&(yt=bo.c[838].exports),yt.f3y(e,t,r)},__wbg_bindBuffer_d6b05e0a99a752d4:function(e,t,r){return void 0===St&&(St=bo.c[838].exports),St.irC(e,t,r)},__wbg_disableVertexAttribArray_b9d8ae826c70526f:function(e,t){return void 0===Et&&(Et=bo.c[838].exports),Et.V9T(e,t)},__wbg_disableVertexAttribArray_79a5010f18eb84cb:function(e,t){return void 0===Pt&&(Pt=bo.c[838].exports),Pt.oI$(e,t)},__wbg_bindVertexArray_bec56c40e9ec299d:function(e,t){return void 0===At&&(At=bo.c[838].exports),At.n5s(e,t)},__wbg_localStorage_90db5cb66e840248:function(e){return void 0===Tt&&(Tt=bo.c[838].exports),Tt.tKB(e)},__wbg_getItem_cab39762abab3e70:function(e,t,r,n){return void 0===kt&&(kt=bo.c[838].exports),kt.z_7(e,t,r,n)},__wbg_setItem_9482185c870abba6:function(e,t,r,n,o){return void 0===Ct&&(Ct=bo.c[838].exports),Ct.fuh(e,t,r,n,o)},__wbg_getContext_69ec873410cbba3c:function(e,t,r){return void 0===jt&&(jt=bo.c[838].exports),jt.qF1(e,t,r)},__wbg_instanceof_WebGlRenderingContext_dbd3a2aad974aa98:function(e){return void 0===Ft&&(Ft=bo.c[838].exports),Ft.nBN(e)},__wbg_getExtension_39f01d7a720d3a67:function(e,t,r){return void 0===It&&(It=bo.c[838].exports),It.DGH(e,t,r)},__wbg_getParameter_8df84a84197f2148:function(e,t){return void 0===Mt&&(Mt=bo.c[838].exports),Mt._kA(e,t)},__wbindgen_string_get:function(e,t){return void 0===Ot&&(Ot=bo.c[838].exports),Ot.qtq(e,t)},__wbg_getSupportedExtensions_ea2cafefc82bf5f5:function(e){return void 0===Rt&&(Rt=bo.c[838].exports),Rt.pIe(e)},__wbg_length_ae22078168b726f5:function(e){return void 0===Vt&&(Vt=bo.c[838].exports),Vt.mGW(e)},__wbg_get_3baa728f9d58d3f6:function(e,t){return void 0===Wt&&(Wt=bo.c[838].exports),Wt.smp(e,t)},__wbg_instanceof_WebGl2RenderingContext_62ccef896d9204fa:function(e){return void 0===Bt&&(Bt=bo.c[838].exports),Bt.K3V(e)},__wbg_getExtension_095ef1e6c9d8d8ab:function(e,t,r){return void 0===Kt&&(Kt=bo.c[838].exports),Kt.S7W(e,t,r)},__wbg_getSupportedExtensions_e1788ac835b7e81a:function(e){return void 0===Lt&&(Lt=bo.c[838].exports),Lt.Kh3(e)},__wbg_getParameter_cfaed180705b9280:function(e,t){return void 0===Nt&&(Nt=bo.c[838].exports),Nt.NAj(e,t)},__wbg_getError_c620f28d427d8ad8:function(e){return void 0===Ht&&(Ht=bo.c[838].exports),Ht._RJ(e)},__wbg_getError_deb0c909d3a7041a:function(e){return void 0===qt&&(qt=bo.c[838].exports),qt.Hes(e)},__wbindgen_number_get:function(e,t){return void 0===Dt&&(Dt=bo.c[838].exports),Dt.M19(e,t)},__wbg_createProgram_2c3a8969b5a76988:function(e){return void 0===Gt&&(Gt=bo.c[838].exports),Gt.Ijh(e)},__wbg_createProgram_73611dc7a72c4ee2:function(e){return void 0===Xt&&(Xt=bo.c[838].exports),Xt.QdR(e)},__wbg_attachShader_2b5810fc1d23ebe7:function(e,t,r){return void 0===zt&&(zt=bo.c[838].exports),zt.xMp(e,t,r)},__wbg_attachShader_396d529f1d7c9abc:function(e,t,r){return void 0===Qt&&(Qt=bo.c[838].exports),Qt.gjh(e,t,r)},__wbg_linkProgram_1f18bca817bb6edb:function(e,t){return void 0===Yt&&(Yt=bo.c[838].exports),Yt.Xv3(e,t)},__wbg_linkProgram_56a5d97f63b1f56d:function(e,t){return void 0===$t&&($t=bo.c[838].exports),$t.sTF(e,t)},__wbg_getProgramParameter_ab2954ca517d8589:function(e,t,r){return void 0===Zt&&(Zt=bo.c[838].exports),Zt.qTc(e,t,r)},__wbg_getProgramParameter_9df6cbbb1343b27d:function(e,t,r){return void 0===Ut&&(Ut=bo.c[838].exports),Ut.s9c(e,t,r)},__wbindgen_boolean_get:function(e){return void 0===Jt&&(Jt=bo.c[838].exports),Jt.HT5(e)},__wbg_getProgramInfoLog_22296c36addf7a70:function(e,t,r){return void 0===er&&(er=bo.c[838].exports),er.GzI(e,t,r)},__wbg_getProgramInfoLog_fe796f3a9512a8e3:function(e,t,r){return void 0===tr&&(tr=bo.c[838].exports),tr.CBe(e,t,r)},__wbg_getUniformLocation_9cd213015cf8f29f:function(e,t,r,n){return void 0===rr&&(rr=bo.c[838].exports),rr.fmh(e,t,r,n)},__wbg_getUniformLocation_6a59ad54df3bba8e:function(e,t,r,n){return void 0===nr&&(nr=bo.c[838].exports),nr.smB(e,t,r,n)},__wbg_getAttribLocation_b47269b802d50c45:function(e,t,r,n){return void 0===or&&(or=bo.c[838].exports),or.DLA(e,t,r,n)},__wbg_getAttribLocation_df9c48b51cdad438:function(e,t,r,n){return void 0===_r&&(_r=bo.c[838].exports),_r.h1v(e,t,r,n)},__wbg_createVertexArrayOES_84334a02da216381:function(e){return void 0===cr&&(cr=bo.c[838].exports),cr.TRb(e)},__wbg_createVertexArray_a3e58c38609ae150:function(e){return void 0===ir&&(ir=bo.c[838].exports),ir.wvC(e)},__wbg_vertexAttribPointer_fcbfe42523d724ca:function(e,t,r,n,o,_,c){return void 0===ur&&(ur=bo.c[838].exports),ur.sz9(e,t,r,n,o,_,c)},__wbg_vertexAttribPointer_b435a034ff758637:function(e,t,r,n,o,_,c){return void 0===dr&&(dr=bo.c[838].exports),dr.Frp(e,t,r,n,o,_,c)},__wbg_enableVertexAttribArray_52c23a516be565c0:function(e,t){return void 0===br&&(br=bo.c[838].exports),br.xsp(e,t)},__wbg_enableVertexAttribArray_06043f51b716ed9d:function(e,t){return void 0===fr&&(fr=bo.c[838].exports),fr.Xnv(e,t)},__wbg_texParameteri_83ad7181b62f4997:function(e,t,r,n){return void 0===ar&&(ar=bo.c[838].exports),ar.Ro1(e,t,r,n)},__wbg_texParameteri_531d0268109950ba:function(e,t,r,n){return void 0===sr&&(sr=bo.c[838].exports),sr.Hvr(e,t,r,n)},__wbg_pixelStorei_2498331e094ff305:function(e,t,r){return void 0===pr&&(pr=bo.c[838].exports),pr.oHY(e,t,r)},__wbg_pixelStorei_3a600280eab03e3c:function(e,t,r){return void 0===gr&&(gr=bo.c[838].exports),gr.q3D(e,t,r)},__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9:function(e,t,r){return void 0===vr&&(vr=bo.c[838].exports),vr.sG1(e,t,r)},__wbg_texSubImage2D_bed4633ee03b384d:function(e,t,r,n,o,_,c,i,u,d){return void 0===xr&&(xr=bo.c[838].exports),xr.NEQ(e,t,r,n,o,_,c,i,u,d)},__wbg_texSubImage2D_be0166513e368886:function(e,t,r,n,o,_,c,i,u,d){return void 0===wr&&(wr=bo.c[838].exports),wr.OWQ(e,t,r,n,o,_,c,i,u,d)},__wbg_texImage2D_d704e7eee22d1e6b:function(e,t,r,n,o,_,c,i,u,d){return void 0===lr&&(lr=bo.c[838].exports),lr.cp7(e,t,r,n,o,_,c,i,u,d)},__wbg_texImage2D_75effcb59fe5da7e:function(e,t,r,n,o,_,c,i,u,d){return void 0===mr&&(mr=bo.c[838].exports),mr.M1N(e,t,r,n,o,_,c,i,u,d)},__wbg_generateMipmap_52c223b74b4f16a3:function(e,t){return void 0===hr&&(hr=bo.c[838].exports),hr.Wbf(e,t)},__wbg_generateMipmap_52183f0501f63234:function(e,t){return void 0===yr&&(yr=bo.c[838].exports),yr.kP(e,t)},__wbg_enable_68b3fa03a633259a:function(e,t){return void 0===Sr&&(Sr=bo.c[838].exports),Sr.sQX(e,t)},__wbg_enable_541ed84c1e7d269d:function(e,t){return void 0===Er&&(Er=bo.c[838].exports),Er.gAg(e,t)},__wbg_colorMask_6a64eb75df60e2cf:function(e,t,r,n,o){return void 0===Pr&&(Pr=bo.c[838].exports),Pr.v9m(e,t,r,n,o)},__wbg_colorMask_7c2aafdec5441392:function(e,t,r,n,o){return void 0===Ar&&(Ar=bo.c[838].exports),Ar.qAh(e,t,r,n,o)},__wbg_blendEquationSeparate_95241ffd0f6ab09e:function(e,t,r){return void 0===Tr&&(Tr=bo.c[838].exports),Tr.ReR(e,t,r)},__wbg_blendEquationSeparate_272bfcd932055191:function(e,t,r){return void 0===kr&&(kr=bo.c[838].exports),kr.VCd(e,t,r)},__wbg_blendFuncSeparate_2b607032f14b9381:function(e,t,r,n,o){return void 0===Cr&&(Cr=bo.c[838].exports),Cr.hfN(e,t,r,n,o)},__wbg_blendFuncSeparate_f81dd232d266e735:function(e,t,r,n,o){return void 0===jr&&(jr=bo.c[838].exports),jr.bcX(e,t,r,n,o)},__wbg_useProgram_d4616618ac6d0652:function(e,t){return void 0===Fr&&(Fr=bo.c[838].exports),Fr.FS_(e,t)},__wbg_useProgram_001c6b9208b683d3:function(e,t){return void 0===Ir&&(Ir=bo.c[838].exports),Ir.YKA(e,t)},__wbg_uniform2f_95babaad453bac89:function(e,t,r,n){return void 0===Mr&&(Mr=bo.c[838].exports),Mr.wpJ(e,t,r,n)},__wbg_uniform2f_3cd8a4d77e78c85d:function(e,t,r,n){return void 0===Or&&(Or=bo.c[838].exports),Or.hah(e,t,r,n)},__wbg_uniform1i_7f6e60c975d21e0a:function(e,t,r){return void 0===Rr&&(Rr=bo.c[838].exports),Rr.rpI(e,t,r)},__wbg_uniform1i_ded3be13f5d8f11a:function(e,t,r){return void 0===Vr&&(Vr=bo.c[838].exports),Vr.$HX(e,t,r)},__wbg_activeTexture_b967ed47a8083daa:function(e,t){return void 0===Wr&&(Wr=bo.c[838].exports),Wr.C0P(e,t)},__wbg_activeTexture_067b93df6d1ed857:function(e,t){return void 0===Br&&(Br=bo.c[838].exports),Br.Ovc(e,t)},__wbg_drawElements_5b776409d809de04:function(e,t,r,n,o){return void 0===Kr&&(Kr=bo.c[838].exports),Kr.b7$(e,t,r,n,o)},__wbg_drawElements_53bb0da0b0c16256:function(e,t,r,n,o){return void 0===Lr&&(Lr=bo.c[838].exports),Lr.wNZ(e,t,r,n,o)},__wbg_createShader_af087106532661d9:function(e,t){return void 0===Nr&&(Nr=bo.c[838].exports),Nr.clV(e,t)},__wbg_createShader_f10ffabbfd8e2c8c:function(e,t){return void 0===Hr&&(Hr=bo.c[838].exports),Hr.Oir(e,t)},__wbg_shaderSource_d447b31057e4f64c:function(e,t,r,n){return void 0===qr&&(qr=bo.c[838].exports),qr.nN_(e,t,r,n)},__wbg_shaderSource_b92b2b5c29126344:function(e,t,r,n){return void 0===Dr&&(Dr=bo.c[838].exports),Dr.F5L(e,t,r,n)},__wbg_compileShader_043cc8b99c2efc21:function(e,t){return void 0===Gr&&(Gr=bo.c[838].exports),Gr.oG1(e,t)},__wbg_compileShader_77ef81728b1c03f6:function(e,t){return void 0===Xr&&(Xr=bo.c[838].exports),Xr.kEq(e,t)},__wbg_getShaderParameter_cedb1ec0d8052eff:function(e,t,r){return void 0===zr&&(zr=bo.c[838].exports),zr.kp(e,t,r)},__wbg_getShaderParameter_806970126d526c29:function(e,t,r){return void 0===Qr&&(Qr=bo.c[838].exports),Qr.fvD(e,t,r)},__wbg_getShaderInfoLog_935361c52a919c15:function(e,t,r){return void 0===Yr&&(Yr=bo.c[838].exports),Yr.EmN(e,t,r)},__wbg_getShaderInfoLog_a7ca51b89a4dafab:function(e,t,r){return void 0===$r&&($r=bo.c[838].exports),$r.Tpe(e,t,r)},__wbg_deleteShader_b9bb71cfb1a65a0d:function(e,t){return void 0===Zr&&(Zr=bo.c[838].exports),Zr.DVE(e,t)},__wbg_deleteShader_da06706168cf00dc:function(e,t){return void 0===Ur&&(Ur=bo.c[838].exports),Ur.jP(e,t)},__wbg_detachShader_c5af8831e42dad83:function(e,t,r){return void 0===Jr&&(Jr=bo.c[838].exports),Jr.eWx(e,t,r)},__wbg_detachShader_32f119837bb4e8a9:function(e,t,r){return void 0===en&&(en=bo.c[838].exports),en.Nl2(e,t,r)},__wbg_createBuffer_9571c039ba6696c6:function(e){return void 0===tn&&(tn=bo.c[838].exports),tn.d85(e)},__wbg_createBuffer_7b18852edffb3ab4:function(e){return void 0===rn&&(rn=bo.c[838].exports),rn.GEG(e)},__wbg_bufferData_0db2a74470353a96:function(e,t,r,n){return void 0===nn&&(nn=bo.c[838].exports),nn.tl3(e,t,r,n)},__wbg_bufferData_94ce174a81b32961:function(e,t,r,n){return void 0===on&&(on=bo.c[838].exports),on.g95(e,t,r,n)},__wbg_deleteBuffer_898974b9db136e43:function(e,t){return void 0===_n&&(_n=bo.c[838].exports),_n.Noj(e,t)},__wbg_deleteBuffer_27b0fb5ed68afbe4:function(e,t){return void 0===cn&&(cn=bo.c[838].exports),cn.ciF(e,t)},__wbg_deleteTexture_558c751a66bd2f16:function(e,t){return void 0===un&&(un=bo.c[838].exports),un.spd(e,t)},__wbg_deleteTexture_cdd844345a2559bb:function(e,t){return void 0===dn&&(dn=bo.c[838].exports),dn.MeE(e,t)},__wbg_self_3093d5d1f7bcb682:function(){return void 0===bn&&(bn=bo.c[838].exports),bn.Glo()},__wbg_window_3bcfc4d31bc012f8:function(){return void 0===fn&&(fn=bo.c[838].exports),fn.Ssi()},__wbg_globalThis_86b222e13bdf32ed:function(){return void 0===an&&(an=bo.c[838].exports),an.FyC()},__wbg_global_e5a3fe56f8be9485:function(){return void 0===sn&&(sn=bo.c[838].exports),sn.OLm()},__wbg_newnoargs_76313bd6ff35d0f2:function(e,t){return void 0===pn&&(pn=bo.c[838].exports),pn.gg_(e,t)},__wbg_call_1084a111329e68ce:function(e,t){return void 0===gn&&(gn=bo.c[838].exports),gn.u9i(e,t)},__wbg_log_b103404cc5920657:function(e){return void 0===xn&&(xn=bo.c[838].exports),xn.Y5F(e)},__wbg_error_09480e4aadca50ad:function(e){return void 0===wn&&(wn=bo.c[838].exports),wn._Zk(e)},__wbindgen_copy_to_typed_array:function(e,t,r){return void 0===ln&&(ln=bo.c[838].exports),ln.T2K(e,t,r)},__wbg_getElementById_f56c8e6a15a6926d:function(e,t,r){return void 0===mn&&(mn=bo.c[838].exports),mn.dR9(e,t,r)},__wbg_instanceof_HtmlCanvasElement_1a96a01603ec2d8b:function(e){return void 0===hn&&(hn=bo.c[838].exports),hn.h7b(e)},__wbg_cancelAnimationFrame_f80ecdad075d1d55:function(e,t){return void 0===yn&&(yn=bo.c[838].exports),yn.oHy(e,t)},__wbg_deleteProgram_5f938b0667141206:function(e,t){return void 0===Sn&&(Sn=bo.c[838].exports),Sn._87(e,t)},__wbg_deleteProgram_c3238b647d849334:function(e,t){return void 0===En&&(En=bo.c[838].exports),En.UAM(e,t)},__wbg_createElement_5921e9eb06b9ec89:function(e,t,r){return void 0===Pn&&(Pn=bo.c[838].exports),Pn.RVn(e,t,r)},__wbg_instanceof_HtmlInputElement_88bf515ab1d9511d:function(e){return void 0===An&&(An=bo.c[838].exports),An.bSI(e)},__wbg_settype_c348825948b36c71:function(e,t,r){return void 0===Tn&&(Tn=bo.c[838].exports),Tn.PxM(e,t,r)},__wbg_setautofocus_7aec271950af807b:function(e,t){return void 0===kn&&(kn=bo.c[838].exports),kn.kED(e,t)},__wbg_setAttribute_d5540a19be09f8dc:function(e,t,r,n,o){return void 0===Cn&&(Cn=bo.c[838].exports),Cn.hqz(e,t,r,n,o)},__wbg_search_20c15d493b8602c5:function(e,t){return void 0===jn&&(jn=bo.c[838].exports),jn.isO(e,t)},__wbg_href_9c2fe204628af7a3:function(e,t){return void 0===Fn&&(Fn=bo.c[838].exports),Fn.gKx(e,t)},__wbg_protocol_787951293a197961:function(e,t){return void 0===In&&(In=bo.c[838].exports),In.Egs(e,t)},__wbg_host_a46347409a9511bd:function(e,t){return void 0===Mn&&(Mn=bo.c[838].exports),Mn.LJq(e,t)},__wbg_hostname_d7ff17205929a46d:function(e,t){return void 0===On&&(On=bo.c[838].exports),On.dQ4(e,t)},__wbg_port_aeb48b36b706a841:function(e,t){return void 0===Rn&&(Rn=bo.c[838].exports),Rn.vYT(e,t)},__wbg_origin_648082c4831a5be8:function(e,t){return void 0===Vn&&(Vn=bo.c[838].exports),Vn.fRF(e,t)},__wbg_matches_42eb40a28a316d0e:function(e){return void 0===Wn&&(Wn=bo.c[838].exports),Wn.w9P(e)},__wbg_settabIndex_f6fb98fef6cbb39b:function(e,t){return void 0===Bn&&(Bn=bo.c[838].exports),Bn.YEu(e,t)},__wbg_new_42acb42ec2ace97c:function(e){return void 0===Kn&&(Kn=bo.c[838].exports),Kn.L36(e)},__wbg_new_525245e2b9901204:function(){return void 0===Ln&&(Ln=bo.c[838].exports),Ln.R1Q()},__wbg_setbox_0d838a2d268b7fac:function(e,t){return void 0===Nn&&(Nn=bo.c[838].exports),Nn.BKX(e,t)},__wbg_observe_60f3631b2f7c6d8b:function(e,t,r){return void 0===Hn&&(Hn=bo.c[838].exports),Hn.N0m(e,t,r)},__wbindgen_throw:function(e,t){return void 0===qn&&(qn=bo.c[838].exports),qn.Or8(e,t)},__wbindgen_debug_string:function(e,t){return void 0===Dn&&(Dn=bo.c[838].exports),Dn.fYP(e,t)},__wbg_then_876bb3c633745cc6:function(e,t,r){return void 0===Gn&&(Gn=bo.c[838].exports),Gn.DAm(e,t,r)},__wbg_queueMicrotask_48421b3cc9052b68:function(e){return void 0===Xn&&(Xn=bo.c[838].exports),Xn.WlV(e)},__wbindgen_is_function:function(e){return void 0===zn&&(zn=bo.c[838].exports),zn.o$X(e)},__wbg_resolve_570458cb99d56a43:function(e){return void 0===Qn&&(Qn=bo.c[838].exports),Qn.XG8(e)},__wbg_then_95e6edc0f89b73b1:function(e,t){return void 0===Yn&&(Yn=bo.c[838].exports),Yn.xH3(e,t)},__wbg_queueMicrotask_12a30234db4045d3:function(e){return void 0===$n&&($n=bo.c[838].exports),$n.CNC(e)},__wbg_setinnerHTML_ea7e3c6a3c4790c6:function(e,t,r){return void 0===Zn&&(Zn=bo.c[838].exports),Zn.oIw(e,t,r)},__wbg_appendChild_ac45d1abddf1b89b:function(e,t){return void 0===Un&&(Un=bo.c[838].exports),Un.ipn(e,t)},__wbg_performance_a1b8bde2ee512264:function(e){return void 0===Jn&&(Jn=bo.c[838].exports),Jn.fSU(e)},__wbindgen_closure_wrapper729:function(e,t,r){return void 0===eo&&(eo=bo.c[838].exports),eo.GR9(e,t,r)},__wbindgen_closure_wrapper849:function(e,t,r){return void 0===to&&(to=bo.c[838].exports),to.sXu(e,t,r)},__wbindgen_closure_wrapper912:function(e,t,r){return void 0===ro&&(ro=bo.c[838].exports),ro.XhB(e,t,r)},__wbindgen_closure_wrapper2537:function(e,t,r){return void 0===no&&(no=bo.c[838].exports),no.u8m(e,t,r)}},"./snippets/rust-webpack-template-eb3e344350874cf2/inline0.js":{performance_now:function(){return void 0===vn&&(vn=bo.c[281].exports),vn.j()}}}}},co={668:[373]},bo.w={},bo.f.wasm=function(e,t){(co[e]||[]).forEach((function(r,n){var o=oo[r];if(o)t.push(o);else{var _,c=_o[r](),i=fetch(bo.p+""+{668:{373:"46e0dc4b629e2821341f"}}[e][r]+".module.wasm");_=c&&"function"==typeof c.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(i),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,c):i.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)})),t.push(oo[r]=_.then((function(e){return bo.w[r]=(e.instance||e).exports})))}}))},bo(858)})();