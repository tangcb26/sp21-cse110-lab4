##Part1a
1. 20
2. 20
3. 20
4. Because variable defined with *let* is limited to the block in which it is declared. The second console was outside the block.
5. Can't reassign the constant
6. Can't reassign the constant
   
##Part1b
1. it will output 3, i is a iterator, and is used to compared with the length of the array
2. it will output 150. The for loop will iterate 3 times, and the third element in the input array is 300, which will assign discountedPrice to 300*(1-0.5) = 150
3. it will output 150. The finalPrice is used to round the discountedPrice, and rounding 150 will get 150
4. nothing. Due to no console.
5. error. Because i is only defined withing the scope of the for loop, and console.log(i) has no access to it.
6. error. Because discountedPrice is only defined withing the scope of the for loop, and console.log(discountedPrice) has no access to it.
7. 150 "finalPrice" was declared at first, and finalPrice adn the log.console(finalPrice) are in the same scope, so the later one has access to it.
8. nothing. Due to no console.
9. error showing i is not defined. That's because i is assigned using 'let' in the for loop scope, and the console.log(i) is outside of the scope.
10. it will output 3. 'length' is the size of the input array, in this case the input array has 3 elements, so the output will be 3
11. it will output 3. Because the discountedPrice was pushed and returned. 
12. A. const a = student.name;
    B. const b = student['Grad Year'];
    C. student.greeting.call();
    D. const d = student['Favorite Teacher'].name;
    E. const e = student.courseLoad[0];
13. A.32. integers map to their exact string representation<br/>
    B.1. 3 maps to an integer and do 3-2<br/>
    C.3. null represents the intentional absence of any object value, it represents an absent integer here <br/>
    D.3null. null represents the intentional absence of any object value, it represents a string here<br/>
    E.4. true maps to 1<br/>
    F.0. false maps to 0 and so does null here<br/>
    G.3undefined. undefined maps to a string called 'undefined'<br/>
    H.NaN. undefined gets converted to NaN<br/>
14. A.true. string '2' becomes a number 2<br/>
    B.false. '12' > '2' in string and in integer<br/>
    C.true. string '2' becomes a number 2<br/>
    D.false. strict equality, in which value are not cconverted to some other value before comparison, and these 2 vaariable values are of different types, they are considered as uneual<br/>
    E.false. true gets converted to integer whose result is 1. 1 != 2<br/>
    F.true. Boolean(2) is true, and the two sides of comparison is strictly equal<br/>
15. The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.<br/>
But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.<br/>

17. each input integer in the array will be doubled, and pushed into newArr, which is [2, 4, 6]. starting at the function modiftArray, there are two parameters, first will be an array and the second will be another function. In the for loop, the array was iterated, and every iterate will be operated by the input function *doSomething*, in which each integer gets doubled. After that, each result is pushed into the newArr. For the result, it will be [2, 4, 6]<br/>

19. 1 4 3 2. 1 4 3 will be printed out at the same time, and 2 will come out after 1 second.
    
