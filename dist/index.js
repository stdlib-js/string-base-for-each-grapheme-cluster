"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var l=c(function(x,u){
var s=require('@stdlib/string-next-grapheme-cluster-break/dist');function v(e,r,n){var t,a,i;for(t=e.length,a=0;a<t;)i=s(e,a),i===-1&&(i=t),r.call(n,e.substring(a,i),a,e),a=i;return e}u.exports=v
});var h=l();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
