function birthday(s, d, m) {
    // Write your code here
    let R = 0;
    for(let i = 0; i <= s.length - m; i++){
        let Gr = s.slice(i ,i + m).reduce((total, value) => {
            return total + value
        }) || 0;
        if(Gr === d){
            R++;
        }
    }
    return R
}