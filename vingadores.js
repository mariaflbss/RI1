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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
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
        "Nivel de resistencia: " + this.resistencia
    }   
}

const vingadores = [capitaoAmerica, homemDeFerro, thor, hulk, homemAranha, gaviaoArqueiro, thanos, senhorEstranho];

function comparacao(lista){
    let maisVeloz = lista[0];
    let maisForte = lista[0];
    let maisResistente = lista[0];
    
    for (let p of lista){
        if (p.velocidade > maisVeloz.velocidade){
            maisVeloz = p;
        }

        if (p.forca > maisForte.forca){
            maisForte = p;
        }

        if (p.resistencia > maisResistente.resistencia){
            maisResistente = p;
        }
    }

    return "O mais veloz é " + maisVeloz.nome + "\n" +
           "O mais forte é " + maisForte.nome + "\n" +
           "O mais resistente é " + maisResistente.nome;
}

for (let p of vingadores) {
    console.log(p.descricao() + "\n");
}

console.log(comparacao(vingadores));
