/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
Aqui você deverá desenvolver a lógica para resolver o problema.*/
let amigos = [];
const mensagem = document.getElementById("mensagem");

function adicionarAmigo() {
    const inputAmigo = document.getElementById("inputAmigo");
    let amigo = inputAmigo.value.trim();
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
    mensagem.textContent = "Amigo removido com sucesso!";
}   

function editarAmigo(i) {
    let amigoEditado = prompt("Edite o nome do seu amigo:");
    if (amigoEditado !== null) {
        amigoEditado = amigoEditado.trim();
        if (amigoEditado !== "") {
            amigos[i] = amigoEditado;
            atualizarLista();
            mensagem.textContent = "Nome do seu amigo editado com sucesso!";
    } else {
        mensagem.textContent = "O nome do amigo não pode ser vazio.";
        }
    } else {
        mensagem.textContent = "Edição cancelada.";
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        mensagem.textContent = "Você precisa cadastrar seus amigos primeiro!";
        resultado.innerHTML = "";
        return;
        } else {
            let indiceSorteado = Math.floor (Math.random () *amigos.length);
            let sorteado = amigos[indiceSorteado];
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `Seu amigo secreto é: ${sorteado}`;
            amigos.splice(indiceSorteado, 1);
            atualizarLista();
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