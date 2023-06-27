import { Component } from '@angular/core';
import { RequisicaoService } from '../services/requisicao.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  public nome:string = '';
  public data_nascimento:string = '';
  public email:string = '';
  public senha:string = '';

  constructor(
    public requisicao_service:RequisicaoService
  ){}
  salvar(){
    this.requisicao_service.get({
      nome:this.nome,
      data_nascimento:this.data_nascimento,
      email:this.email,
      senha:this.senha
    }).subscribe(
    (Response:any)=> {
    // Occorreu tudo certo
    if (Response.status == 'success'){
      // Mensagem de sucesso ...
    }else{
      // Mensagem de erro ...
    }
    console.log(Response);
  }
);
}
}