/*Os próximos dois passos se referem ao o checkpoint 
1 -Agora, vamos olhar para o estado do componente Post. 
Observe o estado é inicial dele. Repare que 4 propriedades
 são inicializadas: curtido, numeroCurtidas, comentando e n
 umeroComentarios. Tente encontrar onde essas 4 propriedades 
 são utilizadas no código. */
 state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
  }
    <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
            />
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario 
      aoEnviar={this.aoEnviarComentario}/>

esses estade serão mudados toda vez que existir uma ação
              }