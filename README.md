# digIT design
Optional design library for building coherently looking digIT web services.

## Introduction
The idea with this repository is to provide an extensible set of digIT branded base components, with some example layouts and templates. The goal is to create a simple unified look to make development of new services easier and make digIT services feel more coherent.

## Install
Requires npm, bower and gulp.

```
npm install
bower install
```

## Run local documentation development server
```
gulp 
```

## Build documentation to `build`
```
gulp build
```

## Build minified release file to `dist`
The output file `digit.min.css` can be used as a base for new digIT web services.
```
gulp release
```