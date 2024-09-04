## Author Details

* Name: Gabriele Speciale
* Date: 2024-08-10
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Complete all waves of the following flex games for learning CSS flexbox <br><br>
**GAME SITE** --> [Flexbox Defense](http://www.flexboxdefense.com/)

---

## Solutions

### Level 01
```css
.tower-group-1 {
    display: flex;
    justify-content: center;
}
```


### Level 02
```css
.tower-group-1 {
    display: flex;
    justify-content: flex-end;
}

.tower-group-2 {
    display: flex;
    justify-content: center;
}

.tower-group-3 {
    display: flex;
    justify-content: flex-end;
}
```


### Level 03
```css
.tower-group-1 {
    display: flex;
    justify-content: center;
}

.tower-group-2 {
    display: flex;
    justify-content: space-between;
}
```


### Level 04
```css
.tower-group-1 {
    display: flex;
    align-items: flex-end;
}

.tower-group-2 {
    display: flex;
    align-items: flex-end;
}
```


### Level 05
```css
.tower-group-1 {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}

.tower-group-2 {
    display: flex;
    justify-content: center;
}

.tower-group-3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
```


### Level 06
```css
.tower-group-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```


### Level 07
```css
.tower-group-1 {
    display: flex;
    flex-direction: column;
}

.tower-group-2 {
    display: flex;
    flex-direction: column;
}
```


### Level 08
```css
.tower-group-1 {
    display: flex;
    flex-direction: column;
}

.tower-group-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```


### Level 09
```css
.tower-group-1 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
}

.tower-group-2 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
}
```


### Level 10
```css
.tower-group-1 {
    display: flex;
    justify-content: space-around;
}

.tower-1-2 {
    order: 1;
}

.tower-group-2 {
    display: flex;
    justify-content: space-around;
}

.tower-2-2 {
    order: -1;
}
```


### Level 11
```css
.tower-group-1 {
    display: flex;
    justify-content: space-between;
}

.tower-1-1 {
    align-self: flex-end;
}

.tower-1-3 {
    align-self: flex-end;
}
```


### Level 12
```css
.tower-group-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tower-1-1 {
    align-self: flex-start;
}

.tower-1-3 {
    order: 3;
}

.tower-1-4 {
    order: 2;
}

.tower-1-5 {
    align-self: flex-end;
    order: 4;
}
```