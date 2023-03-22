(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const B=Symbol("Comlink.proxy"),et=Symbol("Comlink.endpoint"),nt=Symbol("Comlink.releaseProxy"),z=Symbol("Comlink.finalizer"),W=Symbol("Comlink.thrown"),G=e=>typeof e=="object"&&e!==null||typeof e=="function",rt={canHandle:e=>G(e)&&e[B],serialize(e){const{port1:t,port2:n}=new MessageChannel;return V(e,t),[n,[n]]},deserialize(e){return e.start(),ct(e)}},ot={canHandle:e=>G(e)&&W in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Y=new Map([["proxy",rt],["throw",ot]]);function st(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function V(e,t=globalThis,n=["*"]){t.addEventListener("message",function r(o){if(!o||!o.data)return;if(!st(n,o.origin)){console.warn(`Invalid origin '${o.origin}' for comlink proxy`);return}const{id:a,type:c,path:u}=Object.assign({path:[]},o.data),f=(o.data.argumentList||[]).map(E);let b;try{const g=u.slice(0,-1).reduce((l,P)=>l[P],e),y=u.reduce((l,P)=>l[P],e);switch(c){case"GET":b=y;break;case"SET":g[u.slice(-1)[0]]=E(o.data.value),b=!0;break;case"APPLY":b=y.apply(g,f);break;case"CONSTRUCT":{const l=new y(...f);b=bt(l)}break;case"ENDPOINT":{const{port1:l,port2:P}=new MessageChannel;V(e,P),b=ft(l,[l])}break;case"RELEASE":b=void 0;break;default:return}}catch(g){b={value:g,[W]:0}}Promise.resolve(b).catch(g=>({value:g,[W]:0})).then(g=>{const[y,l]=q(g);t.postMessage(Object.assign(Object.assign({},y),{id:a}),l),c==="RELEASE"&&(t.removeEventListener("message",r),J(t),z in e&&typeof e[z]=="function"&&e[z]())}).catch(g=>{const[y,l]=q({value:new TypeError("Unserializable return value"),[W]:0});t.postMessage(Object.assign(Object.assign({},y),{id:a}),l)})}),t.start&&t.start()}function _t(e){return e.constructor.name==="MessagePort"}function J(e){_t(e)&&e.close()}function ct(e,t){return H(e,[],t)}function U(e){if(e)throw new Error("Proxy has been released and is not useable")}function X(e){return S(e,{type:"RELEASE"}).then(()=>{J(e)})}const F=new WeakMap,I="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(F.get(e)||0)-1;F.set(e,t),t===0&&X(e)});function it(e,t){const n=(F.get(t)||0)+1;F.set(t,n),I&&I.register(e,t,e)}function at(e){I&&I.unregister(e)}function H(e,t=[],n=function(){}){let r=!1;const o=new Proxy(n,{get(a,c){if(U(r),c===nt)return()=>{at(o),X(e),r=!0};if(c==="then"){if(t.length===0)return{then:()=>o};const u=S(e,{type:"GET",path:t.map(f=>f.toString())}).then(E);return u.then.bind(u)}return H(e,[...t,c])},set(a,c,u){U(r);const[f,b]=q(u);return S(e,{type:"SET",path:[...t,c].map(g=>g.toString()),value:f},b).then(E)},apply(a,c,u){U(r);const f=t[t.length-1];if(f===et)return S(e,{type:"ENDPOINT"}).then(E);if(f==="bind")return H(e,t.slice(0,-1));const[b,g]=K(u);return S(e,{type:"APPLY",path:t.map(y=>y.toString()),argumentList:b},g).then(E)},construct(a,c){U(r);const[u,f]=K(c);return S(e,{type:"CONSTRUCT",path:t.map(b=>b.toString()),argumentList:u},f).then(E)}});return it(o,e),o}function ut(e){return Array.prototype.concat.apply([],e)}function K(e){const t=e.map(q);return[t.map(n=>n[0]),ut(t.map(n=>n[1]))]}const Q=new WeakMap;function ft(e,t){return Q.set(e,t),e}function bt(e){return Object.assign(e,{[B]:!0})}function q(e){for(const[t,n]of Y)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},Q.get(e)||[]]}function E(e){switch(e.type){case"HANDLER":return Y.get(e.name).deserialize(e.value);case"RAW":return e.value}}function S(e,t,n){return new Promise(r=>{const o=gt();e.addEventListener("message",function a(c){!c.data||!c.data.id||c.data.id!==o||(e.removeEventListener("message",a),r(c.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)})}function gt(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}let s;const p=new Array(128).fill(void 0);p.push(void 0,null,!0,!1);function _(e){return p[e]}let O=p.length;function lt(e){e<132||(p[e]=O,O=e)}function $(e){const t=_(e);return lt(e),t}const Z=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Z.decode();let x=null;function M(){return(x===null||x.byteLength===0)&&(x=new Uint8Array(s.memory.buffer)),x}function j(e,t){return Z.decode(M().subarray(e,e+t))}function i(e){O===p.length&&p.push(p.length+1);const t=O;return O=p[t],p[t]=e,t}let A=0;const N=new TextEncoder("utf-8"),wt=typeof N.encodeInto=="function"?function(e,t){return N.encodeInto(e,t)}:function(e,t){const n=N.encode(e);return t.set(n),{read:e.length,written:n.length}};function R(e,t,n){if(n===void 0){const u=N.encode(e),f=t(u.length);return M().subarray(f,f+u.length).set(u),A=u.length,f}let r=e.length,o=t(r);const a=M();let c=0;for(;c<r;c++){const u=e.charCodeAt(c);if(u>127)break;a[o+c]=u}if(c!==r){c!==0&&(e=e.slice(c)),o=n(o,r,r=c+e.length*3);const u=M().subarray(o+c,o+r),f=wt(e,u);c+=f.written}return A=c,o}function T(e){return e==null}let L=null;function w(){return(L===null||L.byteLength===0)&&(L=new Int32Array(s.memory.buffer)),L}let C=null;function dt(){return(C===null||C.byteLength===0)&&(C=new Float64Array(s.memory.buffer)),C}function D(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const o=e.description;return o==null?"Symbol":`Symbol(${o})`}if(t=="function"){const o=e.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(e)){const o=e.length;let a="[";o>0&&(a+=D(e[0]));for(let c=1;c<o;c++)a+=", "+D(e[c]);return a+="]",a}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function k(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}function d(e,t){try{return e.apply(this,t)}catch(n){s.__wbindgen_exn_store(i(n))}}function pt(e,t){return M().subarray(e/1,e/1+t)}class v{static __wrap(t){const n=Object.create(v.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();s.__wbg_board_free(t)}constructor(){const t=s.board_new();return v.__wrap(t)}static from_json(t){const n=R(t,s.__wbindgen_malloc,s.__wbindgen_realloc),r=A,o=s.board_from_json(n,r);return v.__wrap(o)}to_json(){try{const r=s.__wbindgen_add_to_stack_pointer(-16);s.board_to_json(r,this.ptr);var t=w()[r/4+0],n=w()[r/4+1];return j(t,n)}finally{s.__wbindgen_add_to_stack_pointer(16),s.__wbindgen_free(t,n)}}init_default_state(){s.board_init_default_state(this.ptr)}get_pieces(){const t=s.board_get_pieces(this.ptr);return $(t)}handle_move(t){k(t,h),s.board_handle_move(this.ptr,t.ptr)}get_winner(){return s.board_get_winner(this.ptr)>>>0}is_game_over(t){return s.board_is_game_over(this.ptr,t)!==0}}class mt{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();s.__wbg_checkersai_free(t)}static get_heuristic_value_js(t,n){return k(t,v),s.checkersai_get_heuristic_value_js(t.ptr,n)}static get_best_move_alphabeta(t,n,r,o,a){k(t,v);let c=0;T(a)||(k(a,h),c=a.__destroy_into_raw());const u=s.checkersai_get_best_move_alphabeta(t.ptr,n,r,o,c);return u===0?void 0:h.__wrap(u)}}class h{static __wrap(t){const n=Object.create(h.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();s.__wbg_move_free(t)}get start_square(){return s.__wbg_get_move_start_square(this.ptr)}set start_square(t){s.__wbg_set_move_start_square(this.ptr,t)}get end_square(){return s.__wbg_get_move_end_square(this.ptr)}set end_square(t){s.__wbg_set_move_end_square(this.ptr,t)}get captured_piece(){const t=s.__wbg_get_move_captured_piece(this.ptr);return t===0?void 0:m.__wrap(t)}set captured_piece(t){let n=0;T(t)||(k(t,m),n=t.__destroy_into_raw()),s.__wbg_set_move_captured_piece(this.ptr,n)}get moved_piece(){const t=s.__wbg_get_move_moved_piece(this.ptr);return m.__wrap(t)}set moved_piece(t){k(t,m);var n=t.__destroy_into_raw();s.__wbg_set_move_moved_piece(this.ptr,n)}get moved_piece_after_move(){const t=s.__wbg_get_move_moved_piece_after_move(this.ptr);return m.__wrap(t)}set moved_piece_after_move(t){k(t,m);var n=t.__destroy_into_raw();s.__wbg_set_move_moved_piece_after_move(this.ptr,n)}static from_json(t){const n=R(t,s.__wbindgen_malloc,s.__wbindgen_realloc),r=A,o=s.move_from_json(n,r);return h.__wrap(o)}to_json(){try{const r=s.__wbindgen_add_to_stack_pointer(-16);s.move_to_json(r,this.ptr);var t=w()[r/4+0],n=w()[r/4+1];return j(t,n)}finally{s.__wbindgen_add_to_stack_pointer(16),s.__wbindgen_free(t,n)}}get_forced_moves_js(){const t=s.move_get_forced_moves_js(this.ptr);return $(t)}}class m{static __wrap(t){const n=Object.create(m.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();s.__wbg_piece_free(t)}get color(){return s.__wbg_get_piece_color(this.ptr)>>>0}set color(t){s.__wbg_set_piece_color(this.ptr,t)}get king(){return s.__wbg_get_piece_king(this.ptr)!==0}set king(t){s.__wbg_set_piece_king(this.ptr,t)}}async function yt(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function ht(){const e={};return e.wbg={},e.wbg.__wbg_piece_new=function(t){const n=m.__wrap(t);return i(n)},e.wbg.__wbindgen_object_drop_ref=function(t){$(t)},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(j(t,n));return i(r)},e.wbg.__wbg_move_new=function(t){const n=h.__wrap(t);return i(n)},e.wbg.__wbindgen_string_get=function(t,n){const r=_(n),o=typeof r=="string"?r:void 0;var a=T(o)?0:R(o,s.__wbindgen_malloc,s.__wbindgen_realloc),c=A;w()[t/4+1]=c,w()[t/4+0]=a},e.wbg.__wbindgen_is_string=function(t){return typeof _(t)=="string"},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return i(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=_(n).stack,o=R(r,s.__wbindgen_malloc,s.__wbindgen_realloc),a=A;w()[t/4+1]=a,w()[t/4+0]=o},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){try{console.error(j(t,n))}finally{s.__wbindgen_free(t,n)}},e.wbg.__wbindgen_is_object=function(t){const n=_(t);return typeof n=="object"&&n!==null},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return _(t)==_(n)},e.wbg.__wbindgen_boolean_get=function(t){const n=_(t);return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_number_get=function(t,n){const r=_(n),o=typeof r=="number"?r:void 0;dt()[t/8+1]=T(o)?0:o,w()[t/4+0]=!T(o)},e.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(t){const n=_(t).crypto;return i(n)},e.wbg.__wbg_process_038c26bf42b093f8=function(t){const n=_(t).process;return i(n)},e.wbg.__wbg_versions_ab37218d2f0b24a8=function(t){const n=_(t).versions;return i(n)},e.wbg.__wbg_node_080f4b19d15bc1fe=function(t){const n=_(t).node;return i(n)},e.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return d(function(){const t=module.require;return i(t)},arguments)},e.wbg.__wbindgen_is_function=function(t){return typeof _(t)=="function"},e.wbg.__wbindgen_string_new=function(t,n){const r=j(t,n);return i(r)},e.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(t){const n=_(t).msCrypto;return i(n)},e.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return d(function(t,n){_(t).getRandomValues(_(n))},arguments)},e.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return d(function(t,n,r){_(t).randomFillSync(pt(n,r))},arguments)},e.wbg.__wbg_get_27fe3dac1c4d0224=function(t,n){const r=_(t)[n>>>0];return i(r)},e.wbg.__wbg_length_e498fbc24f9c1d4f=function(t){return _(t).length},e.wbg.__wbg_new_b525de17f44a8943=function(){const t=new Array;return i(t)},e.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(t,n){const r=new Function(j(t,n));return i(r)},e.wbg.__wbg_next_b7d530c04fd8b217=function(t){const n=_(t).next;return i(n)},e.wbg.__wbg_next_88560ec06a094dea=function(){return d(function(t){const n=_(t).next();return i(n)},arguments)},e.wbg.__wbg_done_1ebec03bbd919843=function(t){return _(t).done},e.wbg.__wbg_value_6ac8da5cc5b3efda=function(t){const n=_(t).value;return i(n)},e.wbg.__wbg_iterator_55f114446221aa5a=function(){return i(Symbol.iterator)},e.wbg.__wbg_get_baf4855f9a986186=function(){return d(function(t,n){const r=Reflect.get(_(t),_(n));return i(r)},arguments)},e.wbg.__wbg_call_95d1ea488d03e4e8=function(){return d(function(t,n){const r=_(t).call(_(n));return i(r)},arguments)},e.wbg.__wbindgen_object_clone_ref=function(t){const n=_(t);return i(n)},e.wbg.__wbg_self_e7c1f827057f6584=function(){return d(function(){const t=self.self;return i(t)},arguments)},e.wbg.__wbg_window_a09ec664e14b1b81=function(){return d(function(){const t=window.window;return i(t)},arguments)},e.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return d(function(){const t=globalThis.globalThis;return i(t)},arguments)},e.wbg.__wbg_global_c85a9259e621f3db=function(){return d(function(){const t=global.global;return i(t)},arguments)},e.wbg.__wbindgen_is_undefined=function(t){return _(t)===void 0},e.wbg.__wbg_isArray_39d28997bf6b96b4=function(t){return Array.isArray(_(t))},e.wbg.__wbg_push_49c286f04dd3bf59=function(t,n){return _(t).push(_(n))},e.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(t){let n;try{n=_(t)instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_call_9495de66fdbe016b=function(){return d(function(t,n,r){const o=_(t).call(_(n),_(r));return i(o)},arguments)},e.wbg.__wbg_entries_4e1315b774245952=function(t){const n=Object.entries(_(t));return i(n)},e.wbg.__wbg_buffer_cf65c07de34b9a08=function(t){const n=_(t).buffer;return i(n)},e.wbg.__wbg_new_537b7341ce90bb31=function(t){const n=new Uint8Array(_(t));return i(n)},e.wbg.__wbg_set_17499e8aa4003ebd=function(t,n,r){_(t).set(_(n),r>>>0)},e.wbg.__wbg_length_27a2afe8ab42b09f=function(t){return _(t).length},e.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(t){let n;try{n=_(t)instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbg_newwithlength_b56c882b57805732=function(t){const n=new Uint8Array(t>>>0);return i(n)},e.wbg.__wbg_subarray_7526649b91a252a6=function(t,n,r){const o=_(t).subarray(n>>>0,r>>>0);return i(o)},e.wbg.__wbindgen_debug_string=function(t,n){const r=D(_(n)),o=R(r,s.__wbindgen_malloc,s.__wbindgen_realloc),a=A;w()[t/4+1]=a,w()[t/4+0]=o},e.wbg.__wbindgen_throw=function(t,n){throw new Error(j(t,n))},e.wbg.__wbindgen_memory=function(){const t=s.memory;return i(t)},e}function Et(e,t){return s=e.exports,tt.__wbindgen_wasm_module=t,C=null,L=null,x=null,s.__wbindgen_start(),s}async function tt(e){typeof e>"u"&&(e=new URL(""+new URL("wasm_checkers_bg-605548c5.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href,self.location));const t=ht();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await yt(await e,t);return Et(n,r)}var jt=Object.freeze({__proto__:null,getBestMove:async(e,t,n,r)=>{const o=v.from_json(e),a=mt.get_best_move_alphabeta(o,t,r.computerDepth,r.checkersSettings,n?h.from_json(n):void 0);return a?a.to_json():null},initWasm:async()=>{await tt("wasm_checkers_bg-605548c5.wasm")}});V(jt)})();