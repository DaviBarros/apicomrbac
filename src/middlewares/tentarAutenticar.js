const { middlewaresAutenticacao } = require('../usuarios')
module.exports = (requisicao, resposta, proximo) => {
    requisicao.estarAutenticado = false
    if(requisicao.get('Authorization')){
        return middlewaresAutenticacao.bearer(requisicao, resposta, proximo)
    }
    proximo()
}