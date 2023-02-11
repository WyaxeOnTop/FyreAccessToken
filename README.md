# FyreAccessToken
## Ez segít neked megtalálni az accesstokent egy FyreMC accountnak, de így is ~3 milliárd accesstokent kellene átnéznie szóval sok szerencsét! :)

### Amik kellenek:
- Node.js
- Kódszerkeztő (pl: Visual Studio Code)

### Nyiss meg egy cmd-t abban a mappában ahol van a fájl és ezeket írd be mielőtt futatnád (ezt csak egyszer kell megtenned):
 - npm i crypto
 - npm i node-fetch
 - npm i fs

### Használat:
  - Nyisd meg VSCben a fájlt és ahol van a `let azonosito = "ide az uuid";` oda írd be az uuid-t
  - Ahol van ez a fájl, oda csinálj egy `wyaxe` nevezetű szöveges fájlt, mivel oda fogja lejegyzetelni azt amit már tesztelt
  - Mentsd el és futtasd le a start.bat-ot 
  - Ha leáll akkor az azért van mert: Elment a neted vagy leállt a fyreauth. Olyankor csak nyisd meg újra és ugyanúgy működni fog
