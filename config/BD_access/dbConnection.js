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
    mediText: 'É um medicamento indicado como analgésico e antitérmico, utilizado no tratamento da dor e da febre. Oferece alívio de 30 a 60 minutos após a ingestão, com efeito sustentando por até 4 horas.<br>Um dos medicamentos mais populares do Brasil, a dipirona monoidratada também pode ser conhecida como metamizol. O primeiro ponto importante de se destacar sobre a dipirona é que esse é um medicamento isento de prescrição. Isso significa que, para comprá-la na farmácia, você não precisa de receita médica.<br>Se o efeito de uma única dose for insuficiente ou após o efeito analgésico ter diminuído, a dose pode ser repetida respeitando-se o modo de usar e a dose máxima diária, conforme prescrito pelo seu médico.',
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
    mediText: 'Paracetamol é um analgésico e antipirético, sendo indicado para a alívio da dor de intensidade leve a moderada.<br>Podemos encontrar esse medicamento para ser consumido em diversas formas, como por exemplo, em gotas, comprimido efervescente, comprimido revestido, comprimido comestível e até em pó para ser preparado com a mistura de algum líquido.<br>O tempo de tratamento usando o medicamento indicado é até o desaparecimento dos sintomas da doença.<br>É importante consultar um médico especialista antes de ingerir o remédio, também é necessário não tomar doses exageradas e desnecessárias do produto e esperar o tempo de ação dos ativos. Assim, o risco de infecção pelo produto e possíveis efeitos colaterais são reduzidos.',
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
const newInformations10 = informations.create({
    title: 'Estatinas',
    image: 'https://i.im.ge/2023/11/30/CPuyUT.3-MB-Editors-Picks-24-02-2022-1-Statin-Pill-iStock-1221184048-removebg-preview.png',
    summary: 'As estatinas são medicamentos utilizados principalmente para reduzir os níveis de colesterol no sangue. Elas atuam inibindo uma enzima chamada HMG-CoA redutase, que é responsável pela produção...',
    mediText: 'As estatinas são medicamentos utilizados principalmente para reduzir os níveis de colesterol no sangue. Elas atuam inibindo uma enzima chamada HMG-CoA redutase, que é responsável pela produção de colesterol no fígado.<br>As estatinas bloqueiam a ação da enzima HMG-CoA redutase, reduzindo a produção de colesterol no fígado. Isso faz com que o fígado absorva mais colesterol da corrente sanguínea, diminuindo os níveis de colesterol total no sangue e, especialmente, o colesterol LDL, conhecido como “colesterol ruim “.<br>As estatinas são geralmente prescritas para pessoas com alto colesterol ou risco de doença cardiovascular.<br>Embora as estatinas sejam geralmente seguras, elas podem não ser adequadas para pessoas com certas condições médicas, como doenças hepáticas ou renais graves. Além disso, as estatinas são contraindicadas durante a gravidez e a amamentação.',
    indItem0: 'Alto colesterol',
    indItem1: 'Aterosclerose',
    indItem2: 'Diabetes',
    nIndItem3: 'Durante a gravidez ',
    nIndItem4: 'Doenças hepáticas',
    nIndItem5: 'Doenças renais',
})
const newInformations11 = informations.create({
    title: 'Ezetimiba',
    image: 'https://i.im.ge/2023/11/30/CPueYC.166585-800-auto-removebg-preview.png',
    summary: 'A Ezetimiba é indicada para reduzir a quantidade de colesterol e de triglicérides no seu sangue.<br>A ezetimiba age ao reduzir a absorção do colesterol no intestino delgado, enquanto outros hipolipemiantes como as estatinas...',
    mediText: 'A Ezetimiba é indicada para reduzir a quantidade de colesterol e de triglicérides no seu sangue.<br>A ezetimiba age ao reduzir a absorção do colesterol no intestino delgado, enquanto outros hipolipemiantes como as estatinas e o fenofibrato diminuem o colesterol de maneira diferente; eles agem no fígado. Portanto, ezetimiba aumenta o efeito redutor do colesterol das vastatinas e do fenofibrato.',
    indItem0: 'Colesterol excessivo',
    indItem1: 'Triglicerídeos',
    indItem2: 'Sitosterolemia',
    nIndItem3: 'Insuficiência hepática',
    nIndItem4: 'Alérgicos',
    nIndItem5: 'Durante a gravidez',
})
const newInformations12 = informations.create({
    title: 'Abacavir',
    image: 'https://i.im.ge/2023/11/30/CPFb7q.Abacavir-300mg-60-bottle-fit-main-removebg-preview.png',
    summary: 'Abacavir é indicado, na terapêutica antirretroviral combinada, para tratamento da infecção pelo vírus da imunodeficiência humana (HIV) em adultos e crianças...',
    mediText: 'Abacavir é indicado, na terapêutica antirretroviral combinada, para tratamento da infecção pelo vírus da imunodeficiência humana (HIV) em adultos e crianças.<br>Quando houver sintomas, para Adultos, adolescentes e crianças que pesam no mínimo 25 kg, a dose recomendada de Abacavir é de 300 mg (um comprimido ou 15mL de solução oral) duas vezes ao dia ou de 600 mg (dois comprimidos ou 30mL de solução oral) uma vez ao dia.',
    indItem0: 'HIV',
    indItem1: 'Infecções',
    indItem2: 'Doenças sexuais',
    nIndItem3: 'Hipersensibilidade',
    nIndItem4: 'Insuficiência hepática',
    nIndItem5: 'Durante a gravidez',
})
const newInformations13 = informations.create({
    title: 'Neosaldina',
    image: 'https://i.im.ge/2023/12/01/CygWg6.1036560-neosaldina-4-drageas-m1-637118007329268495-removebg-preview.png',
    summary: 'A Neosaldina é um medicamento com atividade analgésica (diminui a dor) e antiespasmódica (diminui contração involuntária) indicado para o tratamento de diversos...',
    mediText: 'A Neosaldina é um medicamento com atividade analgésica (diminui a dor) e antiespasmódica (diminui contração involuntária) indicado para o tratamento de diversos tipos de dor de cabeça, incluindo enxaquecas ou para o tratamento de cólicas.<br>Este medicamento tem como uns dos principais ativos a isometepteno, dipirona e a cafeína.<br>O medicamento está disponibilizado em duas formas farmacêuticas: drágeas e gotas. Cada uma tem a sua forma adequada de se tomar. As gramaturas mudam, por isso, é importante consultar um médico antes de medicar-se e respeitar as prescrições médicas.',
    indItem0: 'Dores de cabeça',
    indItem1: 'Enxaqueca',
    indItem2: 'Espasmos musculares',
    nIndItem3: 'Alérgicos',
    nIndItem4: 'Pressão alta',
    nIndItem5: 'Doenças metabólicas',
})
const newInformations14 = informations.create({
    title: 'Relenza',
    image: 'https://i.im.ge/2023/12/01/CAs5XL.519-1-w340-removebg-preview.png',
    summary: 'O Relenza também conhecido como zanamivir é indicado para o tratamento da gripe, dos vírus influenza A ou B, incluindo do vírus Influenza A H1N1 ou H3N2, ou redução da duração dos seus sintomas...',
    mediText: 'O Relenza também conhecido como zanamivir é indicado para o tratamento da gripe, dos vírus influenza A ou B, incluindo do vírus Influenza A H1N1 ou H3N2, ou redução da duração dos seus sintomas, em adultos e crianças com mais de 5 anos de idade. Esse remédio também é indicado para prevenção da gripe em pessoas que tiveram contato próximo com uma pessoa infectada pelos vírus influenza A ou B, mas ainda não apresentam sintomas. É importante ressaltar, que o zanamivir não substitui a vacina da gripe e não deve ser usado para tratar o resfriado comum.<br>O remédio deve ser usado por inalação oral, utilizando o dispositivo fornecido na embalagem. É importante ressaltar que o zanamivir não deve ser usado em nebulizadores e também não deve ser misturado com água ou qualquer outro tipo de líquido.<br>Alguns dos efeitos colaterais que podem ocorrer durante o tratamento com o relenza são dor de cabeça, náuseas, vômitos, dor no corpo ou tosse. O Relenza pode causar problemas respiratórios graves, chiado no peito e sensação de desmaio. Neste caso, deve-se interromper seu uso imediatamente e procurar ajuda médica ou o pronto socorro mais próximo.',
    indItem0: 'Gripe',
    indItem1: 'Vírus influenza',
    indItem2: 'Vírus H1N1',
    nIndItem3: 'Alérgicos',
    nIndItem4: 'Alérgicos a lactose',
    nIndItem5: 'Alérgicos a zanamivir',
})
const newInformations15 = informations.create({
    title: 'Azitromicina',
    image: 'https://i.im.ge/2023/12/01/CAsy1z.IMG-8404EDIT-removebg-preview.png',
    summary: 'Azitromicina é um medicamento antibiótico, de uso oral, indicado para o tratamento de diversas infecções. Também conhecida como azitromicina di-hidratada, é comercializada em comprimidos revestidos com 500mg do princípio ativo...',
    mediText: 'Azitromicina é um medicamento antibiótico, de uso oral, indicado para o tratamento de diversas infecções. Também conhecida como azitromicina di-hidratada, é comercializada em comprimidos revestidos com 500mg do princípio ativo, entre outros formatos.<br>Azitromicina di-hidratada é indicada no tratamento de infecções causadas por bactérias sensíveis à azitromicina, nos seguintes quadros:<br>Infecções do trato respiratório inferior (brônquios e pulmões) e superior (nariz, faringe, laringe e traqueia), incluindo sinusite (infecção nos seios da face), faringite (inflamação da faringe) ou amigdalite (inflamação das amígdalas);<br>Infecções da pele e tecidos moles (músculos, tendões, gordura);<br>Otite média (infecção do ouvido médio) aguda;<br>Doenças sexualmente transmissíveis não complicadas nos genitais de homens e mulheres, causadas pelas bactérias Chlamydia trachomatis e Neisseria gonorrhoeae.',
    indItem0: 'Pneumonia',
    indItem1: 'Bronquite',
    indItem2: 'Sinusite',
    nIndItem3: 'Durante gravidez',
    nIndItem4: 'Infecções virais',
    nIndItem5: 'Doenças renais',
})
const newInformations16 = informations.create({
    title: 'Amoxicilina',
    image: 'https://i.im.ge/2023/12/01/CAs4vr.generico-amoxicilina-po-susp-250mg-5ml-150ml-removebg-preview.png',
    summary: 'Amoxicilina 500 mg é um antibiótico indicado para o tratamento de uma gama de infecções causadas por bactérias. O medicamento é comercializado na forma de cápsulas não mastigáveis.<br>Este medicamento, antibiótico...',
    mediText: 'Amoxicilina 500 mg é um antibiótico indicado para o tratamento de uma gama de infecções causadas por bactérias. O medicamento é comercializado na forma de cápsulas não mastigáveis.<br>Este medicamento, antibiótico eficaz contra grande variedade de bactérias, é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina. Entretanto, seu médico pode receitar este medicamento para outro uso.<br>Gram-positivos<br>Aeróbios: Enterococcus faecalis, Streptococcus pneumoniae, Streptococcus pyogenes, Streptococcus viridans, Staphylococcus aureus sensível a penicilina, espécies de Corynebacterium, Bacillus anthracis, Listeria monocytogenes.<br>Anaeróbios: espécies de Clostridium.<br>Gram-negativos<br>Aeróbios: Haemophilus influenzae, Escherichia coli, Proteus mirabilis, espécies de Salmonella, espécies de Shigella, Bordetella pertussis, espécies de Brucella, Neisseria gonorrhoeae, Neisseria meningitidis, Pasteurella septica, Vibrio cholerae, Helicobacter pylori.<br>A amoxicilina é suscetível à degradação por betalactamases, portanto o espectro de atividade do medicamento não abrange os microrganismos que produzem essas enzimas, ou seja, não inclui o Staphylococcus resistente e todas as cepas de Pseudomonas, Klebsiella e Enterobacter.',
    indItem0: 'Amigdalite',
    indItem1: 'Vaginite',
    indItem2: 'Sinusite',
    nIndItem3: 'Alérgicos',
    nIndItem4: 'Alergicos à amoxicilina',
    nIndItem5: 'Náuseas',
})
const newInformations17 = informations.create({
    title: 'Penicilina',
    image: 'https://i.im.ge/2023/12/01/CA7OQp.106566703-removebg-preview.png',
    summary: 'As penicilinas são antibióticos do grupo dos betalactâmicos profusamente utilizados no tratamento de infecções causadas por bactérias sensíveis. A maioria das penicilinas são derivadas do ácido 6-aminopenicilânico, diferenciando-se umas das outras conforme a substituição na cadeia lateral do seu grupo amino...',
    mediText: 'As penicilinas são antibióticos do grupo dos betalactâmicos profusamente utilizados no tratamento de infecções causadas por bactérias sensíveis. A maioria das penicilinas são derivadas do ácido 6-aminopenicilânico, diferenciando-se umas das outras conforme a substituição na cadeia lateral do seu grupo amino.<br>Em relação à farmacocinética, as penicilinas apresentam várias diferenças, as quais definem seu uso clínico:<br>Benzilpenicilinas ou penicilinas naturais;<br>Penicilinas resistentes às penicilinases;<br>Penicilinas de amplo espectro, obtidas por associação com inibidores de ß-lactamase.<br>A penicilina benzatina é um antibiótico que tem uma ação bastaste restrita na prática médica. Atualmente, ela é indicada em um número pequeno de infeções, tais como: Sífilis; Amigdalites e faringites bacterianas; Impetigo; Febre reumática.',
    indItem0: 'Infecção de garganta',
    indItem1: 'Otite',
    indItem2: 'Cistite',
    nIndItem3: 'Hipersensibilidade ',
    nIndItem4: 'Alérgicos',
    nIndItem5: 'Infecções',
})
const newInformations18 = informations.create({
    title: 'Metformina',
    image: 'https://i.im.ge/2023/12/01/CCP5xM.metformina-500mg-60-capsulas-a87-removebg-preview.png',
    summary: 'A metformina é um medicamento antidiabético oral, utilizados para controlar os níveis de glicemia, ou seja, açúcar no sangue, que são principalmente tratados em pacientes com diabetes tipo...',
    mediText: 'A metformina é um medicamento antidiabético oral, utilizados para controlar os níveis de glicemia, ou seja, açúcar no sangue, que são principalmente tratados em pacientes com diabetes tipo 1 e tipo 2. Podem tratar também síndrome dos ovários policísticos e alguns casos de obesidade, mas tudo sob indicação médica. Ele é encontrado nas farmácias em forma de comprimido de 500 a 1000 mg e geralmente ele pode ser reconhecido por outros nomes comerciais, como Glifage, Diaformin, Formet e entre outros ou até pelo próprio nome genérico cloridrato de metformina.<br>Esse antibiótico ajuda o paciente a reduzir os níveis de açúcar no sangue, auxiliando no acúmulo de gordura nas artérias, fazendo com que melhore os valores de gordura no sangue, esse tipo de remédio é mais indicado para os tratamentos de Diabete tipo 2, Síndrome dos ovários policísticos e Resistência à insulina.<br>o remédio pode ser ingerido por via oral, durante ou depois das refeições, ele inicia-se com doses pequenas e depois sob acompanhamento médico pode ir aumentado as does, mas pode-se depender de cada caso.<br>ependendo de cada paciente pode-se ocorrer problemas digestivos como vômitos, diarreia, dor de arriga, perda de paladar, perda de apetite e náusea.',
    indItem0: 'Diabéticos',
    indItem1: 'Resistência à insulina',
    indItem2: 'Pré-diabéticos',
    nIndItem3: 'Doença renal',
    nIndItem4: 'Doenças no fígado',
    nIndItem5: 'Alérgicos',
})
const newInformations19 = informations.create({
    title: 'Tamiflu',
    image: 'https://i.im.ge/2023/12/01/CCErGP.00764012801486L-removebg-preview.png',
    summary: 'O tamiflu é um remédio antiviral, no qual ele impede a multiplicação e bloqueia as ações dos vírus influenza A e B e H1N1 ou H3N2 no seu organismo, ele é indicado para a prevenção da gripe...',
    mediText: 'O tamiflu é um remédio antiviral, no qual ele impede a multiplicação e bloqueia as ações dos vírus influenza A e B e H1N1 ou H3N2 no seu organismo, ele é indicado para a prevenção da gripe. <br>Esse remédio pode ser encontrado em drogarias ou farmácias, no formato de cápsulas de 30, 45 ou 75 mg, sendo usado em crianças e adultos, sob indicação médica. como citado, esse medicamento trata os vírus da influenza A e B e o vírus H1N1 ou H3N2, ajudando a reduzir os sintomas causados por ele.<br>O remédio tamiflu não substitui a vacina da gripe, por isso é de suma importância se vacinar em posto de saúde. <br>Ele é ingerido por via oral, com o auxílio de um copo de água, podendo ser antes ou após as refeições. Mas é recomendado que a cápsula seja tomada após a alimentação.<br>Lembrando que a forma de tomar vai de pessoa a pessoa, ou seja, antes de tudo consulte um especialista antes.<br>dependendo de cada paciente durante o tratamento pode surgir dor de cabeça, vômitos, dor no corpo e entre outros.<br>Se crian ingerir esse tipo de medicamento deve-se ficar de olho ao humor e ao comportamento da criança, como tremores, confusão mental, alucinações etc. <br>Se caso o remédio causar alergia e apresentar os sintomas de dificuldade para respirar, sensação de garganta fechada, inchaço na boca ou no rosto, deve-se procurar um médico imediatamente.',
    indItem0: 'Gripe',
    indItem1: 'Influenza',
    indItem2: 'H1N1',
    nIndItem3: 'Durante a gravidez',
    nIndItem4: 'Doenças nos rins',
    nIndItem5: 'Doenças no fígado',
})
const newInformations20 = informations.create({
    title: 'Risedronato',
    image: 'https://i.im.ge/2023/12/01/CCEKE1.risedronato-15mg-30-capsulas-647-removebg-preview.png',
    summary: 'O Risedronato sódico é indicado para tratar e prevenir a osteoporose em mulheres pós-menopausa, reduzindo o risco de fraturas vertebrais e não vertebrais. Também é usado para tratar...',
    mediText: 'O Risedronato sódico é indicado para tratar e prevenir a osteoporose em mulheres pós-menopausa, reduzindo o risco de fraturas vertebrais e não vertebrais. Também é usado para tratar a osteoporose em homens com alto risco de fraturas e em mulheres pós-menopausa com osteoporose estabelecida, reduzindo o risco de fraturas de quadril. <br>O Risedronato sódico é um bisfosfonato piridinil que inibe a perda de material ósseo e preserva a mineralização óssea.<br>O Risedronato sódico não deve ser usado por pacientes com hipersensibilidade aos componentes da fórmula, hipocalcemia, durante a gravidez e lactação, e por pacientes com insuficiência renal grave. Mulheres grávidas não devem usar este medicamento sem orientação médica.',
    indItem0: 'Osteoporose',
    indItem1: 'Maiores de idade',
    indItem2: 'Pós-menopausa',
    nIndItem3: 'Durante gravidez',
    nIndItem4: 'Falta de vitamina D',
    nIndItem5: 'Insuficiência renal',
})
const newInformations21 = informations.create({
    title: 'Alendronato',
    image: 'https://i.im.ge/2023/12/01/CCxF8F.galendronato-de-sodio-70-mg-4-cpr-removebg-preview.png',
    summary: 'Este medicamento é indicado para o tratamento da osteoporose em mulheres na pós menopausa com osteoporose para prevenir fraturas, inclusive do quadril e da coluna...',
    mediText: 'Este medicamento é indicado para o tratamento da osteoporose em mulheres na pós menopausa com osteoporose para prevenir fraturas, inclusive do quadril e da coluna (fraturas vertebrais por compressão). Também é indicado para o tratamento da osteoporose em homens para prevenir fraturas.<br>O Alendronato de sódio é um potente inibidor da reabsorção óssea, pertencente à classe dos bisfosfonatos, que auxilia na reconstituição dos ossos e reduz o risco de fraturas.<br>Não deve ser utilizado por indivíduos com distúrbios no esôfago, incapacidade de permanecer em pé ou sentado por 30 minutos, hipersensibilidade aos componentes do produto e deficiência de cálcio no sangue.',
    indItem0: 'Osteoporose',
    indItem1: 'Pós-menopausa',
    indItem2: 'Maiores de idade',
    nIndItem3: 'Distúrbios no esôfago',
    nIndItem4: 'Hipersensibilidade',
    nIndItem5: 'Alérgicos',
})

// const updateInformations = informations.update({
//     title: 'Estatinas',
//     image: 'https://i.im.ge/2023/11/30/CPuyUT.3-MB-Editors-Picks-24-02-2022-1-Statin-Pill-iStock-1221184048-removebg-preview.png',
//     summary: 'As estatinas são medicamentos utilizados principalmente para reduzir os níveis de colesterol no sangue. Elas atuam inibindo uma enzima chamada HMG-CoA redutase, que é responsável pela produção...',
//     mediText: 'As estatinas são medicamentos utilizados principalmente para reduzir os níveis de colesterol no sangue. Elas atuam inibindo uma enzima chamada HMG-CoA redutase, que é responsável pela produção de colesterol no fígado.<br>As estatinas bloqueiam a ação da enzima HMG-CoA redutase, reduzindo a produção de colesterol no fígado. Isso faz com que o fígado absorva mais colesterol da corrente sanguínea, diminuindo os níveis de colesterol total no sangue e, especialmente, o colesterol LDL, conhecido como “colesterol ruim “.<br>As estatinas são geralmente prescritas para pessoas com alto colesterol ou risco de doença cardiovascular.<br>Embora as estatinas sejam geralmente seguras, elas podem não ser adequadas para pessoas com certas condições médicas, como doenças hepáticas ou renais graves. Além disso, as estatinas são contraindicadas durante a gravidez e a amamentação.',
//     indItem0: 'Alto colesterol',
//     indItem1: 'Aterosclerose',
//     indItem2: 'Diabetes',
//     nIndItem3: 'Durante a gravidez',
//     nIndItem4: 'Doenças hepáticas',
//     nIndItem5: 'Doenças renais',
//     where: {id: 10}
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