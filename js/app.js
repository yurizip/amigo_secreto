let array_nomes = [];
function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    array_nomes.push(nome.value);
    if(nome.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }
    if(array_nomes.includes(nome.value)){
        alert('Nome ja adiciionado!');
        return;
    }
    if(lista.textContent == nome.value){
        alert('Esse nome ja existe na lista!');
        return;
    }
    if(lista.textContent == ''){
        lista.textContent = nome.value;
    }else{
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
    atualizar_sorteio();
    atualizar_lista();
}
function sortear(){
    embaralha(array_nomes);
    if(array_nomes.length <= 4){
        alert('Para que o sorteio funcione, precisam ser adicionados pelo menos 4 nomes!');
        return;
    }
    let sorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < array_nomes.length; i++){
        if(i == array_nomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + array_nomes[i] + '-->' + array_nomes[0] + '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + array_nomes[i] + '-->' + array_nomes[i + 1] + '<br>';
        }
        
    }
    
}
function excluir_amigo(index) {
    array_nomes.splice(index, 1);
    atualizar_lista();
    atualizar_sorteio();
}
function atualizar_sorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}
function atualizar_lista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let j = 0; j < array_nomes.length; j++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = array_nomes[j];
        paragrafo.addEventListener('click', function() {
            excluir_amigo(j);
        });
        lista.appendChild(paragrafo);
    }
}
function reiniciar(){
    array_nomes = [];
    let sorteio = document.getElementById('lista-sorteio').innerHTML = '';
    let lista = document.getElementById('lista-amigos').innerHTML = '';
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
for (let numero = 5; numero <= 100; numero += 5) {
        console.log(numero);
}
//2.Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.
let minha_lista = [1,2,3];
let outra_lista = [5,6];
let nova_lista =  minha_lista.concat(outra_lista);
console.log(nova_lista);
//3.Remova o último elemento de novaLista. Imprima novaLista após a remoção.
nova_lista.pop();
console.log(nova_lista);
//4.Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.
for (let i = nova_lista.length; i; i--) {

    const indice_aleatorio = Math.floor(Math.random() * i);

    // atribuição via destructuring
    [nova_lista[i - 1], nova_lista[indice_aleatorio]] = 
        [nova_lista[indice_aleatorio], nova_lista[i - 1]];
}
console.log(nova_lista);
//5.Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.
function remover_duplicatas(nova_lista){
    return [...new Set(nova_lista)];
}
let lista_sem_duplicatas = remover_duplicatas(nova_lista);
console.log(lista_sem_duplicatas);