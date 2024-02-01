const Sequelize = require('sequelize')
const sequelize = new Sequelize('inter_2ds', 'grupo_a_2ds', 'site_de_medicina', {
    host: '85.10.205.173',
    dialect: 'mysql'
})


sequelize.authenticate().then(function()
{
    console.log("Conexão bem estabelecida")
}).catch(function(error)
{
    console.log("A conexão não foi estabelecida por causa do erro: " + error)
})

const informations = sequelize.define('informations2', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    mediText: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    indItem0: {
        type: Sequelize.STRING,
        allowNull: false
    },
    indItem1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    indItem2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nIndItem3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nIndItem4: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nIndItem5: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
})

const newInformations = informations.create({
    title: 'Dipirona',
    image: 'https://i.im.ge/2023/11/28/CSfrb1.154229-dipirona-500mg-30-comprimidos-generico-medley-p547850-z1-637558212986886456-removebg-preview.png',
    summary: 'É um medicamento indicado como analgésico e antitérmico, utilizado no tratamento da dor e da febre. Oferece alívio de 30 a 60 minutos após a ingestão, com efeito sustentando por até 4 horas. Um...',
    mediText: 'É um medicamento indicado como analgésico e antitérmico, utilizado no tratamento da dor e da febre. Oferece alívio de 30 a 60 minutos após a ingestão, com efeito sustentando por até 4 horas.<br>Um dos medicamentos mais populares do Brasil, a dipirona monoidratada também pode ser conhecida como metamizol. O primeiro ponto importante de se destacar sobre a dipirona é que esse é um medicamento isento de prescrição. Isso significa que, para comprá-la na farmácia, você não precisa de receita médica.<br>Se o efeito de uma única dose for insuficiente ou após o efeito analgésico ter diminuído, a dose pode ser repetida respeitando-se o modo de usar e a dose máxima diária, conforme prescrito pelo seu médico.
    indItem0: 'Resfriados',
    indItem1: 'Dor muscular',
    indItem2: 'Cólicas',
    nIndItem3: 'Alérgicos',
    nIndItem4: 'Gravidez',
    nIndItem5: 'Hipotensos',
})
const newInformations2 = informations.create({
    title: 'Paracetamol',
    image: 'https://i.im.ge/2023/10/05/NJqjPm.image-removebg-preview-9.png',
    summary: 'Paracetamol é um analgésico e antipirético, sendo indicado para a alívio da dor de intensidade leve a moderada.<br>Podemos encontrar esse medicamento para ser consumido em diversas formas, como por...',
    mediText: 'Paracetamol é um analgésico e antipirético, sendo indicado para a alívio da dor de intensidade leve a moderada.'<br>Podemos encontrar esse medicamento para ser consumido em diversas formas, como por exemplo, em gotas, comprimido efervescente, comprimido revestido, comprimido comestível e até em pó para ser preparado com a mistura de algum líquido. '<br>O tempo de tratamento usando o medicamento indicado é até o desaparecimento dos sintomas da doença.'<br>É importante consultar um médico especialista antes de ingerir o remédio, também é necessário não tomar doses exageradas e desnecessárias do produto e esperar o tempo de ação dos ativos. Assim, o risco de infecção pelo produto e possíveis efeitos colaterais são reduzidos.'',
    indItem0: 'Dor de garganta',
    indItem1: 'Dor de dente',
    indItem2: 'Febre alta',
    nIndItem3: 'Doenças no fígado',
    nIndItem4: 'Durante gravidez',
    nIndItem5: 'Doenças sanguíneas',
})
const newInformations3 = informations.create({
    title: 'Ibuprofeno',
    image: 'https://i.im.ge/2023/11/27/CQJae4.image-removebg-preview.png',
    summary: 'O ibuprofeno é indicado para redução da febre e alívio de dores, tais como: dores decorrentes de gripes e resfriados, dor de garganta, dor de cabeça, dor de dente, dor nas costas, cólicas menstruais...',
    mediText: 'O ibuprofeno é indicado para redução da febre e alívio de dores, tais como: dores decorrentes de gripes e resfriados, dor de garganta, dor de cabeça, dor de dente, dor nas costas, cólicas menstruais e dores musculares. <br>O ibuprofeno exerce atividades contra a dor e contra a febre. O início da ação ocorre de 15 a 30 minutos após sua administração oral e permanece por 4 a 6 horas. <br>O uso do Ibuprofeno é permitido para crianças a partir dos primeiros 6 meses de vida. <br>A dose máxima permitida por dia em adultos é de 640 gotas (3.200mg). <br>Não utilize o ibuprofeno se você já teve qualquer alergia ou alguma reação incomum a qualquer um dos componentes da fórmula do produto. <br>O remédio pode causar alguns efeitos colaterais, tais como: bolhas na pele; náuseas; diarreia; dor de cabeça e irritabilidade.',
    indItem0: 'Resfriados',
    indItem1: 'Dores musculares',
    indItem2: 'Cólicas menstruais',
    nIndItem3: 'Úlcera',
    nIndItem4: 'Hipersensibilidade ',
    nIndItem5: 'Durante gravidez',
})
const newInformations4 = informations.create({
    title: 'Dorflex',
    image: 'https://i.im.ge/2023/11/28/CSKOg1.image-removebg-preview-1.png',
    summary: 'Dorflex é um medicamento que possui ação analgésica e relaxante muscular. É indicado para aliviar dores relacionadas à contratura muscular excessiva, como a dor de cabeça tensional "cefaleia ten...',
    mediText: 'Dorflex é um medicamento que possui ação analgésica e relaxante muscular. É indicado para aliviar dores relacionadas à contratura muscular excessiva, como a dor de cabeça tensional (cefaleia tensional), e também as dores musculares (incluindo dor nas costas e na lombar).<br>Dorflex possui ação analgésica e relaxante muscular. O início da ação ocorre a partir de 30 minutos.<br>Alergia ou intolerância a qualquer um dos componentes da fórmula ou a analgésicos semelhantes à dipirona – derivados de pirazolonas (ex.: fenilbutazona, oxifembutazona) ou a pirazolidinas (ex.: fenilbutazona, oxifembutazona) – incluindo, por exemplo, casos anteriores de agranulocitose (diminuição acentuada na contagem de leucócitos do sangue – glóbulos brancos)',
    indItem0: 'Dor nas costas',
    indItem1: 'Dor lombar',
    indItem2: 'Dor de cabeça',
    nIndItem3: 'Glaucoma',
    nIndItem4: 'Obstrução pilórica',
    nIndItem5: 'Broncoespasmo',
})
const newInformations5 = informations.create({
    title: 'Novalgina',
    image: 'https://i.im.ge/2023/11/28/CSkfQ9.novalgina-500mg-solu-o-oral-gotas-10ml-1-removebg-preview.png',
    summary: 'A Novalgina é um medicamento cujo princípio ativo é a dipirona sódica. Este medicamento de uso adulto e pediátrico pode ser encontrado sob outros nomes comerciais como Anador, Nofebrin...',
    mediText: 'A Novalgina é um medicamento cujo princípio ativo é a dipirona sódica. Este medicamento de uso adulto e pediátrico pode ser encontrado sob outros nomes comerciais como Anador, Nofebrin, Baralgin e Magnopyrol, pois todos eles contêm o mesmo princípio ativo. A Novalgina pode ser encontrada em forma de gotas, comprimidos, supositórios e solução injetável e tem um efeito analgésico e antitérmico.<br>A Novalgina é um medicamento com efeito antitérmico e analgésico e, por isso é indicado para o tratamento de febre e manifestações de dor. Após a administração do medicamento, seja em gotas, comprimidos ou qualquer outra das suas apresentações, estes efeitos podem ser esperados de meia hora a sessenta minutos e duram normalmente cerca de 4 horas.<br>Novalgina em forma de supositórios não deve ser administrada em crianças com menos de 4 anos de idade ou com menos de 16 kg. A solução injetável por via intravenosa não é recomendável para crianças com menos de 11 meses ou pesando menos de 9 kg. Para além disso, a solução injetável por via intramuscular ou intravenosa não deve ser administrada em pacientes com pressão baixa ou circulação instável.',
    indItem0: 'Enxaqueca',
    indItem1: 'Dor de dente',
    indItem2: 'Dor de cabeça',
    nIndItem3: 'Durante a gravidez',
    nIndItem4: 'Porfiria aguda',
    nIndItem5: 'Broncoespasmo',
})
const newInformations6 = informations.create({
    title: 'Rivotril',
    image: 'https://i.im.ge/2023/11/28/CSJglW.Rivotril-0-5-mg-Clonazepam-50-Tabletten-removebg-preview.png',
    summary: 'Por se tratar de um remédio para acalmar a atividade cerebral e adotado no tratamento de ansiedade e convulsões, muitos acreditam que o Rivotril faz mal. A seguir, você aprenderá mais...',
    mediText: 'Por se tratar de um remédio para acalmar a atividade cerebral e adotado no tratamento de ansiedade e convulsões, muitos acreditam que o Rivotril faz mal. A seguir, você aprenderá mais sobre esse medicamento, como ele funciona no organismo, seus efeitos colaterais, os cuidados que você deve ter e as restrições de uso deste medicamento.<br>A principal função do Rivotril é cuidar dos transtornos de ansiedade e de humor, além de surtos psicóticos e distúrbios compulsivos. Os principais sintomas da ansiedade são palpitações, uma sensação de destruição iminente e um sentimento de que tudo dará errado, dificuldade de concentração, tensão muscular, boca seca, hiperventilação e até suor excessivo e desconforto no estômago.',
    indItem0: 'Crises epiléticas',
    indItem1: 'Depressão',
    indItem2: 'Fobia social',
    nIndItem3: 'Hipersensibilidade',
    nIndItem4: 'Hepáticas',
    nIndItem5: 'Asma',
})
const newInformations7 = informations.create({
    title: 'Dolutegravir',
    image: 'https://i.im.ge/2023/11/28/CSB0pG.244c01e27de044e984e0048f904f1d8d-tivicay-435546-500x500-removebg-preview.png',
    summary: 'O dolutegravir demonstrou ser altamente eficaz no tratamento do HIV, reduzindo a carga viral e mantendo a função imunológica. Ele é um medicamento anti-retroviral, para tratar HIV / SIDA...',
    mediText: 'O dolutegravir demonstrou ser altamente eficaz no tratamento do HIV, reduzindo a carga viral e mantendo a função imunológica.<br>Ele é um medicamento anti-retroviral, para tratar HIV / SIDA. Utiliza-se no tratamento da infecção pelo VIH (vírus da imunodeficiência humana), no qual ele reduz a quantidade de vírus no seu organismo deixando num nível baixo, onde aumenta o número de células CD4 no seu sangue que ajuda no combate da infecção.<br>Frisando que nem todas as pessoas respondem da mesma forma ao tratamento com Dolutegravir, por isso é recomendado o paciente se consultar com um especialista antes.',
    indItem0: 'Maiores de idade',
    indItem1: 'HIV',
    indItem2: 'Idosos',
    nIndItem3: 'Durante gravidez',
    nIndItem4: 'Hipertensão pulmonar',
    nIndItem5: 'Disfunção renal',
})
const newInformations8 = informations.create({
    title: 'Aciclovir',
    image: 'https://i.im.ge/2023/11/28/CSeGpL.Aciclovir-removebg-preview.png',
    summary: 'Serve para tratar a herpes genital, herpes labial, herpes zoster e catapora, porém ele não cura as infecções, mas ajuda na sensação de ardor, queimação ou bolhas na pele...',
    mediText: 'Serve para tratar a herpes genital, herpes labial, herpes zoster e catapora, porém ele não cura as infecções, mas ajuda na sensação de ardor, queimação ou bolhas na pele. <br>Ele ajuda a cicatrização das bolhas, evitando a formação de feridas, diminui a coceira e alivia a dor. Pode-se encontrar em forma de pomada, creme e comprimido.<br>Em caso de gripe, resfriado, sarampo, hepatite e pessoas com doenças neurológicas e imunológicas, não é indicado o uso desse remédio, pois pode resultar em problemas de saúde.<br>Podem ocorrer durante o tratamento com os comprimidos que são, dor de cabeça, náusea, vômito, diarreia, tontura, coceira, vermelhidão, febre, sensação de cansaço. <br>Em alguns casos, o creme pode causar ardência passageira, descamação da pele e coceira. <br>Já na pomada, pode aparecer irritação local e vermelhidão.',
    indItem0: 'Herpes genital',
    indItem1: 'Catapora',
    indItem2: 'Herpes labial',
    nIndItem3: 'Sarampo',
    nIndItem4: 'Hepatite',
    nIndItem5: 'Doenças neurológicas',
})
const newInformations9 = informations.create({
    title: 'Valaciclovir',
    image: 'https://i.im.ge/2023/11/28/CdoTKP.7702057708672-removebg-preview.png',
    summary: 'É um medicamento antiviral que serve para tratar infecções causada pelo vírus do herpes, que incluem herpes genital, labial e cobreiro...',
    mediText: 'É um medicamento antiviral que serve para tratar infecções causada pelo vírus do herpes, que incluem herpes genital, labial e cobreiro. <br>Pelo nome já pode-se identificar que ele é parente do aciclovir, que é um outro remédio. A diferença dos dois é pouca, ambos são antivirais para com o tratamento de herpes, o valaciclovir é como se fosse uma pró-droga, ou seja, ao tomar ele e após ser absorvido pelo intestino e metabolizado pelo fígado, ele é transformado em aciclovir dentro do seu corpo.<br>Ele é encontrado na forma de comprimido, em doses de 500 mg e 1000 mg.  Basicamente ele impede que o vírus se multiplique e se espalhe pelo corpo, ele não cura totalmente, mas diminui os sintomas.<br>Os mais comuns são, dor de estômago, náuseas e dor de cabeça. Se caso o paciente estiver tendo, alucinações, vertigem, vômito, convulsões, dificuldade de falar, dor ao urinar, inchaço nos pés, dificuldade de respirar, falta de are entre outras sintomas, é de EXTREMA importância se comunicar com um especialista.',
    indItem0: 'Herpes labial',
    indItem1: 'Herpes-zoster',
    indItem2: 'Herpes genital',
    nIndItem3: 'Durante a gravidez',
    nIndItem4: 'Alérgicos',
    nIndItem5: 'Anemia',
})

// const updateInformations = informations.update({
//     id: 2
// })


module.exports = {sequelize, informations}

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: '85.10.205.173',
//     user: 'grupo_a_2ds',
//     password: 'site_de_medicina',
//     database: 'inter_2ds'
// })

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123321',
//     database: 'teste_sql_nodejs'
// })





// module.exports = {
    // Sequelize: Sequelize,
    // sequelize: sequelize,
    // fields: fields
// }