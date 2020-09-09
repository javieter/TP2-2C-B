// Complete the isBalanced function below.
function isBalanced(s) {
    let resp = 'YES'
    let signos = s.split('')
    if (signos.length<=1) {
        resp = 'NO'
    }
    let aux = signos.shift()
    let pila = []
    while (typeof(aux)!='undefined'&&resp!='NO') {
        while(aux=='{'||aux=='['||aux=='('){
            pila.push(aux)
            aux = signos.shift()    
        }
        if(aux=='}'&&pila[pila.length-1]=='{'){
            pila.pop()
        } else if(aux==']'&&pila[pila.length-1]=='['){
            pila.pop()
        } else if(aux==')'&&pila[pila.length-1]=='('){
            pila.pop()
        } else {
            resp = 'NO'
        }
        aux = signos.shift()
    }
    return resp

}

// TESTS

console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
console.log(isBalanced('{') == 'NO');
console.log(isBalanced('{{') == 'NO');
console.log(isBalanced(']]') == 'NO'); 
console.log(isBalanced(')') == 'NO');
console.log(isBalanced('a') == 'NO');
console.log(isBalanced('') == 'NO');
console.log(isBalanced('{}') == 'YES');
