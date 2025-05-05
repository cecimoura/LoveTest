function calcular() {
    const nome1 = document.getElementById('nome1').value.trim();
    const nome2 = document.getElementById('nome2').value.trim();

    if (nome1 === '' || nome2 === '') {
        document.getElementById('resultado').textContent = 'Por favor, digite os dois nomes!';
        return;
    }

    const porcentagem = Math.floor(Math.random() * 101); // 0 a 100%
    document.getElementById('resultado').textContent = 
        `${nome1} ❤️ ${nome2} = ${porcentagem}% de amor!`;
}
