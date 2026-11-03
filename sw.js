// Boîte à outils guitare : fonctionnement hors ligne.
// Page, contenu et manifeste : on demande d'abord la version en ligne (les modifications faites sur GitHub
// arrivent tout de suite), et on se rabat sur la copie enregistrée sans connexion.
// Images, sons (guitare, batterie, contrebasse, basse), icônes et polices : copie enregistrée d'abord (pad et orgue sont fabriqués par l'appli).
// Si tu ajoutes une image ou un son, ajoute-le à FICHIERS et change VERSION.
const VERSION='boite-guitare-31';
const FICHIERS=["./", "index.html", "contenu/formes.js", "manifest.webmanifest", "images/mains.jpg", "icones/icone-192.png", "icones/icone-512.png", "sons/guitare/A2.mp3", "sons/guitare/A3.mp3", "sons/guitare/A4.mp3", "sons/guitare/A5.mp3", "sons/guitare/C3.mp3", "sons/guitare/C4.mp3", "sons/guitare/C5.mp3", "sons/guitare/C6.mp3", "sons/guitare/Ds3.mp3", "sons/guitare/Ds4.mp3", "sons/guitare/Ds5.mp3", "sons/guitare/E2.mp3", "sons/guitare/Fs2.mp3", "sons/guitare/Fs3.mp3", "sons/guitare/Fs4.mp3", "sons/guitare/Fs5.mp3", "sons/batterie/caisse-ghost.mp3", "sons/batterie/caisse.mp3", "sons/batterie/cross-stick.mp3", "sons/batterie/hh-doux.mp3", "sons/batterie/hh-ferme.mp3", "sons/batterie/hh-ouvert.mp3", "sons/batterie/hh-pied.mp3", "sons/batterie/kick.mp3", "sons/batterie/ride-cloche.mp3", "sons/batterie/ride.mp3", "sons/contrebasse/28.mp3", "sons/contrebasse/30.mp3", "sons/contrebasse/31.mp3", "sons/contrebasse/34.mp3", "sons/contrebasse/36.mp3", "sons/contrebasse/38.mp3", "sons/contrebasse/40.mp3", "sons/contrebasse/42.mp3", "sons/contrebasse/44.mp3", "sons/contrebasse/45.mp3", "sons/contrebasse/49.mp3", "sons/contrebasse/52.mp3", "sons/contrebasse/56.mp3", "sons/basse/28.mp3", "sons/basse/31.mp3", "sons/basse/34.mp3", "sons/basse/37.mp3", "sons/basse/40.mp3", "sons/basse/43.mp3", "sons/basse/46.mp3", "sons/basse/49.mp3", "sons/basse/52.mp3","sons/guitare-saturee/40.mp3","sons/guitare-saturee/43.mp3","sons/guitare-saturee/46.mp3","sons/guitare-saturee/49.mp3","sons/guitare-saturee/52.mp3","sons/guitare-saturee/55.mp3","sons/guitare-saturee/58.mp3","sons/guitare-saturee/61.mp3","sons/guitare-saturee/64.mp3","sons/guitare-saturee/67.mp3","sons/guitare-saturee/70.mp3","sons/guitare-saturee/73.mp3","sons/guitare-saturee/76.mp3"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FICHIERS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
// on ajoute ?v=… à l'adresse pour passer outre la mémoire de GitHub Pages (jusqu'à 10 minutes de retard sinon)
const frais=req=>{const u=new URL(req.url);u.searchParams.set('v',Date.now());return fetch(u.toString(),{cache:'no-store'});};
const enLigneDabord=req=>frais(req).then(r=>{ if(r.ok){ const c=r.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return r; }).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('./')));
const copieDabord=req=>caches.match(req).then(r=>r||fetch(req).then(n=>{ if(n.ok||n.type==='opaque'){ const c=n.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return n; }));
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin){
    if(req.mode==='navigate'||/\.(html|js|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/')) e.respondWith(enLigneDabord(req));
    else e.respondWith(copieDabord(req));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) e.respondWith(copieDabord(req));
});
