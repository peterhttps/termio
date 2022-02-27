const winWords = [
  'PLENA',
  'DEPOR',
  'DAQUI',
  'BOTAR',
  'LEVAR',
  'AFINS',
  'OLHAR',
  'PASMA',
  'VISSE',
  'POMAR',
  'VELOZ',
  'BANZO',
  'PLUMO',
  'SALDO',
  'TANTO',
  'ENFIM',
  'ANELO',
  'CHATA',
  'ALGOZ',
  'VALER',
  'REVER',
  'ASTRO',
  'SIGNO',
  'REMIR',
  'CHAMA',
  'PUDER',
  'SUPOR',
  'BOLSO',
  'MESSE',
  'BUSCA',
  'RURAL',
  'RELES',
  'RUBRO',
  'TOCAR',
  'PAVOR',
  'VEDAR',
  'CEITA',
  'LUTAR',
  'ANTRO',
  'ANUIR',
  'FORTE',
  'AMADA',
  'POSSO',
  'FITAR',
  'SINTA',
  'QUOTA',
  'BREGA',
  'LOCUS',
  'POUCO',
  'AVISO',
  'MUITO',
  'FIRMA',
  'MUDAR',
  'FRUIR',
  'TENRA',
  'VAZIO',
  'CLEAN',
  'CLOSE',
  'CREDO',
  'PEITO',
  'VALHA',
  'BEDEL',
  'RISCO',
  'MUNDO',
  'STAND',
  'DOUTO',
  'MANIA',
  'RESTO',
  'CLARO',
  'MESMO',
  'OPTAR',
  'GENRO',
  'CALOR',
  'CAUDA',
  'REZAR',
  'AINDA',
  'ARADO',
  'PRUMO',
  'XUCRO',
  'LASSO',
  'LIGHT',
  'QUASE',
  'CAMPA',
  'AUTOS',
  'JAZER',
  'MONTA',
  'REGER',
  'VULGO',
  'GLOSA',
  'PUXAR',
  'ZUMBI',
  'PUNHA',
  'STAFF',
  'LIAME',
  'GARBO',
  'ATUAR',
  'MINHA',
  'VERBO',
  'HOSTE',
  'ORNAR',
  'PARDO',
  'TINHA',
  'BOATO',
  'APRAZ',
  'LUCRO',
  'COMUM',
  'IMPOR',
  'FINDO',
  'FARDO',
  'DRAMA',
  'CERTA',
  'FACTO',
  'AXILA',
  'RELER',
  'JUDEU',
  'FLUIR',
  'COMBO',
  'FEUDO',
  'TEMPO',
  'BESTA',
  'AMIGO',
  'BURRO',
  'PSICO',
  'PRONO',
  'MENOS',
  'CULPA',
  'SONSO',
  'SESTA',
  'PROBO',
  'MIMOS',
  'TUMBA',
  'COVIL',
  'FRUTO',
  'GUETO',
  'CESTA',
  'PRECE',
  'TANGE',
  'CETRO',
  'MOLHO',
  'MISTO',
  'NARCO',
  'SINTO',
  'LESSE',
  'VENHA',
  'HOMEM',
  'AXIAL',
  'VETAR',
  'PINHO',
  'TENDO',
  'CURSO',
  'ORDEM',
  'VIMOS',
  'CASTA',
  'NOSSA',
  'TRAGO',
  'DESSA',
  'CIOSO',
  'SUTIL',
  'SINAL',
  'ANAIS',
  'PEDIR',
  'REDOR',
  'VETOR',
  'PIQUE',
  'HORDA',
  'VOLTA',
  'ARROZ',
  'CORAL',
  'ONTEM',
  'TURVO',
  'COROA',
  'COEVO',
  'SEGUE',
  'BRUTA',
  'LEGAL',
  'SORTE',
  'GERAR',
  'BATER',
  'MARCA',
  'SUMIR',
  'BRIGA',
  'GERIR',
  'COITO',
  'TRETA',
  'BRISA',
  'IDEAL',
  'REPOR',
  'AUTOR',
  'CASAL',
  'MESMA',
  'LEITE',
  'VIGER',
  'TURVA',
  'PRESA',
  'VORAZ',
  'BOLSA',
  'FENDA',
  'REFIL',
  'PRETO',
  'TEMER',
  'PLAGA',
  'AMBAS',
  'FALAR',
  'SALVE',
  'MANTO',
  'PESAR',
  'HUMOR',
  'MIMAR',
  'CAIXA',
  'APEAR',
  'NOITE',
  'DEIXA',
  'TENRO',
  'FARTO',
  'LUGAR',
  'CANTO',
  'VISTA',
  'FUNDO',
  'CORNO',
  'OUSAR',
  'EXAME',
  'RAIVA',
  'FUGIR',
  'BANDO',
  'LIMPO',
  'JUSTO',
  'PASMO',
  'COSMO',
  'COCHO',
  'TRAMA',
  'SELAR',
  'ESTAR',
  'MESES',
  'ENTRE',
  'SUAVE',
  'TARDE',
  'AFETO',
  'MATIZ',
  'ABRIU',
  'TROCA',
  'FIXAR',
  'FRASE',
  'SALVA',
  'AMENO',
  'MANGA',
  'USURA',
  'SEIXO',
  'ESTRO',
  'GRATO',
  'TACHA',
  'LOUSA',
  'URGIA',
  'DOIDO',
  'PRIME',
  'EXATO',
  'VIRIL',
  'LENDA',
  'JIRAU',
  'LINDA',
  'VIVER',
  'JOVEM',
  'DESSE',
  'VAROA',
  'BRADO',
  'FAVOR',
  'PRAGA',
  'GERAL',
  'SEARA',
  'FESTA',
  'SURTO',
  'VIADO',
  'GURIA',
  'SANTO',
  'LAICO',
  'TOMAR',
  'VEMOS',
  'GUISA',
  'DESTA',
  'PERDA',
  'CASAR',
  'GRAVE',
  'ASSAR',
  'CARDO',
  'MEIGO',
  'ARDIL',
  'MAIOR',
  'MORTE',
  'MONTE',
  'VERDE',
  'FALSO',
  'TESTE',
  'VASTA',
  'CACHO',
  'CHATO',
  'FEROZ',
  'CARGO',
  'RIVAL',
  'ROUPA',
  'VULTO',
  'CATRE',
  'PARTE',
  'LIVRO',
  'ATROZ',
  'SANAR',
  'GOZAR',
  'LOURO',
  'CALVO',
  'MORAR',
  'FINAL',
  'TECER',
  'VASTO',
  'PAIRA',
  'SEGAR',
  'MAGNA',
  'LIVRE',
  'ARCAR',
  'PEIXE',
  'FIRME',
  'CLAVA',
  'MOCHO',
  'FORRO',
  'CHAGA',
  'OUVIR',
  'TEXTO',
  'LIGAR',
  'POSSA',
  'GOSTO',
  'PARVO',
  'DENGO',
  'BRAVO',
  'IMUNE',
  'SABOR',
  'JEJUM',
  'PROTO',
  'NEGAR',
  'PODAR',
  'MOURO',
  'VINHA',
  'LIMBO',
  'HAVER',
  'VENHO',
  'LEIGO',
  'ANZOL',
  'DEVIR',
  'SAIBA',
  'TORNA',
  'RENTE',
  'QUITE',
  'SWING',
  'LEITO',
  'HOBBY',
  'FINDA',
  'CARRO',
  'FOLHA',
  'SABER',
  'AFORA',
  'JOGAR',
  'GENTE',
  'NESTA',
  'LESTO',
  'PEDRA',
  'BERRO',
  'VELHA',
  'FARSA',
  'FOLGA',
  'ENJOO',
  'SIGLA',
  'FAZER',
  'GROTA',
  'HASTE',
  'PENSO',
  'SENDA',
  'VELHO',
  'BEATA',
  'REVEL',
  'INATA',
  'LONGO',
  'COISA',
  'ADEUS',
  'AREIA',
  'ETNIA',
  'TERMO',
  'SABIA',
  'TENSO',
  'MEDIR',
  'SEITA',
  'CANIL',
  'FOREM',
  'ATIVO',
  'ARFAR',
  'FEIXE',
  'MANHA',
  'DENSA',
  'FEITO',
  'CANSO',
  'CARTA',
  'FATAL',
  'FAROL',
  'AMENA',
  'TENDE',
  'ULTRA',
  'VITAL',
  'PLENO',
  'DESTE',
  'PASSE',
  'GRATA',
  'TERRA',
  'RITMO',
  'TERNO',
  'CACTO',
  'RETER',
  'VIGIA',
  'AMBOS',
  'PICHE',
  'MANSO',
  'PONTO',
  'FUGAZ',
  'SEXTO',
  'FINJO',
  'FERPA',
  'ARDIS',
  'JUNCO',
  'BAIXO',
  'IDOSO',
  'AMIGA',
  'ACESO',
  'SOLTO',
  'PLANO',
  'FACHO',
  'TRIBO',
  'ARDOR',
  'SUPER',
  'TURMA',
  'CABER',
  'AGORA',
  'ADVIR',
  'PIADA',
  'VISTO',
  'VIGOR',
  'LETRA',
  'INATO',
  'PROLE',
  'FICHA',
  'COZER',
  'ABUSO',
  'SADIO',
  'SONSA',
  'SARAU',
  'FUGIU',
  'LINHA',
  'AGUDO',
  'IDEIA',
  'PENCA',
  'BULIR',
  'NESSE',
  'MORAL',
  'RETRO',
  'AVIAR',
  'TENHA',
  'FAINA',
  'SOLTA',
  'PERCO',
  'SONHO',
  'DERAM',
  'VIRAM',
  'SOLDO',
  'VIRIA',
  'PONHA',
  'CULTA',
  'VOSSO',
  'AMPLO',
  'ASILO',
  'CITAR',
  'MONGE',
  'MACHO',
  'ANDAR',
  'BUNDA',
  'VALIA',
  'PORTE',
  'PRESO',
  'PARCA',
  'HIATO',
  'ACIMA',
  'ATUAL',
  'CHULO',
  'IRADO',
  'ALADO',
  'JUSTA',
  'FALTA',
  'CRIAR',
  'CABAL',
  'GOLPE',
  'LAZER',
  'LETAL',
  'BUCHO',
  'RISTE',
  'CINTO',
  'CALMA',
  'VADIA',
  'AROMA',
  'GESTO',
  'COUSA',
  'JAZIA',
  'PECHA',
  'BRUMA',
  'FAUNA',
  'NEGRO',
  'CRISE',
  'COSER',
  'TCHAU',
  'SENSO',
  'PAJEM',
  'LINDO',
  'PARVA',
  'CERNE',
  'SURJA',
  'HAVIA',
  'RELVA',
  'FICAR',
  'CALDA',
  'SUGAR',
  'PORCA',
  'FAZIA',
  'PRAXE',
  'DOGMA',
  'CHEIA',
  'SEIVA',
  'PODER',
  'CARMA',
  'PUGNA',
  'ETAPA',
  'NOSSO',
  'CRIVO',
  'EXTRA',
  'CENSO',
  'NUNCA',
  'RAPAZ',
  'NATAL',
  'APELO',
  'VERSA',
  'MECHE',
  'TRUPE',
  'ARTUR',
  'BANAL',
  'FALHA',
  'MACRO',
  'PRADO',
  'AJUDA',
  'CORAR',
  'PULHA',
  'CHULA',
  'TOSCO',
  'VAGAR',
  'TRAJE',
  'ASSAZ',
  'SILVO',
  'FROTA',
  'SERVO',
  'POSTO',
  'PARCO',
  'PROVA',
  'MINAR',
  'PESTE',
  'DORSO',
  'MAGIA',
  'HONRA',
  'JEITO',
  'VENAL',
  'PACTO',
  'PRAIA',
  'CHAVE',
  'LOUCO',
  'ELITE',
  'FATOS',
  'LIDAR',
  'ODIAR',
  'BANTO',
  'PERTO',
  'NORMA',
  'COMER',
  'ILESO',
  'AONDE',
  'FONTE',
  'CAMPO',
  'CERTO',
  'VAZIA',
  'ESGAR',
  'FUROR',
  'TOADA',
  'VELAR',
  'ZELAR',
  'OPACO',
  'FATOR',
  'NUVEM',
  'CEDER',
  'FOSSO',
  'CONTO',
  'VENDO',
  'BRAVA',
  'ECOAR',
  'TEMOR',
  'MOVER',
  'CLIMA',
  'CULTO',
  'HORTO',
  'LAVRA',
  'ITENS',
  'MACIO',
  'TUTOR',
  'BAIXA',
  'POMPA',
  'ALUDE',
  'PASSO',
  'VERVE',
  'PUDOR',
  'MARCO',
  'GRUPO',
  'SALMO',
  'PEGAR',
  'TODOS',
  'COESO',
  'BAZAR',
  'LABOR',
  'OBTER',
  'REGRA',
  'TROCO',
  'DIZER',
  'CASTO',
  'MOTIM',
  'PISAR',
  'CAUSA',
  'ASSIM',
  'TENTO',
  'MALTA',
  'VEZES',
  'NESSA',
  'FLORA',
  'CHEIO',
  'DENSO',
  'CRIME',
  'MOSTO',
  'MORFO',
  'URGIR',
  'CONTA',
  'TETRA',
  'CUNHO',
  'PAPEL',
  'MASSA',
  'AUDAZ',
  'TENAZ',
  'RIGOR',
  'CALMO',
  'MUSEU',
  'ALGUM',
  'PEITA',
  'FAZES',
  'PAIOL',
  'POETA',
  'ABRIR',
  'ESTIO',
  'APEGO',
  'DROPS',
  'SUPRA',
  'NOBRE',
  'POSSE',
  'IGUAL',
  'PRAZO',
  'CORJA',
  'INTER',
  'LOGRO',
  'TORPE',
  'CHEFE',
  'CIVIL',
  'EXIJO',
  'FOSSE',
  'BIOMA',
  'LAUDO',
  'CHUVA',
  'TIRAR',
  'SENIL',
  'PORTA',
  'EXPOR',
  'ATEIA',
  'VIRAR',
  'SAGAZ',
  'POBRE',
  'CENHO',
  'BRUTO',
  'ERETO',
  'VIVAZ',
  'ROUCA',
  'TRAGA',
  'PILAR',
  'LARGO',
  'GABAR',
  'LONGE',
  'NESTE',
  'CRUEL',
  'COVER',
  'SULCO',
  'CORPO',
  'MENTE',
  'CLERO',
  'RENDA',
  'ACHAR',
  'PENTA',
  'SOBRE',
  'RESES',
  'ROGAR',
  'PAUTA',
  'GLEBA',
  'FELIZ',
  'UFANO',
  'DEVER',
  'ACASO',
  'QUEDA',
  'NICHO',
  'CAPAZ',
  'SETOR',
  'PASSA',
  'ESCOL',
  'LOCAL',
  'POEMA',
  'VERSO',
  'SENTE',
  'RUMOR',
  'BURRA',
  'ROCHA',
  'CISMA',
  'FILHO',
  'PLEBE',
  'VENTO',
  'VADIO',
  'DIGNO',
  'AFAGO',
  'ALUNO',
  'BARRO',
  'BREVE',
  'ACESA',
  'BROXA',
  'COESA',
  'FAIXA',
  'TIVER',
  'BEIJO',
  'ANEXO',
  'TORSO',
  'FORMA',
  'VISAR',
  'SALVO',
  'BICHO',
  'MORRO',
  'LENTO',
  'AMADO',
  'FLUXO',
  'GRAMA',
  'CORSO',
  'REINO',
  'LAPSO',
  'XEQUE',
  'DETER',
  'CIFRA',
  'CICLO',
  'ORGIA',
  'ROUND',
  'ADIAR',
  'XIBIU',
  'JUNTO',
  'VALOR',
  'MEXER',
  'OCASO',
  'VERBA',
  'HOUVE',
  'SENDO',
  'URDIR',
  'SUBIR',
  'TRATO',
  'PARAR',
  'GEMER',
  'CERCA',
  'NAVIO',
  'OUTRO',
  'LOGOS',
  'APOIO',
  'FOLIA',
  'FOSSA',
  'MOLDE',
  'ANTES',
  'FEITA',
  'FARTA',
  'DESDE',
  'PROSA',
  'AVARO',
  'USUAL',
  'TURBA',
  'SEXTA',
  'BIRRA',
  'MEIGA',
  'CUSTO',
  'BRABO',
  'FRACO',  
];

export default winWords;