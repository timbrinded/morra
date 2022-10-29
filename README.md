# Morra!

## Intro

## Installing reach
```
curl https://docs.reach.sh/reach -o reach ; chmod +x reach
```

### To run the local webserver
```
./reach react
```

### To run the automated tests:
You will need to backup `index.js`  and then rename `index.mjs.backup` to `index.mjs`. 
```
mv index.js index.js.backup
mv index.mjs.backup index.mjs
./reach run
```

> N.B. Don't forget to rename it back to run webserver afterwards!

### To run compile checks only
```
./reach compile
```

