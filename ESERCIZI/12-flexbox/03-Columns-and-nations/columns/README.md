## Author Details

* Name: Gabriele Speciale
* Date: 2024-08-12
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Repeat the following exercises from a previous unit using flexbox to structure 
the page.

In a readme.md file, compare the two approaches in terms of:
● Result
● Code quality
● Future flexibility




## Comparison Between Float and Flexbox Layouts


## 1. Result

### Float Layout
- **Layout Control**: The layout works correctly with the columns placed side by side, the downside is that achieving precise alignment requires manual adjustments and complex width and margin calculations.
- **Common Issues**: It often requires the use of "clearfix" to avoid container collapse issues.

### Flexbox Layout
- **Layout Control**: Flexbox simplifies the positioning of columns, with elements easily aligned without the need for manual calculations.


## 2. Code Quality

### Float Layout
- **Readability**: The code is more complex to read and maintain due to extra properties like `float`, `clear`, `width`, and other solutions to compensate for float limitations.

### Flexbox Layout
- **Readability**: The code is much cleaner and easier to understand, using flexbox reduces the amount of code needed to achieve the same result.


## 3. Future Flexibility

### Float Layout
- **Adaptability**: Modifications to the layout can be difficult and time-consuming.
- **Support**: While floats are supported for layout creation, they are considered an outdated technique (especially for more complex layouts).

### Flexbox Layout
- **Adaptability**: Flexbox is much more flexible, allowing you to easily change the order of elements, align content, and modify the layout dynamically without rewriting the code, just by changing properties.
- **Support**: Flexbox is widely supported in modern browsers and represents the standard for building more flexible and responsive layouts.








## files

* index.html
* reset.css
* style.css