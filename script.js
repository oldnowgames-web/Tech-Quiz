// --- TECH QUIZ DATASET (10 CATEGORIES, 100 QUESTIONS) ---
        const quizData = [
            {
                        "id": "hardware",
                        "name": "Hardware e componentes",
                        "icon": "fa-solid fa-microchip",
                        "color": "from-cyan-500 to-blue-600",
                        "emoji": "🧩",
                        "questions": [
                                    {
                                                "q": "Qual é a principal função do processador (CPU) em um computador?",
                                                "options": [
                                                            "Distribuir energia elétrica",
                                                            "Armazenar arquivos permanentemente",
                                                            "Exibir imagens no monitor",
                                                            "Executar instruções e processar dados"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Para que serve principalmente a memória RAM?",
                                                "options": [
                                                            "Armazenar temporariamente dados e programas em uso",
                                                            "Guardar arquivos mesmo com o computador desligado",
                                                            "Controlar a velocidade da internet",
                                                            "Substituir o processador nas operações"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é uma característica típica de um SSD em comparação com um HD mecânico?",
                                                "options": [
                                                            "Precisa de fitas magnéticas",
                                                            "Não possui partes mecânicas móveis para ler os dados",
                                                            "Só funciona como memória temporária",
                                                            "Utiliza discos magnéticos giratórios"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual componente é especializado em processar gráficos e imagens?",
                                                "options": [
                                                            "Placa de rede",
                                                            "Fonte de alimentação",
                                                            "GPU",
                                                            "Memória ROM"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que significa a sigla GPU?",
                                                "options": [
                                                            "Global Program Unit",
                                                            "Graphical Personal User",
                                                            "General Power Utility",
                                                            "Graphics Processing Unit"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual é a função principal da placa-mãe?",
                                                "options": [
                                                            "Armazenar cópias de segurança na nuvem",
                                                            "Refrigerar diretamente todos os componentes",
                                                            "Conectar e permitir a comunicação entre os componentes",
                                                            "Converter sinais Wi-Fi em energia"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que pode acontecer quando um computador tem pouca memória RAM para os programas abertos?",
                                                "options": [
                                                            "A capacidade do SSD aumenta automaticamente",
                                                            "O processador passa a funcionar como placa de vídeo",
                                                            "O sistema pode ficar lento ao precisar usar armazenamento como apoio",
                                                            "O monitor deixa de consumir energia"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual é a função da fonte de alimentação de um computador?",
                                                "options": [
                                                            "Executar o sistema operacional",
                                                            "Armazenar o BIOS em arquivos pessoais",
                                                            "Aumentar a memória RAM disponível",
                                                            "Converter a energia da tomada em tensões adequadas aos componentes"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é overclock?",
                                                "options": [
                                                            "Compactar arquivos automaticamente",
                                                            "Operar um componente acima de sua frequência padrão para tentar obter mais desempenho",
                                                            "Desligar núcleos do processador permanentemente",
                                                            "Reduzir a capacidade de armazenamento de um SSD"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é a diferença geral entre RAM e ROM?",
                                                "options": [
                                                            "RAM é volátil; ROM mantém dados mesmo sem energia",
                                                            "As duas perdem todos os dados quando desligadas",
                                                            "ROM é usada exclusivamente para guardar vídeos",
                                                            "RAM é somente para leitura; ROM é sempre temporária"
                                                ],
                                                "correct": 0
                                    }
                        ]
            },
            {
                        "id": "programacao",
                        "name": "Programação e lógica",
                        "icon": "fa-solid fa-code",
                        "color": "from-violet-500 to-blue-600",
                        "emoji": "💻",
                        "questions": [
                                    {
                                                "q": "O que é programação?",
                                                "options": [
                                                            "A criação de instruções que um computador pode executar",
                                                            "Apenas o desenho de interfaces",
                                                            "O processo de montar fisicamente um computador",
                                                            "A instalação de cabos de rede"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que é um algoritmo?",
                                                "options": [
                                                            "Uma sequência organizada de passos para resolver um problema",
                                                            "Um componente físico do processador",
                                                            "Um tipo de memória permanente",
                                                            "Um programa usado somente para navegar na internet"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Para que serve uma variável em um programa?",
                                                "options": [
                                                            "Conectar o computador a uma rede Wi-Fi",
                                                            "Guardar um valor que pode ser utilizado e, em muitos casos, alterado",
                                                            "Substituir todas as funções do código",
                                                            "Aumentar a velocidade física do processador"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual estrutura permite executar um bloco de código somente quando uma condição é satisfeita?",
                                                "options": [
                                                            "Comentário",
                                                            "Laço de repetição",
                                                            "Declaração de classe",
                                                            "Estrutura condicional"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual é a finalidade de um laço de repetição?",
                                                "options": [
                                                            "Executar um bloco de instruções repetidamente enquanto uma condição ou regra permitir",
                                                            "Apagar todas as variáveis",
                                                            "Criar automaticamente uma conexão de internet",
                                                            "Transformar código em imagem"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Em termos gerais, o que caracteriza uma linguagem compilada?",
                                                "options": [
                                                            "Ela funciona sem nenhuma tradução ou interpretação",
                                                            "O código só pode ser escrito dentro do navegador",
                                                            "O código é traduzido antes da execução para uma forma executável ou intermediária",
                                                            "Ela não permite criar variáveis"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que é uma função na programação?",
                                                "options": [
                                                            "Um erro que interrompe o programa",
                                                            "Um bloco reutilizável de código que pode realizar uma tarefa",
                                                            "Um arquivo que só armazena imagens",
                                                            "Uma peça instalada na placa-mãe"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que significa encontrar um bug em um programa?",
                                                "options": [
                                                            "Aumentar a memória disponível",
                                                            "Atualizar automaticamente o sistema operacional",
                                                            "Criar uma nova linguagem de programação",
                                                            "Identificar uma falha ou comportamento inesperado no software"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual é uma ideia central da programação orientada a objetos (POO)?",
                                                "options": [
                                                            "Organizar o código usando classes e objetos que agrupam dados e comportamentos",
                                                            "Executar todo o código apenas em planilhas",
                                                            "Escrever programas sem variáveis ou funções",
                                                            "Substituir algoritmos por componentes eletrônicos"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Em uma fila (queue) tradicional, qual regra determina a ordem de saída dos elementos?",
                                                "options": [
                                                            "Os elementos saem sempre em ordem alfabética",
                                                            "A ordem é escolhida aleatoriamente",
                                                            "FIFO: o primeiro a entrar é o primeiro a sair",
                                                            "LIFO: o último a entrar é o primeiro a sair"
                                                ],
                                                "correct": 2
                                    }
                        ]
            },
            {
                        "id": "web",
                        "name": "Desenvolvimento web",
                        "icon": "fa-solid fa-globe",
                        "color": "from-sky-500 to-cyan-400",
                        "emoji": "🌐",
                        "questions": [
                                    {
                                                "q": "Para que serve o HTML no desenvolvimento de sites?",
                                                "options": [
                                                            "Controlar exclusivamente o banco de dados",
                                                            "Definir a estrutura e o conteúdo da página",
                                                            "Substituir o sistema operacional do servidor",
                                                            "Criptografar automaticamente toda a conexão"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é a principal função do CSS?",
                                                "options": [
                                                            "Executar consultas SQL no servidor",
                                                            "Criar conexões físicas com a internet",
                                                            "Armazenar os dados dos usuários",
                                                            "Definir a aparência e a apresentação visual das páginas"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual linguagem é muito utilizada para adicionar interatividade às páginas web?",
                                                "options": [
                                                            "SQL",
                                                            "Assembly",
                                                            "JavaScript",
                                                            "Bash"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que significa a sigla URL?",
                                                "options": [
                                                            "Universal Runtime Language",
                                                            "Uniform Resource Locator",
                                                            "User Reference Link",
                                                            "Unified Routing Line"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que é um navegador web?",
                                                "options": [
                                                            "Uma linguagem usada apenas para estilizar páginas",
                                                            "Um programa usado para acessar e exibir páginas e aplicações da web",
                                                            "Um tipo de banco de dados",
                                                            "Um equipamento que distribui energia elétrica"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual alternativa descreve corretamente front-end e back-end?",
                                                "options": [
                                                            "Front-end é o banco de dados; back-end é o monitor",
                                                            "Back-end é usado exclusivamente para criar animações CSS",
                                                            "Os dois termos significam apenas design gráfico",
                                                            "Front-end cuida da interface; back-end trata regras e operações no servidor"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que significa criar um site responsivo?",
                                                "options": [
                                                            "Impedir o acesso por celulares",
                                                            "Fazer o site funcionar somente em computadores",
                                                            "Aumentar automaticamente a velocidade da conexão",
                                                            "Fazer o layout se adaptar a diferentes tamanhos de tela e dispositivos"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Para que serve uma API?",
                                                "options": [
                                                            "Permitir que sistemas ou aplicações se comuniquem por regras definidas",
                                                            "Impedir que programas troquem informações",
                                                            "Substituir o processador de um servidor",
                                                            "Criar imagens sem receber dados"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é uma função comum de um servidor web?",
                                                "options": [
                                                            "Armazenar exclusivamente a carga da bateria",
                                                            "Receber requisições HTTP e entregar páginas ou recursos",
                                                            "Converter código CSS em componentes físicos",
                                                            "Aumentar a resolução do monitor do visitante"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é uma diferença importante entre HTTP e HTTPS?",
                                                "options": [
                                                            "HTTP sempre exige certificado digital e HTTPS não",
                                                            "HTTPS funciona apenas em redes locais",
                                                            "HTTPS protege a comunicação com criptografia TLS",
                                                            "HTTP é uma linguagem de programação e HTTPS é um banco de dados"
                                                ],
                                                "correct": 2
                                    }
                        ]
            },
            {
                        "id": "ia",
                        "name": "Inteligência artificial",
                        "icon": "fa-solid fa-brain",
                        "color": "from-fuchsia-500 to-violet-600",
                        "emoji": "🧠",
                        "questions": [
                                    {
                                                "q": "O que é inteligência artificial (IA)?",
                                                "options": [
                                                            "Um tipo específico de placa de vídeo",
                                                            "Um sistema que funciona somente sem dados",
                                                            "Uma linguagem obrigatória para criar sites",
                                                            "Uma área que desenvolve sistemas capazes de realizar tarefas associadas a capacidades inteligentes"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é machine learning?",
                                                "options": [
                                                            "Uma área da IA em que modelos aprendem padrões a partir de dados",
                                                            "Um sistema operacional para robôs",
                                                            "Um método de montar computadores manualmente",
                                                            "Um protocolo de transferência de arquivos"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é a função de uma rede neural artificial?",
                                                "options": [
                                                            "Aprender padrões usando unidades computacionais conectadas e organizadas em camadas",
                                                            "Distribuir endereços IP em uma rede",
                                                            "Substituir fisicamente os neurônios humanos",
                                                            "Armazenar arquivos em discos ópticos"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que caracteriza uma IA generativa?",
                                                "options": [
                                                            "Apenas organizar arquivos em pastas",
                                                            "Executar exclusivamente cálculos de soma",
                                                            "Somente identificar a marca de um computador",
                                                            "Produzir conteúdos novos, como textos, imagens, áudio ou código"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Como um chatbot baseado em IA normalmente produz respostas?",
                                                "options": [
                                                            "Lê pensamentos diretamente pela tela",
                                                            "Acessa sempre uma resposta fixa para cada frase",
                                                            "Processa a mensagem e usa um modelo para gerar uma resposta em linguagem natural",
                                                            "Funciona sem qualquer processamento de informação"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que é reconhecimento de imagem em sistemas de IA?",
                                                "options": [
                                                            "Analisar imagens para identificar padrões, objetos ou características",
                                                            "Converter qualquer imagem em uma página HTML",
                                                            "Enviar imagens por Bluetooth sem processamento",
                                                            "Aumentar fisicamente a resolução de uma fotografia impressa"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual alternativa explica a relação entre IA e machine learning?",
                                                "options": [
                                                            "Machine learning é uma área dentro do campo mais amplo da IA",
                                                            "IA é apenas outro nome para memória RAM",
                                                            "IA e machine learning são campos sem nenhuma relação",
                                                            "Machine learning não utiliza dados"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que é processamento de linguagem natural (PLN)?",
                                                "options": [
                                                            "Área que permite a sistemas processar e trabalhar com a linguagem humana",
                                                            "Técnica de resfriamento de processadores",
                                                            "Método de compactar arquivos de vídeo",
                                                            "Protocolo de conexão de impressoras"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que são dados de treinamento de um modelo de IA?",
                                                "options": [
                                                            "Dados usados exclusivamente para desligar o computador",
                                                            "Senhas pessoais que o modelo deve revelar",
                                                            "Exemplos usados no processo de aprendizagem e ajuste do modelo",
                                                            "Arquivos que só podem ser vistos depois da publicação"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que é uma alucinação em uma resposta gerada por IA?",
                                                "options": [
                                                            "Uma falha física obrigatória no monitor",
                                                            "Uma resposta que parece convincente, mas contém informação inventada ou incorreta",
                                                            "Uma técnica para melhorar a conexão Wi-Fi",
                                                            "Um modo de economia de energia"
                                                ],
                                                "correct": 1
                                    }
                        ]
            },
            {
                        "id": "ciberseguranca",
                        "name": "Segurança digital",
                        "icon": "fa-solid fa-shield-halved",
                        "color": "from-emerald-500 to-cyan-500",
                        "emoji": "🛡️",
                        "questions": [
                                    {
                                                "q": "O que é cibersegurança?",
                                                "options": [
                                                            "A criação de efeitos visuais para jogos",
                                                            "Um método para aumentar a capacidade da bateria",
                                                            "A manutenção exclusiva de impressoras",
                                                            "O conjunto de práticas e tecnologias para proteger sistemas, redes e dados"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é phishing?",
                                                "options": [
                                                            "Um tipo de memória de computador",
                                                            "Uma tentativa de enganar pessoas para obter dados ou induzi-las a ações, geralmente por mensagens falsas",
                                                            "Um sistema de backup automático",
                                                            "Uma técnica legítima de compactação de arquivos"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é a função de um antivírus?",
                                                "options": [
                                                            "Detectar, bloquear ou remover softwares maliciosos",
                                                            "Criar senhas iguais para todas as contas",
                                                            "Aumentar a velocidade do processador",
                                                            "Substituir o firewall do roteador em qualquer situação"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que é malware?",
                                                "options": [
                                                            "Software criado para executar ações maliciosas",
                                                            "Um tipo de cabo de rede",
                                                            "Um programa usado somente para desenhar",
                                                            "Uma atualização oficial do sistema operacional"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Por que é importante utilizar senhas fortes e diferentes entre serviços?",
                                                "options": [
                                                            "Para dificultar tentativas de acesso e reduzir o impacto caso uma senha seja descoberta",
                                                            "Para facilitar que outras pessoas adivinhem a senha",
                                                            "Para acelerar o funcionamento da internet",
                                                            "Para eliminar a necessidade de atualizações"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que é autenticação de dois fatores (2FA)?",
                                                "options": [
                                                            "Uma camada de verificação adicional além da senha",
                                                            "O uso da mesma senha em dois sites",
                                                            "Uma forma de desligar o acesso remoto",
                                                            "A criação de duas contas com o mesmo usuário"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é a finalidade da criptografia?",
                                                "options": [
                                                            "Apagar permanentemente todos os dados",
                                                            "Impedir qualquer tipo de cópia de segurança",
                                                            "Transformar dados para que só possam ser compreendidos por quem possui a chave adequada",
                                                            "Aumentar a resolução de arquivos de imagem"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que caracteriza um ataque de ransomware?",
                                                "options": [
                                                            "O malware bloqueia ou criptografa dados e exige pagamento para restaurar o acesso",
                                                            "O invasor apenas altera o papel de parede",
                                                            "O roteador troca automaticamente o canal Wi-Fi",
                                                            "O sistema recebe uma atualização legítima"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é a principal diferença entre um hacker ético e um invasor mal-intencionado?",
                                                "options": [
                                                            "O hacker ético nunca utiliza ferramentas de análise",
                                                            "O hacker ético realiza testes com autorização para encontrar falhas",
                                                            "Não existe diferença de autorização entre eles",
                                                            "O invasor mal-intencionado sempre informa as falhas ao proprietário"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que é uma vulnerabilidade de segurança?",
                                                "options": [
                                                            "Um aviso de bateria fraca",
                                                            "Um recurso que impede todos os ataques",
                                                            "Uma cópia extra de um arquivo",
                                                            "Uma fraqueza que pode ser explorada para comprometer um sistema"
                                                ],
                                                "correct": 3
                                    }
                        ]
            },
            {
                        "id": "robotica",
                        "name": "Robótica e automação",
                        "icon": "fa-solid fa-robot",
                        "color": "from-orange-500 to-amber-400",
                        "emoji": "🤖",
                        "questions": [
                                    {
                                                "q": "O que é robótica?",
                                                "options": [
                                                            "Uma técnica para editar fotografias",
                                                            "A área que envolve projeto, construção, programação e uso de robôs",
                                                            "O estudo exclusivo de redes sociais",
                                                            "Um tipo de armazenamento em nuvem"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é a função de um sensor em um robô?",
                                                "options": [
                                                            "Armazenar permanentemente o código-fonte",
                                                            "Exibir imagens em uma tela externa",
                                                            "Captar informações do ambiente ou do próprio sistema",
                                                            "Transformar energia elétrica em movimento em todos os casos"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que é um atuador?",
                                                "options": [
                                                            "Um tipo de linguagem de programação",
                                                            "Um componente que apenas mede a temperatura",
                                                            "Um dispositivo que transforma um comando ou energia em uma ação física",
                                                            "Um arquivo que armazena dados de sensores"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Para que serve uma placa Arduino?",
                                                "options": [
                                                            "Substituir qualquer computador de alto desempenho",
                                                            "Hospedar sites públicos diretamente na internet",
                                                            "Aumentar a memória RAM de um notebook",
                                                            "Desenvolver projetos eletrônicos programáveis com entradas e saídas"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual alternativa descreve melhor um robô em comparação com uma máquina automática simples?",
                                                "options": [
                                                            "Uma máquina automática nunca pode usar programação",
                                                            "Um robô costuma combinar controle programável, sensores e atuadores para executar tarefas",
                                                            "Robôs funcionam sem energia ou instruções",
                                                            "Todo robô precisa ter aparência humana"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Como um sensor ultrassônico pode ajudar um robô?",
                                                "options": [
                                                            "Armazenando o mapa em memória permanente",
                                                            "Estimando a distância até um objeto pelo tempo de ida e volta do som",
                                                            "Medindo a cor de qualquer objeto com precisão",
                                                            "Transmitindo energia sem fio para os motores"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que é automação industrial?",
                                                "options": [
                                                            "A substituição de toda a produção por trabalho manual",
                                                            "A instalação de aplicativos em celulares pessoais",
                                                            "Uso de sistemas de controle e máquinas para executar processos industriais",
                                                            "A criação de sites para fábricas"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual é a função de um microcontrolador?",
                                                "options": [
                                                            "Armazenar apenas vídeos em alta resolução",
                                                            "Integrar processamento, memória e interfaces para controlar tarefas eletrônicas",
                                                            "Substituir todos os sensores de um circuito",
                                                            "Distribuir endereços IP para a internet"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que é um sistema embarcado?",
                                                "options": [
                                                            "Um computador usado exclusivamente para jogos",
                                                            "Um sistema computacional integrado a um equipamento para desempenhar funções específicas",
                                                            "Uma rede global de servidores públicos",
                                                            "Um programa que só funciona em navegadores"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Como um robô autônomo pode tomar decisões durante uma tarefa?",
                                                "options": [
                                                            "Recebendo obrigatoriamente cada movimento de uma pessoa",
                                                            "Usando dados de sensores e regras ou modelos de controle para escolher ações",
                                                            "Ignorando o ambiente ao seu redor",
                                                            "Funcionando sem software ou circuitos"
                                                ],
                                                "correct": 1
                                    }
                        ]
            },
            {
                        "id": "redes",
                        "name": "Redes e internet",
                        "icon": "fa-solid fa-network-wired",
                        "color": "from-blue-500 to-indigo-500",
                        "emoji": "🔗",
                        "questions": [
                                    {
                                                "q": "O que é uma rede de computadores?",
                                                "options": [
                                                            "Um conjunto de dispositivos conectados para trocar dados e compartilhar recursos",
                                                            "Um tipo de memória do processador",
                                                            "Um sistema que funciona sem conexões",
                                                            "Um programa usado apenas para editar textos"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Para que serve um roteador?",
                                                "options": [
                                                            "Armazenar permanentemente todos os arquivos dos usuários",
                                                            "Encaminhar pacotes de dados entre redes e permitir a conexão de dispositivos",
                                                            "Controlar a temperatura do processador",
                                                            "Converter imagens em código HTML"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que o Wi-Fi permite fazer?",
                                                "options": [
                                                            "Aumentar a memória interna do celular",
                                                            "Carregar a bateria sem energia elétrica",
                                                            "Substituir todos os cabos de energia",
                                                            "Conectar dispositivos a uma rede usando comunicação sem fio"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é um endereço IP?",
                                                "options": [
                                                            "Uma senha que desbloqueia qualquer roteador",
                                                            "Um tipo de arquivo compactado",
                                                            "O nome comercial de um navegador",
                                                            "Um endereço lógico usado para identificar uma interface em uma rede IP"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual é a função do DNS?",
                                                "options": [
                                                            "Aumentar a velocidade física dos cabos",
                                                            "Criar páginas web sem HTML",
                                                            "Criptografar automaticamente todos os arquivos de um computador",
                                                            "Traduzir nomes de domínio em informações de endereço IP"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é um servidor em uma rede?",
                                                "options": [
                                                            "Um sistema que fornece serviços ou recursos a outros dispositivos",
                                                            "Um cabo usado para conectar dois monitores",
                                                            "Um dispositivo exclusivo para armazenar energia",
                                                            "Um programa que só funciona sem internet"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é a diferença básica entre LAN e WAN?",
                                                "options": [
                                                            "LAN cobre uma área local; WAN conecta redes em áreas geográficas maiores",
                                                            "WAN só existe dentro de um único computador",
                                                            "LAN e WAN são tipos de memória",
                                                            "LAN é sempre sem fio; WAN é sempre cabeada"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que é computação em nuvem?",
                                                "options": [
                                                            "Guardar arquivos somente em um pendrive",
                                                            "Uso de recursos computacionais fornecidos por servidores acessados pela rede",
                                                            "Executar programas sem qualquer hardware",
                                                            "Usar exclusivamente computadores sem sistema operacional"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é uma diferença geral entre TCP e UDP?",
                                                "options": [
                                                            "TCP oferece entrega confiável e ordenada; UDP não garante esses recursos por padrão",
                                                            "Os dois protocolos são tipos de cabo",
                                                            "TCP só transmite áudio; UDP só transmite imagens",
                                                            "UDP sempre garante entrega; TCP nunca verifica dados"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que significa latência em uma conexão de rede?",
                                                "options": [
                                                            "O número de aplicativos instalados",
                                                            "O atraso entre o envio de dados e a resposta ou chegada ao destino",
                                                            "A frequência do processador",
                                                            "A quantidade total de espaço no disco"
                                                ],
                                                "correct": 1
                                    }
                        ]
            },
            {
                        "id": "sistemas",
                        "name": "Sistemas operacionais",
                        "icon": "fa-solid fa-window-maximize",
                        "color": "from-indigo-500 to-slate-500",
                        "emoji": "🖥️",
                        "questions": [
                                    {
                                                "q": "O que é um sistema operacional?",
                                                "options": [
                                                            "O software que gerencia recursos do computador e oferece serviços aos programas",
                                                            "Um protocolo exclusivo de redes sem fio",
                                                            "Um aplicativo usado apenas para editar vídeos",
                                                            "Um componente físico responsável por exibir imagens"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual empresa desenvolve o Windows?",
                                                "options": [
                                                            "Apple",
                                                            "Microsoft",
                                                            "Google",
                                                            "Intel"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que é o Linux?",
                                                "options": [
                                                            "Um kernel de código aberto usado em várias distribuições e sistemas",
                                                            "Um navegador criado pela Microsoft",
                                                            "Um tipo de processador gráfico",
                                                            "Um formato de arquivo de imagem"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que caracteriza um software de código aberto?",
                                                "options": [
                                                            "Seu código nunca pode ser consultado por ninguém",
                                                            "Ele não pode receber atualizações",
                                                            "Ele só funciona sem conexão com a internet",
                                                            "Seu código-fonte pode ser estudado e modificado conforme os termos da licença"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é um processo em um sistema operacional?",
                                                "options": [
                                                            "Uma peça física da placa-mãe",
                                                            "Um arquivo compactado sem execução",
                                                            "Um endereço usado pelo DNS",
                                                            "Um programa em execução, com estado e recursos associados"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Qual é a função do gerenciamento de memória?",
                                                "options": [
                                                            "Controlar apenas o brilho do monitor",
                                                            "Aumentar fisicamente a capacidade do SSD",
                                                            "Controlar a alocação e a liberação de memória utilizada pelos processos",
                                                            "Conectar o computador a redes externas"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que é uma interface gráfica (GUI)?",
                                                "options": [
                                                            "Um conjunto de comandos que só pode ser usado por sensores",
                                                            "Um protocolo de criptografia",
                                                            "Uma forma de interação por elementos visuais, como janelas, ícones e menus",
                                                            "Um componente de armazenamento magnético"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual é uma diferença geral entre sistemas de 32 bits e 64 bits?",
                                                "options": [
                                                            "Sistemas de 32 bits sempre executam mais memória que os de 64 bits",
                                                            "Sistemas de 32 bits só funcionam em celulares",
                                                            "A arquitetura de 64 bits não utiliza processador",
                                                            "A arquitetura de 64 bits pode trabalhar com espaços de endereçamento maiores"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é o kernel?",
                                                "options": [
                                                            "Um protocolo de comunicação entre roteadores",
                                                            "O aplicativo usado para navegar na internet",
                                                            "O núcleo do sistema operacional, responsável por funções essenciais como gerenciar recursos",
                                                            "Uma pasta onde ficam somente imagens"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual é a função de um sistema de arquivos?",
                                                "options": [
                                                            "Organizar como arquivos e diretórios são armazenados e localizados",
                                                            "Criar automaticamente programas de computador",
                                                            "Substituir o sistema operacional",
                                                            "Controlar a intensidade do sinal Wi-Fi"
                                                ],
                                                "correct": 0
                                    }
                        ]
            },
            {
                        "id": "dispositivos",
                        "name": "Dispositivos modernos",
                        "icon": "fa-solid fa-mobile-screen-button",
                        "color": "from-pink-500 to-rose-500",
                        "emoji": "📱",
                        "questions": [
                                    {
                                                "q": "O que é um smartphone?",
                                                "options": [
                                                            "Um roteador usado exclusivamente em empresas",
                                                            "Um computador que não possui sistema operacional",
                                                            "Um telefone móvel com recursos computacionais e suporte a aplicativos",
                                                            "Um tipo de memória RAM externa"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual é uma finalidade comum do Bluetooth?",
                                                "options": [
                                                            "Fornecer acesso global à internet por satélite",
                                                            "Criptografar automaticamente todos os arquivos",
                                                            "Aumentar a capacidade do processador",
                                                            "Conectar dispositivos próximos por comunicação sem fio"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é NFC e onde ela é utilizada?",
                                                "options": [
                                                            "Um tipo de tela que não utiliza pixels",
                                                            "Comunicação sem fio de curtíssimo alcance, usada por exemplo em pagamentos por aproximação",
                                                            "Uma tecnologia de armazenamento em discos rígidos",
                                                            "Um protocolo usado exclusivamente em redes cabeadas"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual é uma diferença entre telas LCD e OLED?",
                                                "options": [
                                                            "OLED precisa sempre de lâmpadas atrás da tela; LCD não",
                                                            "LCD não pode exibir cores",
                                                            "As duas tecnologias funcionam sem pixels",
                                                            "LCD utiliza iluminação de fundo; em OLED, os pixels emitem sua própria luz"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "O que é realidade virtual (VR)?",
                                                "options": [
                                                            "Um sistema de localização por satélite",
                                                            "A exibição de notificações sobre objetos reais sem qualquer ambiente digital",
                                                            "Uma experiência digital imersiva em um ambiente virtual",
                                                            "Uma forma de carregar dispositivos sem fio"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que é realidade aumentada (AR)?",
                                                "options": [
                                                            "A sobreposição de elementos digitais à visão do ambiente real",
                                                            "A substituição completa do ambiente real por um mundo virtual",
                                                            "Uma tecnologia exclusiva de armazenamento",
                                                            "Um tipo de conexão de internet móvel"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual é uma função comum de um smartwatch?",
                                                "options": [
                                                            "Distribuir internet por fibra óptica",
                                                            "Exibir notificações e acompanhar informações de atividades e sensores",
                                                            "Controlar diretamente todos os servidores da internet",
                                                            "Substituir integralmente um computador de mesa em qualquer tarefa"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que é Internet das Coisas (IoT)?",
                                                "options": [
                                                            "Uma tecnologia usada apenas para criar jogos",
                                                            "Conjunto de objetos físicos conectados que podem coletar e trocar dados",
                                                            "Um sistema de arquivos para celulares",
                                                            "Uma rede que conecta somente computadores de mesa"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "O que o 5G busca oferecer em relação às gerações anteriores de redes móveis?",
                                                "options": [
                                                            "Conexões exclusivamente por cabos",
                                                            "Eliminação da necessidade de antenas",
                                                            "Maior capacidade e potencial de velocidade, além de menor latência em condições adequadas",
                                                            "Apenas chamadas de voz sem transmissão de dados"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Como funciona, em geral, o carregamento sem fio por indução?",
                                                "options": [
                                                            "Um campo eletromagnético transfere energia entre bobinas próximas",
                                                            "A bateria recebe energia por ondas sonoras",
                                                            "O dispositivo armazena energia da luz da tela",
                                                            "O carregador envia dados pela rede Wi-Fi para encher a bateria"
                                                ],
                                                "correct": 0
                                    }
                        ]
            },
            {
                        "id": "historia",
                        "name": "História da tecnologia",
                        "icon": "fa-solid fa-clock-rotate-left",
                        "color": "from-amber-500 to-orange-600",
                        "emoji": "📜",
                        "questions": [
                                    {
                                                "q": "Quem é frequentemente conhecido como o “pai do computador” por seus projetos de máquinas mecânicas de cálculo?",
                                                "options": [
                                                            "Steve Jobs",
                                                            "Bill Gates",
                                                            "Charles Babbage",
                                                            "Tim Berners-Lee"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual foi a importância da Máquina Analítica idealizada por Charles Babbage?",
                                                "options": [
                                                            "Propôs uma máquina mecânica programável de uso geral",
                                                            "Foi o primeiro smartphone comercial",
                                                            "Criou a primeira rede Wi-Fi",
                                                            "Substituiu todos os computadores eletrônicos"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "O que foi o ENIAC?",
                                                "options": [
                                                            "O primeiro navegador gráfico da web",
                                                            "Um sistema operacional para smartphones",
                                                            "Um dos primeiros computadores eletrônicos digitais de uso geral",
                                                            "Uma linguagem de programação criada na década de 1990"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Qual empresa lançou o primeiro computador Macintosh em 1984?",
                                                "options": [
                                                            "Apple",
                                                            "Intel",
                                                            "IBM",
                                                            "Microsoft"
                                                ],
                                                "correct": 0
                                    },
                                    {
                                                "q": "Qual foi uma contribuição importante da World Wide Web?",
                                                "options": [
                                                            "Inventar o primeiro processador de 64 bits",
                                                            "Criar a primeira rede elétrica mundial",
                                                            "Substituir a internet por uma rede local",
                                                            "Permitir acessar documentos e recursos interligados por meio da internet"
                                                ],
                                                "correct": 3
                                    },
                                    {
                                                "q": "Quem é reconhecido por inventar a World Wide Web?",
                                                "options": [
                                                            "Charles Babbage",
                                                            "Alan Turing",
                                                            "Tim Berners-Lee",
                                                            "Dennis Ritchie"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Por que a invenção do transistor foi importante para a evolução dos computadores?",
                                                "options": [
                                                            "Eliminou a necessidade de circuitos eletrônicos",
                                                            "Substituiu os programas por conexões mecânicas",
                                                            "Permitiu componentes menores, mais eficientes e confiáveis que as válvulas em muitas aplicações",
                                                            "Criou diretamente a internet moderna"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "O que foi a ARPANET?",
                                                "options": [
                                                            "O primeiro sistema operacional gráfico",
                                                            "Uma das primeiras redes de comutação de pacotes, precursora da internet",
                                                            "Uma linguagem criada para smartphones",
                                                            "Um modelo de computador pessoal lançado pela Apple"
                                                ],
                                                "correct": 1
                                    },
                                    {
                                                "q": "Qual empresa desenvolveu o sistema operacional Windows?",
                                                "options": [
                                                            "Apple",
                                                            "Motorola",
                                                            "Microsoft",
                                                            "NVIDIA"
                                                ],
                                                "correct": 2
                                    },
                                    {
                                                "q": "Como a popularização dos smartphones transformou a comunicação?",
                                                "options": [
                                                            "Fez os computadores deixarem de existir imediatamente",
                                                            "Reuniu internet, mensagens, chamadas e diversos serviços em dispositivos móveis",
                                                            "Limitou a comunicação a chamadas telefônicas tradicionais",
                                                            "Eliminou a necessidade de redes de comunicação"
                                                ],
                                                "correct": 1
                                    }
                        ]
            }
];

        // --- LOCAL PROFILE / SETTINGS ---
        const QUIZ_STORAGE_KEY = 'techQuizProfileV1';
        const SETTINGS_STORAGE_KEY = 'techQuizSettingsV1';
        function readStoredJSON(key, fallback) {
            try { return JSON.parse(localStorage.getItem(key)) || fallback; }
            catch (error) { return fallback; }
        }
        let gameStats = readStoredJSON(QUIZ_STORAGE_KEY, {
            completedGames: 0, totalCorrect: 0, totalQuestions: 0, bestScores: {}
        });
        let gameSettings = readStoredJSON(SETTINGS_STORAGE_KEY, {
            soundEnabled: true, animationsEnabled: true
        });
        function saveStats() {
            try { localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(gameStats)); } catch (error) {}
        }
        function saveSettings() {
            try { localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(gameSettings)); } catch (error) {}
            document.body.classList.toggle('reduced-effects', !gameSettings.animationsEnabled);
            if (gameSettings.animationsEnabled) animateStars();
            else if (window.starContext && window.starCanvas) window.starContext.clearRect(0, 0, window.starCanvas.width, window.starCanvas.height);
        }
        function playAnswerSound(isCorrect) {
            if (!gameSettings.soundEnabled) return;
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                const audio = new AudioCtx();
                const oscillator = audio.createOscillator();
                const gain = audio.createGain();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(isCorrect ? 660 : 220, audio.currentTime);
                if (isCorrect) oscillator.frequency.exponentialRampToValueAtTime(990, audio.currentTime + .13);
                gain.gain.setValueAtTime(.0001, audio.currentTime);
                gain.gain.exponentialRampToValueAtTime(.10, audio.currentTime + .02);
                gain.gain.exponentialRampToValueAtTime(.0001, audio.currentTime + .2);
                oscillator.connect(gain); gain.connect(audio.destination);
                oscillator.start(); oscillator.stop(audio.currentTime + .21);
                oscillator.onended = () => audio.close();
            } catch (error) {}
        }
        function recordCompletedQuiz() {
            const id = appState.selectedCategory.id;
            const total = appState.selectedCategory.questions.length;
            gameStats.completedGames = (gameStats.completedGames || 0) + 1;
            gameStats.totalCorrect = (gameStats.totalCorrect || 0) + appState.score;
            gameStats.totalQuestions = (gameStats.totalQuestions || 0) + total;
            gameStats.bestScores = gameStats.bestScores || {};
            gameStats.bestScores[id] = Math.max(gameStats.bestScores[id] || 0, appState.score);
            saveStats();
        }

        // Custom technology-themed vector illustrations, embedded directly in the HTML.
        const artworkScenes = {
            'hardware': `<g stroke="#72f4ff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="310" y="80" width="180" height="160" rx="24" fill="#102d55"/><rect x="350" y="118" width="100" height="84" rx="12" fill="#0a1734" stroke="#a7f8ff"/><path d="M340 55V80 M380 55V80 M420 55V80 M460 55V80 M340 240V270 M380 240V270 M420 240V270 M460 240V270 M280 110H310 M280 150H310 M280 190H310 M490 110H520 M490 150H520 M490 190H520"/><path d="M380 160H420 M400 140V180" stroke="#b4ffda"/></g>`,
            'programacao': `<g fill="none" stroke="#b9a5ff" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"><path d="M330 90L230 160L330 230"/><path d="M470 90L570 160L470 230"/><path d="M435 75L365 245" stroke="#72f4ff"/></g><circle cx="400" cy="160" r="145" fill="none" stroke="#8caaff" stroke-opacity=".18" stroke-width="3"/>`,
            'web': `<g stroke="#86f6ff" stroke-width="8" fill="none"><rect x="205" y="70" width="390" height="225" rx="23" fill="#102b50"/><path d="M205 122H595"/><circle cx="240" cy="96" r="8" fill="#ffbd79" stroke="none"/><circle cx="270" cy="96" r="8" fill="#77eecb" stroke="none"/><circle cx="300" cy="96" r="8" fill="#8eb3ff" stroke="none"/><path d="M315 165L270 205L315 245 M485 165L530 205L485 245 M440 155L360 255" stroke="#a9b9ff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></g>`,
            'ia': `<g stroke="#9beeff" stroke-width="5" fill="none"><path d="M250 95L390 160L560 85 M250 95L285 255L390 160L520 260L560 85 M285 255L520 260 M390 160L560 85 M390 160L520 260"/></g><g fill="#142e60" stroke="#91f5ff" stroke-width="7"><circle cx="250" cy="95" r="22"/><circle cx="560" cy="85" r="22"/><circle cx="285" cy="255" r="22"/><circle cx="520" cy="260" r="22"/><circle cx="390" cy="160" r="34"/></g><circle cx="390" cy="160" r="12" fill="#c2ffdf"/>`,
            'ciberseguranca': `<path d="M400 55L555 110V190Q555 272 400 310Q245 272 245 190V110Z" fill="#0c2850" stroke="#6af5d6" stroke-width="10"/><path d="M330 180L380 230L480 130" fill="none" stroke="#a5ffe0" stroke-width="19" stroke-linecap="round" stroke-linejoin="round"/><path d="M400 75V285" stroke="#7beeff" stroke-opacity=".15" stroke-width="3"/>`,
            'robotica': `<g stroke="#8bf2ff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="#12315a"><rect x="300" y="105" width="200" height="165" rx="35"/><path d="M400 65V105 M265 155H300 M500 155H535 M265 155V220 M535 155V220"/><circle cx="360" cy="170" r="18" fill="#9dfff0" stroke="none"/><circle cx="440" cy="170" r="18" fill="#9dfff0" stroke="none"/><path d="M350 225Q400 250 450 225" fill="none"/><path d="M360 270V295 M440 270V295"/></g><circle cx="400" cy="65" r="13" fill="#b69cff"/>`,
            'redes': `<g stroke="#78edff" stroke-width="8" fill="none"><path d="M400 105L250 215L550 215L400 105L400 280L250 215 M400 280L550 215"/></g><g fill="#102c55" stroke="#8af2ff" stroke-width="8"><circle cx="400" cy="95" r="34"/><circle cx="230" cy="225" r="34"/><circle cx="570" cy="225" r="34"/><circle cx="400" cy="295" r="34"/></g><circle cx="400" cy="95" r="9" fill="#baffdf"/>`,
            'sistemas': `<g fill="#122e58" stroke="#82ecff" stroke-width="8"><rect x="240" y="75" width="145" height="145" rx="18"/><rect x="415" y="75" width="145" height="145" rx="18"/><rect x="240" y="245" width="145" height="75" rx="16"/><rect x="415" y="245" width="145" height="75" rx="16"/></g><path d="M270 115H350 M270 155H350 M445 115H530 M445 155H530 M270 280H350 M445 280H530" stroke="#aaf8df" stroke-width="8" stroke-linecap="round"/>`,
            'dispositivos': `<g stroke="#81efff" stroke-width="8"><rect x="295" y="45" width="155" height="255" rx="27" fill="#102b50"/><rect x="315" y="75" width="115" height="175" rx="10" fill="#0a1b39" stroke="#6aaaff"/><circle cx="372" cy="275" r="8" fill="#aaffdf"/><rect x="475" y="130" width="90" height="105" rx="27" fill="#152d52" stroke="#b4a1ff"/><path d="M490 115V130 M550 115V130 M490 235V250 M550 235V250" fill="none"/></g><path d="M338 160L365 185L405 135" fill="none" stroke="#a8ffdf" stroke-width="8" stroke-linecap="round"/>`,
            'historia': `<path d="M210 250H590" stroke="#83f2ff" stroke-width="8" stroke-linecap="round"/><g fill="#112a50" stroke="#8eeeff" stroke-width="7"><circle cx="245" cy="250" r="24"/><circle cx="365" cy="250" r="24"/><circle cx="485" cy="250" r="24"/><circle cx="585" cy="250" r="24"/></g><g stroke="#a5c2ff" stroke-width="6" fill="none"><path d="M245 226V165H300V130 M365 226V110H420V85 M485 226V155H535V115 M585 226V185"/></g><g fill="#b9a2ff"><rect x="275" y="95" width="50" height="36" rx="8"/><rect x="395" y="50" width="50" height="36" rx="8"/><rect x="510" y="80" width="50" height="36" rx="8"/><rect x="560" y="150" width="50" height="36" rx="8"/></g>`
        };
        const artPalettes = {
            'hardware':['#071d3a','#10436b','#54eaff'], 'programacao':['#15143d','#253c84','#aa94ff'],
            'web':['#062b43','#075b72','#6bf3ff'], 'ia':['#20143f','#4e2c82','#d0a4ff'],
            'ciberseguranca':['#082d38','#12645e','#65f6c8'], 'robotica':['#38230f','#6b3e18','#ffbf75'],
            'redes':['#0b1d43','#19477c','#72efff'], 'sistemas':['#151f3e','#324c75','#9cc5ff'],
            'dispositivos':['#361a3d','#6b2d67','#ff9ed7'], 'historia':['#3b2415','#77451d','#ffc77a']
        };
        function getCategoryArtwork(cat) {
            const palette = artPalettes[cat.id] || ['#0c2442','#164b70','#75eaff'];
            const dots = Array.from({length:18},(_,i)=>`<circle cx="${(i*137+37)%790+5}" cy="${(i*71+23)%300+5}" r="${i%4===0?3:1.7}" fill="#dffaff" opacity="${i%3===0?.8:.35}"/>`).join('');
            const circuit = `<g fill="none" stroke="${palette[2]}" stroke-opacity=".22" stroke-width="3"><path d="M0 70H130V120H190 M800 235H670V195H620 M70 320V265H140 M730 0V55H660"/><circle cx="130" cy="120" r="5" fill="${palette[2]}"/><circle cx="670" cy="195" r="5" fill="${palette[2]}"/></g>`;
            return `<svg viewBox="0 0 800 320" role="img" aria-label="Ilustração de ${cat.name}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg-${cat.id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette[0]}"/><stop offset=".58" stop-color="${palette[1]}"/><stop offset="1" stop-color="#070d20"/></linearGradient><radialGradient id="glow-${cat.id}"><stop stop-color="${palette[2]}" stop-opacity=".34"/><stop offset="1" stop-color="${palette[2]}" stop-opacity="0"/></radialGradient></defs><rect width="800" height="320" fill="url(#bg-${cat.id})"/><circle cx="400" cy="160" r="190" fill="url(#glow-${cat.id})"/>${dots}${circuit}<g>${artworkScenes[cat.id] || ''}</g></svg>`;
        }
        function renderHeroArtwork() {
            return `<svg class="hero-tech-art" viewBox="0 0 640 440" role="img" aria-label="Processador conectado a circuitos digitais"><defs><linearGradient id="chipBody" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a7faff"/><stop offset=".45" stop-color="#287db8"/><stop offset="1" stop-color="#172b63"/></linearGradient><filter id="chipGlow"><feGaussianBlur stdDeviation="18"/></filter></defs><g fill="none" stroke="#62eaff" stroke-width="5" stroke-linecap="round" opacity=".58"><path d="M320 65V130 M320 310V375 M115 220H220 M420 220H535 M190 105L250 160 M390 280L465 345 M450 105L390 160 M250 280L175 350"/><path d="M320 65H250V35 M320 375H405V410 M115 220H60V170 M535 220H595V280"/></g><circle cx="320" cy="220" r="165" fill="#22d3ee" opacity=".08" filter="url(#chipGlow)"/><g transform="translate(320 220)"><rect x="-105" y="-105" width="210" height="210" rx="28" fill="url(#chipBody)" stroke="#c3fbff" stroke-width="5"/><rect x="-68" y="-68" width="136" height="136" rx="17" fill="#061b37" stroke="#8af2ff" stroke-width="4"/><path d="M-38 -24H38 M-38 0H38 M-38 24H20" stroke="#9bf8ed" stroke-width="10" stroke-linecap="round"/><g stroke="#9af3ff" stroke-width="8" stroke-linecap="round"><path d="M-70 -130V-105 M-20 -130V-105 M30 -130V-105 M80 -130V-105 M-70 105V130 M-20 105V130 M30 105V130 M80 105V130 M-130 -70H-105 M-130 -20H-105 M-130 30H-105 M-130 80H-105 M105 -70H130 M105 -20H130 M105 30H130 M105 80H130"/></g></g><g fill="#b6ffdf"><circle cx="60" cy="170" r="7"/><circle cx="595" cy="280" r="7"/><circle cx="250" cy="35" r="7"/><circle cx="405" cy="410" r="7"/></g><g fill="none" stroke="#7d9cff" stroke-width="2" opacity=".45"><circle cx="320" cy="220" r="195"/><circle cx="320" cy="220" r="215" stroke-dasharray="4 14"/></g></svg>`;
        }

        // --- APP STATE ---
        let appState = {
            currentView: 'start', // start, home, quiz, results, stats, settings, howto, about
            menuOpen: false,
            selectedCategory: null,
            currentQuestionIndex: 0,
            score: 0,
            userAnswers: [],
            isAnswered: false,

            cancelPendingTransition() {
                if (this.nextQuestionTimer) {
                    clearTimeout(this.nextQuestionTimer);
                    this.nextQuestionTimer = null;
                }
                this.isAnswered = false;
            },
            showStart() {
                this.cancelPendingTransition();
                this.menuOpen = false;
                this.currentView = 'start';
                this.selectedCategory = null;
                renderApp();
            },
            toggleMenu() { this.menuOpen = !this.menuOpen; syncQuickMenu(); },
            openMenu() { this.menuOpen = true; syncQuickMenu(); },
            closeMenu() { this.menuOpen = false; syncQuickMenu(); },
            showCategories() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'home'; renderApp(); },
            goHome() { this.showCategories(); },
            showStats() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'stats'; renderApp(); },
            showSettings() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'settings'; renderApp(); },
            showHowTo() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'howto'; renderApp(); },
            showAbout() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'about'; renderApp(); },

            startQuiz(categoryId) {
                this.cancelPendingTransition();
                this.menuOpen = false;
                const cat = quizData.find(c => c.id === categoryId);
                if (!cat) return;
                this.selectedCategory = cat;
                this.currentView = 'quiz';
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.userAnswers = [];
                this.isAnswered = false;
                renderApp();
            },

            answerQuestion(optionIndex) {
                if (this.isAnswered) return;
                this.isAnswered = true;
                const currentQ = this.selectedCategory.questions[this.currentQuestionIndex];
                const isCorrect = optionIndex === currentQ.correct;
                if (isCorrect) this.score++;
                playAnswerSound(isCorrect);
                this.userAnswers.push({
                    question: currentQ.q, selected: optionIndex, correct: currentQ.correct,
                    isCorrect: isCorrect, options: currentQ.options
                });
                updateQuizUI(optionIndex, currentQ.correct);
                this.nextQuestionTimer = setTimeout(() => {
                    this.nextQuestionTimer = null;
                    this.isAnswered = false;
                    if (this.currentQuestionIndex < this.selectedCategory.questions.length - 1) {
                        this.currentQuestionIndex++;
                        renderApp();
                    } else {
                        recordCompletedQuiz();
                        this.currentView = 'results';
                        renderApp();
                    }
                }, 1400);
            },

            retryQuiz() {
                if (!this.selectedCategory) return;
                this.startQuiz(this.selectedCategory.id);
            }
        };

        appState.toggleSetting = function(key) {
            if (!(key in gameSettings)) return;
            gameSettings[key] = !gameSettings[key];
            saveSettings();
            renderApp();
        };
        appState.resetStats = function() {
            if (!confirm('Deseja realmente apagar todo o seu progresso salvo neste navegador?')) return;
            gameStats = { completedGames: 0, totalCorrect: 0, totalQuestions: 0, bestScores: {} };
            saveStats();
            renderApp();
        };

        // --- RENDER ENGINE ---
        function renderApp() {
            const container = document.getElementById('view-container');
            container.innerHTML = '';
            const views = {
                start: renderStartView, menu: renderMenuView, home: renderHomeView,
                quiz: renderQuizView, results: renderResultsView, stats: renderStatsView,
                settings: renderSettingsView, howto: renderHowToView, about: renderAboutView
            };
            container.innerHTML = (views[appState.currentView] || renderStartView)();
            syncQuickMenu();
        }

        function syncQuickMenu() {
            const menu = document.getElementById('quick-menu');
            const toggle = document.getElementById('menu-toggle');
            if (!menu || !toggle) return;
            const isOpen = !!appState.menuOpen;
            menu.classList.toggle('is-open', isOpen);
            menu.setAttribute('aria-hidden', String(!isOpen));
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            toggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i><span class="menu-btn-label">FECHAR</span>'
                : '<i class="fa-solid fa-bars-staggered"></i><span class="menu-btn-label">MENU</span>';
        }

        function renderStartView() {
            const played = gameStats.completedGames || 0;
            return `
                <section class="screen-shell">
                    <div class="start-panel">
                        <div class="start-copy">
                            <div class="start-kicker"><span class="live-dot"></span> Central tecnológica • Sistema online</div>
                            <h2 class="start-title hero-title">A tecnologia<br><span>move o futuro.</span></h2>
                            <p class="start-description">Explore o mundo da tecnologia, teste seus conhecimentos e descubra mais sobre computadores, programação, inteligência artificial, segurança digital e inovação.</p>
                            <div class="start-actions">
                                <button class="start-primary" onclick="appState.showCategories()"><i class="fa-solid fa-bolt"></i> INICIAR DESAFIO <i class="fa-solid fa-arrow-right"></i></button>
                                <button class="start-secondary" onclick="appState.showHowTo()"><i class="fa-regular fa-circle-question"></i> COMO JOGAR</button>
                            </div>
                            <div class="start-metrics">
                                <div class="start-metric"><strong>10</strong><span>Áreas de tecnologia</span></div>
                                <div class="start-metric"><strong>100</strong><span>Perguntas</span></div>
                                <div class="start-metric"><strong>${played}</strong><span>Desafios concluídos</span></div>
                            </div>
                        </div>
                        <div class="start-art">${renderHeroArtwork()}<div class="absolute bottom-8 right-7 text-[10px] tracking-[.2em] text-cyan-100/50 uppercase">Sistema conectado <i class="fa-solid fa-microchip ml-2"></i></div></div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"><i class="fa-solid fa-layer-group text-cyan-300 text-xl"></i><div><b class="text-sm text-slate-200">10 áreas de conhecimento</b><p class="text-xs text-slate-500">Do hardware à inteligência artificial</p></div></div>
                        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"><i class="fa-solid fa-trophy text-amber-300 text-xl"></i><div><b class="text-sm text-slate-200">Pontue e evolua</b><p class="text-xs text-slate-500">Acompanhe seus resultados e recordes</p></div></div>
                        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"><i class="fa-solid fa-brain text-violet-300 text-xl"></i><div><b class="text-sm text-slate-200">Aprenda explorando</b><p class="text-xs text-slate-500">Desafios rápidos e educativos</p></div></div>
                    </div>
                </section>`;
        }

        function renderMenuView() {
            return `
                <section class="screen-shell">
                    <div class="menu-heading"><div><div class="eyebrow mb-3"><span class="live-dot"></span> Painel de navegação</div><h2 class="plain-title">Central de comando</h2><p class="mt-2">Explore os assuntos, consulte seu desempenho ou personalize a experiência.</p></div><button class="back-menu" onclick="appState.showStart()"><i class="fa-solid fa-house mr-2"></i>Tela inicial</button></div>
                    <div class="menu-grid">
                        <button class="menu-tile" style="--tile-glow:rgba(0,226,255,.19)" onclick="appState.showCategories()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon"><i class="fa-solid fa-layer-group"></i></div><h3>Explorar categorias</h3><p>Escolha uma das 10 categorias e comece um novo desafio de tecnologia.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(255,193,90,.18)" onclick="appState.showStats()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#ffd17d;background:rgba(255,193,90,.09);border-color:rgba(255,193,90,.2)"><i class="fa-solid fa-chart-line"></i></div><h3>Meu progresso</h3><p>Veja os desafios concluídos, acertos acumulados e seus melhores resultados.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(167,139,250,.2)" onclick="appState.showSettings()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#c1a9ff;background:rgba(167,139,250,.1);border-color:rgba(167,139,250,.2)"><i class="fa-solid fa-sliders"></i></div><h3>Configurações</h3><p>Ative ou desative os efeitos sonoros e as animações visuais.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(106,255,198,.15)" onclick="appState.showHowTo()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#8ef8ca;background:rgba(106,255,198,.08);border-color:rgba(106,255,198,.18)"><i class="fa-solid fa-book-open"></i></div><h3>Como jogar</h3><p>Entenda as regras, a pontuação e como concluir cada desafio.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(255,124,206,.16)" onclick="appState.showAbout()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#ff9bd9;background:rgba(255,124,206,.08);border-color:rgba(255,124,206,.18)"><i class="fa-solid fa-laptop-code"></i></div><h3>Sobre o projeto</h3><p>Conheça o Tech Quiz e os temas que fazem parte desta jornada.</p></button>
                    </div>
                </section>`;
        }

        const categoryDescriptions = {
            "hardware": "Processadores, memórias, placas, armazenamento e as peças que formam um computador.",
            "programacao": "Algoritmos, variáveis, condições, funções, estruturas de dados e orientação a objetos.",
            "web": "HTML, CSS, JavaScript, front-end, back-end, APIs, servidores e sites responsivos.",
            "ia": "Machine learning, redes neurais, IA generativa, linguagem natural e modelos de dados.",
            "ciberseguranca": "Proteção de dados, phishing, malware, criptografia, autenticação e vulnerabilidades.",
            "robotica": "Sensores, atuadores, Arduino, microcontroladores, robôs autônomos e automação industrial.",
            "redes": "Roteadores, endereços IP, DNS, servidores, redes LAN/WAN, nuvem e protocolos.",
            "sistemas": "Windows, Linux, kernel, processos, memória, interfaces e sistemas de arquivos.",
            "dispositivos": "Smartphones, Bluetooth, NFC, telas, realidade virtual, IoT, 4G, 5G e wearables.",
            "historia": "Pioneiros da computação, primeiros computadores, internet e marcos da evolução digital."
};
        function renderHomeView() {
            let html = `
                <section class="screen-shell">
                    <div class="section-toolbar"><div><div class="eyebrow mb-3"><span class="live-dot"></span> Painel tecnológico • 10 áreas</div><h2 class="page-heading plain-title">Escolha uma área</h2><p class="page-subtitle mt-2">Cada categoria apresenta um tema diferente. Escolha um assunto e teste seus conhecimentos.</p></div><div class="category-toolbar-note"><i class="fa-solid fa-compass"></i> Selecione uma categoria para começar</div></div>
                    <div class="category-grid">`;
            quizData.forEach(cat => {
                const best = (gameStats.bestScores && gameStats.bestScores[cat.id] !== undefined) ? `<span class="category-chip">Recorde ${gameStats.bestScores[cat.id]}/${cat.questions.length}</span>` : `<span class="category-chip">Novo desafio</span>`;
                html += `
                    <button onclick="appState.startQuiz('${cat.id}')" class="category-card group" aria-label="Iniciar categoria ${cat.name}">
                        <div class="category-art">${getCategoryArtwork(cat)}</div>
                        <div class="category-content">
                            <div class="category-meta"><span class="category-count">${cat.questions.length} questões</span>${best}</div>
                            <h3>${cat.emoji} ${cat.name}</h3><p>${categoryDescriptions[cat.id] || 'Explore este assunto e teste seus conhecimentos.'}</p>
                            <div class="category-footer"><span>Iniciar desafio</span><i class="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </button>`;
            });
            html += `</div></section>`;
            return html;
        }

        function renderStatsView() {
            const completed = gameStats.completedGames || 0;
            const correct = gameStats.totalCorrect || 0;
            const questions = gameStats.totalQuestions || 0;
            const accuracy = questions ? Math.round(correct / questions * 100) : 0;
            let bestRows = quizData.map(cat => {
                const best = gameStats.bestScores && gameStats.bestScores[cat.id];
                return `<div class="flex items-center justify-between gap-3 py-3 border-b border-indigo-900/40"><span class="text-sm text-slate-300">${cat.emoji} ${cat.name}</span><span class="text-xs font-bold text-cyan-200">${best === undefined ? 'Ainda não iniciado' : `${best}/${cat.questions.length} acertos`}</span></div>`;
            }).join('');
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Relatório de desempenho</div><h2 class="page-heading plain-title">Meu progresso</h2><p class="page-subtitle mt-2">Seus resultados ficam salvos neste navegador.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar às categorias</button></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5"><div class="info-panel"><div class="stat-number">${completed}</div><div class="stat-label">Desafios concluídos</div></div><div class="info-panel"><div class="stat-number">${correct}</div><div class="stat-label">Respostas corretas</div></div><div class="info-panel"><div class="stat-number">${accuracy}%</div><div class="stat-label">Precisão geral</div></div></div><div class="info-panel"><h3 class="text-lg font-extrabold text-slate-100">Melhores resultados por categoria</h3><div class="mt-3">${bestRows}</div><div class="mt-5 flex flex-wrap gap-3"><button class="start-secondary" onclick="appState.showCategories()"><i class="fa-solid fa-play"></i> Jogar agora</button><button class="back-menu" onclick="appState.resetStats()"><i class="fa-solid fa-rotate-left mr-2"></i> Zerar progresso</button></div></div></section>`;
        }

        function renderSettingsView() {
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Preferências do sistema</div><h2 class="page-heading plain-title">Configurações</h2><p class="page-subtitle mt-2">Personalize alguns efeitos da experiência.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar às categorias</button></div><div class="info-panel"><div class="setting-row"><div><h3 class="text-slate-100 font-extrabold">Efeitos sonoros</h3><p>Sons curtos ao acertar ou errar uma resposta.</p></div><button class="toggle-btn ${gameSettings.soundEnabled?'active':''}" onclick="appState.toggleSetting('soundEnabled')">${gameSettings.soundEnabled?'ATIVADO':'DESATIVADO'}</button></div><div class="setting-row"><div><h3 class="text-slate-100 font-extrabold">Animações e efeitos</h3><p>Movimentos do fundo, brilhos e transições da interface.</p></div><button class="toggle-btn ${gameSettings.animationsEnabled?'active':''}" onclick="appState.toggleSetting('animationsEnabled')">${gameSettings.animationsEnabled?'ATIVADO':'DESATIVADO'}</button></div><p class="text-xs text-slate-500 mt-5"><i class="fa-solid fa-circle-info mr-2"></i>As preferências são salvas automaticamente neste navegador.</p></div></section>`;
        }

        function renderHowToView() {
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Guia rápido</div><h2 class="page-heading plain-title">Como jogar</h2><p class="page-subtitle mt-2">Veja como funciona o Tech Quiz.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar às categorias</button></div><div class="info-panel"><div class="info-grid"><div class="info-item"><h3><i class="fa-solid fa-layer-group text-cyan-300 mr-2"></i>1. Escolha uma categoria</h3><p>Na tela inicial, selecione uma das 10 áreas de tecnologia para começar.</p></div><div class="info-item"><h3><i class="fa-solid fa-list-check text-violet-300 mr-2"></i>2. Responda às perguntas</h3><p>Cada categoria possui 10 perguntas e quatro alternativas. Escolha a opção que considerar correta.</p></div><div class="info-item"><h3><i class="fa-solid fa-trophy text-amber-300 mr-2"></i>3. Some pontos</h3><p>Cada resposta correta vale 1 ponto. Ao final, você recebe sua pontuação e uma classificação em estrelas.</p></div><div class="info-item"><h3><i class="fa-solid fa-chart-simple text-emerald-300 mr-2"></i>4. Acompanhe seu progresso</h3><p>O jogo salva seus resultados e recordes neste navegador, permitindo acompanhar sua evolução.</p></div></div><div class="mt-7"><button class="start-primary" onclick="appState.showCategories()"><i class="fa-solid fa-bolt"></i> ESCOLHER UMA CATEGORIA</button></div></div></section>`;
        }

        function renderAboutView() {
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Sobre o projeto</div><h2 class="page-heading plain-title">Sobre o Tech Quiz</h2><p class="page-subtitle mt-2">Conhecimento, inovação e curiosidade em uma experiência interativa.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar às categorias</button></div><div class="info-panel"><div class="text-5xl mb-5">⚡</div><h3 class="text-2xl font-black text-slate-100 mb-3">Aprender tecnologia pode ser um desafio divertido.</h3><p class="text-slate-300 leading-8">O Tech Quiz é um jogo educativo de perguntas e respostas sobre tecnologia. Ele reúne assuntos como hardware, programação, desenvolvimento web, inteligência artificial, cibersegurança, robótica, redes, sistemas operacionais, dispositivos modernos e história da tecnologia. O objetivo é transformar o aprendizado em uma experiência interativa, com categorias temáticas, pontuação e acompanhamento de desempenho.</p><div class="grid grid-cols-2 gap-4 mt-7"><div class="info-item"><div class="stat-number">10</div><div class="stat-label">Categorias</div></div><div class="info-item"><div class="stat-number">100</div><div class="stat-label">Perguntas no total</div></div></div></div></section>`;
        }

        function renderQuizView() {
            const cat = appState.selectedCategory;
            const qIndex = appState.currentQuestionIndex;
            const q = cat.questions[qIndex];
            const progress = ((qIndex + 1) / cat.questions.length) * 100;

            let html = `
                <div class="max-w-3xl mx-auto w-full">
                    <!-- Quiz Header / Progress -->
                    <div class="glass-card p-4 rounded-2xl mb-6 flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <button onclick="appState.showCategories()" class="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-900 transition-colors">
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>
                            <div>
                                <span class="text-xs font-bold text-neon-cyan uppercase tracking-wider">${cat.emoji} ${cat.name}</span>
                                <h4 class="text-sm font-semibold text-slate-200">Questão ${qIndex + 1} de ${cat.questions.length}</h4>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-xs text-slate-400">Pontuação atual</span>
                            <div class="text-lg font-bold text-neon-gold">${appState.score} pts</div>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="w-full bg-indigo-950/60 rounded-full h-2 mb-8 overflow-hidden border border-indigo-900/50">
                        <div class="bg-gradient-to-r from-neon-cyan to-neon-purple h-full transition-all duration-500 rounded-full" style="width: ${progress}%"></div>
                    </div>

                    <!-- Question Card -->
                    <div class="glass-card p-6 md:p-10 rounded-3xl mb-6 shadow-2xl border-indigo-500/20">
                        <div class="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[.22em] text-cyan-200/60"><span class="w-6 h-px bg-cyan-300/60"></span> Novo desafio <span class="w-6 h-px bg-cyan-300/60"></span></div><h3 class="text-xl md:text-2xl font-bold text-slate-100 mb-8 leading-snug">${q.q}</h3>

                        <div class="grid grid-cols-1 gap-4" id="options-container">
            `;

            q.options.forEach((opt, idx) => {
                const letters = ['A', 'B', 'C', 'D'];
                html += `
                    <button onclick="appState.answerQuestion(${idx})" id="option-${idx}" class="option-btn text-left p-4 md:p-5 rounded-2xl glass-card flex items-center space-x-4 transition-all duration-200 hover:border-neon-cyan hover:bg-indigo-900/40 group">
                        <span class="w-9 h-9 rounded-xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-neon-cyan font-bold text-sm group-hover:bg-neon-cyan group-hover:text-space-900 transition-colors">${letters[idx]}</span>
                        <span class="text-slate-200 font-medium text-base md:text-lg flex-grow">${opt}</span>
                    </button>
                `;
            });

            html += `
                        </div>
                    </div>
                </div>
            `;
            return html;
        }

        function updateQuizUI(selectedIndex, correctIndex) {
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === correctIndex) {
                    btn.classList.remove('glass-card');
                    btn.classList.add('bg-emerald-600/30', 'border-emerald-500', 'shadow-lg', 'shadow-emerald-950/50');
                    btn.querySelector('span').classList.remove('bg-indigo-950/80', 'text-neon-cyan');
                    btn.querySelector('span').classList.add('bg-emerald-500', 'text-white');
                } else if (idx === selectedIndex && idx !== correctIndex) {
                    btn.classList.remove('glass-card');
                    btn.classList.add('bg-rose-600/30', 'border-rose-500', 'shadow-lg', 'shadow-rose-950/50', 'animate-pulse');
                    btn.querySelector('span').classList.remove('bg-indigo-950/80', 'text-neon-cyan');
                    btn.querySelector('span').classList.add('bg-rose-500', 'text-white');
                } else {
                    btn.style.opacity = '0.5';
                }
            });
        }

        function renderResultsView() {
            const cat = appState.selectedCategory;
            const total = cat.questions.length;
            const score = appState.score;
            const percentage = Math.round((score / total) * 100);

            // Star Rating calculation
            let stars = 1;
            if (percentage >= 80) stars = 3;
            else if (percentage >= 50) stars = 2;

            let message = "Continue estudando tecnologia e pratique para melhorar seus conhecimentos!";
            let iconClass = "fa-microchip text-amber-400";
            if (percentage === 100) {
                message = "Incrível! Você gabaritou o desafio e é um verdadeiro mestre da tecnologia!";
                iconClass = "fa-trophy text-neon-gold animate-bounce";
            } else if (percentage >= 70) {
                message = "Excelente trabalho! Seu conhecimento em tecnologia está impressionante!";
                iconClass = "fa-medal text-neon-cyan";
            } else if (percentage >= 40) {
                message = "Bom esforço! A tecnologia tem muito a ensinar. Continue estudando!";
                iconClass = "fa-microchip text-purple-400";
            }

            let html = `
                <div class="max-w-3xl mx-auto w-full text-center">
                    <div class="glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
                        
                        <div class="w-20 h-20 mx-auto rounded-2xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-4xl mb-6 shadow-xl">
                            <i class="fa-solid ${iconClass}"></i>
                        </div>

                        <span class="text-xs font-bold text-neon-cyan uppercase tracking-widest">${cat.emoji} ${cat.name}</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-100 mt-2 mb-4">Desafio Concluído!</h2>
                        <p class="text-slate-300 text-base md:text-lg mb-8 max-w-lg mx-auto">${message}</p>

                        <!-- Star Rating Display -->
                        <div class="flex justify-center space-x-3 mb-8 text-3xl">
                            <i class="fa-solid fa-star ${stars >= 1 ? 'text-neon-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}"></i>
                            <i class="fa-solid fa-star ${stars >= 2 ? 'text-neon-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}"></i>
                            <i class="fa-solid fa-star ${stars >= 3 ? 'text-neon-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}"></i>
                        </div>

                        <!-- Score Stats Box -->
                        <div class="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                            <div class="glass-card p-4 rounded-2xl border-indigo-900/50">
                                <span class="text-xs text-slate-400 uppercase tracking-wider">Acertos</span>
                                <div class="text-2xl font-black text-emerald-400 mt-1">${score} / ${total}</div>
                            </div>
                            <div class="glass-card p-4 rounded-2xl border-indigo-900/50">
                                <span class="text-xs text-slate-400 uppercase tracking-wider">Aproveitamento</span>
                                <div class="text-2xl font-black text-neon-cyan mt-1">${percentage}%</div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button onclick="appState.retryQuiz()" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-cyan to-blue-600 text-space-900 font-bold hover:opacity-90 transition-all shadow-lg shadow-neon-cyan/20 flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-rotate-right"></i>
                                <span>Tentar Novamente</span>
                            </button>
                            <button onclick="appState.showCategories()" class="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card border-indigo-800 text-slate-200 font-bold hover:bg-indigo-900/40 hover:border-neon-purple transition-all flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-compass"></i>
                                <span>Escolher Outra Categoria</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            return html;
        }

        // --- ANIMATED DIGITAL NETWORK BACKGROUND ---
        const canvas = document.getElementById('technologyNetwork');
        const ctx = canvas.getContext('2d');
        window.starCanvas = canvas;
        window.starContext = ctx;
        let networkNodes = [];
        let networkAnimationId = null;

        function resizeCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            initNetwork();
        }

        function initNetwork() {
            networkNodes = [];
            const count = Math.max(24, Math.floor((window.innerWidth * window.innerHeight) / 26000));
            for (let i = 0; i < count; i++) {
                networkNodes.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: (Math.random() - .5) * .22,
                    vy: (Math.random() - .5) * .22,
                    r: Math.random() * 1.6 + 1
                });
            }
        }

        function animateStars() {
            if (!gameSettings.animationsEnabled) {
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                networkAnimationId = null;
                return;
            }
            if (networkAnimationId !== null) return;
            const frame = () => {
                if (!gameSettings.animationsEnabled) {
                    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    networkAnimationId = null;
                    return;
                }
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                const maxDistance = Math.min(155, Math.max(95, window.innerWidth * .12));
                for (let i = 0; i < networkNodes.length; i++) {
                    const node = networkNodes[i];
                    node.x += node.vx;
                    node.y += node.vy;
                    if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
                    if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
                    for (let j = i + 1; j < networkNodes.length; j++) {
                        const other = networkNodes[j];
                        const dx = node.x - other.x;
                        const dy = node.y - other.y;
                        const dist = Math.hypot(dx, dy);
                        if (dist < maxDistance) {
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.strokeStyle = `rgba(61, 190, 230, ${.13 * (1 - dist / maxDistance)})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(103, 230, 255, .48)';
                    ctx.fill();
                }
                networkAnimationId = requestAnimationFrame(frame);
            };
            networkAnimationId = requestAnimationFrame(frame);
        }

        window.addEventListener('resize', resizeCanvas);
        document.addEventListener('click', function(event) {
            if (!appState.menuOpen) return;
            const menu = document.getElementById('quick-menu');
            const toggle = document.getElementById('menu-toggle');
            if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
                appState.closeMenu();
            }
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && appState.menuOpen) appState.closeMenu();
        });

        // --- INITIALIZE APPLICATION ---
        window.onload = function() {
            resizeCanvas();
            document.body.classList.toggle('reduced-effects', !gameSettings.animationsEnabled);
            if (gameSettings.animationsEnabled) animateStars();
            renderApp();
        };

/* ===== EFEITOS PRO ===== */
(function(){
/* ---------- ILUSTRAÇÕES MELHORADAS ---------- */
const P = {
  hardware:['#06182f','#0e4a73','#5df0ff'], programacao:['#120f36','#2b3c94','#b9a2ff'],
  web:['#04283f','#07627a','#70f6ff'], ia:['#1d1240','#52308a','#d6a8ff'],
  ciberseguranca:['#062a35','#116a62','#6bf8cc'], robotica:['#33200d','#744216','#ffc27a'],
  redes:['#091b40','#1b4c86','#78f0ff'], sistemas:['#121c3b','#34507c','#a3cbff'],
  dispositivos:['#331638','#722f70','#ffa3dc'], historia:['#38220f','#7d4a1e','#ffcc80']
};
const rnd=(i,m)=>((i*9301+49297)%233280)/233280*m;
const scenes = {
hardware:(c)=>{
  const ph=[...Array(6)].map((_,i)=>{const x=332+i*27;return `<rect x="${x}" y="56" width="7" height="26" rx="2"/><rect x="${x}" y="238" width="7" height="26" rx="2"/>`}).join('');
  const pv=[...Array(5)].map((_,i)=>{const y=102+i*28;return `<rect x="276" y="${y}" width="26" height="7" rx="2"/><rect x="498" y="${y}" width="26" height="7" rx="2"/>`}).join('');
  const tr=[...Array(5)].map((_,i)=>`<path class="a-dash" d="M276 ${105+i*28}H${220-i*18}V${60+i*50}H${150-i*10}" style="animation-delay:${i*-.3}s"/>`).join('');
  const ram=[...Array(4)].map((_,i)=>`<rect x="${612+i*30}" y="126" width="22" height="32" rx="3" fill="#0b1b3a" stroke="${c}" stroke-opacity=".7"/>`).join('');
  return `<g fill="none" stroke="${c}" stroke-width="2.5" stroke-opacity=".55">${tr}<path class="a-dash" d="M524 130H580 M524 186H600V215H760"/></g>
  <g class="a-float2"><rect x="590" y="108" width="170" height="64" rx="8" fill="#10305c" stroke="${c}" stroke-width="2.5"/>${ram}<g fill="#f5d27a">${[...Array(14)].map((_,i)=>`<rect x="${598+i*11}" y="168" width="6" height="8"/>`).join('')}</g></g>
  <g fill="#0c2347" stroke="${c}" stroke-width="2">${ph}${pv}</g>
  <rect class="a-pulse" x="285" y="68" width="230" height="204" rx="34" fill="${c}" opacity=".08"/>
  <rect x="300" y="82" width="200" height="176" rx="26" fill="url(#cg-hardware)" stroke="#d2fbff" stroke-width="3"/>
  <rect x="332" y="114" width="136" height="112" rx="14" fill="#04122a" stroke="${c}" stroke-width="2.5"/>
  <g stroke="${c}" stroke-width="2" opacity=".55" fill="none"><path d="M350 140H450M350 170H450M350 200H430M380 122V218M420 122V218"/></g>
  <text x="400" y="181" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="900" font-size="34" fill="#eaffff" letter-spacing="3">CPU</text>
  <circle class="a-blink" cx="318" cy="98" r="4" fill="#7dffc8"/>`},
programacao:(c)=>{
  const lines=[[40,120,'#7ee8ff'],[70,90,'#b9a2ff'],[70,150,'#7dffc8'],[100,110,'#ffd27a'],[100,70,'#ff9bd9'],[70,130,'#7ee8ff'],[40,60,'#b9a2ff']];
  const L=lines.map((l,i)=>`<rect x="${252+l[0]}" y="${134+i*17}" width="${l[1]}" height="8" rx="4" fill="${l[2]}" opacity=".9"><animate attributeName="width" from="0" to="${l[1]}" dur=".8s" begin="${i*.18}s" fill="freeze"/></rect>`).join('');
  return `<g class="a-float"><rect x="230" y="62" width="340" height="206" rx="20" fill="#0c1233" stroke="${c}" stroke-width="3"/><path d="M230 98H570" stroke="${c}" stroke-opacity=".4" stroke-width="2"/>
  <circle cx="256" cy="80" r="6" fill="#ff7a8a"/><circle cx="278" cy="80" r="6" fill="#ffd27a"/><circle cx="300" cy="80" r="6" fill="#7dffc8"/>
  <g fill="#6c7bd0" font-family="monospace" font-size="11" opacity=".7">${[1,2,3,4,5,6,7].map(i=>`<text x="244" y="${132+i*17-1}" >${i}</text>`).join('')}</g>${L}
  <rect class="a-blink" x="470" y="236" width="9" height="16" fill="${c}"/></g>
  <g font-family="Outfit,sans-serif" font-weight="900" fill="${c}"><text class="a-float2" x="110" y="130" font-size="64" opacity=".85">&lt;/&gt;</text><text class="a-float" x="640" y="120" font-size="72" opacity=".75">{ }</text><text class="a-float2" x="650" y="250" font-size="44" opacity=".5" fill="#7dffc8">01</text><text class="a-float" x="95" y="260" font-size="38" opacity=".45" fill="#ffd27a">fn()</text></g>`},
web:(c)=>{
  return `<g class="a-float2"><circle cx="190" cy="160" r="82" fill="#06314c" stroke="${c}" stroke-width="3"/>
  <g class="a-spin" fill="none" stroke="${c}" stroke-opacity=".55" stroke-width="2"><ellipse cx="190" cy="160" rx="34" ry="82"/><ellipse cx="190" cy="160" rx="62" ry="82"/><path d="M108 160H272M120 120H260M120 200H260"/></g>
  <circle cx="190" cy="160" r="82" fill="none" stroke="#b9ffff" stroke-opacity=".25" stroke-width="10"/></g>
  <g class="a-float"><rect x="300" y="58" width="330" height="214" rx="20" fill="#0a2c4d" stroke="${c}" stroke-width="3"/><path d="M300 96H630" stroke="${c}" stroke-opacity=".4" stroke-width="2"/>
  <circle cx="324" cy="77" r="6" fill="#ff7a8a"/><circle cx="346" cy="77" r="6" fill="#ffd27a"/><circle cx="368" cy="77" r="6" fill="#7dffc8"/>
  <rect x="396" y="68" width="190" height="18" rx="9" fill="#04162b" stroke="${c}" stroke-opacity=".5"/>
  <rect x="322" y="114" width="290" height="62" rx="12" fill="url(#cg-web)" opacity=".85"/><rect x="340" y="132" width="130" height="10" rx="5" fill="#fff"/><rect x="340" y="152" width="90" height="8" rx="4" fill="#fff" opacity=".6"/>
  <rect x="322" y="192" width="90" height="62" rx="10" fill="#0e3a63" stroke="${c}" stroke-opacity=".5"/><rect x="424" y="192" width="90" height="62" rx="10" fill="#0e3a63" stroke="${c}" stroke-opacity=".5"/><rect x="526" y="192" width="86" height="62" rx="10" fill="#0e3a63" stroke="${c}" stroke-opacity=".5"/></g>
  <path class="a-dash" d="M270 150C285 150 285 120 300 120" fill="none" stroke="${c}" stroke-width="3"/>
  <g class="a-float" transform="translate(560 190)"><path d="M0 0L0 34L9 26L15 40L22 37L16 24L28 24Z" fill="#fff" stroke="#04162b" stroke-width="2"/></g>`},
ia:(c)=>{
  const cols=[[190,[100,160,220]],[320,[70,130,190,250]],[480,[70,130,190,250]],[610,[130,190]]];
  let lines='',nodes='';
  for(let a=0;a<cols.length-1;a++)cols[a][1].forEach((y1,i)=>cols[a+1][1].forEach((y2,j)=>{lines+=`<path d="M${cols[a][0]} ${y1}L${cols[a+1][0]} ${y2}" class="a-dash" style="animation-delay:${-(i+j)*.25}s" stroke-opacity="${.18+((i+j)%3)*.12}"/>`}));
  cols.forEach((col,ci)=>col[1].forEach((y,i)=>{nodes+=`<circle class="a-pulse" style="animation-delay:${-(ci+i)*.4}s" cx="${col[0]}" cy="${y}" r="${ci==3?15:12}" fill="#1b1046" stroke="${c}" stroke-width="3"/><circle cx="${col[0]}" cy="${y}" r="4.5" fill="${ci==3?'#7dffc8':c}"/>`}));
  return `<circle cx="400" cy="160" r="120" fill="${c}" opacity=".07" class="a-pulse"/><g fill="none" stroke="${c}" stroke-width="2">${lines}</g>${nodes}
  <g class="a-twinkle" fill="${c}" font-family="monospace" font-size="12" opacity=".6"><text x="110" y="60">0110</text><text x="650" y="280">1011</text><text x="90" y="285">AI</text></g>`},
ciberseguranca:(c)=>{
  const hex=[...Array(16)].map((_,i)=>{const x=80+(i%8)*95+(Math.floor(i/8)%2)*40,y=60+Math.floor(i/8)*190;return `<path d="M${x} ${y-24}l21 12v24l-21 12l-21-12v-24z" fill="none" stroke="${c}" stroke-opacity=".16" stroke-width="2"/>`}).join('');
  return `${hex}<circle class="a-spin" cx="400" cy="160" r="128" fill="none" stroke="${c}" stroke-opacity=".35" stroke-width="2" stroke-dasharray="3 14"/><circle class="a-spin-r" cx="400" cy="160" r="108" fill="none" stroke="#8ab7ff" stroke-opacity=".3" stroke-width="2" stroke-dasharray="20 18"/>
  <g class="a-float"><path d="M400 36L538 86V176Q538 258 400 298Q262 258 262 176V86Z" fill="url(#cg-ciberseguranca)" stroke="#d3fff0" stroke-width="5"/>
  <path d="M400 56L522 98V176Q522 244 400 280Q278 244 278 176V98Z" fill="#05242d" opacity=".55"/>
  <rect x="366" y="146" width="68" height="56" rx="10" fill="#d3fff0"/><path d="M380 146V130a20 20 0 0 1 40 0V146" fill="none" stroke="#d3fff0" stroke-width="9"/><circle cx="400" cy="170" r="7" fill="#0a4b45"/><rect x="397" y="172" width="6" height="16" rx="3" fill="#0a4b45"/>
  <g clip-path="url(#shclip)"><rect class="a-scan" x="262" y="160" width="276" height="10" fill="${c}" opacity=".7"/></g></g>
  <clipPath id="shclip"><path d="M400 36L538 86V176Q538 258 400 298Q262 258 262 176V86Z"/></clipPath>`},
robotica:(c)=>{
  return `<g fill="none" stroke="${c}" stroke-opacity=".5" stroke-width="3"><g class="a-spin"><circle cx="165" cy="215" r="48" stroke-dasharray="12 8" stroke-width="14"/><circle cx="165" cy="215" r="20"/></g><g class="a-spin-r"><circle cx="645" cy="95" r="40" stroke-dasharray="10 7" stroke-width="12"/><circle cx="645" cy="95" r="16"/></g></g>
  <g class="a-float"><path d="M400 40V84" stroke="${c}" stroke-width="7" stroke-linecap="round"/><circle class="a-blink" cx="400" cy="38" r="10" fill="#ff7a8a"/>
  <rect x="290" y="84" width="220" height="176" rx="44" fill="url(#cg-robotica)" stroke="#fff1db" stroke-width="5"/>
  <rect x="316" y="116" width="168" height="92" rx="30" fill="#1b1006" stroke="${c}" stroke-width="3"/>
  <circle cx="362" cy="160" r="20" fill="${c}"/><circle cx="438" cy="160" r="20" fill="${c}"/><circle cx="368" cy="154" r="7" fill="#fff"/><circle cx="444" cy="154" r="7" fill="#fff"/>
  <path d="M366 238Q400 256 434 238" fill="none" stroke="#fff1db" stroke-width="7" stroke-linecap="round"/>
  <rect x="262" y="140" width="28" height="60" rx="12" fill="#a96a2c" stroke="#fff1db" stroke-width="3"/><rect x="510" y="140" width="28" height="60" rx="12" fill="#a96a2c" stroke="#fff1db" stroke-width="3"/></g>
  <g fill="${c}" opacity=".7"><circle class="a-twinkle" cx="240" cy="70" r="3"/><circle class="a-twinkle" cx="570" cy="260" r="3"/></g>`},
redes:(c)=>{
  const N=[[400,70],[220,130],[580,130],[300,250],[500,250],[150,230],[660,230]];
  const E=[[0,1],[0,2],[1,3],[2,4],[3,4],[1,5],[2,6],[0,3],[0,4]];
  const lines=E.map(e=>`<path id="pk${e[0]}${e[1]}" d="M${N[e[0]][0]} ${N[e[0]][1]}L${N[e[1]][0]} ${N[e[1]][1]}"/>`).join('');
  const pk=E.map((e,i)=>`<circle r="4.5" fill="#d6ffff"><animateMotion dur="${2+i%3}s" begin="${-i*.4}s" repeatCount="indefinite"><mpath href="#pk${e[0]}${e[1]}"/></animateMotion></circle>`).join('');
  const nd=N.map((n,i)=>`<circle class="a-pulse" style="animation-delay:${-i*.3}s" cx="${n[0]}" cy="${n[1]}" r="${i==0?28:20}" fill="#0b2250" stroke="${c}" stroke-width="4"/><circle cx="${n[0]}" cy="${n[1]}" r="${i==0?10:6}" fill="${i==0?'#7dffc8':c}"/>`).join('');
  return `<circle cx="400" cy="160" r="150" fill="none" stroke="${c}" stroke-opacity=".12" stroke-width="2" stroke-dasharray="4 10" class="a-spin"/><g fill="none" stroke="${c}" stroke-opacity=".5" stroke-width="3">${lines}</g>${pk}${nd}
  <g fill="none" stroke="${c}" stroke-width="3" opacity=".6"><path class="a-twinkle" d="M378 28a30 30 0 0 1 44 0M386 40a18 18 0 0 1 28 0"/></g>`},
sistemas:(c)=>{
  return `<g class="a-float2"><rect x="120" y="70" width="330" height="200" rx="16" fill="#08122b" stroke="${c}" stroke-width="3"/><path d="M120 102H450" stroke="${c}" stroke-opacity=".4" stroke-width="2"/><circle cx="142" cy="86" r="5" fill="#ff7a8a"/><circle cx="160" cy="86" r="5" fill="#ffd27a"/><circle cx="178" cy="86" r="5" fill="#7dffc8"/>
  <g font-family="monospace" font-size="13" fill="#7dffc8"><text x="140" y="132">$ sudo systemctl start</text><text x="140" y="156" fill="${c}">[ OK ] kernel carregado</text><text x="140" y="180" fill="${c}">[ OK ] memória alocada</text><text x="140" y="204" fill="#ffd27a">[ OK ] processos: 128</text><text x="140" y="232" fill="#7dffc8">$ </text></g><rect class="a-blink" x="156" y="221" width="9" height="15" fill="#7dffc8"/></g>
  <g class="a-float"><rect x="400" y="110" width="290" height="176" rx="16" fill="#12274d" stroke="#d7e8ff" stroke-width="3"/><rect x="400" y="110" width="290" height="26" rx="16" fill="#1f3d72"/>
  <rect x="420" y="152" width="62" height="62" rx="14" fill="#1d5bb8"/><rect x="498" y="152" width="62" height="62" rx="14" fill="#2aa59a"/><rect x="576" y="152" width="62" height="62" rx="14" fill="#c14f9a"/>
  <rect x="400" y="262" width="290" height="24" rx="12" fill="#0a1531"/><g fill="#d7e8ff" opacity=".8"><circle cx="545" cy="274" r="5"/><circle cx="525" cy="274" r="5"/><circle cx="565" cy="274" r="5"/></g></g>
  <g class="a-spin" transform="translate(655 70)"><circle r="28" fill="none" stroke="${c}" stroke-width="12" stroke-dasharray="10 8" opacity=".7"/><circle r="10" fill="none" stroke="${c}" stroke-width="3"/></g>`},
dispositivos:(c)=>{
  return `<g class="a-float"><rect x="330" y="26" width="150" height="270" rx="30" fill="#18082a" stroke="#ffd0ee" stroke-width="5"/><rect x="344" y="46" width="122" height="230" rx="16" fill="url(#cg-dispositivos)"/>
  <rect x="378" y="34" width="54" height="8" rx="4" fill="#07030f"/><g fill="#fff" opacity=".9"><rect x="360" y="70" width="90" height="12" rx="6"/><rect x="360" y="92" width="60" height="8" rx="4" opacity=".6"/></g>
  <g>${[0,1,2,3,4,5].map(i=>`<rect x="${360+(i%3)*32}" y="${130+Math.floor(i/3)*40}" width="26" height="26" rx="8" fill="#fff" opacity="${.35+i*.1}"/>`).join('')}</g>
  <path d="M358 240H452" stroke="#fff" stroke-opacity=".7" stroke-width="6" stroke-linecap="round"/></g>
  <g class="a-float2"><rect x="570" y="120" width="86" height="100" rx="26" fill="#2a1038" stroke="${c}" stroke-width="4"/><circle cx="613" cy="170" r="30" fill="#08030f" stroke="#ffd0ee" stroke-opacity=".5"/><path d="M613 150V172L628 181" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="590" y="82" width="46" height="36" rx="6" fill="#2a1038" opacity=".8"/><rect x="590" y="224" width="46" height="36" rx="6" fill="#2a1038" opacity=".8"/></g>
  <g class="a-float2"><rect x="120" y="150" width="150" height="96" rx="10" fill="#2a1038" stroke="#ffd0ee" stroke-width="4"/><rect x="132" y="162" width="126" height="72" rx="4" fill="#08030f"/><path d="M100 252H290L276 266H114Z" fill="#40185a" stroke="#ffd0ee" stroke-width="3"/><path d="M150 200l16-18 16 14 18-22 22 24" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
  <g fill="none" stroke="${c}" stroke-width="3" opacity=".7"><path class="a-twinkle" d="M500 70a40 40 0 0 1 40 40M500 92a18 18 0 0 1 18 18"/><path class="a-twinkle" style="animation-delay:-1.4s" d="M300 70a40 40 0 0 0-40 40M300 92a18 18 0 0 0-18 18"/></g>`},
historia:(c)=>{
  const ms=[[130,'1837'],[270,'1946'],[410,'1984'],[550,'1991'],[680,'2007']];
  const m=ms.map((p,i)=>{const up=i%2==0;const y=up?150:220;return `<path d="M${p[0]} 200V${up?112:238}" stroke="${c}" stroke-opacity=".5" stroke-width="3"/><circle class="a-pulse" style="animation-delay:${-i*.5}s" cx="${p[0]}" cy="200" r="15" fill="#2a1608" stroke="${c}" stroke-width="4"/><circle cx="${p[0]}" cy="200" r="5" fill="#fff1c9"/><g class="a-float${i%2?'2':''}"><rect x="${p[0]-40}" y="${up?72:238}" width="80" height="40" rx="12" fill="#3c2410" stroke="${c}" stroke-width="2.5"/><text x="${p[0]}" y="${up?98:264}" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="18" fill="#fff1c9">${p[1]}</text></g>`}).join('');
  return `<path d="M70 200H740" stroke="${c}" stroke-width="6" stroke-linecap="round" class="a-dash" opacity=".85"/>${m}
  <g class="a-spin" transform="translate(400 40)" opacity=".6"><circle r="22" fill="none" stroke="${c}" stroke-width="9" stroke-dasharray="8 6"/></g>`}
};
window.getCategoryArtwork=function(cat){
  const p=P[cat.id]||['#0c2442','#164b70','#75eaff'];
  const dots=Array.from({length:26},(_,i)=>`<circle class="${i%3==0?'a-twinkle':''}" style="animation-delay:${-i*.37}s" cx="${rnd(i+3,790)+5}" cy="${rnd(i+11,310)+5}" r="${i%5==0?2.6:1.4}" fill="#e6fbff" opacity="${i%3==0?.9:.35}"/>`).join('');
  return `<svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ilustração de ${cat.name}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="bg-${cat.id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${p[0]}"/><stop offset=".6" stop-color="${p[1]}"/><stop offset="1" stop-color="#050a1a"/></linearGradient>
  <linearGradient id="cg-${cat.id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${p[2]}" stop-opacity=".95"/><stop offset="1" stop-color="${p[1]}"/></linearGradient>
  <radialGradient id="glow-${cat.id}"><stop stop-color="${p[2]}" stop-opacity=".38"/><stop offset="1" stop-color="${p[2]}" stop-opacity="0"/></radialGradient>
  <pattern id="grid-${cat.id}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="${p[2]}" stroke-opacity=".08" stroke-width="1"/></pattern></defs>
  <rect width="800" height="320" fill="url(#bg-${cat.id})"/><rect width="800" height="320" fill="url(#grid-${cat.id})"/>
  <ellipse cx="400" cy="170" rx="260" ry="170" fill="url(#glow-${cat.id})"/>${dots}
  <g>${scenes[cat.id]?scenes[cat.id](p[2]):''}</g>
  <rect width="800" height="320" fill="none" stroke="${p[2]}" stroke-opacity=".12"/></svg>`;
};

/* ---------- EFEITOS ---------- */
const fxOn=()=>gameSettings.animationsEnabled;
// splash
window.addEventListener('load',()=>{setTimeout(()=>{const s=document.getElementById('fx-splash');s&&s.classList.add('hide');setTimeout(()=>s&&s.remove(),700)},1150)});
// cursor glow
const cur=document.getElementById('fx-cursor');
document.addEventListener('mousemove',e=>{cur.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
  const t=e.target.closest&&e.target.closest('.category-card,.menu-tile');
  if(t&&fxOn()){const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    t.style.setProperty('--mx',x*100+'%');t.style.setProperty('--my',y*100+'%');
    t.style.transform=`perspective(900px) rotateX(${(.5-y)*9}deg) rotateY(${(x-.5)*11}deg) translateY(-7px)`;}
});
document.addEventListener('mouseout',e=>{const t=e.target.closest&&e.target.closest('.category-card,.menu-tile');if(t&&!t.contains(e.relatedTarget))t.style.transform=''});
// ripple
document.addEventListener('pointerdown',e=>{const b=e.target.closest&&e.target.closest('.option-btn,.start-primary,.start-secondary,.category-card,.menu-top-btn');if(!b||!fxOn())return;
  const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=document.createElement('span');d.className='fx-ripple';
  d.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;b.appendChild(d);setTimeout(()=>d.remove(),700)});
// confetti
const fc=document.getElementById('fx-canvas'),fx=fc.getContext('2d');let parts=[],raf=null;
function fit(){const d=Math.min(devicePixelRatio||1,2);fc.width=innerWidth*d;fc.height=innerHeight*d;fx.setTransform(d,0,0,d,0,0)}fit();addEventListener('resize',fit);
function burst(x,y,n,spread,colors){if(!fxOn())return;
  for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=(Math.random()*.6+.4)*spread;
    parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-spread*.35,g:.22,r:Math.random()*5+2,c:colors[i%colors.length],rot:Math.random()*6,vr:(Math.random()-.5)*.4,l:1,d:Math.random()*.012+.01,sq:Math.random()>.5})}
  if(!raf)raf=requestAnimationFrame(loop)}
function loop(){fx.clearRect(0,0,innerWidth,innerHeight);
  parts=parts.filter(p=>p.l>0&&p.y<innerHeight+40);
  parts.forEach(p=>{p.vy+=p.g;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;p.l-=p.d;fx.save();fx.globalAlpha=Math.max(p.l,0);fx.translate(p.x,p.y);fx.rotate(p.rot);fx.fillStyle=p.c;
    if(p.sq)fx.fillRect(-p.r,-p.r/2,p.r*2,p.r);else{fx.beginPath();fx.arc(0,0,p.r/1.5,0,7);fx.fill()}fx.restore()});
  raf=parts.length?requestAnimationFrame(loop):null}
const OK=['#58edff','#7dffc8','#4a8cff','#ffffff','#ffd36b'];
function rain(){if(!fxOn())return;let n=0;const t=setInterval(()=>{burst(Math.random()*innerWidth,-10,18,5,['#58edff','#7dffc8','#ffd36b','#ff9bd9','#a78bfa','#fff']);if(++n>9)clearInterval(t)},160)}
// sons extras
function chime(freqs){if(!gameSettings.soundEnabled)return;try{const A=window.AudioContext||window.webkitAudioContext,a=new A();freqs.forEach((f,i)=>{const o=a.createOscillator(),g=a.createGain();o.type='triangle';o.frequency.value=f;const t=a.currentTime+i*.09;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.09,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+.3);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+.32)});setTimeout(()=>a.close(),900)}catch(e){}}
function toast(t){const d=document.createElement('div');d.className='fx-toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),1900)}
// hooks nas respostas
appState.streak=0;appState.bestStreak=0;
const _start=appState.startQuiz;appState.startQuiz=function(id){this.streak=0;this.bestStreak=0;return _start.call(this,id)};
const _ans=appState.answerQuestion;
appState.answerQuestion=function(i){
  if(this.isAnswered)return;const before=this.score,btn=document.getElementById('option-'+i);
  _ans.call(this,i);const ok=this.score>before;
  if(btn){const r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    if(fxOn()){btn.classList.add(ok?'fx-flash-ok':'fx-flash-bad');
      if(ok){burst(r.left+50,cy,34,7,OK);const p=document.createElement('div');p.className='fx-pop';p.textContent='+1';p.style.cssText=`left:${r.right-70}px;top:${cy-18}px`;document.body.appendChild(p);setTimeout(()=>p.remove(),1150)}
      else{const q=document.querySelector('#view-container .rounded-3xl');q&&q.classList.add('fx-shake')}}}
  if(ok){this.streak++;this.bestStreak=Math.max(this.bestStreak,this.streak);
    if(this.streak>=3&&this.streak%1===0){toast('🔥 SEQUÊNCIA x'+this.streak+'!');chime([660,830,990,1320]);if(btn){const r=btn.getBoundingClientRect();burst(innerWidth/2,110,50,8,['#ffd36b','#ff8a3d','#ff5d8f','#fff'])}}
    const hd=document.querySelector('#view-container .text-neon-gold');if(hd&&this.streak>=2){const s=document.createElement('div');s.className='fx-streak';s.innerHTML='<i class="fa-solid fa-fire"></i> x'+this.streak;hd.parentElement.appendChild(s)}
  }else this.streak=0;
};
// pós-render
function countUp(el){const m=el.textContent.trim().match(/^(\d+)(%?)$/);if(!m)return;const end=+m[1],suf=m[2],t0=performance.now(),dur=900;
  (function step(t){const k=Math.min((t-t0)/dur,1),e=1-Math.pow(1-k,3);el.textContent=Math.round(end*e)+suf;if(k<1)requestAnimationFrame(step)})(t0)}
const _render=window.renderApp;
window.renderApp=function(){_render.apply(this,arguments);
  const v=document.getElementById('view-container');if(!v||!fxOn())return;
  v.querySelectorAll('.category-card,.menu-tile,.info-panel,.info-item,.glass-card.rounded-2xl').forEach((el,i)=>{el.classList.add('fx-in');el.style.setProperty('--i',Math.min(i,14))});
  v.querySelectorAll('.option-btn').forEach((el,i)=>{el.classList.add('fx-in');el.style.setProperty('--i',i+2)});
  v.querySelectorAll('.stat-number').forEach(countUp);
  if(appState.currentView==='results'){
    v.querySelectorAll('.fa-star').forEach((s,i)=>{s.classList.add('fx-star');s.style.animationDelay=(.3+i*.25)+'s'});
    v.querySelectorAll('.text-2xl.font-black').forEach(el=>{const m=el.textContent.match(/(\d+)\s*\/\s*(\d+)/);if(m){const a=+m[1],b=m[2],t0=performance.now();(function st(t){const k=Math.min((t-t0)/900,1);el.textContent=Math.round(a*k)+' / '+b;if(k<1)requestAnimationFrame(st)})(t0)}else countUp(el)});
    const pct=Math.round(appState.score/appState.selectedCategory.questions.length*100);
    if(pct>=70){rain();chime([523,659,784,1047])}else chime([392,330]);
    if(appState.bestStreak>=3){const d=document.createElement('p');d.className='text-sm mb-6 text-amber-300 font-bold';d.innerHTML='🔥 Maior sequência: '+appState.bestStreak+' acertos seguidos';const st=v.querySelector('.grid.grid-cols-2');st&&st.parentElement.insertBefore(d,st)}
  }
};
})();
