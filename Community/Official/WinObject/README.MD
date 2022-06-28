# Definion of WinObject

file name: `Main.wob`

this language contains many commands.

## Import

You can import these things:

```wob

import [ Maths ] from OS;   §§ Math, you can do log() exp 10^ x^y and so on.
import [ Studio ] from OS;  §§ Req wifi
import [ console ] from OS; §§ print console
import [ 3D ] from OS;      §§ 3d object
```

## Basic

### Create a window and object

```wob
import [ console ] from OS;

var Test = Window.createNewWindow {
  title: "a window";
  height: 1920;
  width: 3120;
  background-color: White;
}
var obj = Window.object("square", {0,0}, {-100,0}, {-100,-100}, {0,-100});
Window.addObject(Test, obj);
```
