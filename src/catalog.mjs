export function validateProducts(products){
 if(!Array.isArray(products))throw new Error('Products must be an array');
 const ids=new Set();for(const p of products){if(!p||typeof p.id!=='string'||!/^[a-z0-9-]+$/.test(p.id)||ids.has(p.id)||typeof p.name!=='string'||!p.name||typeof p.category!=='string'||!p.category||typeof p.summary!=='string'||!Number.isInteger(p.price)||p.price<0||!Number.isFinite(p.weight)||p.weight<0||typeof p.power!=='string'||typeof p.availability!=='string'||!Array.isArray(p.features)||!p.features.every(f=>typeof f==='string'&&f.length))throw new Error('Invalid product data');ids.add(p.id);}return true;
}
export function filterProducts(products,{query='',category='',sort='name',savedOnly=false,saved=[]}={}){
 if(!['name','price-asc','price-desc','weight'].includes(sort))throw new Error('Invalid sort order');
 const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
 return products.filter(p=>(!category||p.category===category)&&(!savedOnly||saved.includes(p.id))&&words.every(w=>[p.name,p.category,p.summary,p.power,p.availability,...p.features].join(' ').toLowerCase().includes(w))).sort((a,b)=>sort==='price-asc'?a.price-b.price||a.name.localeCompare(b.name):sort==='price-desc'?b.price-a.price||a.name.localeCompare(b.name):sort==='weight'?a.weight-b.weight||a.name.localeCompare(b.name):a.name.localeCompare(b.name));
}
export function toggle(ids,id,allowed,max=Infinity){if(!allowed.includes(id))throw new Error('Unknown product');const unique=[...new Set(ids.filter(x=>allowed.includes(x)))];if(unique.includes(id))return unique.filter(x=>x!==id);if(unique.length>=max)throw new Error('Compare up to three products. Remove one to add another.');return [...unique,id];}
export function restoreState(raw,allowed){try{if(!raw)return{saved:[],compare:[],recovered:false};const value=JSON.parse(raw);if(value.version!==1||!Array.isArray(value.saved)||!Array.isArray(value.compare))throw new Error();const clean=ids=>[...new Set(ids.filter(x=>typeof x==='string'&&allowed.includes(x)))];return{saved:clean(value.saved),compare:clean(value.compare).slice(0,3),recovered:false};}catch{return{saved:[],compare:[],recovered:true};}}
export function serializeState(state){return JSON.stringify({version:1,saved:state.saved,compare:state.compare});}
export function formatPrice(cents){if(!Number.isInteger(cents)||cents<0)throw new Error('Price must be nonnegative integer cents');return '$'+(cents/100).toFixed(2);}
