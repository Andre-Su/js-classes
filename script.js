const addCarro = document.getElementById("addCarro");
const ligarCarro = document.getElementById("turnOnCarro");
const desligarCarro = document.getElementById("turnOffCarro");

import { User } from "./classes/User";
import { Carro } from "./classes/Carro";

var joao = new User;

joao.nome = "João Ferreira";
joao.email = "joa0fr@email.com";
joao.nascimento = "1999-05-22";
joao.role = "user";
joao.ativo = "";

joao.exibirInfos();

var meuCarro = new Carro;
/*
addCarro.addEventListener("click",meuCarro.adicionarCarro());
ligarCarro.addEventListener("click",meuCarro.ligarCarro());
desligarCarro.addEventListener("click",meuCarro.desligarCarro());
*/