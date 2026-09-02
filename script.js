function converter(){

    let valor = parseFloat (document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;

    let resultado;

    if (valor <= 0){
        alert("Digite um valor válido!");
        return;
    }

    switch (moeda) {
        case "usd":
            resultado = valor / 5.10;
            alert("Conversão: Real para Dólar Americano\n"+ "Valor em Reais: R$ " + valor.toFixed(2).replace(".", ",") + "\nResultado: US$" + resultado.toFixed(2).replace(".", ","));
            break;
        case "eur":
            resultado = valor / 5.91;
            alert("Conversão: Real para Euro\n"+ "Valor em Reais: R$ " + valor.toFixed(2).replace(".", ",") + "\nResultado: €" + resultado.toFixed(2).replace(".", ","));
            break;
        case "gbp":
            resultado = valor / 6.95;
            alert("Conversão: Real para Libra Esterlina\n"+ "Valor em Reais: R$ " + valor.toFixed(2).replace(".", ",") + "\nResultado: £" + resultado.toFixed(2).replace(".", ","));
            break;
        case "jpy":
            resultado = valor / 0.032;
            alert("Conversão: Real para Iene Japonês\n"+ "Valor em Reais: R$ " + valor.toFixed(2).replace(".", ",") + "\nResultado: ¥" + resultado.toFixed(2).replace(".", ","));
            break;
    }
}