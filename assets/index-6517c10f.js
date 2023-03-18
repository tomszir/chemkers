(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Je,v,Mr,_e,Ln,Rr,Jt,Lr,xt={},jr=[],Ka=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function K(e,t){for(var n in t)e[n]=t[n];return e}function $r(e){var t=e.parentNode;t&&t.removeChild(e)}function Q(e,t,n){var r,a,i,o={};for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?Je.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return ze(e,o,r,a,null)}function ze(e,t,n,r,a){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Mr};return a==null&&v.vnode!=null&&v.vnode(i),i}function Ja(){return{current:null}}function Z(e){return e.children}function G(e,t){this.props=e,this.context=t}function qe(e,t){if(t==null)return e.__?qe(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?qe(e):null}function Fr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Fr(e)}}function Qt(e){(!e.__d&&(e.__d=!0)&&_e.push(e)&&!St.__r++||Ln!==v.debounceRendering)&&((Ln=v.debounceRendering)||Rr)(St)}function St(){var e,t,n,r,a,i,o,c;for(_e.sort(Jt);e=_e.shift();)e.__d&&(t=_e.length,r=void 0,a=void 0,o=(i=(n=e).__v).__e,(c=n.__P)&&(r=[],(a=K({},i)).__v=i.__v+1,gn(c,i,a,n.__n,c.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o??qe(i),i.__h),Hr(r,i),i.__e!=o&&Fr(i)),_e.length>t&&_e.sort(Jt));St.__r=0}function zr(e,t,n,r,a,i,o,c,l,f){var s,_,u,d,h,A,g,w=r&&r.__k||jr,k=w.length;for(n.__k=[],s=0;s<t.length;s++)if((d=n.__k[s]=(d=t[s])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?ze(null,d,null,null,d):Array.isArray(d)?ze(Z,{children:d},null,null,null):d.__b>0?ze(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=n,d.__b=n.__b+1,(u=w[s])===null||u&&d.key==u.key&&d.type===u.type)w[s]=void 0;else for(_=0;_<k;_++){if((u=w[_])&&d.key==u.key&&d.type===u.type){w[_]=void 0;break}u=null}gn(e,d,u=u||xt,a,i,o,c,l,f),h=d.__e,(_=d.ref)&&u.ref!=_&&(g||(g=[]),u.ref&&g.push(u.ref,null,d),g.push(_,d.__c||h,d)),h!=null?(A==null&&(A=h),typeof d.type=="function"&&d.__k===u.__k?d.__d=l=Dr(d,l,e):l=Wr(e,d,u,w,h,l),typeof n.type=="function"&&(n.__d=l)):l&&u.__e==l&&l.parentNode!=e&&(l=qe(u))}for(n.__e=A,s=k;s--;)w[s]!=null&&(typeof n.type=="function"&&w[s].__e!=null&&w[s].__e==n.__d&&(n.__d=Ur(r).nextSibling),qr(w[s],w[s]));if(g)for(s=0;s<g.length;s++)Br(g[s],g[++s],g[++s])}function Dr(e,t,n){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,t=typeof r.type=="function"?Dr(r,t,n):Wr(n,r,r,a,r.__e,t));return t}function J(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){J(n,t)}):t.push(e)),t}function Wr(e,t,n,r,a,i){var o,c,l;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),o=null;else{for(c=i,l=0;(c=c.nextSibling)&&l<r.length;l+=1)if(c==a)break e;e.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Ur(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=Ur(n)))return r}return null}function Qa(e,t,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in t||At(e,i,null,n[i],r);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||At(e,i,t[i],n[i],r)}function jn(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ka.test(t)?n:n+"px"}function At(e,t,n,r,a){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||jn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||jn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?Fn:$n,i):e.removeEventListener(t,i?Fn:$n,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function $n(e){return this.l[e.type+!1](v.event?v.event(e):e)}function Fn(e){return this.l[e.type+!0](v.event?v.event(e):e)}function gn(e,t,n,r,a,i,o,c,l){var f,s,_,u,d,h,A,g,w,k,E,N,I,$,z,L=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=t.__e=n.__e,t.__h=null,i=[c]),(f=v.__b)&&f(t);try{e:if(typeof L=="function"){if(g=t.props,w=(f=L.contextType)&&r[f.__c],k=f?w?w.props.value:f.__:r,n.__c?A=(s=t.__c=n.__c).__=s.__E:("prototype"in L&&L.prototype.render?t.__c=s=new L(g,k):(t.__c=s=new G(g,k),s.constructor=L,s.render=ei),w&&w.sub(s),s.props=g,s.state||(s.state={}),s.context=k,s.__n=r,_=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),L.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=K({},s.__s)),K(s.__s,L.getDerivedStateFromProps(g,s.__s))),u=s.props,d=s.state,s.__v=t,_)L.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(L.getDerivedStateFromProps==null&&g!==u&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,k),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,k)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(s.props=g,s.state=s.__s,s.__d=!1),s.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),E=0;E<s._sb.length;E++)s.__h.push(s._sb[E]);s._sb=[],s.__h.length&&o.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,k),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(u,d,h)})}if(s.context=k,s.props=g,s.__P=e,N=v.__r,I=0,"prototype"in L&&L.prototype.render){for(s.state=s.__s,s.__d=!1,N&&N(t),f=s.render(s.props,s.state,s.context),$=0;$<s._sb.length;$++)s.__h.push(s._sb[$]);s._sb=[]}else do s.__d=!1,N&&N(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++I<25);s.state=s.__s,s.getChildContext!=null&&(r=K(K({},r),s.getChildContext())),_||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(u,d)),z=f!=null&&f.type===Z&&f.key==null?f.props.children:f,zr(e,Array.isArray(z)?z:[z],t,n,r,a,i,o,c,l),s.base=t.__e,t.__h=null,s.__h.length&&o.push(s),A&&(s.__E=s.__=null),s.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Za(n.__e,t,n,r,a,i,o,l);(f=v.diffed)&&f(t)}catch(D){t.__v=null,(l||i!=null)&&(t.__e=c,t.__h=!!l,i[i.indexOf(c)]=null),v.__e(D,t,n)}}function Hr(e,t){v.__c&&v.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){v.__e(r,n.__v)}})}function Za(e,t,n,r,a,i,o,c){var l,f,s,_=n.props,u=t.props,d=t.type,h=0;if(d==="svg"&&(a=!0),i!=null){for(;h<i.length;h++)if((l=i[h])&&"setAttribute"in l==!!d&&(d?l.localName===d:l.nodeType===3)){e=l,i[h]=null;break}}if(e==null){if(d===null)return document.createTextNode(u);e=a?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,u.is&&u),i=null,c=!1}if(d===null)_===u||c&&e.data===u||(e.data=u);else{if(i=i&&Je.call(e.childNodes),f=(_=n.props||xt).dangerouslySetInnerHTML,s=u.dangerouslySetInnerHTML,!c){if(i!=null)for(_={},h=0;h<e.attributes.length;h++)_[e.attributes[h].name]=e.attributes[h].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(Qa(e,u,_,a,c),s)t.__k=[];else if(h=t.props.children,zr(e,Array.isArray(h)?h:[h],t,n,r,a&&d!=="foreignObject",i,o,i?i[0]:n.__k&&qe(n,0),c),i!=null)for(h=i.length;h--;)i[h]!=null&&$r(i[h]);c||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||d==="progress"&&!h||d==="option"&&h!==_.value)&&At(e,"value",h,_.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&At(e,"checked",h,_.checked,!1))}return e}function Br(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function qr(e,t,n){var r,a;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Br(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){v.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&qr(r[a],t,n||typeof e.type!="function");n||e.__e==null||$r(e.__e),e.__=e.__e=e.__d=void 0}function ei(e,t,n){return this.constructor(e,n)}function Oe(e,t,n){var r,a,i;v.__&&v.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],gn(t,e=(!r&&n||t).__k=Q(Z,null,[e]),a||xt,xt,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Je.call(t.childNodes):null,i,!r&&n?n:a?a.__e:t.firstChild,r),Hr(i,e)}function Yr(e,t){Oe(e,t,Yr)}function ti(e,t,n){var r,a,i,o=K({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];return arguments.length>2&&(o.children=arguments.length>3?Je.call(arguments,2):n),ze(e.type,o,r||e.key,a||e.ref,null)}function ni(e,t){var n={__c:t="__cC"+Lr++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(function(c){c.__e=!0,Qt(c)})},this.sub=function(o){a.push(o);var c=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),c&&c.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Je=jr.slice,v={__e:function(e,t,n,r){for(var a,i,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),o=a.__d),o)return a.__E=a}catch(c){e=c}throw e}},Mr=0,G.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=K({},this.state),typeof e=="function"&&(e=e(K({},n),this.props)),e&&K(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Qt(this))},G.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Qt(this))},G.prototype.render=Z,_e=[],Rr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Jt=function(e,t){return e.__v.__b-t.__v.__b},St.__r=0,Lr=0;let b;const X=new Array(128).fill(void 0);X.push(void 0,null,!0,!1);function x(e){return X[e]}let be=0,Re=null;function pt(){return(Re===null||Re.byteLength===0)&&(Re=new Uint8Array(b.memory.buffer)),Re}const vt=new TextEncoder("utf-8"),ri=typeof vt.encodeInto=="function"?function(e,t){return vt.encodeInto(e,t)}:function(e,t){const n=vt.encode(e);return t.set(n),{read:e.length,written:n.length}};function De(e,t,n){if(n===void 0){const c=vt.encode(e),l=t(c.length);return pt().subarray(l,l+c.length).set(c),be=c.length,l}let r=e.length,a=t(r);const i=pt();let o=0;for(;o<r;o++){const c=e.charCodeAt(o);if(c>127)break;i[a+o]=c}if(o!==r){o!==0&&(e=e.slice(o)),a=n(a,r,r=o+e.length*3);const c=pt().subarray(a+o,a+r),l=ri(e,c);o+=l.written}return be=o,a}function Wt(e){return e==null}let Le=null;function q(){return(Le===null||Le.byteLength===0)&&(Le=new Int32Array(b.memory.buffer)),Le}let We=X.length;function ai(e){e<132||(X[e]=We,We=e)}function Rt(e){const t=x(e);return ai(e),t}const Vr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Vr.decode();function Ue(e,t){return Vr.decode(pt().subarray(e,e+t))}function j(e){We===X.length&&X.push(X.length+1);const t=We;return We=X[t],X[t]=e,t}let je=null;function ii(){return(je===null||je.byteLength===0)&&(je=new Float64Array(b.memory.buffer)),je}function Zt(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const a=e.description;return a==null?"Symbol":`Symbol(${a})`}if(t=="function"){const a=e.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(e)){const a=e.length;let i="[";a>0&&(i+=Zt(e[0]));for(let o=1;o<a;o++)i+=", "+Zt(e[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function Et(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}function Ut(e,t){try{return e.apply(this,t)}catch(n){b.__wbindgen_exn_store(j(n))}}const oi=Object.freeze({Default:0,0:"Default",ForcedCapture:1,1:"ForcedCapture",FlyingKings:2,2:"FlyingKings",RegularCaptureBackwards:4,4:"RegularCaptureBackwards",PromotionMoveTermination:8,8:"PromotionMoveTermination"}),si=Object.freeze({EnglishVariation:0,0:"EnglishVariation",RussianVariation:1,1:"RussianVariation"}),W=Object.freeze({Empty:0,0:"Empty",White:1,1:"White",Black:2,2:"Black"});class Ee{static __wrap(t){const n=Object.create(Ee.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_board_free(t)}constructor(){const t=b.board_new();return Ee.__wrap(t)}static from_json(t){const n=De(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=be,a=b.board_from_json(n,r);return Ee.__wrap(a)}to_json(){try{const r=b.__wbindgen_add_to_stack_pointer(-16);b.board_to_json(r,this.ptr);var t=q()[r/4+0],n=q()[r/4+1];return Ue(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}init_default_state(){b.board_init_default_state(this.ptr)}get_pieces(){const t=b.board_get_pieces(this.ptr);return Rt(t)}handle_move(t){Et(t,Pe),b.board_handle_move(this.ptr,t.ptr)}is_game_over(t){return b.board_is_game_over(this.ptr,t)!==0}}class ci{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_checkerssettings_free(t)}static combine_js(t){return b.checkerssettings_combine_js(j(t))}static from_preset(t){return b.checkerssettings_from_preset(t)}}class Pe{static __wrap(t){const n=Object.create(Pe.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_move_free(t)}get start_square(){return b.__wbg_get_move_start_square(this.ptr)}set start_square(t){b.__wbg_set_move_start_square(this.ptr,t)}get end_square(){return b.__wbg_get_move_end_square(this.ptr)}set end_square(t){b.__wbg_set_move_end_square(this.ptr,t)}get moved_piece(){const t=b.__wbg_get_move_moved_piece(this.ptr);return pe.__wrap(t)}set moved_piece(t){Et(t,pe);var n=t.__destroy_into_raw();b.__wbg_set_move_moved_piece(this.ptr,n)}get moved_piece_after_move(){const t=b.__wbg_get_move_moved_piece_after_move(this.ptr);return pe.__wrap(t)}set moved_piece_after_move(t){Et(t,pe);var n=t.__destroy_into_raw();b.__wbg_set_move_moved_piece_after_move(this.ptr,n)}static from_json(t){const n=De(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=be,a=b.move_from_json(n,r);return Pe.__wrap(a)}to_json(){try{const r=b.__wbindgen_add_to_stack_pointer(-16);b.move_to_json(r,this.ptr);var t=q()[r/4+0],n=q()[r/4+1];return Ue(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}get_forced_moves_js(){const t=b.move_get_forced_moves_js(this.ptr);return Rt(t)}}class li{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_movegenerator_free(t)}static get_valid_moves_js(t,n,r){Et(t,Ee);const a=b.movegenerator_get_valid_moves_js(t.ptr,n,r);return Rt(a)}}class pe{static __wrap(t){const n=Object.create(pe.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_piece_free(t)}get color(){return b.__wbg_get_piece_color(this.ptr)>>>0}set color(t){b.__wbg_set_piece_color(this.ptr,t)}get king(){return b.__wbg_get_piece_king(this.ptr)!==0}set king(t){b.__wbg_set_piece_king(this.ptr,t)}}async function fi(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function ui(){const e={};return e.wbg={},e.wbg.__wbindgen_string_get=function(t,n){const r=x(n),a=typeof r=="string"?r:void 0;var i=Wt(a)?0:De(a,b.__wbindgen_malloc,b.__wbindgen_realloc),o=be;q()[t/4+1]=o,q()[t/4+0]=i},e.wbg.__wbindgen_object_drop_ref=function(t){Rt(t)},e.wbg.__wbindgen_is_string=function(t){return typeof x(t)=="string"},e.wbg.__wbg_move_new=function(t){const n=Pe.__wrap(t);return j(n)},e.wbg.__wbg_piece_new=function(t){const n=pe.__wrap(t);return j(n)},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(Ue(t,n));return j(r)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return j(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=x(n).stack,a=De(r,b.__wbindgen_malloc,b.__wbindgen_realloc),i=be;q()[t/4+1]=i,q()[t/4+0]=a},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){try{console.error(Ue(t,n))}finally{b.__wbindgen_free(t,n)}},e.wbg.__wbindgen_is_object=function(t){const n=x(t);return typeof n=="object"&&n!==null},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return x(t)==x(n)},e.wbg.__wbindgen_boolean_get=function(t){const n=x(t);return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_number_get=function(t,n){const r=x(n),a=typeof r=="number"?r:void 0;ii()[t/8+1]=Wt(a)?0:a,q()[t/4+0]=!Wt(a)},e.wbg.__wbg_get_27fe3dac1c4d0224=function(t,n){const r=x(t)[n>>>0];return j(r)},e.wbg.__wbg_length_e498fbc24f9c1d4f=function(t){return x(t).length},e.wbg.__wbg_new_b525de17f44a8943=function(){const t=new Array;return j(t)},e.wbg.__wbindgen_is_function=function(t){return typeof x(t)=="function"},e.wbg.__wbg_next_b7d530c04fd8b217=function(t){const n=x(t).next;return j(n)},e.wbg.__wbg_next_88560ec06a094dea=function(){return Ut(function(t){const n=x(t).next();return j(n)},arguments)},e.wbg.__wbg_done_1ebec03bbd919843=function(t){return x(t).done},e.wbg.__wbg_value_6ac8da5cc5b3efda=function(t){const n=x(t).value;return j(n)},e.wbg.__wbg_iterator_55f114446221aa5a=function(){return j(Symbol.iterator)},e.wbg.__wbg_get_baf4855f9a986186=function(){return Ut(function(t,n){const r=Reflect.get(x(t),x(n));return j(r)},arguments)},e.wbg.__wbg_call_95d1ea488d03e4e8=function(){return Ut(function(t,n){const r=x(t).call(x(n));return j(r)},arguments)},e.wbg.__wbg_isArray_39d28997bf6b96b4=function(t){return Array.isArray(x(t))},e.wbg.__wbg_push_49c286f04dd3bf59=function(t,n){return x(t).push(x(n))},e.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(t){let n;try{n=x(t)instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_entries_4e1315b774245952=function(t){const n=Object.entries(x(t));return j(n)},e.wbg.__wbg_buffer_cf65c07de34b9a08=function(t){const n=x(t).buffer;return j(n)},e.wbg.__wbg_new_537b7341ce90bb31=function(t){const n=new Uint8Array(x(t));return j(n)},e.wbg.__wbg_set_17499e8aa4003ebd=function(t,n,r){x(t).set(x(n),r>>>0)},e.wbg.__wbg_length_27a2afe8ab42b09f=function(t){return x(t).length},e.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(t){let n;try{n=x(t)instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbindgen_debug_string=function(t,n){const r=Zt(x(n)),a=De(r,b.__wbindgen_malloc,b.__wbindgen_realloc),i=be;q()[t/4+1]=i,q()[t/4+0]=a},e.wbg.__wbindgen_throw=function(t,n){throw new Error(Ue(t,n))},e.wbg.__wbindgen_memory=function(){const t=b.memory;return j(t)},e}function di(e,t){return b=e.exports,Gr.__wbindgen_wasm_module=t,je=null,Le=null,Re=null,b.__wbindgen_start(),b}async function Gr(e){typeof e>"u"&&(e=new URL(""+new URL("wasm_checkers_bg-6adaf2e2.wasm",import.meta.url).href,self.location));const t=ui();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await fi(await e,t);return di(n,r)}var we,C,Ht,zn,Ne=0,Xr=[],ht=[],Dn=v.__b,Wn=v.__r,Un=v.diffed,Hn=v.__c,Bn=v.unmount;function Te(e,t){v.__h&&v.__h(C,e,Ne||t),Ne=0;var n=C.__H||(C.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ht}),n.__[e]}function U(e){return Ne=1,Kr(Jr,e)}function Kr(e,t,n){var r=Te(we++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Jr(void 0,t),function(c){var l=r.__N?r.__N[0]:r.__[0],f=r.t(l,c);l!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var a=function(c,l,f){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(u){return u.__c});if(s.every(function(u){return!u.__N}))return!i||i.call(this,c,l,f);var _=!1;return s.forEach(function(u){if(u.__N){var d=u.__[0];u.__=u.__N,u.__N=void 0,d!==u.__[0]&&(_=!0)}}),!(!_&&r.__c.props===c)&&(!i||i.call(this,c,l,f))};C.u=!0;var i=C.shouldComponentUpdate,o=C.componentWillUpdate;C.componentWillUpdate=function(c,l,f){if(this.__e){var s=i;i=void 0,a(c,l,f),i=s}o&&o.call(this,c,l,f)},C.shouldComponentUpdate=a}return r.__N||r.__}function oe(e,t){var n=Te(we++,3);!v.__s&&yn(n.__H,t)&&(n.__=e,n.i=t,C.__H.__h.push(n))}function Lt(e,t){var n=Te(we++,4);!v.__s&&yn(n.__H,t)&&(n.__=e,n.i=t,C.__h.push(n))}function _i(e){return Ne=5,jt(function(){return{current:e}},[])}function mi(e,t,n){Ne=6,Lt(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function jt(e,t){var n=Te(we++,7);return yn(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function pi(e,t){return Ne=8,jt(function(){return e},t)}function vi(e){var t=C.context[e.__c],n=Te(we++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(C)),t.props.value):e.__}function hi(e,t){v.useDebugValue&&v.useDebugValue(t?t(e):e)}function bi(){var e=Te(we++,11);if(!e.__){for(var t=C.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function gi(){for(var e;e=Xr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(bt),e.__H.__h.forEach(en),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){C=null,Dn&&Dn(e)},v.__r=function(e){Wn&&Wn(e),we=0;var t=(C=e.__c).__H;t&&(Ht===C?(t.__h=[],C.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ht,n.__N=n.i=void 0})):(t.__h.forEach(bt),t.__h.forEach(en),t.__h=[])),Ht=C},v.diffed=function(e){Un&&Un(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xr.push(t)!==1&&zn===v.requestAnimationFrame||((zn=v.requestAnimationFrame)||yi)(gi)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ht&&(n.__=n.__V),n.i=void 0,n.__V=ht})),Ht=C=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(bt),n.__h=n.__h.filter(function(r){return!r.__||en(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],v.__e(r,n.__v)}}),Hn&&Hn(e,t)},v.unmount=function(e){Bn&&Bn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{bt(r)}catch(a){t=a}}),n.__H=void 0,t&&v.__e(t,n.__v))};var qn=typeof requestAnimationFrame=="function";function yi(e){var t,n=function(){clearTimeout(r),qn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);qn&&(t=requestAnimationFrame(n))}function bt(e){var t=C,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),C=t}function en(e){var t=C;e.__c=e.__(),C=t}function yn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Jr(e,t){return typeof t=="function"?t(e):t}const wi="_root_ldxbx_1",ki="_main_ldxbx_147",xi="_board_ldxbx_153",Yn={root:wi,main:ki,board:xi},Si="_root_sa891_1",Ai="_board_sa891_147",Ei={root:Si,board:Ai};var Ci={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]};function Vn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vn(Object(n),!0).forEach(function(r){R(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function Oi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pi(e,t,n){return t&&Gn(e.prototype,t),n&&Gn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wn(e,t){return Ii(e)||Mi(e,t)||Qr(e,t)||Li()}function Qe(e){return Ni(e)||Ti(e)||Qr(e)||Ri()}function Ni(e){if(Array.isArray(e))return tn(e)}function Ii(e){if(Array.isArray(e))return e}function Ti(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,c;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,c=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function Qr(e,t){if(e){if(typeof e=="string")return tn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tn(e,t)}}function tn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ri(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Li(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xn=function(){},kn={},Zr={},ea=null,ta={mark:Xn,measure:Xn};try{typeof window<"u"&&(kn=window),typeof document<"u"&&(Zr=document),typeof MutationObserver<"u"&&(ea=MutationObserver),typeof performance<"u"&&(ta=performance)}catch{}var ji=kn.navigator||{},Kn=ji.userAgent,Jn=Kn===void 0?"":Kn,ce=kn,P=Zr,Qn=ea,it=ta;ce.document;var re=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",na=~Jn.indexOf("MSIE")||~Jn.indexOf("Trident/"),ot,st,ct,lt,ft,ee="___FONT_AWESOME___",nn=16,ra="fa",aa="svg-inline--fa",ge="data-fa-i2svg",rn="data-fa-pseudo-element",$i="data-fa-pseudo-element-pending",xn="data-prefix",Sn="data-icon",Zn="fontawesome-i2svg",Fi="async",zi=["HTML","HEAD","STYLE","SCRIPT"],ia=function(){try{return!0}catch{return!1}}(),O="classic",T="sharp",An=[O,T];function Ze(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[O]}})}var Ye=Ze((ot={},R(ot,O,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),R(ot,T,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),ot)),Ve=Ze((st={},R(st,O,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),R(st,T,{solid:"fass",regular:"fasr"}),st)),Ge=Ze((ct={},R(ct,O,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),R(ct,T,{fass:"fa-solid",fasr:"fa-regular"}),ct)),Di=Ze((lt={},R(lt,O,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),R(lt,T,{"fa-solid":"fass","fa-regular":"fasr"}),lt)),Wi=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,oa="fa-layers-text",Ui=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Hi=Ze((ft={},R(ft,O,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),R(ft,T,{900:"fass",400:"fasr"}),ft)),sa=[1,2,3,4,5,6,7,8,9,10],Bi=sa.concat([11,12,13,14,15,16,17,18,19,20]),qi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xe=new Set;Object.keys(Ve[O]).map(Xe.add.bind(Xe));Object.keys(Ve[T]).map(Xe.add.bind(Xe));var Yi=[].concat(An,Qe(Xe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY]).concat(sa.map(function(e){return"".concat(e,"x")})).concat(Bi.map(function(e){return"w-".concat(e)})),He=ce.FontAwesomeConfig||{};function Vi(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Gi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var Xi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xi.forEach(function(e){var t=wn(e,2),n=t[0],r=t[1],a=Gi(Vi(n));a!=null&&(He[r]=a)})}var ca={styleDefault:"solid",familyDefault:"classic",cssPrefix:ra,replacementClass:aa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};He.familyPrefix&&(He.cssPrefix=He.familyPrefix);var Ie=m(m({},ca),He);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var p={};Object.keys(ca).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(n){Ie[e]=n,Be.forEach(function(r){return r(p)})},get:function(){return Ie[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Ie.cssPrefix=t,Be.forEach(function(n){return n(p)})},get:function(){return Ie.cssPrefix}});ce.FontAwesomeConfig=p;var Be=[];function Ki(e){return Be.push(e),function(){Be.splice(Be.indexOf(e),1)}}var ie=nn,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ji(e){if(!(!e||!re)){var t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=P.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return P.head.insertBefore(t,r),e}}var Qi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ke(){for(var e=12,t="";e-- >0;)t+=Qi[Math.random()*62|0];return t}function Me(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function En(e){return e.classList?Me(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function la(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(la(e[n]),'" ')},"").trim()}function $t(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Cn(e){return e.size!==V.size||e.x!==V.x||e.y!==V.y||e.rotate!==V.rotate||e.flipX||e.flipY}function eo(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function to(e){var t=e.transform,n=e.width,r=n===void 0?nn:n,a=e.height,i=a===void 0?nn:a,o=e.startCentered,c=o===void 0?!1:o,l="";return c&&na?l+="translate(".concat(t.x/ie-r/2,"em, ").concat(t.y/ie-i/2,"em) "):c?l+="translate(calc(-50% + ".concat(t.x/ie,"em), calc(-50% + ").concat(t.y/ie,"em)) "):l+="translate(".concat(t.x/ie,"em, ").concat(t.y/ie,"em) "),l+="scale(".concat(t.size/ie*(t.flipX?-1:1),", ").concat(t.size/ie*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var no=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function fa(){var e=ra,t=aa,n=p.cssPrefix,r=p.replacementClass,a=no;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return a}var er=!1;function Bt(){p.autoAddCss&&!er&&(Ji(fa()),er=!0)}var ro={mixout:function(){return{dom:{css:fa,insertCss:Bt}}},hooks:function(){return{beforeDOMElementCreation:function(){Bt()},beforeI2svg:function(){Bt()}}}},te=ce||{};te[ee]||(te[ee]={});te[ee].styles||(te[ee].styles={});te[ee].hooks||(te[ee].hooks={});te[ee].shims||(te[ee].shims=[]);var Y=te[ee],ua=[],ao=function e(){P.removeEventListener("DOMContentLoaded",e),Ot=1,ua.map(function(t){return t()})},Ot=!1;re&&(Ot=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Ot||P.addEventListener("DOMContentLoaded",ao));function io(e){re&&(Ot?setTimeout(e,0):ua.push(e))}function et(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?la(e):"<".concat(t," ").concat(Zi(r),">").concat(i.map(et).join(""),"</").concat(t,">")}function tr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var oo=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},qt=function(t,n,r,a){var i=Object.keys(t),o=i.length,c=a!==void 0?oo(n,a):n,l,f,s;for(r===void 0?(l=1,s=t[i[0]]):(l=0,s=r);l<o;l++)f=i[l],s=c(s,t[f],f,t);return s};function so(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function an(e){var t=so(e);return t.length===1?t[0].toString(16):null}function co(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function nr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function on(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=nr(t);typeof Y.hooks.addPack=="function"&&!a?Y.hooks.addPack(e,nr(t)):Y.styles[e]=m(m({},Y.styles[e]||{}),i),e==="fas"&&on("fa",t)}var ut,dt,_t,xe=Y.styles,lo=Y.shims,fo=(ut={},R(ut,O,Object.values(Ge[O])),R(ut,T,Object.values(Ge[T])),ut),On=null,da={},_a={},ma={},pa={},va={},uo=(dt={},R(dt,O,Object.keys(Ye[O])),R(dt,T,Object.keys(Ye[T])),dt);function _o(e){return~Yi.indexOf(e)}function mo(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!_o(a)?a:null}var ha=function(){var t=function(i){return qt(xe,function(o,c,l){return o[l]=qt(c,i,{}),o},{})};da=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var c=i[2].filter(function(l){return typeof l=="number"});c.forEach(function(l){a[l.toString(16)]=o})}return a}),_a=t(function(a,i,o){if(a[o]=o,i[2]){var c=i[2].filter(function(l){return typeof l=="string"});c.forEach(function(l){a[l]=o})}return a}),va=t(function(a,i,o){var c=i[2];return a[o]=o,c.forEach(function(l){a[l]=o}),a});var n="far"in xe||p.autoFetchSvg,r=qt(lo,function(a,i){var o=i[0],c=i[1],l=i[2];return c==="far"&&!n&&(c="fas"),typeof o=="string"&&(a.names[o]={prefix:c,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:c,iconName:l}),a},{names:{},unicodes:{}});ma=r.names,pa=r.unicodes,On=Ft(p.styleDefault,{family:p.familyDefault})};Ki(function(e){On=Ft(e.styleDefault,{family:p.familyDefault})});ha();function Pn(e,t){return(da[e]||{})[t]}function po(e,t){return(_a[e]||{})[t]}function he(e,t){return(va[e]||{})[t]}function ba(e){return ma[e]||{prefix:null,iconName:null}}function vo(e){var t=pa[e],n=Pn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function le(){return On}var Nn=function(){return{prefix:null,iconName:null,rest:[]}};function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?O:n,a=Ye[r][e],i=Ve[r][e]||Ve[r][a],o=e in Y.styles?e:null;return i||o||null}var rr=(_t={},R(_t,O,Object.keys(Ge[O])),R(_t,T,Object.keys(Ge[T])),_t);function zt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},R(t,O,"".concat(p.cssPrefix,"-").concat(O)),R(t,T,"".concat(p.cssPrefix,"-").concat(T)),t),o=null,c=O;(e.includes(i[O])||e.some(function(f){return rr[O].includes(f)}))&&(c=O),(e.includes(i[T])||e.some(function(f){return rr[T].includes(f)}))&&(c=T);var l=e.reduce(function(f,s){var _=mo(p.cssPrefix,s);if(xe[s]?(s=fo[c].includes(s)?Di[c][s]:s,o=s,f.prefix=s):uo[c].indexOf(s)>-1?(o=s,f.prefix=Ft(s,{family:c})):_?f.iconName=_:s!==p.replacementClass&&s!==i[O]&&s!==i[T]&&f.rest.push(s),!a&&f.prefix&&f.iconName){var u=o==="fa"?ba(f.iconName):{},d=he(f.prefix,f.iconName);u.prefix&&(o=null),f.iconName=u.iconName||d||f.iconName,f.prefix=u.prefix||f.prefix,f.prefix==="far"&&!xe.far&&xe.fas&&!p.autoFetchSvg&&(f.prefix="fas")}return f},Nn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&c===T&&(xe.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=he(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=le()||"fas"),l}var ho=function(){function e(){Oi(this,e),this.definitions={}}return Pi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(c){n.definitions[c]=m(m({},n.definitions[c]||{}),o[c]),on(c,o[c]);var l=Ge[O][c];l&&on(l,o[c]),ha()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],c=o.prefix,l=o.iconName,f=o.icon,s=f[2];n[c]||(n[c]={}),s.length>0&&s.forEach(function(_){typeof _=="string"&&(n[c][_]=f)}),n[c][l]=f}),n}}]),e}(),ar=[],Se={},Ce={},bo=Object.keys(Ce);function go(e,t){var n=t.mixoutsTo;return ar=e,Se={},Object.keys(Ce).forEach(function(r){bo.indexOf(r)===-1&&delete Ce[r]}),ar.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ct(a[o])==="object"&&Object.keys(a[o]).forEach(function(c){n[o]||(n[o]={}),n[o][c]=a[o][c]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Se[o]||(Se[o]=[]),Se[o].push(i[o])})}r.provides&&r.provides(Ce)}),n}function sn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Se[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ye(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Se[e]||[];a.forEach(function(i){i.apply(null,n)})}function ne(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ce[e]?Ce[e].apply(null,t):void 0}function cn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||le();if(t)return t=he(n,t)||t,tr(ga.definitions,n,t)||tr(Y.styles,n,t)}var ga=new ho,yo=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,ye("noAuto")},wo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return re?(ye("beforeI2svg",t),ne("pseudoElements2svg",t),ne("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,io(function(){xo({autoReplaceSvgRoot:n}),ye("watch",t)})}},ko={icon:function(t){if(t===null)return null;if(Ct(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:he(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ft(t[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Wi))){var a=zt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||le(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=le();return{prefix:i,iconName:he(i,t)||t}}}},H={noAuto:yo,config:p,dom:wo,parse:ko,library:ga,findIconDefinition:cn,toHtml:et},xo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?P:n;(Object.keys(Y.styles).length>0||p.autoFetchSvg)&&re&&p.autoReplaceSvg&&H.dom.i2svg({node:r})};function Dt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return et(r)})}}),Object.defineProperty(e,"node",{get:function(){if(re){var r=P.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function So(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Cn(o)&&n.found&&!r.found){var c=n.width,l=n.height,f={x:c/l/2,y:.5};a.style=$t(m(m({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ao(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},a),{},{id:o}),children:r}]}]}function In(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,c=e.symbol,l=e.title,f=e.maskId,s=e.titleId,_=e.extra,u=e.watchable,d=u===void 0?!1:u,h=r.found?r:n,A=h.width,g=h.height,w=a==="fak",k=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(D){return _.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(_.classes).join(" "),E={children:[],attributes:m(m({},_.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(g)})},N=w&&!~_.classes.indexOf("fa-fw")?{width:"".concat(A/g*16*.0625,"em")}:{};d&&(E.attributes[ge]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(s||Ke())},children:[l]}),delete E.attributes.title);var I=m(m({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:c,styles:m(m({},N),_.styles)}),$=r.found&&n.found?ne("generateAbstractMask",I)||{children:[],attributes:{}}:ne("generateAbstractIcon",I)||{children:[],attributes:{}},z=$.children,L=$.attributes;return I.children=z,I.attributes=L,c?Ao(I):So(I)}function ir(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,c=e.watchable,l=c===void 0?!1:c,f=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ge]="");var s=m({},o.styles);Cn(a)&&(s.transform=to({transform:a,startCentered:!0,width:n,height:r}),s["-webkit-transform"]=s.transform);var _=$t(s);_.length>0&&(f.style=_);var u=[];return u.push({tag:"span",attributes:f,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function Eo(e){var t=e.content,n=e.title,r=e.extra,a=m(m(m({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=$t(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yt=Y.styles;function ln(e){var t=e[0],n=e[1],r=e.slice(4),a=wn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(ve.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ve.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ve.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Co={found:!1,width:512,height:512};function Oo(e,t){!ia&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fn(e,t){var n=t;return t==="fa"&&p.styleDefault!==null&&(t=le()),new Promise(function(r,a){if(ne("missingIconAbstract"),n==="fa"){var i=ba(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yt[t]&&Yt[t][e]){var o=Yt[t][e];return r(ln(o))}Oo(e,t),r(m(m({},Co),{},{icon:p.showMissingIcons&&e?ne("missingIconAbstract")||{}:{}}))})}var or=function(){},un=p.measurePerformance&&it&&it.mark&&it.measure?it:{mark:or,measure:or},$e='FA "6.3.0"',Po=function(t){return un.mark("".concat($e," ").concat(t," begins")),function(){return ya(t)}},ya=function(t){un.mark("".concat($e," ").concat(t," ends")),un.measure("".concat($e," ").concat(t),"".concat($e," ").concat(t," begins"),"".concat($e," ").concat(t," ends"))},Tn={begin:Po,end:ya},gt=function(){};function sr(e){var t=e.getAttribute?e.getAttribute(ge):null;return typeof t=="string"}function No(e){var t=e.getAttribute?e.getAttribute(xn):null,n=e.getAttribute?e.getAttribute(Sn):null;return t&&n}function Io(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function To(){if(p.autoReplaceSvg===!0)return yt.replace;var e=yt[p.autoReplaceSvg];return e||yt.replace}function Mo(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function Ro(e){return P.createElement(e)}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Mo:Ro:n;if(typeof e=="string")return P.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(wa(o,{ceFn:r}))}),a}function Lo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(wa(a),n)}),n.getAttribute(ge)===null&&p.keepOriginalSource){var r=P.createComment(Lo(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~En(n).indexOf(p.replacementClass))return yt.replace(t);var a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(c,l){return l===p.replacementClass||l.match(a)?c.toSvg.push(l):c.toNode.push(l),c},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(c){return et(c)}).join(`
`);n.setAttribute(ge,""),n.innerHTML=o}};function cr(e){e()}function ka(e,t){var n=typeof t=="function"?t:gt;if(e.length===0)n();else{var r=cr;p.mutateApproach===Fi&&(r=ce.requestAnimationFrame||cr),r(function(){var a=To(),i=Tn.begin("mutate");e.map(a),i(),n()})}}var Mn=!1;function xa(){Mn=!0}function dn(){Mn=!1}var Pt=null;function lr(e){if(Qn&&p.observeMutations){var t=e.treeCallback,n=t===void 0?gt:t,r=e.nodeCallback,a=r===void 0?gt:r,i=e.pseudoElementsCallback,o=i===void 0?gt:i,c=e.observeMutationsRoot,l=c===void 0?P:c;Pt=new Qn(function(f){if(!Mn){var s=le();Me(f).forEach(function(_){if(_.type==="childList"&&_.addedNodes.length>0&&!sr(_.addedNodes[0])&&(p.searchPseudoElements&&o(_.target),n(_.target)),_.type==="attributes"&&_.target.parentNode&&p.searchPseudoElements&&o(_.target.parentNode),_.type==="attributes"&&sr(_.target)&&~qi.indexOf(_.attributeName))if(_.attributeName==="class"&&No(_.target)){var u=zt(En(_.target)),d=u.prefix,h=u.iconName;_.target.setAttribute(xn,d||s),h&&_.target.setAttribute(Sn,h)}else Io(_.target)&&a(_.target)})}}),re&&Pt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jo(){Pt&&Pt.disconnect()}function $o(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function Fo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zt(En(e));return a.prefix||(a.prefix=le()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=po(a.prefix,e.innerText)||Pn(a.prefix,an(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function zo(e){var t=Me(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||Ke()):(t["aria-hidden"]="true",t.focusable="false")),t}function Do(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fo(e),r=n.iconName,a=n.prefix,i=n.rest,o=zo(e),c=sn("parseNodeAttributes",{},e),l=t.styleParser?$o(e):[];return m({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},c)}var Wo=Y.styles;function Sa(e){var t=p.autoReplaceSvg==="nest"?fr(e,{styleParser:!1}):fr(e);return~t.extra.classes.indexOf(oa)?ne("generateLayersText",e,t):ne("generateSvgReplacementMutation",e,t)}var fe=new Set;An.map(function(e){fe.add("fa-".concat(e))});Object.keys(Ye[O]).map(fe.add.bind(fe));Object.keys(Ye[T]).map(fe.add.bind(fe));fe=Qe(fe);function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!re)return Promise.resolve();var n=P.documentElement.classList,r=function(_){return n.add("".concat(Zn,"-").concat(_))},a=function(_){return n.remove("".concat(Zn,"-").concat(_))},i=p.autoFetchSvg?fe:An.map(function(s){return"fa-".concat(s)}).concat(Object.keys(Wo));i.includes("fa")||i.push("fa");var o=[".".concat(oa,":not([").concat(ge,"])")].concat(i.map(function(s){return".".concat(s,":not([").concat(ge,"])")})).join(", ");if(o.length===0)return Promise.resolve();var c=[];try{c=Me(e.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Tn.begin("onTree"),f=c.reduce(function(s,_){try{var u=Sa(_);u&&s.push(u)}catch(d){ia||d.name==="MissingIcon"&&console.error(d)}return s},[]);return new Promise(function(s,_){Promise.all(f).then(function(u){ka(u,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),s()})}).catch(function(u){l(),_(u)})})}function Uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sa(e).then(function(n){n&&ka([n],t)})}function Ho(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:cn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:cn(a||{})),e(r,m(m({},n),{},{mask:a}))}}var Bo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?V:r,i=n.symbol,o=i===void 0?!1:i,c=n.mask,l=c===void 0?null:c,f=n.maskId,s=f===void 0?null:f,_=n.title,u=_===void 0?null:_,d=n.titleId,h=d===void 0?null:d,A=n.classes,g=A===void 0?[]:A,w=n.attributes,k=w===void 0?{}:w,E=n.styles,N=E===void 0?{}:E;if(t){var I=t.prefix,$=t.iconName,z=t.icon;return Dt(m({type:"icon"},t),function(){return ye("beforeDOMElementCreation",{iconDefinition:t,params:n}),p.autoA11y&&(u?k["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(h||Ke()):(k["aria-hidden"]="true",k.focusable="false")),In({icons:{main:ln(z),mask:l?ln(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:$,transform:m(m({},V),a),symbol:o,title:u,maskId:s,titleId:h,extra:{attributes:k,styles:N,classes:g}})})}},qo={mixout:function(){return{icon:Ho(Bo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ur,n.nodeCallback=Uo,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?P:r,i=n.callback,o=i===void 0?function(){}:i;return ur(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,c=r.prefix,l=r.transform,f=r.symbol,s=r.mask,_=r.maskId,u=r.extra;return new Promise(function(d,h){Promise.all([fn(a,c),s.iconName?fn(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var g=wn(A,2),w=g[0],k=g[1];d([n,In({icons:{main:w,mask:k},prefix:c,iconName:a,transform:l,symbol:f,maskId:_,title:i,titleId:o,extra:u,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,c=n.styles,l=$t(c);l.length>0&&(a.style=l);var f;return Cn(o)&&(f=ne("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Yo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Dt({type:"layer"},function(){ye("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(c){Array.isArray(c)?c.map(function(l){o=o.concat(l.abstract)}):o=o.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(Qe(i)).join(" ")},children:o}]})}}}},Vo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,c=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,s=r.styles,_=s===void 0?{}:s;return Dt({type:"counter",content:n},function(){return ye("beforeDOMElementCreation",{content:n,params:r}),Eo({content:n.toString(),title:i,extra:{attributes:f,styles:_,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(Qe(c))}})})}}}},Go={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?V:a,o=r.title,c=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,s=r.attributes,_=s===void 0?{}:s,u=r.styles,d=u===void 0?{}:u;return Dt({type:"text",content:n},function(){return ye("beforeDOMElementCreation",{content:n,params:r}),ir({content:n,transform:m(m({},V),i),title:c,extra:{attributes:_,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(Qe(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,c=null,l=null;if(na){var f=parseInt(getComputedStyle(n).fontSize,10),s=n.getBoundingClientRect();c=s.width/f,l=s.height/f}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ir({content:n.innerHTML,width:c,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Xo=new RegExp('"',"ug"),dr=[1105920,1112319];function Ko(e){var t=e.replace(Xo,""),n=co(t,0),r=n>=dr[0]&&n<=dr[1],a=t.length===2?t[0]===t[1]:!1;return{value:an(a?t[0]:t),isSecondary:r||a}}function _r(e,t){var n="".concat($i).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Me(e.children),o=i.filter(function(z){return z.getAttribute(rn)===t})[0],c=ce.getComputedStyle(e,t),l=c.getPropertyValue("font-family").match(Ui),f=c.getPropertyValue("font-weight"),s=c.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&s!=="none"&&s!==""){var _=c.getPropertyValue("content"),u=~["Sharp"].indexOf(l[2])?T:O,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ve[u][l[2].toLowerCase()]:Hi[u][f],h=Ko(_),A=h.value,g=h.isSecondary,w=l[0].startsWith("FontAwesome"),k=Pn(d,A),E=k;if(w){var N=vo(A);N.iconName&&N.prefix&&(k=N.iconName,d=N.prefix)}if(k&&!g&&(!o||o.getAttribute(xn)!==d||o.getAttribute(Sn)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var I=Do(),$=I.extra;$.attributes[rn]=t,fn(k,d).then(function(z){var L=In(m(m({},I),{},{icons:{main:z,mask:Nn()},prefix:d,iconName:E,extra:$,watchable:!0})),D=P.createElement("svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=L.map(function(nt){return et(nt)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Jo(e){return Promise.all([_r(e,"::before"),_r(e,"::after")])}function Qo(e){return e.parentNode!==document.head&&!~zi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(rn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function mr(e){if(re)return new Promise(function(t,n){var r=Me(e.querySelectorAll("*")).filter(Qo).map(Jo),a=Tn.begin("searchPseudoElements");xa(),Promise.all(r).then(function(){a(),dn(),t()}).catch(function(){a(),dn(),n()})})}var Zo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?P:r;p.searchPseudoElements&&mr(a)}}},pr=!1,es={mixout:function(){return{dom:{unwatch:function(){xa(),pr=!0}}}},hooks:function(){return{bootstrap:function(){lr(sn("mutationObserverCallbacks",{}))},noAuto:function(){jo()},watch:function(n){var r=n.observeMutationsRoot;pr?dn():lr(sn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],c=i.slice(1).join("-");if(o&&c==="h")return r.flipX=!0,r;if(o&&c==="v")return r.flipY=!0,r;if(c=parseFloat(c),isNaN(c))return r;switch(o){case"grow":r.size=r.size+c;break;case"shrink":r.size=r.size-c;break;case"left":r.x=r.x-c;break;case"right":r.x=r.x+c;break;case"up":r.y=r.y-c;break;case"down":r.y=r.y+c;break;case"rotate":r.rotate=r.rotate+c;break}return r},n)},ts={mixout:function(){return{parse:{transform:function(n){return vr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,c={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),_={transform:"".concat(l," ").concat(f," ").concat(s)},u={transform:"translate(".concat(o/2*-1," -256)")},d={outer:c,inner:_,path:u};return{tag:"g",attributes:m({},d.outer),children:[{tag:"g",attributes:m({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m(m({},r.icon.attributes),d.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ns(e){return e.tag==="g"?e.children:[e]}var rs={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zt(a.split(" ").map(function(o){return o.trim()})):Nn();return i.prefix||(i.prefix=le()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,c=n.maskId,l=n.transform,f=i.width,s=i.icon,_=o.width,u=o.icon,d=eo({transform:l,containerWidth:_,iconWidth:f}),h={tag:"rect",attributes:m(m({},Vt),{},{fill:"white"})},A=s.children?{children:s.children.map(hr)}:{},g={tag:"g",attributes:m({},d.inner),children:[hr(m({tag:s.tag,attributes:m(m({},s.attributes),d.path)},A))]},w={tag:"g",attributes:m({},d.outer),children:[g]},k="mask-".concat(c||Ke()),E="clip-".concat(c||Ke()),N={tag:"mask",attributes:m(m({},Vt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,w]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:ns(u)},N]};return r.push(I,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(k,")")},Vt)}),{children:r,attributes:a}}}},as={provides:function(t){var n=!1;ce.matchMedia&&(n=ce.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:m(m({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),c={tag:"circle",attributes:m(m({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||c.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(c),r.push({tag:"path",attributes:m(m({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:m(m({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},is={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},os=[ro,qo,Yo,Vo,Go,Zo,es,ts,rs,as,is];go(os,{mixoutsTo:H});H.noAuto;H.config;H.library;H.dom;var _n=H.parse;H.findIconDefinition;H.toHtml;var ss=H.icon;H.layer;H.text;H.counter;var y={},cs={get exports(){return y},set exports(e){y=e}},ls="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fs=ls,us=fs;function Aa(){}function Ea(){}Ea.resetWarningCache=Aa;var ds=function(){function e(r,a,i,o,c,l){if(l!==us){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ea,resetWarningCache:Aa};return n.PropTypes=n,n};cs.exports=ds();function Ca(e,t){for(var n in t)e[n]=t[n];return e}function mn(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Gt(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function pn(e){this.props=e}function _s(e,t){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),t?!t(this.props,a)||!o:mn(this.props,a)}function r(a){return this.shouldComponentUpdate=n,Q(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(pn.prototype=new G).isPureReactComponent=!0,pn.prototype.shouldComponentUpdate=function(e,t){return mn(this.props,e)||mn(this.state,t)};var br=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),br&&br(e)};var ms=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ps(e){function t(n){var r=Ca({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ms,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var gr=function(e,t){return e==null?null:J(J(e).map(t))},vs={map:gr,forEach:gr,count:function(e){return e?J(e).length:0},only:function(e){var t=J(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:J},hs=v.__e;v.__e=function(e,t,n,r){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}hs(e,t,n,r)};var yr=v.unmount;function Oa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Ca({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Oa(r,t,n)})),e}function Pa(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Pa(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function wt(){this.__u=0,this.t=null,this.__b=null}function Na(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function bs(e){var t,n,r;function a(i){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return Q(n,i)}return a.displayName="Lazy",a.__f=!0,a}function Fe(){this.u=null,this.o=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),yr&&yr(e)},(wt.prototype=new G).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=Na(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(c):c())};n.__R=o;var c=function(){if(!--r.__u){if(r.state.__a){var f=r.state.__a;r.__v.__k[0]=Pa(f,f.__c.__P,f.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},l=t.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},wt.prototype.componentWillUnmount=function(){this.t=[]},wt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Oa(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&Q(Z,null,e.fallback);return a&&(a.__h=null),[Q(Z,null,t.__a?null:e.children),a]};var wr=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function gs(e){return this.getChildContext=function(){return e.context},e.children}function ys(e){var t=this,n=e.i;t.componentWillUnmount=function(){Oe(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),Oe(Q(gs,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ws(e,t){var n=Q(ys,{__v:e,i:t});return n.containerInfo=t,n}(Fe.prototype=new G).__a=function(e){var t=this,n=Na(t.__v),r=t.o.get(e);return r[0]++,function(a){var i=function(){t.props.revealOrder?(r.push(a),wr(t,e,r)):a()};n?n(i):i()}},Fe.prototype.render=function(e){this.u=null,this.o=new Map;var t=J(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Fe.prototype.componentDidUpdate=Fe.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){wr(e,n,t)})};var Ia=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ks=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ss=/[A-Z0-9]/g,As=typeof document<"u",Es=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Cs(e,t,n){return t.__k==null&&(t.textContent=""),Oe(e,t),typeof n=="function"&&n(),e?e.__c:null}function Os(e,t,n){return Yr(e,t),typeof n=="function"&&n(),e?e.__c:null}G.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(G.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var kr=v.event;function Ps(){}function Ns(){return this.cancelBubble}function Is(){return this.defaultPrevented}v.event=function(e){return kr&&(e=kr(e)),e.persist=Ps,e.isPropagationStopped=Ns,e.isDefaultPrevented=Is,e.nativeEvent=e};var Rn,xr={configurable:!0,get:function(){return this.class}},Sr=v.vnode;v.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){for(var a in r={},n){var i=n[a];if(!(a==="value"&&"defaultValue"in n&&i==null||As&&a==="children"&&t==="noscript")){var o=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&i===!0?i="":o==="ondoubleclick"?a="ondblclick":o!=="onchange"||t!=="input"&&t!=="textarea"||Es(n.type)?o==="onfocus"?a="onfocusin":o==="onblur"?a="onfocusout":xs.test(a)?a=o:t.indexOf("-")===-1&&ks.test(a)?a=a.replace(Ss,"-$&").toLowerCase():i===null&&(i=void 0):o=a="oninput",o==="oninput"&&r[a=o]&&(a="oninputCapture"),r[a]=i}}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=J(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=J(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),e.props=r,n.class!=n.className&&(xr.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",xr))}e.$$typeof=Ia,Sr&&Sr(e)};var Ar=v.__r;v.__r=function(e){Ar&&Ar(e),Rn=e.__c};var Er=v.diffed;v.diffed=function(e){Er&&Er(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Rn=null};var Ts={ReactCurrentDispatcher:{current:{readContext:function(e){return Rn.__n[e.__c].props.value}}}};function Ms(e){return Q.bind(null,e)}function Ta(e){return!!e&&e.$$typeof===Ia}function Rs(e){return Ta(e)?ti.apply(null,arguments):e}function Ls(e){return!!e.__k&&(Oe(null,e),!0)}function js(e){return e&&(e.base||e.nodeType===1&&e)||null}var $s=function(e,t){return e(t)},Fs=function(e,t){return e(t)},zs=Z;function Ma(e){e()}function Ds(e){return e}function Ws(){return[!1,Ma]}var Us=Lt;function Hs(e,t){var n=t(),r=U({h:{__:n,v:t}}),a=r[0].h,i=r[1];return Lt(function(){a.__=n,a.v=t,Gt(a.__,t())||i({h:a})},[e,n,t]),oe(function(){return Gt(a.__,a.v())||i({h:a}),e(function(){Gt(a.__,a.v())||i({h:a})})},[e]),n}var Ra={useState:U,useId:bi,useReducer:Kr,useEffect:oe,useLayoutEffect:Lt,useInsertionEffect:Us,useTransition:Ws,useDeferredValue:Ds,useSyncExternalStore:Hs,startTransition:Ma,useRef:_i,useImperativeHandle:mi,useMemo:jt,useCallback:pi,useContext:vi,useDebugValue:hi,version:"17.0.2",Children:vs,render:Cs,hydrate:Os,unmountComponentAtNode:Ls,createPortal:ws,createElement:Q,createContext:ni,createFactory:Ms,cloneElement:Rs,createRef:Ja,Fragment:Z,isValidElement:Ta,findDOMNode:js,Component:G,PureComponent:pn,memo:_s,forwardRef:ps,flushSync:Fs,unstable_batchedUpdates:$s,StrictMode:zs,Suspense:wt,SuspenseList:Fe,lazy:bs,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ts};function Cr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cr(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nt(e){return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nt(e)}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bs(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function qs(e,t){if(e==null)return{};var n=Bs(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vn(e){return Ys(e)||Vs(e)||Gs(e)||Xs()}function Ys(e){if(Array.isArray(e))return hn(e)}function Vs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gs(e,t){if(e){if(typeof e=="string")return hn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hn(e,t)}}function hn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,c=e.flash,l=e.spin,f=e.spinPulse,s=e.spinReverse,_=e.pulse,u=e.fixedWidth,d=e.inverse,h=e.border,A=e.listItem,g=e.flip,w=e.size,k=e.rotation,E=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":c,"fa-spin":l,"fa-spin-reverse":s,"fa-spin-pulse":f,"fa-pulse":_,"fa-fw":u,"fa-inverse":d,"fa-border":h,"fa-li":A,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Ae(t,"fa-".concat(w),typeof w<"u"&&w!==null),Ae(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),Ae(t,"fa-pull-".concat(E),typeof E<"u"&&E!==null),Ae(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(I){return N[I]?I:null}).filter(function(I){return I})}function Js(e){return e=e-0,e===e}function La(e){return Js(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Qs=["style"];function Zs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ec(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=La(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Zs(a)]=i:t[a]=i,t},{})}function ja(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ja(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var s=t.attributes[f];switch(f){case"class":l.attrs.className=s,delete t.attributes.class;break;case"style":l.attrs.style=ec(s);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=s:l.attrs[La(f)]=s}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,c=qs(n,Qs);return a.attrs.style=se(se({},a.attrs.style),o),e.apply(void 0,[t.tag,se(se({},a.attrs),c)].concat(vn(r)))}var $a=!1;try{$a=!0}catch{}function tc(){if(!$a&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Or(e){if(e&&Nt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_n.icon)return _n.icon(e);if(e===null)return null;if(e&&Nt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Xt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ae({},e,t):{}}var tt=Ra.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,c=e.titleId,l=e.maskId,f=Or(n),s=Xt("classes",[].concat(vn(Ks(e)),vn(i.split(" ")))),_=Xt("transform",typeof e.transform=="string"?_n.transform(e.transform):e.transform),u=Xt("mask",Or(r)),d=ss(f,se(se(se(se({},s),_),u),{},{symbol:a,title:o,titleId:c,maskId:l}));if(!d)return tc("Could not find icon",f),null;var h=d.abstract,A={ref:t};return Object.keys(e).forEach(function(g){tt.defaultProps.hasOwnProperty(g)||(A[g]=e[g])}),nc(h[0],A)});tt.displayName="FontAwesomeIcon";tt.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};tt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var nc=ja.bind(null,Ra.createElement);const rc="_root_ifazn_1",ac="_square_ifazn_147",ic="_squareFilled_ifazn_252",oc="_squareMoveable_ifazn_256",sc="_blink_ifazn_1",cc="_squareIndex_ifazn_279",lc="_piece_ifazn_288",fc="_pieceBlack_ifazn_289",uc="_squareHighlighted_ifazn_300",dc="_squareSelected_ifazn_310",_c="_pieceKingIcon_ifazn_333",B={root:rc,square:ac,squareFilled:ic,squareMoveable:oc,blink:sc,squareIndex:cc,piece:lc,pieceBlack:fc,squareHighlighted:uc,squareSelected:dc,pieceKingIcon:_c};var mc=0;function S(e,t,n,r,a,i){var o,c,l={};for(c in t)c=="ref"?o=t[c]:l[c]=t[c];var f={type:e,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--mc,__source:a,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(c in o)l[c]===void 0&&(l[c]=o[c]);return v.vnode&&v.vnode(f),f}const Pr=!1;function pc({piece:e,index:t,highlighted:n,selected:r,selectedMoves:a,onMove:i,onSelect:o,onClearSelect:c}){if(e==null){const s=a.find(d=>d.end_square===t),_=[B.square,s?B.squareMoveable:"",n?B.squareHighlighted:""].join(" ");return S("div",{className:_,onClick:()=>{s?i(s):c()},children:Pr})}const l=[B.square,B.squareFilled,r?B.squareSelected:"",n?B.squareHighlighted:""].join(" "),f=[B.piece,e.color===W.Black?B.pieceBlack:"",e.king?B.pieceKing:""].join(" ");return S("div",{className:l,onClick:()=>o(t),children:[S("div",{className:f,children:e.king&&S(tt,{className:B.pieceKingIcon,icon:Ci})}),Pr]})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fa=Symbol("Comlink.proxy"),vc=Symbol("Comlink.endpoint"),hc=Symbol("Comlink.releaseProxy"),Kt=Symbol("Comlink.finalizer"),kt=Symbol("Comlink.thrown"),za=e=>typeof e=="object"&&e!==null||typeof e=="function",bc={canHandle:e=>za(e)&&e[Fa],serialize(e){const{port1:t,port2:n}=new MessageChannel;return Wa(e,t),[n,[n]]},deserialize(e){return e.start(),Ha(e)}},gc={canHandle:e=>za(e)&&kt in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Da=new Map([["proxy",bc],["throw",gc]]);function yc(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function Wa(e,t=globalThis,n=["*"]){t.addEventListener("message",function r(a){if(!a||!a.data)return;if(!yc(n,a.origin)){console.warn(`Invalid origin '${a.origin}' for comlink proxy`);return}const{id:i,type:o,path:c}=Object.assign({path:[]},a.data),l=(a.data.argumentList||[]).map(me);let f;try{const s=c.slice(0,-1).reduce((u,d)=>u[d],e),_=c.reduce((u,d)=>u[d],e);switch(o){case"GET":f=_;break;case"SET":s[c.slice(-1)[0]]=me(a.data.value),f=!0;break;case"APPLY":f=_.apply(s,l);break;case"CONSTRUCT":{const u=new _(...l);f=Ec(u)}break;case"ENDPOINT":{const{port1:u,port2:d}=new MessageChannel;Wa(e,d),f=Ac(u,[u])}break;case"RELEASE":f=void 0;break;default:return}}catch(s){f={value:s,[kt]:0}}Promise.resolve(f).catch(s=>({value:s,[kt]:0})).then(s=>{const[_,u]=Mt(s);t.postMessage(Object.assign(Object.assign({},_),{id:i}),u),o==="RELEASE"&&(t.removeEventListener("message",r),Ua(t),Kt in e&&typeof e[Kt]=="function"&&e[Kt]())}).catch(s=>{const[_,u]=Mt({value:new TypeError("Unserializable return value"),[kt]:0});t.postMessage(Object.assign(Object.assign({},_),{id:i}),u)})}),t.start&&t.start()}function wc(e){return e.constructor.name==="MessagePort"}function Ua(e){wc(e)&&e.close()}function Ha(e,t){return bn(e,[],t)}function mt(e){if(e)throw new Error("Proxy has been released and is not useable")}function Ba(e){return ke(e,{type:"RELEASE"}).then(()=>{Ua(e)})}const It=new WeakMap,Tt="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(It.get(e)||0)-1;It.set(e,t),t===0&&Ba(e)});function kc(e,t){const n=(It.get(t)||0)+1;It.set(t,n),Tt&&Tt.register(e,t,e)}function xc(e){Tt&&Tt.unregister(e)}function bn(e,t=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(i,o){if(mt(r),o===hc)return()=>{xc(a),Ba(e),r=!0};if(o==="then"){if(t.length===0)return{then:()=>a};const c=ke(e,{type:"GET",path:t.map(l=>l.toString())}).then(me);return c.then.bind(c)}return bn(e,[...t,o])},set(i,o,c){mt(r);const[l,f]=Mt(c);return ke(e,{type:"SET",path:[...t,o].map(s=>s.toString()),value:l},f).then(me)},apply(i,o,c){mt(r);const l=t[t.length-1];if(l===vc)return ke(e,{type:"ENDPOINT"}).then(me);if(l==="bind")return bn(e,t.slice(0,-1));const[f,s]=Nr(c);return ke(e,{type:"APPLY",path:t.map(_=>_.toString()),argumentList:f},s).then(me)},construct(i,o){mt(r);const[c,l]=Nr(o);return ke(e,{type:"CONSTRUCT",path:t.map(f=>f.toString()),argumentList:c},l).then(me)}});return kc(a,e),a}function Sc(e){return Array.prototype.concat.apply([],e)}function Nr(e){const t=e.map(Mt);return[t.map(n=>n[0]),Sc(t.map(n=>n[1]))]}const qa=new WeakMap;function Ac(e,t){return qa.set(e,t),e}function Ec(e){return Object.assign(e,{[Fa]:!0})}function Mt(e){for(const[t,n]of Da)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},qa.get(e)||[]]}function me(e){switch(e.type){case"HANDLER":return Da.get(e.name).deserialize(e.value);case"RAW":return e.value}}function ke(e,t,n){return new Promise(r=>{const a=Cc();e.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==a||(e.removeEventListener("message",i),r(o.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}function Cc(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const Ya=Ha(new Worker(new URL(""+new URL("wasm-checkers-97b10517.js",import.meta.url).href,self.location),{type:"module"}));function Oc({gameSettings:e,onGameEnd:t}){const{playerColor:n,gameStarted:r}=e,a=n===W.White?W.Black:W.White,i=jt(()=>new Ee,[]),[o,c]=U(0),[l,f]=U(0),[s,_]=U([]),[u,d]=U([]),[h,A]=U([]),[g,w]=U(-1),[k,E]=U([]);oe(()=>{I()},[]),oe(()=>{if(!r){I();return}if(n===W.White){$();return}nt()},[e.gameStarted]),oe(()=>{d(N())},[e.playerColor]),oe(()=>{c(0)},[l]),oe(()=>{A(s.filter(M=>M.start_square===g))},[s,g]);const N=()=>{const M=Array.from(i.get_pieces());return n===W.White?M.reverse():M},I=()=>{i.init_default_state(),d(N())},$=()=>{_(li.get_valid_moves_js(i,n,e.checkersSettings))},z=()=>{if(!i.is_game_over(e.checkersSettings))return!1;const M=o===0,ue=o>0?W.White:W.Black;return t({tie:M,winner:ue,totalMoves:l}),!0},L=()=>{A([]),w(-1)},D=M=>{w(M)},nt=async()=>{const M=[],ue=[];_([]),A([]);do{const de=M.at(-1),rt=await Ya.getBestMove(i.to_json(),a,de?de.to_json():null,e);if(!rt)return;const at=Pe.from_json(rt);i.handle_move(at),M.push(at),ue.push(N())}while(M.at(-1).get_forced_moves_js().length>0);await Promise.all(ue.map((de,rt)=>new Promise(at=>setTimeout(()=>{d(de),f(l+1),at()},400*(rt+1)))));const ae=[];M.forEach(de=>{ae.push(de.start_square),ae.push(de.end_square)}),E(ae),!z()&&$()},Ga=async M=>{if(i.handle_move(M),d(N()),f(l+1),w(-1),!z()){if(M.get_forced_moves_js().length===0){nt();return}$(),w(M.end_square)}},Xa=u.map((M,ue)=>{const ae=n===W.White?63-ue:ue;return S(Z,{children:S(pc,{piece:M,index:ae,selectedMoves:h,highlighted:k.includes(ae),selected:g===ae,onMove:Ga,onSelect:D,onClearSelect:L},ae)})});return S("div",{className:Ei.board,children:Xa})}const Pc="_overlay_1k2w2_1",Nc="_overlayCard_1k2w2_12",Ir={overlay:Pc,overlayCard:Nc};function Va({children:e}){return S("div",{className:Ir.overlay,children:S("div",{className:Ir.overlayCard,children:e})})}const Ic="_root_147go_1",Tc="_colorSelectButton_147go_147",Mc="_colorSelectButtonBlack_147go_162",Rc="_colorSelectButtonSelected_147go_167",Lc="_heading_147go_171",jc="_description_147go_179",$c="_difficultySlider_147go_190",Fc="_difficultySliderNumbers_147go_194",zc="_startButton_147go_204",F={root:Ic,colorSelectButton:Tc,colorSelectButtonBlack:Mc,colorSelectButtonSelected:Rc,heading:Lc,description:jc,difficultySlider:$c,difficultySliderNumbers:Fc,startButton:zc};function Dc({onGameStart:e,onPlayerColorSelect:t}){const[n,r]=U(W.White),[a,i]=U(5),o=()=>{e({playerColor:n,computerDepth:a,gameStarted:!0,checkersSettings:ci.from_preset(si.RussianVariation)|oi.ForcedCapture})},c=l=>{r(l),t(l)};return S(Va,{children:[S("h3",{className:F.heading,children:"Select your side"}),S("h3",{className:F.description,children:"White always goes first - in case you forgot 😊"}),S("button",{className:[F.colorSelectButton,n===W.White&&F.colorSelectButtonSelected].join(" "),onClick:()=>c(W.White)}),S("button",{className:[F.colorSelectButton,F.colorSelectButtonBlack,n===W.Black&&F.colorSelectButtonSelected].join(" "),onClick:()=>c(W.Black)}),S("h3",{className:F.heading}),S("h3",{className:F.heading,children:"Select the difficulty"}),S("h3",{className:F.description,children:"*The difficulty determines the AI's alpha-beta algorithm's search depth."}),S("input",{className:F.difficultySlider,type:"range",min:1,max:9,value:a,onChange:({target:l})=>{i(parseInt((l==null?void 0:l.value)||5))}}),S("div",{className:F.difficultySliderNumbers,children:Array.from({length:9}).map((l,f)=>S("span",{children:f+1}))}),S("h3",{className:F.heading}),S("h3",{className:F.heading,children:"Note"}),S("h3",{className:F.description,children:"This is a work-in-progress (fuck you)"}),S("button",{className:F.startButton,onClick:o,children:"Start"})]})}const Tr={playerColor:W.White,computerDepth:5,gameStarted:!1,checkersSettings:0};function Wc(){const[e,t]=U(!1),[n,r]=U(Tr),[a,i]=U(null);oe(()=>{Gr().then(async()=>{await Ya.initWasm(),t(!0)})},[]);const o=()=>{i(null),r(Tr)},c=s=>{r(Object.assign({},n,{playerColor:s}))},l=s=>{r(s)},f=s=>{i(s)};return e?S("main",{className:Yn.main,children:[S("div",{class:Yn.board,children:S(Oc,{gameSettings:n,onGameEnd:f})}),!n.gameStarted&&S(Dc,{onGameStart:l,onPlayerColorSelect:c}),a&&S(Va,{children:[S("h1",{children:a.winner===n.playerColor?"You won!":"You lost..."}),S("button",{onClick:o,children:"New game"})]})]}):null}const Uc=document.getElementById("root");Oe(S(Wc,{}),Uc);
