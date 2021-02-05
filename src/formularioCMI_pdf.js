import React from 'react'
// import Pdf from 'react-to-pdf'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const formularioCMI_pdf = (props) => {
    // const ref = React.createRef()
    let n = 0
    let clausula = () => {
        return n = n + 1
    }
    let segundaRemuneracao = () => {
        let P1 = props.pagamentoCPCVPercentagem
        return 100 - P1
    }
    return (

        <Document size="A4" >
            <Page size='A4' wrap={true}  >
                {/* <Text> */}
                <Text>CONTRATO DE MEDIAÇÃO IMOBILIÁRIA</Text>
                <Text>(Nos termos da Lei 15/2013, de 8 de Fevereiro)</Text>
                <Text>VENDA/ARRENDAMENTO/TRESPASSE/OUTROS</Text>
                <Text>{`Contrato nº C0367-${props.idContrato}`}</Text>
                <Text>ENTRE:</Text>
                <Text>Ocean Line – Sociedade Imobiliária, Lda., com sede na Rua Rodrigo de Albuquerque e Melo,
                nº 22 E. 2795- 233 Linda-a-Velha, com o capital social de €5.000,00 (cinco mil euros),
                e com o NIPC 514.796.073 matriculada na Conservatória do Registo Nacional de Pessoas Colectivas,
                detentora da licença AMI n.º 14974, emitida pelo Instituto dos Mercados Públicos, do Imobiliário e da Construção (IMPIC),
                        adiante designada como Mediadora,</Text>
                <Text>E</Text>
                <Text>{`${props.nomeCliente}, ${props.estadoCivil}`}
                    {
                        props.estadoCivil === 'casado' &&
                        `sob o regime de ${props.regimeCasamento}, com ${props.nomeConjugue}`
                    }
                    {`residente(s) na ${props.morada}, Freguesia de ${props.freguesia}, em ${props.concelho}, em${props.concelho},`}
                    {
                        props.estadoCivil === 'casado' ?
                            `portadores do C.C./ Passaporte n.º ${props.documentoCliente} e ${props.documentoConjugue}, 
                            válidos até ${props.validadeDocumentoCliente} e ${props.validadeDocumentoConjugue}, contribuintes fiscais n.º ${props.NIFCliente} e ${props.NIFConjugue},`
                            :
                            `portador do C.C./ Passaporte n.º ${props.documentoCliente}, válido até ${props.validadeDocumentoCliente}, contribuinte fiscal ${props.NIFCliente},`
                    }
                    {`adiante designado(s) como Segundo Contratante na qualidade de ${props.tipoCliente}, é celebrado o presente Contrato de Mediação Imobiliária que se rege pelas seguintes cláusulas:`}
                </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Identificação do Imóvel)</Text>
                <Text>
                    {`O Segundo Contratante é proprietário e legítimo possuidor da fracção ${props.tipoFracao}, destinada a ${props.destinadoA},
                        sendo constituído por ${props.divisoes} divisões/assoalhadas, com uma área total aproximada de ${props.area} m2, sito na ${props.moradaImovel}, 
                        em ${props.localidadeImovel}, concelho de ${props.concelhoImovel}, descrito na ${props.numeroConservatoria}ª Conservatória do Registo Predial de 
                        ${props.localidadeConservatoria}, sob a ficha n.º ${props.numeroFicha}, com a licença de ${props.tipolicenca} nº ${props.licencaNumero},
                        emitida pela Câmara Municipal de ${props.municipiolicenca}, em ${props.dataEmissaoLicenca}, e incrito na matriz ${props.tipoMatriz}, com o artigo ${props.artigoMatriz}
                        da freguesia ${props.freguesiaMatriz}, com o certificado energético nº ${props.certificadoEnergetico}, de classificação ${props.classificacaoEnergetica}, emitido em ${props.dataEmissaoCertificacaoEnergetica},
                        e válido até ${props.validadeCertificadoEnergetico}.`}
                </Text>
                <Text>Cláusula {clausula()}</Text>
                <Text>(Identificação do Negócio)</Text>
                <Text>
                    {
                        `1.	A Mediadora obriga-se em nome do Segundo Contratante a procurar destinatário para a realização do negócio jurídico de ${props.tipoNegocioJuridico},
                        pelo preço de :${props.preco} Euros (${props.precoExtenso}),
                        desenvolvendo para o efeito, acções de promoção, de divulgação e de publicitação do imóvel objecto do presente contrato.`
                    }
                </Text>
                <Text>
                    2.	Qualquer alteração ao preço fixado no número anterior deverá ser comunicada de imediato e por escrito à Mediadora.
                        </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Ónus e Encargos)</Text>
                {
                    props.onusImovel === 'nao' ?
                        <Text>O imóvel encontra-se livre de quaisquer ónus ou encargos.</Text>
                        :
                        <Text>
                            {`O Segundo Contratante declara que sobre o imóvel descrito na cláusula 1ª, recaem os seguintes ónus e encargos: ${props.tipoOnus}, pelo valor de: ${props.hipotecaPenhoraValor} Euros (${props.hipotecaPenhoraValorExtenso}).`}
                        </Text>
                }
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Regime de Contratação)</Text>
                <Text>1.	O Segundo Contratante contrata a Mediadora em regime de
                    {
                        props.exclusividade === 'sim' ?
                            ' Exclusividde'
                            :
                            ' Não Exclusividade'
                    }
                </Text>
                <Text>
                    2.	Nos termos da legislação aplicável, quando o contrato é celebrado em regime de exclusividade só a Mediadora contratada tem o direito de promover o negócio objecto do contrato de mediação durante o respectivo período de vigência.
                    No que respeita ao pagamento da remuneração, caso o negócio visado tenha sido celebrado em regime de exclusividade e não se concretize por causa imputável ao cliente proprietário ou ao arrendatário trespassante do bem imóvel, é devida à empresa a remuneração acordada.
                    </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Remuneração)</Text>
                <Text>
                    1.	A remuneração só será devida se a Mediadora conseguir destinatário que celebra com o Segundo Contratante o negócio visado pelo presente contrato, nos termos e com as excepções previstas no n.º 1 e 2 do artigo 19.º da Lei 15/2013, de 8 de Fevereiro.
                    </Text>
                <Text>
                    {`2.	O Segundo Contratante obriga-se a pagar à Mediadora a título de remuneração, a quantia de ${props.remuneracaoPercentagem}, calculada sobre o preço pelo qual o negócio é efetivamente concretizado acrescido de IVA à taxa legal em vigor, 
                    não sendo essa quantia inferior a €5.000,00 (cinco mil Euros) acrescido de IVA à taxa legal em vigor.`}
                </Text>
                {
                    props.timingPagamentoRemuneração === 'sim' ?
                        <Text>o total da remuneração aquando da celebração do contrato promessa.</Text>
                        :
                        <Text>
                            {`${props.pagamentoCPCVPercentagem}% após a celebração do contrato promessa e o remanescente ${segundaRemuneracao()}%`}
                        </Text>
                }
                <Text>4.	Os intervenientes no presente contrato de mediação imobiliária abstêm-se de celebrar ou de algum modo participar em quaisquer negócios de que resulte a ¬violação dos limites à utilização de numerário previstos no artigo 63.º-E da Lei Geral Tributária,
                aprovada pelo Decreto-Lei n.º 398/98, de 17 de Dezembro, aditado pela Lei n.º 92/2017, de 22 de agosto.
                    </Text>
                {
                    props.servicosDocumentacao === 'sim' &&
                    <Text>
                        <Text>Cláusula {clausula()}ª</Text>
                        <Text>(Obtenção de Documentos)</Text>
                        <Text>
                            {`1.	No âmbito do presente contrato, a Mediadora, na qualidade de mandatária sem representação, 
                                    obriga-se a prestar os serviços conducentes à obtenção da documentação necessária à concretização do(s)negócio(s) visado(s) pela mediação,
                                    designadamente ${props.descricaoServicosDocumentacao}.`}
                        </Text>
                        {
                            props.remuneracaoServicosDocumentacaoIncluida === 'sim' ?
                                <Text>
                                    2. A remuneração pelos serviços referidos no número anterior considera-se incluída no montante acordado na cláusula 5ª e só será devida nos termos aí descritos
                                </Text>
                                :
                                <Text>
                                    2. Pela prestação dos serviços previstos no número anterior, o segundo contratante pagará a quantia de:
                                {props.valorServicosDocumentacao} Euros ({props.valorServicosDocumentacaoExtenso}) acrescida de IVA à taxa legal em vigor.
                                </Text>
                        }
                        <Text>
                            3.	Sem prejuízo do disposto no n.º 2, a mediadora mantém, sempre, o direito ao reembolso das despesas efectuadas com a obtenção da documentação.
                                 </Text>
                    </Text>
                }
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Garantias da Actividade de Mediação)</Text>
                <Text>
                    Para garantia da responsabilidade emergente da sua actividade profissional, a Mediadora celebrou um contrato de seguro obrigatório de responsabilidade civil no valor de: 250.000,00 Euros (Duzentos e Cinquenta mil euros), apólice n.º 0004844904 através da seguradora Seguradoras Unidas, S.A.
                    </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Prazo de Duração do Contrato)</Text>
                <Text>
                    O presente contrato tem uma validade de 6 meses contados a partir da data da sua celebração, renovando-se automaticamente por iguais e sucessivos períodos de tempo, caso não seja denunciado por qualquer das partes contratantes através de carta registada com aviso de recepção
                    ou outro meio equivalente, com a antecedência mínima de 15 dias em relação ao seu termo.
                    </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Dever de Colaboração)</Text>
                <Text>
                    1.	O Segundo Contratante colaborará com a Mediadora na entrega de todos os elementos julgados necessários e úteis no prazo de 10 (dias), a contar da data de assinatura do presente contrato.
                    </Text>
                <Text>
                    2.	O Segundo Contratante declara e garante que, no âmbito das disposições legais aplicáveis de natureza preventiva e repressiva de combate ao branqueamento de capitais e ao financiamento do terrorismo, e em relação a todos os actos e operações abrangidas pelo presente contrato,
                    se obriga a cooperar na disponibilização de informação relevante à Mediadora, designadamente sobre a identidade das partes contratantes, do objecto do negócio imobiliário e dos meios de pagamento das transacções.
                    </Text>
                <Text>
                    3.	O Segundo Contratante obriga-se ainda a cumprir todas as disposições legais e regulamentares decorrentes do Sistema de Certificação Energética que se encontram previstas no Decreto-Lei n.º 118/2013, de 20 de agosto, ou seja, a obrigação de providenciar,
                    nos termos e prazos devidos, pela emissão do respectivo Certificado Energético em relação ao imóvel objecto do presente contrato (se aplicável).
                    </Text>
                <Text>
                    4.	O Segundo Contratante obriga-se, também, a dar cumprimento às regras referentes à Ficha Técnica da Habitação, nos termos do disposto no Decreto-Lei n.º 68/2004, de 25 de março, nos termos e prazos devidos (se aplicável).
                    </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Angariador Imobiliário)</Text>
                <Text>
                    {`Na preparação do presente contrato de mediação imobiliária colaborou o Angariador(a) Imobiliário(a): ${props.angariadorImobiliario}, residente em ${props.residenciaAngariador}, portador(a) do Cartão do Cidadão nº ${props.documentoAngariador}, e com o número de identificação fiscal nº ${props.NIFAngariador}.`}
                </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Proteção de Dados Pessoais)</Text>
                <Text>
                    1.	Em cumprimento do disposto no Regulamento (EU) 2016/679 do Parlamento Europeu e do Conselho de 27.04.2016 (RGPD) e demais legislação aplicável, relativos à proteção das pessoas singulares, no que diz respeito ao tratamento de dados pessoais e à livre circulação desses dados,
                    o Segundo Contratante   autoriza /  não autoriza que os seus dados pessoais recolhidos, transmitidos ou processados informaticamente pela Mediadora, sejam incorporados na sua base de dados. Estes dados destinam-se a processamentos administrativos, estatísticos e de apresentação/divulgação de produtos e serviços comercializados.
                    </Text>
                <Text>
                    2.	A Mediadora compromete-se, designadamente, a não copiar, reproduzir, adaptar, modificar, alterar, apagar, destruir, divulgar ou por qualquer outra forma colocar à disposição de terceiros, os dados pessoais do Segundo Contratante a que tenha tido acesso no âmbito do presente contrato, sem que para tal tenha sido expressamente autorizada,
                    comprometendo-se a utilizá-los exclusivamente para as finalidades referidas.
                    </Text>
                <Text>
                    3.	Mais se declara que, nos termos e para os efeitos previstos nos artigos 12º a 23º do RGPD, a Mediadora informou o Segundo Contratante e este tomou conhecimento dos direitos que lhe assistem relativamente aos seus dados pessoais.
                    </Text>
                <Text>Cláusula {clausula()}ª</Text>
                <Text>(Foro Competente e Resolução Alternativa de Litígios)</Text>
                {
                    props.clausulaLitigio === 'sim' &&
                    <Text   >
                        <Text>
                            1.	A Mediadora e o Segundo Contraente acordam entre si submeter ao Centro de Arbitragem de Conflitos de Consumo de Lisboa, sito na Rua dos Douradores, 116 – 2º - 1100 – 207 em Lisboa, no Porto ou disponível na página da internet com o seguinte endereço: www.centroarbitragemlisboa.pt, qualquer litígio emergente pelos serviços prestados no âmbito do presente contrato.
                        </Text>
                        <Text>
                            2.	O disposto no número anterior não priva o consumidor do direito que lhe assiste de submeter o litígio à apreciação e decisão de um tribunal judicial. Para dirimirem quaisquer litígios emergentes da execução do presente contrato, as partes acordam entre si, estabelecer como competente o Foro da Comarca de Oeiras, com a expressa renúncia a qualquer outro.
                        </Text>
                    </Text>
                }
                <Text>
                    Depois de lido e ratificado, as partes comprometem-se a cumprir este contrato segundo os ditames da boa fé, e vão assinar. Composto por 4 páginas, feito em duplicado, destinando-se um exemplar a cada uma das partes intervenientes.
                    </Text>
                <Text>Linda-a-Velha,{props.dataContrato}</Text>
                {/* </Text> */}
            </Page>
        </Document>

    )
}

export default formularioCMI_pdf


