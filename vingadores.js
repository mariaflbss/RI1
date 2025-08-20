const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitao America",
    armaPrincipal: "Escudo Americano",
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "Raio Repulsor",
    velocidade: 100,
    forca: 90,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const thor = {
    nome: "Thor Odison",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Stormbreaker",
    velocidade: 90,
    forca: 100,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Super força",
    armaSecundaria: "",
    velocidade: 50,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const homemAranha = {
    nome: "Peter Park",
    codinome: "Homem-aranha",
    armaPrincipal: "lança-teias",
    armaSecundaria: "",
    velocidade: 80,
    forca: 70,
    resistencia: 65,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const gaviaoArqueiro = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco",
    armaSecundaria: "",
    velocidade: 70,
    forca: 70,
    resistencia: 70,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const thanos = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopa do Infinito",
    armaSecundaria: "",
    velocidade: 100,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

const senhorEstranho = {
    nome: "Stephen Strange",
    codinome: "Dr Estranho",
    armaPrincipal: "Magia",
    armaSecundaria: "",
    velocidade: 90,
    forca: 100,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia;
    }   
}

let vingadores = [
    capitaoAmerica,
    homemDeFerro,
    thor,
    hulk,
    homemAranha,
    gaviaoArqueiro,
    thanos,
    senhorEstranho
];

for (let i = 0; i < vingadores.length; i++) {
    let atual = vingadores[i];

    let maisVelozes = [];
    let maisFortes = [];
    let maisResistentes = [];

    for (let j = 0; j < vingadores.length; j++) {
        if (i === j) continue;

        let outro = vingadores[j];

        if (outro.velocidade > atual.velocidade) {
            maisVelozes.push(outro.codinome);
        }

        if (outro.forca > atual.forca) {
            maisFortes.push(outro.codinome);
        }

        if (outro.resistencia > atual.resistencia) {
            maisResistentes.push(outro.codinome);
        }
    }

    console.log(atual.descricao());
    console.log("Personagens mais rápidos que " + atual.codinome + ": " + (maisVelozes.length > 0 ? maisVelozes.join(", ") : "Nenhum"));
    console.log("Personagens mais fortes que " + atual.codinome + ": " + (maisFortes.length > 0 ? maisFortes.join(", ") : "Nenhum"));
    console.log("Personagens mais resistentes que " + atual.codinome + ": " + (maisResistentes.length > 0 ? maisResistentes.join(", ") : "Nenhum"));
    console.log("");
}
