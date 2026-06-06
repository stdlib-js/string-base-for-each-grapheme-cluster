"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=c(function(x,t){
var s=require('@stdlib/string-next-grapheme-cluster-break/dist');function v(e,r,l){var n,a,i;for(n=e.length,a=0;a<n;)i=s(e,a),i===-1&&(i=n),r.call(l,e.substring(a,i),a,e),a=i;return e}t.exports=v
});var h=u();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
