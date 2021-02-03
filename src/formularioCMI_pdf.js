import React from 'react'
import Pdf from 'react-to-pdf'


const formularioCMI_pdf = (props) => {
    const ref = React.createRef()
    return (
        <div>
            <div className='Post' ref={ref}>
                <p>CONTRATO DE MEDIAÇÃO IMOBILIÁRIA</p>
                <p>(Nos termos da Lei 15/2013, de 8 de Fevereiro)</p>
                <p>VENDA/ARRENDAMENTO/TRESPASSE/OUTROS</p>
                <p>{`Contrato nº C0367-${props.idContrato}`}</p>
                <p>ENTRE:</p>
                <p>Ocean Line – Sociedade Imobiliária, Lda., com sede na Rua Rodrigo de Albuquerque e Melo,
                nº 22 E. 2795- 233 Linda-a-Velha, com o capital social de €5.000,00 (cinco mil euros),
                e com o NIPC 514.796.073 matriculada na Conservatória do Registo Nacional de Pessoas Colectivas,
                detentora da licença AMI n.º 14974, emitida pelo Instituto dos Mercados Públicos, do Imobiliário e da Construção (IMPIC),
                    adiante designada como Mediadora,</p>
                <p>E</p>
                <p>{`${props.nomeCliente}, ${props.estadoCivil}`}
                    {props.estadoCivil === 'casado' &&
                        `sob o regime de ${props.regimeCasamento}, com ${props.nomeConjugue}`
                    }
                    {`residente(s) na ${props.morada}, Freguesia de ${props.freguesia}, em ${props.concelho}`}
                </p>
            </div>
            <Pdf targetRef={ref} filename={`CMI${props.idContrato}.pdf`}>
                {({ toPdf }) => <button onClick={toPdf}>Gerar CMI</button>}
            </Pdf>
        </div>

        //     idContrato = { this.state.idContrato }
        //                 nomeCliente = { this.state.nomeCliente }
        // estadoCivil = { this.state.estadoCivil }
        // regimeCasamento = { this.state.regimeCasamento }
        // nomeConjugue = { this.state.nomeConjugue }
        // morada = { this.state.morada }
        // freguesia = { this.state.freguesia }
        // concelho = { this.state.freguesia }
        // documentoCliente = { this.state.documentoCliente }
        // documentoConjugue = { this.state.documentoConjugue }
        // validadeDocumentoCliente = { this.state.validadeDocumentoCliente }
        // validadeDocumentoConjugue = { this.state.validadeDocumentoConjugue }
        // NIFCliente = { this.state.NIFCliente }
        // NIFConjugue = { this.state.NIFConjugue }
        // tipoFracao = { this.state.tipoFracao }
        // destinadoA = { this.state.destinadoA }
        // divisoes = { this.state.divisoes }
        // area = { this.state.area }
        // moradaImovel = { this.state.moradaImovel }
        // localidadeImovel = { this.state.localidadeImovel }
        // concelhoImovel = { this.state.concelhoImovel }
        // numeroConservatoria = { this.state.numeroConservatoria }
        // localidadeConservatoria = { this.state.localidadeConservatoria }
        // registoPredial = { this.state.registoPredial }
        // numeroFicha = { this.state.numeroFicha }
        // tipolicenca = { this.state.tipolicenca }
        // licencaNumero = { this.state.licencaNumero }
        // municipiolicenca = { this.state.municipiolicenca }
        // dataEmissaoLicenca = { this.state.dataEmissaoLicenca }
        // tipoMatriz = { this.state.tipoMatriz }
        // artigoMatriz = { this.state.artigoMatriz }
        // freguesiaMatriz = { this.state.freguesiaMatriz }
        // certificadoEnergetico = { this.state.certificadoEnergetico }
        // classificacaoEnergetica = { this.state.classificacaoEnergetica }
        // dataEmissaoCertificacaoEnergetica = { this.state.dataEmissaoCertificacaoEnergetica }
        // validadeCertificadoEnergetico = { this.state.validadeCertificadoEnergetico }
        // tipoNegocioJuridico = { this.state.tipoNegocioJuridico }
        // preco = { this.state.preco }
        // precoExtenso = { this.state.precoExtenso }
        // onusImovel = { this.state.onusImovel }
        // tipoOnus = { this.state.tipoOnus }
        // hipotecaPenhoraValor = { this.state.hipotecaPenhoraValor }
        // hipotecaPenhoraValorExtenso = { this.state.hipotecaPenhoraValorExtenso }
        // exclusividade = { this.state.exclusividade }
        // remuneracaoPercentagem = { this.state.remuneracaoPercentagem }
        // timingPagamentoRemuneração = { this.state.timingPagamentoRemuneração }
        // pagamentoCPCVPercentagem = { this.state.pagamentoCPCVPercentagem }
        // servicosDocumentacao = { this.state.servicosDocumentacao }
        // descricaoServicosDocumentacao = { this.state.descricaoServicosDocumentacao }
        // valorServicosDocumentacao = { this.state.valorServicosDocumentacao }
        // valorServicosDocumentacaoExtenso = { this.state.valorServicosDocumentacaoExtenso }
        // remuneracaoServicosDocumentacaoIncluida = { this.state.remuneracaoServicosDocumentacaoIncluida }
        // angariadorImobiliario = { this.state.angariadorImobiliario }
        // residenciaAngariador = { this.state.residenciaAngariador }
        // documentoAngariador = { this.state.documentoAngariador }
        // NIFAngariador = { this.state.NIFAngariador }
        // clausulaLitigio = { this.state.clausulaLitigio }
        // dataContrato = { this.state.dataContrato }


    )
}

export default formularioCMI_pdf