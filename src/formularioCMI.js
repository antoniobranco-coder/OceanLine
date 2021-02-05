import React from 'react'
import FormularioCMI_pdf from './formularioCMI_pdf'

class formularioCMI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idContrato: '',
            nomeCliente: '',
            estadoCivil: '',
            regimeCasamento: '',
            nomeConjugue: '',
            morada: '',
            freguesia: '',
            concelho: '',
            documentoCliente: '',
            documentoConjugue: '',
            validadeDocumentoCliente: '',
            validadeDocumentoConjugue: '',
            NIFCliente: '',
            NIFConjugue: '',
            tipoCliente: '',
            tipoFracao: '',
            destinadoA: '',
            divisoes: '',
            area: '',
            moradaImovel: '',
            localidadeImovel: '',
            concelhoImovel: '',
            numeroConservatoria: '',
            localidadeConservatoria: '',
            registoPredial: '',
            numeroFicha: '',
            tipolicenca: '',
            licencaNumero: '',
            municipiolicenca: '',
            dataEmissaoLicenca: '',
            tipoMatriz: '',
            artigoMatriz: '',
            freguesiaMatriz: '',
            certificadoEnergetico: '',
            classificacaoEnergetica: '',
            dataEmissaoCertificacaoEnergetica: '',
            validadeCertificadoEnergetico: '',
            tipoNegocioJuridico: '',
            preco: '',
            precoExtenso: '',
            onusImovel: '',
            tipoOnus: '',
            hipotecaPenhoraValor: '',
            hipotecaPenhoraValorExtenso: '',
            exclusividade: '',
            remuneracaoPercentagem: '',
            timingPagamentoRemuneração: '',
            pagamentoCPCVPercentagem: '',
            servicosDocumentacao: '',
            descricaoServicosDocumentacao: '',
            valorServicosDocumentacao: '',
            valorServicosDocumentacaoExtenso: '',
            remuneracaoServicosDocumentacaoIncluida: '',
            angariadorImobiliario: '',
            residenciaAngariador: '',
            documentoAngariador: '',
            NIFAngariador: '',
            clausulaLitigio: '',
            dataContrato: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        let value = event.target.value
        let name = event.target.name
        this.setState({ [name]: value })
    }



    render() {
        return (
            <div>
                <h3>Formulário Contrato Mediação Imobiliária</h3>
                <form>
                    <label>Número Contrato</label>
                    <input type='text' name='idContrato' value={this.state.idContrato} onChange={event => this.handleChange(event)} />
                    <label>Nome Completo</label>
                    <input type='text' name='nomeCliente' value={this.state.nomeCliente} onChange={event => this.handleChange(event)} />
                    <select name='estadoCivil' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Seleccione o Estado Civil do cliente</option>
                        <option name='estadoCivil' value='casado'>Casado</option>
                        <option name='estadoCivil' value='solteiro'>Solteiro</option>
                        <option name='estadoCivil' value='divorciado'>Divorciado</option>
                        <option name='estadoCivil' value='viuvo'>Viúvo</option>
                    </select>
                    {
                        this.state.estadoCivil === 'casado' &&
                        <div>
                            <label>Regime Casamento</label>
                            <input type='text' name='nomeCliente' value={this.state.regimeCasamento} onChange={event => this.handleChange(event)} />
                            <label>Nome Conjugue</label>
                            <input type='text' name='nomeCliente' value={this.state.nomeConjugue} onChange={event => this.handleChange(event)} />
                        </div>
                    }
                    <label>Morada</label>
                    <input type='text' name='morada' value={this.state.morada} onChange={event => this.handleChange(event)} />
                    <label>Freguesia</label>
                    <input type='text' name='freguesia' value={this.state.freguesia} onChange={event => this.handleChange(event)} />
                    <label>Concelho</label>
                    <input type='text' name='concelho' value={this.state.concelho} onChange={event => this.handleChange(event)} />
                    <label>Numero Documento Cliente</label>
                    <input type='text' name='documentoCliente' value={this.state.documentoCliente} onChange={event => this.handleChange(event)} />
                    {
                        this.state.estadoCivil === 'casado' &&
                        <div>
                            <label>Numero Documento Conjugue</label>
                            <input type='text' name='documentoConjugue' value={this.state.documentoConjugue} onChange={event => this.handleChange(event)} />
                            <label>NIF Conjugue</label>
                            <input type='text' name='NIFConjugue' value={this.state.NIFConjugue} onChange={event => this.handleChange(event)} />
                        </div>
                    }
                    <label>NIF Cliente</label>
                    <input type='text' name='NIFCliente' value={this.state.NIFCliente} onChange={event => this.handleChange(event)} />
                    <select name='tipoCliente' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Selecione o tipo de licença</option>
                        <option name='tipoCliente' value='proprietário'>Proprietário(s)</option>
                        <option name='tipoCliente' value='senhorio'>Senhorio(s)</option>
                        <option name='tipoCliente' value='trespassante'>Trespassante(s)</option>
                        <option name='tipoCliente' value='outro'>Outro(s)</option>
                    </select>
                    <label>Tipo de fração</label>
                    <input type='text' name='tipoFracao' value={this.state.tipoFracao} onChange={event => this.handleChange(event)} />
                    <label>Destinada a:</label>
                    <input type='text' name='destinadoA' value={this.state.destinadoA} onChange={event => this.handleChange(event)} />
                    <label>Número de divisões</label>
                    <input type='number' name='divisoes' value={this.state.divisoes} onChange={event => this.handleChange(event)} />
                    <label>Área em m2</label>
                    <input type='text' name='area' value={this.state.area} onChange={event => this.handleChange(event)} />
                    <label>Morada do Imóvel</label>
                    <input type='text' name='divisoes' value={this.state.moradaImovel} onChange={event => this.handleChange(event)} />
                    <label>Localidade do Imóvel</label>
                    <input type='text' name='localidadeImovel' value={this.state.localidadeImovel} onChange={event => this.handleChange(event)} />
                    <label>Concelho do Imóvel</label>
                    <input type='text' name='concelhoImovel' value={this.state.concelhoImovel} onChange={event => this.handleChange(event)} />
                    <label>Conservatória do Registo Predial</label>
                    <input type='text' name='localidadeConservatoria' value={this.state.localidadeConservatoria} onChange={event => this.handleChange(event)} />
                    <label>Número de Conservatória do Registo Predial</label>
                    <input type='text' name='numeroConservatoria' value={this.state.numeroConservatoria} onChange={event => this.handleChange(event)} />
                    <label>Número Ficha</label>
                    <input type='text' name='numeroFicha' value={this.state.numeroFicha} onChange={event => this.handleChange(event)} />
                    <label>Tipo de Licença</label>
                    <input type='text' name='tipolicenca' value={this.state.tipolicenca} onChange={event => this.handleChange(event)} />
                    <select name='tipolicenca' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Selecione o tipo de licença</option>
                        <option name='tipolicenca' value='construção'>construção</option>
                        <option name='tipolicenca' value='habitação'>habitação</option>
                    </select>
                    <label>Número de Licença</label>
                    <input type='text' name='licencaNumero' value={this.state.licencaNumero} onChange={event => this.handleChange(event)} />
                    <label>Municipio emissor da licença</label>
                    <input type='text' name='municipiolicenca' value={this.state.municipiolicenca} onChange={event => this.handleChange(event)} />
                    <label>Data Emissão da licença</label>
                    <input type='text' name='dataEmissaoLicenca' value={this.state.dataEmissaoLicenca} onChange={event => this.handleChange(event)} />
                    <select name='tipoMatriz' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Selecione o tipo de matriz</option>
                        <option name='tipoMatriz' value='predial'>predial</option>
                        <option name='tipoMatriz' value='rustica'>rustica</option>
                    </select>
                    <label>Número de artigo da matriz</label>
                    <input type='text' name='artigoMatriz' value={this.state.artigoMatriz} onChange={event => this.handleChange(event)} />
                    <label>Freguesia da matriz</label>
                    <input type='text' name='freguesiaMatriz' value={this.state.freguesiaMatriz} onChange={event => this.handleChange(event)} />
                    <label>Número Certificado Energético</label>
                    <input type='text' name='certificadoEnergetico' value={this.state.certificadoEnergetico} onChange={event => this.handleChange(event)} />
                    <select name='classificacaoEnergetica' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Selecione a classificação energética</option>
                        <option name='classificacaoEnergetica' value='em atribuição'>Em atribuição</option>
                        <option name='classificacaoEnergetica' value='A+'>A+</option>
                        <option name='classificacaoEnergetica' value='A'>A</option>
                        <option name='classificacaoEnergetica' value='B+'>B+</option>
                        <option name='classificacaoEnergetica' value='B'>B</option>
                        <option name='classificacaoEnergetica' value='C'>C</option>
                        <option name='classificacaoEnergetica' value='D'>D</option>
                        <option name='classificacaoEnergetica' value='E'>E</option>
                        <option name='classificacaoEnergetica' value='F'>F</option>
                        <option name='classificacaoEnergetica' value='G'>G</option>
                    </select>
                    <label>Data emissão Certificado Energético</label>
                    <input type='text' name='dataEmissaoCertificacaoEnergetica' value={this.state.dataEmissaoCertificacaoEnergetica} onChange={event => this.handleChange(event)} />
                    <label> Data validade Certificado Energético</label>
                    <input type='text' name='validadeCertificadoEnergetico' value={this.state.validadeCertificadoEnergetico} onChange={event => this.handleChange(event)} />
                    <select name='tipoNegocioJuridico' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Selecione o tipo de negócio</option>
                        <option name='tipoNegocioJuridico' value='venda'>Venda</option>
                        <option name='tipoNegocioJuridico' value='aluguer'>Aluguer</option>
                    </select>
                    <label> Preço</label>
                    <input type='number' name='preco' value={this.state.preco} onChange={event => this.handleChange(event)} />
                    <label> Preço por extenso</label>
                    <input type='text' name='precoExtenso' value={this.state.precoExtenso} onChange={event => this.handleChange(event)} />
                    <select name='onusImovel' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Ónus ou encargos sobre o imóvel</option>
                        <option name='onusImovel' value='sim'>Sim</option>
                        <option name='onusImovel' value='nao'>Não</option>
                    </select>
                    {
                        this.state.onusImovel === 'sim' &&
                        <div>
                            <select name='tipoOnus' onChange={event => this.handleChange(event)}>
                                <option selected='selected'>Tipo de Ónus ou Encargo</option>
                                <option name='tipoOnus' value='hipoteca'>Hipoteca</option>
                                <option name='tipoOnus' value='penhora'>Penhora</option>
                            </select>
                            <label> Valor da Hipoteca ou Penhora</label>
                            <input type='number' name='hipotecaPenhoraValor' value={this.state.hipotecaPenhoraValor} onChange={event => this.handleChange(event)} />
                            <label> Valor da Hipoteca ou Penhora (por extenso)</label>
                            <input type='text' name='hipotecaPenhoraValorExtenso' value={this.state.hipotecaPenhoraValorExtenso} onChange={event => this.handleChange(event)} />
                        </div>
                    }
                    <select name='exclusividade' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Angariação em regime de exclusividade?</option>
                        <option name='exclusividade' value='sim'>Sim</option>
                        <option name='exclusividade' value='nao'>Não</option>
                    </select>
                    <label> Percentagem Remuneração</label>
                    <input type='text' name='remuneracaoPercentagem' value={this.state.remuneracaoPercentagem} placeholder='%' onChange={event => this.handleChange(event)} />
                    <select name='timingPagamentoRemuneração' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Pagamento da totalidade da Remuneração na realização do CPCV?</option>
                        <option name='timingPagamentoRemuneração' value='sim'>Sim</option>
                        <option name='timingPagamentoRemuneração' value='nao'>Não</option>
                    </select>
                    {
                        this.state.timingPagamentoRemuneração === 'nao' &&
                        <div>
                            <label> % Pagamento no CPCV</label>
                            <input type='number' name='pagamentoCPCVPercentagem' value={this.state.pagamentoCPCVPercentagem} onChange={event => this.handleChange(event)} />

                        </div>
                    }
                    <label> Preço por extenso</label>
                    <input type='text' name='precoExtenso' value={this.state.precoExtenso} onChange={event => this.handleChange(event)} />
                    <label> Preço por extenso</label>
                    <input type='text' name='precoExtenso' value={this.state.precoExtenso} onChange={event => this.handleChange(event)} />
                    <label> Preço por extenso</label>
                    <input type='text' name='precoExtenso' value={this.state.precoExtenso} onChange={event => this.handleChange(event)} />
                    <select name='servicosDocumentacao' onChange={event => this.handleChange(event)}>
                        <option selected='selected'>Cláusula Serviços Documentação?</option>
                        <option name='servicosDocumentacao' value='sim'>Sim</option>
                        <option name='servicosDocumentacao' value='nao'>Não</option>
                    </select>
                    {
                        this.state.servicosDocumentacao === 'sim' &&
                        <div>
                            <label> Remuneração </label>
                            <input type='text' name='descricaoServicosDocumentacao' value={this.state.descricaoServicosDocumentacao} onChange={event => this.handleChange(event)} />
                            <label> Valor Serviços Documentação</label>
                            <input type='text' placeholder='€' name='valorServicosDocumentacao' value={this.state.valorServicosDocumentacao} onChange={event => this.handleChange(event)} />
                            <label> Valor Serviços Documentação (por extenso)</label>
                            <input type='text' name='valorServicosDocumentacaoExtenso' value={this.state.valorServicosDocumentacaoExtenso} onChange={event => this.handleChange(event)} />
                            <select name='remuneracaoServicosDocumentacaoIncluida' onChange={event => this.handleChange(event)}>
                                <option selected='selected'>A remuneração dos serviços de Documentação está incluída na cláusula de Remuneração do Negócio?</option>
                                <option name='remuneracaoServicosDocumentacaoIncluida' value='sim'>Sim</option>
                                <option name='remuneracaoServicosDocumentacaoIncluida' value='nao'>Não</option>
                            </select>
                        </div>
                    }
                    <label> Nome Angariador Imobiliário</label>
                    <input type='text' name='angariadorImobiliario' value={this.state.angariadorImobiliario} onChange={event => this.handleChange(event)} />
                    <label> Residência do Angariador Imobiliário</label>
                    <input type='text' name='residenciaAngariador' value={this.state.residenciaAngariador} onChange={event => this.handleChange(event)} />
                    <label> Número de Cartão de Cidadão do Angariador Imobiliário</label>
                    <input type='text' name='documentoAngariador' value={this.state.documentoAngariador} onChange={event => this.handleChange(event)} />
                    <label> NIF do Angariador Imobiliário</label>
                    <input type='text' name='NIFAngariador' value={this.state.NIFAngariador} onChange={event => this.handleChange(event)} />
                    <label> Cláusula Foro Competente e Resolução Alternativa de Litígios?</label>
                    <input type='text' name='clausulaLitigio' value={this.state.clausulaLitigio} onChange={event => this.handleChange(event)} />
                    <label> Data do contrato</label>
                    <input type='text' name='dataContrato' value={this.state.dataContrato} onChange={event => this.handleChange(event)} />
                </form>
                <FormularioCMI_pdf
                    idContrato={this.state.idContrato}
                    nomeCliente={this.state.nomeCliente}
                    estadoCivil={this.state.estadoCivil}
                    regimeCasamento={this.state.regimeCasamento}
                    nomeConjugue={this.state.nomeConjugue}
                    morada={this.state.morada}
                    freguesia={this.state.freguesia}
                    concelho={this.state.freguesia}
                    documentoCliente={this.state.documentoCliente}
                    documentoConjugue={this.state.documentoConjugue}
                    validadeDocumentoCliente={this.state.validadeDocumentoCliente}
                    validadeDocumentoConjugue={this.state.validadeDocumentoConjugue}
                    NIFCliente={this.state.NIFCliente}
                    NIFConjugue={this.state.NIFConjugue}
                    tipoCliente={this.state.tipoCliente}
                    tipoFracao={this.state.tipoFracao}
                    destinadoA={this.state.destinadoA}
                    divisoes={this.state.divisoes}
                    area={this.state.area}
                    moradaImovel={this.state.moradaImovel}
                    localidadeImovel={this.state.localidadeImovel}
                    concelhoImovel={this.state.concelhoImovel}
                    numeroConservatoria={this.state.numeroConservatoria}
                    localidadeConservatoria={this.state.localidadeConservatoria}
                    registoPredial={this.state.registoPredial}
                    numeroFicha={this.state.numeroFicha}
                    tipolicenca={this.state.tipolicenca}
                    licencaNumero={this.state.licencaNumero}
                    municipiolicenca={this.state.municipiolicenca}
                    dataEmissaoLicenca={this.state.dataEmissaoLicenca}
                    tipoMatriz={this.state.tipoMatriz}
                    artigoMatriz={this.state.artigoMatriz}
                    freguesiaMatriz={this.state.freguesiaMatriz}
                    certificadoEnergetico={this.state.certificadoEnergetico}
                    classificacaoEnergetica={this.state.classificacaoEnergetica}
                    dataEmissaoCertificacaoEnergetica={this.state.dataEmissaoCertificacaoEnergetica}
                    validadeCertificadoEnergetico={this.state.validadeCertificadoEnergetico}
                    tipoNegocioJuridico={this.state.tipoNegocioJuridico}
                    preco={this.state.preco}
                    precoExtenso={this.state.precoExtenso}
                    onusImovel={this.state.onusImovel}
                    tipoOnus={this.state.tipoOnus}
                    hipotecaPenhoraValor={this.state.hipotecaPenhoraValor}
                    hipotecaPenhoraValorExtenso={this.state.hipotecaPenhoraValorExtenso}
                    exclusividade={this.state.exclusividade}
                    remuneracaoPercentagem={this.state.remuneracaoPercentagem}
                    timingPagamentoRemuneração={this.state.timingPagamentoRemuneração}
                    pagamentoCPCVPercentagem={this.state.pagamentoCPCVPercentagem}
                    servicosDocumentacao={this.state.servicosDocumentacao}
                    descricaoServicosDocumentacao={this.state.descricaoServicosDocumentacao}
                    valorServicosDocumentacao={this.state.valorServicosDocumentacao}
                    valorServicosDocumentacaoExtenso={this.state.valorServicosDocumentacaoExtenso}
                    remuneracaoServicosDocumentacaoIncluida={this.state.remuneracaoServicosDocumentacaoIncluida}
                    angariadorImobiliario={this.state.angariadorImobiliario}
                    residenciaAngariador={this.state.residenciaAngariador}
                    documentoAngariador={this.state.documentoAngariador}
                    NIFAngariador={this.state.NIFAngariador}
                    clausulaLitigio={this.state.clausulaLitigio}
                    dataContrato={this.state.dataContrato}
                />
            </div>
        )
    }
}

//https://www.youtube.com/watch?v=B1EoBWAFPp0

export default formularioCMI
