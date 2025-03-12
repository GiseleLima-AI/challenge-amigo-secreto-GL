/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
Aqui você deverá desenvolver a lógica para resolver o problema.*/
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("inputAmigo");
    let amigo = inputAmigo.value.trim();
    const mensagem = document.getElementById("mensagem");
    if (amigo == ""){
        let mensagemErro = "Faltou escrever o nome do seu amigo ou amiga para prosseguir!";
        mensagem.textContent = mensagemErro; 
        } else { 
            let mensagemSucesso = "Amigo adicionado com sucesso!";
            mensagem.textContent = mensagemSucesso; 
            amigos.push(amigo);
            atualizarLista();   
        }
        inputAmigo.value = "";
        inputAmigo.focus(); 
        mensagem.value = "";
}
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i<amigos.length; i++){
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigos[i];
        let botaoRemover = document.createElement("button");
        botaoRemover.className= "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerAmigo(i); 
        let botaoEditar = document.createElement("button");
        botaoEditar.className= "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarAmigo(i);
        novoAmigo.appendChild(botaoRemover); 
        novoAmigo.appendChild(botaoEditar); 
        listaAmigos.appendChild(novoAmigo);        
    }   
} 
function removerAmigo(i) {
    amigos.splice(i, 1);
    atualizarLista();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Amigo removido com sucesso!";
}   
function editarAmigo(i) {
    let amigoEditado = prompt("Edite o nome do seu amigo:");
    if (amigoEditado.trim() !== "") {
        amigos[i] = amigoEditado;
        atualizarLista();
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Nome do seu amigo editado com sucesso!";
    }
}
function sortearAmigo(){
    if (amigos.length === 0){
        let sortMensErro = "Você precisa cadastrar seus amigos primeiro!";
        mensagem.textContent = sortMensErro; 
        resultado.innerHTML = "";
        return;
        } else {
            let sorteado = amigos [Math.floor (Math.random () *amigos.length)];
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `Seu amigo secreto é: ${sorteado}`;
            amigos.splice(sorteado, 1);
            atualizarLista();
            console.log (sorteado);
            console.log (amigos);
            const imagemSorteio = document.getElementById("imagemSorteio");
            imagemSorteio.style.display = "block";
            launchConfetti();
            mensagem.textContent = "Sorteio realizado com sucesso!";  
            return;                                
        }              
}
function launchConfetti() {
    confetti({
        particleCount: 2000,
        spread: 180,       
        origin: { x: 0.5, y: 0.5 }
    });
}
function limparLista() {
    if (amigos.length !== 0) {
        amigos.length = 0;
        atualizarLista();
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Lista de amigos limpa com sucesso!";
    } else {
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Você ainda não tem amigos na sua lista.";
    }
}