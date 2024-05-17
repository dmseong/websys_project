window.onload = function(){
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    let total = document.getElementById("total")
    let result = document.getElementById("result")
    let i = 1

    plus.addEventListener("click", () => {
        i++
        result.textContent = i
        let totalcostNum = i*42000
        total.textContent = totalcostNum.toLocaleString() + "원"
    })

    minus.addEventListener("click", () => {
        if (i>1){
            i--
            result.textContent = i
            let totalcostNum = i*42000
            total.textContent = totalcostNum.toLocaleString() + "원"
        }
        else {
            alert("최소 구매 수량은 1개입니다.")
            return
        }
    })
}