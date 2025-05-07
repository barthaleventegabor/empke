# Fejlesztői dokumentáció

## A fejlesztéshez használt eszközök

Az alkalmazás egy Node.js projektként
fejlesztett webes felület.

Fejlesztői szervernek A BrowserSync-t használtuk,
a VSCode kódszerkesztő mellett.

## Könyvtárszerkezet

A web könyvtáron belü az src tartalmazza
a forráskódot, itt futtatható. Az alkalmazáshoz egyetlen HTML
és egy Javascript  fájl tartozik. A style.css jelenleg
nincs használatban.

## Stílus

A stílus meghatározásához a Bootstrap 5.3.3 keretrendszert
használtuk. 

Párbeszédablakként a Bootstrap beépített modális ablakát 
használjuk. Ugyanazt az ablakot használjuk hozzáadás és
szerkesztés funkcióhoz is.

## Javascript

A weblap egyes részeit id segítségével kötjük az app.js
fájlban egy változóhoz.

Az url változó tartalmazza a backend elérési útját.
Az addMode változó egy logikai változó. Hozzáadás esetén
értéke true. Szerkesztés esetén false.

Két eseménykezelőt használtunk. Az egyik a hozzáadás 
gombra indul el, a másik a modális ablak mentés
gombjára kattintva.

### A getEmployee függvény
Lekéri a dolgozókat a Backend_ről és elindítja 
a renderelést

### A renderTbody függvény

a renderTbody függvény jeleníti meg a dolgozókat a webes
felületen. A megjelenítéshez table elemet használunk.

A renderTBody paraméterként fogadja a megjelenítendő 
listát: 
```javascript
renderTbody(emplist)
```

### A clearFields függvény

A clearFields függvény törli a modális ablak bevitelimezőt.

### Az addEmployee függvény

Az addEmployee függvény a Backend számára elküldi az új
dolgozó adatait POST metódussal. A dolgozó adatait 
paraméterkémt fogadja.

```javascript
addEmployee(emp)
```

### A deleteEmployee függvény

A deleteEmployee függvény DELETE metódussal elküldi a törlendő
dolgozó azonosítóját.

```javascript
deleteEmployee(id)
```

### Az editEmployee függvény

Az editEmployee függvény beállítja a modális ablak tartalmát
szerkesztéshez.

### Az updateEmployee függvény

Az updateEmployee függvény elküldi a backend szervermek a 
módosítást, PUT metódussal. A módosítandó dolgozó 
azonosítóját az URL-ben küldjük, pl.:

```javascript
/api/employees/45
```

Az updateEmployee függvény paraméterként várja a dolgozó 
id-ját



