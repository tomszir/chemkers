(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const B=Symbol("Comlink.proxy"),et=Symbol("Comlink.endpoint"),nt=Symbol("Comlink.releaseProxy"),F=Symbol("Comlink.finalizer"),C=Symbol("Comlink.thrown"),G=e=>typeof e=="object"&&e!==null||typeof e=="function",rt={canHandle:e=>G(e)&&e[B],serialize(e){const{port1:t,port2:n}=new MessageChannel;return q(e,t),[n,[n]]},deserialize(e){return e.start(),ct(e)}},ot={canHandle:e=>G(e)&&C in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Y=new Map([["proxy",rt],["throw",ot]]);function st(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function q(e,t=globalThis,n=["*"]){t.addEventListener("message",function r(s){if(!s||!s.data)return;if(!st(n,s.origin)){console.warn(`Invalid origin '${s.origin}' for comlink proxy`);return}const{id:_,type:i,path:a}=Object.assign({path:[]},s.data),f=(s.data.argumentList||[]).map(h);let b;try{const g=a.slice(0,-1).reduce((l,T)=>l[T],e),m=a.reduce((l,T)=>l[T],e);switch(i){case"GET":b=m;break;case"SET":g[a.slice(-1)[0]]=h(s.data.value),b=!0;break;case"APPLY":b=m.apply(g,f);break;case"CONSTRUCT":{const l=new m(...f);b=bt(l)}break;case"ENDPOINT":{const{port1:l,port2:T}=new MessageChannel;q(e,T),b=ft(l,[l])}break;case"RELEASE":b=void 0;break;default:return}}catch(g){b={value:g,[C]:0}}Promise.resolve(b).catch(g=>({value:g,[C]:0})).then(g=>{const[m,l]=U(g);t.postMessage(Object.assign(Object.assign({},m),{id:_}),l),i==="RELEASE"&&(t.removeEventListener("message",r),J(t),F in e&&typeof e[F]=="function"&&e[F]())}).catch(g=>{const[m,l]=U({value:new TypeError("Unserializable return value"),[C]:0});t.postMessage(Object.assign(Object.assign({},m),{id:_}),l)})}),t.start&&t.start()}function it(e){return e.constructor.name==="MessagePort"}function J(e){it(e)&&e.close()}function ct(e,t){return H(e,[],t)}function P(e){if(e)throw new Error("Proxy has been released and is not useable")}function X(e){return k(e,{type:"RELEASE"}).then(()=>{J(e)})}const W=new WeakMap,I="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(W.get(e)||0)-1;W.set(e,t),t===0&&X(e)});function _t(e,t){const n=(W.get(t)||0)+1;W.set(t,n),I&&I.register(e,t,e)}function at(e){I&&I.unregister(e)}function H(e,t=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(_,i){if(P(r),i===nt)return()=>{at(s),X(e),r=!0};if(i==="then"){if(t.length===0)return{then:()=>s};const a=k(e,{type:"GET",path:t.map(f=>f.toString())}).then(h);return a.then.bind(a)}return H(e,[...t,i])},set(_,i,a){P(r);const[f,b]=U(a);return k(e,{type:"SET",path:[...t,i].map(g=>g.toString()),value:f},b).then(h)},apply(_,i,a){P(r);const f=t[t.length-1];if(f===et)return k(e,{type:"ENDPOINT"}).then(h);if(f==="bind")return H(e,t.slice(0,-1));const[b,g]=K(a);return k(e,{type:"APPLY",path:t.map(m=>m.toString()),argumentList:b},g).then(h)},construct(_,i){P(r);const[a,f]=K(i);return k(e,{type:"CONSTRUCT",path:t.map(b=>b.toString()),argumentList:a},f).then(h)}});return _t(s,e),s}function ut(e){return Array.prototype.concat.apply([],e)}function K(e){const t=e.map(U);return[t.map(n=>n[0]),ut(t.map(n=>n[1]))]}const Q=new WeakMap;function ft(e,t){return Q.set(e,t),e}function bt(e){return Object.assign(e,{[B]:!0})}function U(e){for(const[t,n]of Y)if(n.canHandle(e)){const[r,s]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},s]}return[{type:"RAW",value:e},Q.get(e)||[]]}function h(e){switch(e.type){case"HANDLER":return Y.get(e.name).deserialize(e.value);case"RAW":return e.value}}function k(e,t,n){return new Promise(r=>{const s=gt();e.addEventListener("message",function _(i){!i.data||!i.data.id||i.data.id!==s||(e.removeEventListener("message",_),r(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:s},t),n)})}function gt(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}let o;const d=new Array(128).fill(void 0);d.push(void 0,null,!0,!1);function c(e){return d[e]}let v=d.length;function lt(e){e<132||(d[e]=v,v=e)}function $(e){const t=c(e);return lt(e),t}const Z=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Z.decode();let S=null;function N(){return(S===null||S.byteLength===0)&&(S=new Uint8Array(o.memory.buffer)),S}function O(e,t){return Z.decode(N().subarray(e,e+t))}function u(e){v===d.length&&d.push(d.length+1);const t=v;return v=d[t],d[t]=e,t}let E=0;const z=new TextEncoder("utf-8"),wt=typeof z.encodeInto=="function"?function(e,t){return z.encodeInto(e,t)}:function(e,t){const n=z.encode(e);return t.set(n),{read:e.length,written:n.length}};function x(e,t,n){if(n===void 0){const a=z.encode(e),f=t(a.length);return N().subarray(f,f+a.length).set(a),E=a.length,f}let r=e.length,s=t(r);const _=N();let i=0;for(;i<r;i++){const a=e.charCodeAt(i);if(a>127)break;_[s+i]=a}if(i!==r){i!==0&&(e=e.slice(i)),s=n(s,r,r=i+e.length*3);const a=N().subarray(s+i,s+r),f=wt(e,a);i+=f.written}return E=i,s}function M(e){return e==null}let R=null;function w(){return(R===null||R.byteLength===0)&&(R=new Int32Array(o.memory.buffer)),R}let L=null;function dt(){return(L===null||L.byteLength===0)&&(L=new Float64Array(o.memory.buffer)),L}function D(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const s=e.description;return s==null?"Symbol":`Symbol(${s})`}if(t=="function"){const s=e.name;return typeof s=="string"&&s.length>0?`Function(${s})`:"Function"}if(Array.isArray(e)){const s=e.length;let _="[";s>0&&(_+=D(e[0]));for(let i=1;i<s;i++)_+=", "+D(e[i]);return _+="]",_}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function j(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}function V(e,t){try{return e.apply(this,t)}catch(n){o.__wbindgen_exn_store(u(n))}}class A{static __wrap(t){const n=Object.create(A.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_board_free(t)}constructor(){const t=o.board_new();return A.__wrap(t)}static from_json(t){const n=x(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=E,s=o.board_from_json(n,r);return A.__wrap(s)}to_json(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.board_to_json(r,this.ptr);var t=w()[r/4+0],n=w()[r/4+1];return O(t,n)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(t,n)}}init_default_state(){o.board_init_default_state(this.ptr)}get_pieces(){const t=o.board_get_pieces(this.ptr);return $(t)}handle_move(t){j(t,y),o.board_handle_move(this.ptr,t.ptr)}is_game_over(t){return o.board_is_game_over(this.ptr,t)!==0}}class pt{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_checkersai_free(t)}static get_heuristic_value_js(t,n){return j(t,A),o.checkersai_get_heuristic_value_js(t.ptr,n)}static get_best_move_alphabeta(t,n,r,s,_){j(t,A);let i=0;M(_)||(j(_,y),i=_.__destroy_into_raw());const a=o.checkersai_get_best_move_alphabeta(t.ptr,n,r,s,i);return a===0?void 0:y.__wrap(a)}}class y{static __wrap(t){const n=Object.create(y.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_move_free(t)}get start_square(){return o.__wbg_get_move_start_square(this.ptr)}set start_square(t){o.__wbg_set_move_start_square(this.ptr,t)}get end_square(){return o.__wbg_get_move_end_square(this.ptr)}set end_square(t){o.__wbg_set_move_end_square(this.ptr,t)}get captured_piece(){const t=o.__wbg_get_move_captured_piece(this.ptr);return t===0?void 0:p.__wrap(t)}set captured_piece(t){let n=0;M(t)||(j(t,p),n=t.__destroy_into_raw()),o.__wbg_set_move_captured_piece(this.ptr,n)}get moved_piece(){const t=o.__wbg_get_move_moved_piece(this.ptr);return p.__wrap(t)}set moved_piece(t){j(t,p);var n=t.__destroy_into_raw();o.__wbg_set_move_moved_piece(this.ptr,n)}get moved_piece_after_move(){const t=o.__wbg_get_move_moved_piece_after_move(this.ptr);return p.__wrap(t)}set moved_piece_after_move(t){j(t,p);var n=t.__destroy_into_raw();o.__wbg_set_move_moved_piece_after_move(this.ptr,n)}static from_json(t){const n=x(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=E,s=o.move_from_json(n,r);return y.__wrap(s)}to_json(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.move_to_json(r,this.ptr);var t=w()[r/4+0],n=w()[r/4+1];return O(t,n)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(t,n)}}get_forced_moves_js(){const t=o.move_get_forced_moves_js(this.ptr);return $(t)}}class p{static __wrap(t){const n=Object.create(p.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_piece_free(t)}get color(){return o.__wbg_get_piece_color(this.ptr)>>>0}set color(t){o.__wbg_set_piece_color(this.ptr,t)}get king(){return o.__wbg_get_piece_king(this.ptr)!==0}set king(t){o.__wbg_set_piece_king(this.ptr,t)}}async function mt(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function yt(){const e={};return e.wbg={},e.wbg.__wbg_piece_new=function(t){const n=p.__wrap(t);return u(n)},e.wbg.__wbindgen_object_drop_ref=function(t){$(t)},e.wbg.__wbg_move_new=function(t){const n=y.__wrap(t);return u(n)},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(O(t,n));return u(r)},e.wbg.__wbindgen_string_get=function(t,n){const r=c(n),s=typeof r=="string"?r:void 0;var _=M(s)?0:x(s,o.__wbindgen_malloc,o.__wbindgen_realloc),i=E;w()[t/4+1]=i,w()[t/4+0]=_},e.wbg.__wbindgen_is_string=function(t){return typeof c(t)=="string"},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return u(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=c(n).stack,s=x(r,o.__wbindgen_malloc,o.__wbindgen_realloc),_=E;w()[t/4+1]=_,w()[t/4+0]=s},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){try{console.error(O(t,n))}finally{o.__wbindgen_free(t,n)}},e.wbg.__wbindgen_is_object=function(t){const n=c(t);return typeof n=="object"&&n!==null},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return c(t)==c(n)},e.wbg.__wbindgen_boolean_get=function(t){const n=c(t);return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_number_get=function(t,n){const r=c(n),s=typeof r=="number"?r:void 0;dt()[t/8+1]=M(s)?0:s,w()[t/4+0]=!M(s)},e.wbg.__wbg_get_27fe3dac1c4d0224=function(t,n){const r=c(t)[n>>>0];return u(r)},e.wbg.__wbg_length_e498fbc24f9c1d4f=function(t){return c(t).length},e.wbg.__wbg_new_b525de17f44a8943=function(){const t=new Array;return u(t)},e.wbg.__wbindgen_is_function=function(t){return typeof c(t)=="function"},e.wbg.__wbg_next_b7d530c04fd8b217=function(t){const n=c(t).next;return u(n)},e.wbg.__wbg_next_88560ec06a094dea=function(){return V(function(t){const n=c(t).next();return u(n)},arguments)},e.wbg.__wbg_done_1ebec03bbd919843=function(t){return c(t).done},e.wbg.__wbg_value_6ac8da5cc5b3efda=function(t){const n=c(t).value;return u(n)},e.wbg.__wbg_iterator_55f114446221aa5a=function(){return u(Symbol.iterator)},e.wbg.__wbg_get_baf4855f9a986186=function(){return V(function(t,n){const r=Reflect.get(c(t),c(n));return u(r)},arguments)},e.wbg.__wbg_call_95d1ea488d03e4e8=function(){return V(function(t,n){const r=c(t).call(c(n));return u(r)},arguments)},e.wbg.__wbg_isArray_39d28997bf6b96b4=function(t){return Array.isArray(c(t))},e.wbg.__wbg_push_49c286f04dd3bf59=function(t,n){return c(t).push(c(n))},e.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(t){let n;try{n=c(t)instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_entries_4e1315b774245952=function(t){const n=Object.entries(c(t));return u(n)},e.wbg.__wbg_buffer_cf65c07de34b9a08=function(t){const n=c(t).buffer;return u(n)},e.wbg.__wbg_new_537b7341ce90bb31=function(t){const n=new Uint8Array(c(t));return u(n)},e.wbg.__wbg_set_17499e8aa4003ebd=function(t,n,r){c(t).set(c(n),r>>>0)},e.wbg.__wbg_length_27a2afe8ab42b09f=function(t){return c(t).length},e.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(t){let n;try{n=c(t)instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbindgen_debug_string=function(t,n){const r=D(c(n)),s=x(r,o.__wbindgen_malloc,o.__wbindgen_realloc),_=E;w()[t/4+1]=_,w()[t/4+0]=s},e.wbg.__wbindgen_throw=function(t,n){throw new Error(O(t,n))},e.wbg.__wbindgen_memory=function(){const t=o.memory;return u(t)},e}function ht(e,t){return o=e.exports,tt.__wbindgen_wasm_module=t,L=null,R=null,S=null,o.__wbindgen_start(),o}async function tt(e){typeof e>"u"&&(e=new URL(""+new URL("wasm_checkers_bg-c312f6fa.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href,self.location));const t=yt();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await mt(await e,t);return ht(n,r)}var Et=Object.freeze({__proto__:null,getBestMove:async(e,t,n,r)=>{const s=A.from_json(e),_=pt.get_best_move_alphabeta(s,t,r.computerDepth,r.checkersSettings,n?y.from_json(n):void 0);return _?_.to_json():null},initWasm:async()=>{await tt("wasm_checkers_bg-c312f6fa.wasm")}});q(Et)})();
