Part1a
1. 20
2. 20
3. 20
4. Because variable defined with *let* is limited to the block in which it is declared. The second console was outside the block.
5. Can't reassign the constant
6. Can't reassign the constant
   
Part1b
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
12. 
