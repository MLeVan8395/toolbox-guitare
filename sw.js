// Boîte à outils guitare : fonctionnement hors ligne.
// Page, contenu et manifeste : on demande d'abord la version en ligne (les modifications faites sur GitHub
// arrivent tout de suite), et on se rabat sur la copie enregistrée sans connexion.
// Images, sons de guitare, icônes et polices : copie enregistrée d'abord (batterie, basse et orgue sont fabriqués par l'appli).
// Si tu ajoutes une image ou un son, ajoute-le à FICHIERS et change VERSION.
const VERSION='boite-guitare-7';
const FICHIERS=["./","index.html","contenu/formes.js","manifest.webmanifest","images/mains.jpg","icones/icone-192.png","icones/icone-512.png","sons/guitare/E2.mp3","sons/guitare/Fs2.mp3","sons/guitare/A2.mp3","sons/guitare/C3.mp3","sons/guitare/Ds3.mp3","sons/guitare/Fs3.mp3","sons/guitare/A3.mp3","sons/guitare/C4.mp3","sons/guitare/Ds4.mp3","sons/guitare/Fs4.mp3","sons/guitare/A4.mp3","sons/guitare/C5.mp3","sons/guitare/Ds5.mp3","sons/guitare/Fs5.mp3","sons/guitare/A5.mp3","sons/guitare/C6.mp3"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FICHIERS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
const enLigneDabord=req=>fetch(req,{cache:'no-store'}).then(r=>{ if(r.ok){ const c=r.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return r; }).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('./')));
const copieDabord=req=>caches.match(req).then(r=>r||fetch(req).then(n=>{ if(n.ok||n.type==='opaque'){ const c=n.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return n; }));
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin){
    if(req.mode==='navigate'||/\.(html|js|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/')) e.respondWith(enLigneDabord(req));
    else e.respondWith(copieDabord(req));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) e.respondWith(copieDabord(req));
});
