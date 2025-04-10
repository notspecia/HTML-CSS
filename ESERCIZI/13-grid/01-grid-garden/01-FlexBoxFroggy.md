## Author Details

**Name:** Gabriele Speciale  
**Date:** 2024-08-10 
**Contact:** gabriele.speciale@edu.itspiemonte.it

---

## Description

Complete all levels of the following flex games for learning CSS gird:

**GAME SITE** --> [Grid garden](https://cssgridgarden.com/#it)

---

## Solutions

### Level 01
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column-start: 3;
}
```

### Level 02
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
grid-column-start: 5;
}
```

### Level 03
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

### Level 04
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 5;
grid-column-end: 2;
}
```

### Level 05
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
grid-column-end: -2;
}
```

### Level 06
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
grid-column-start: -3;
}
```


### Level 07
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 2;
  grid-column-end:span 2;
}
```

### Level 08
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
  grid-column-end:span 5;
}
```

### Level 09
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start:3
  grid-column-end: 6;
}
```

### Level 10
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column:4/6;
}
```

### Level 11
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column:2/5;
}
```

### Level 12
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-row-start:3;
}
```

### Level 13
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-row:3/6;
}
```


### Level 14
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
  grid-column:2;
  grid-row:5
}
```

### Level 15
```css
garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column:2/span4;
  grid-row:1/6;
}
```

### Level 16
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area:1/2/4/6;
}
```

### Level 17
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water-1 {
  grid-area: 1 / 4 / 6 / 5;
}

#water-2 {
  grid-area:2/3/5/6;
}
```

### Level 18
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
  order: 0;
}

#poison {
  order:4;
}
```

### Level 19
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
  order: 0;
}

.poison {
  order:-1;
}
```

### Level 20
```css
#garden {
  display: grid;
  grid-template-columns:50%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

### Level 21
```css
#garden {
  display: grid;
  grid-template-columns:repeat(8,12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

### Level 22
```css
#garden {
  display: grid;
  grid-template-columns:100px 3em 40%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

### Level 23
```css
#garden {
  display: grid;
  grid-template-columns:1fr 5fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

### Level 24
```css
#garden {
  display: grid;
  grid-template-columns:50px 1fr 1fr 1fr 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}

#poison {
  grid-area: 1 / 5 / 6 / 6;
}
```

### Level 25
```css
#garden {
  display: grid;
  grid-template-columns:75px 3fr 2fr;
  grid-template-rows: 100%;
}
```

### Level 26
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows:50px 0 0 0 1fr;
}

#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}
```

### Level 27
```css
#garden {
  display: grid;
  grid-template:60% 200px / 200px
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

### Level 28
```css
#garden {
  display: grid;
  grid:1fr 0% 50px/1fr 80%;
}
```