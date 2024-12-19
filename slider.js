
const projetos = [
	{
	  titulo: "libft",
	  descricao: `O projeto libft envolve criar uma biblioteca própria em C, 
	  reimplementando funções comuns da biblioteca padrão, como strlen, strcpy, 
	  atoi, entre outras. Além disso, o aluno também desenvolve funções para 
	  manipulação de listas encadeadas. Este projeto visa consolidar o entendimento 
	  sobre manipulação de strings, memória dinâmica e ponteiros, criando uma base 
	  reutilizável para projetos futuros em C.
	  <br>
	  Além das funções básicas, você também precisa implementar funções 
	  adicionais para manipulação de listas encadeadas, o que dá uma boa base 
	  para os projetos mais complexos que vêm depois.`,

	  skills: ["C", "Rigor", "Algorithms", "Programação Imperativa"]
	},
	{
	  titulo: "get_next_line",
	  descricao: `O projeto get_next_line consiste em implementar uma função 
	  que lê uma linha de um arquivo ou da entrada padrão a cada chamada. 
	  Utilizando um buffer de leitura definido pelo BUFFER_SIZE, a função deve 
	  gerenciar a memória dinamicamente, armazenando partes da linha entre as 
	  chamadas. O foco é trabalhar com manipulação de arquivos, buffers e alocação 
	  de memória em C, preparando o aluno para desafios mais complexos.`,
	  skills:["C", "Manipulação de Strings", "Manipulação de Memória", "Rigor", "Unix", "Algorithms"]
	},
	{
	  titulo: "ft_printf",
	  descricao: `O projeto ft_printf é uma recriação da função printf em C,
	   permitindo exibir dados formatados como inteiros, strings, caracteres,
	   hexadecimais e ponteiros. Ele exige o uso de argumentos variádicos, 
	   formatação personalizada (como alinhamento e preenchimento), e controle 
	   eficiente de memória. O objetivo é dominar a manipulação de dados e 
	   strings em C, além de otimizar o desempenho da função para torná-la 
	   reutilizável em outros projetos."`,
	  skills: ["C", "Manipulação de Strings", "Manipulação de Memória", "Rigor", "Unix", "Algorithms"]
	},
	{
	  titulo: "born2beroot",
	  descricao: `O projeto born2beroot tem como objetivo configurar um ambiente
	   de servidor Linux e entender conceitos de administração de sistemas. Os 
	   alunos devem criar uma máquina virtual com um sistema Linux (Debian ou 
	   Rocky), instalar e configurar serviços como SSH, Apache, e um banco de 
	   dados. O foco é aprender sobre gerenciamento de usuários, permissões, 
	   redes e segurança, além de praticar habilidades práticas de configuração 
	   e manutenção de sistemas.
`,
	  skills: ["Linux", "Rigor", "Redes & Administração de Sistemas"]
	},
	{
	  titulo: "fract-ol",
	  descricao: `O projeto fract-ol envolve a criação de um visualizador de 
	  fractais, como o conjunto de Mandelbrot e Julia. Os alunos devem 
	  implementar a renderização gráfica em C, usando bibliotecas como MiniLibX 
	  para criar janelas e exibir os fractais. O desafio inclui o cálculo de 
	  pontos no plano complexo, otimização de desempenho e interação do usuário, 
	  permitindo que ele explore diferentes parâmetros dos fractais. O foco é 
	  desenvolver habilidades em matemática, gráficos computacionais e programação de baixo nível.`,
	  skills: ["C","Programação 2D", "Técnicas de Otimização", "Matemática", "Programação Grafíca", "Programação Imperativa"]
	},
	{
	  titulo: "pipex",
	  descricao: `O projeto pipex foca na criação de um programa em C que 
	  replica o funcionamento do pipeline do Unix (|). Ele deve executar 
	  comandos em sequência, passando a saída de um comando como entrada 
	  para o próximo (por exemplo, ls | grep txt). O projeto exige a utilização 
	  de pipes, redirecionamento de entrada/saída e o uso de processos com fork 
	  e execve. O objetivo é aprender sobre intercomunicação entre processos, 
	  manipulação de arquivos e gerenciamento de memória, tudo em um contexto de 
	  programação de sistemas.`,
	  skills: ["Processos", "C", "Unix", "Lógica Unix", "Programação Imperativa"]
	},
	{
	  titulo: "pushswap",
	  descricao: `O projeto push_swap consiste em desenvolver um programa em C 
	  para ordenar uma pilha de números usando um conjunto limitado de operações 
	  específicas (como sa, sb, pa, pb, ra, rb, etc.). O desafio é encontrar a 
	  sequência mais eficiente de operações para ordenar a pilha com o menor 
	  número de movimentos possível. Este projeto aprofunda o conhecimento em 
	  algoritmos de ordenação, estrutura de dados (pilhas), e otimização de código, 
	  incentivando o aluno a considerar a complexidade e eficiência dos algoritmos.`,
	  skills: ["Algoritmos",
		"Rigor",
		"Algoritmos",
		"Unix",
		"Programação Imperativa",
		"C",
		"Algoritmos de classificação",
		"Conceito de bateria e manuseio de elementos",
		"Implementação de algoritmo"]
	},
	{
	  titulo: "minishell",
	  descricao: `O projeto minishell consiste em criar um interpretador de 
	  comandos simples, semelhante ao bash, em C. Ele permite ao usuário executar 
	  comandos básicos, gerenciar processos, redirecionar entrada e saída, e 
	  implementar pipes. Este projeto explora a criação de processos, o uso de 
	  sinais, e a manipulação de ambiente, introduzindo o aluno aos conceitos 
	  básicos de sistemas operacionais e shells.`,
	  skills: ["Shell Scripting", "C", "Processos", "Unix", "Sinais", "Redirecionamento de I/O", "Lexing e Parsing"]
	},
	{
	  titulo: "philosophers",
	  descricao: `O projeto philosophers envolve a implementação do famoso 
	  problema dos "Filósofos comensais", usando threads e gerenciamento de 
	  concorrência em C. O desafio é simular filósofos que alternam entre 
	  pensar e comer, evitando o "deadlock" e condições de corrida. Ele 
	  introduz conceitos essenciais de programação concorrente, como mutexes e 
	  semáforos, aprimorando a compreensão de sincronização de threads.`,
	  skills: ["Threads", "Concorrência", "C", "Mutexes"]
	},
	{
	  titulo: "net_practice",
	  descricao: `No projeto net_practice, o foco está em aprender os fundamentos 
	  de redes de computadores. Ele abrange conceitos como roteamento, sub-redes, 
	  máscaras de rede, e encaminhamento de pacotes. O objetivo é proporcionar uma 
	  base sólida em redes, ajudando o aluno a entender como a comunicação entre 
	  máquinas ocorre em redes TCP/IP.`,
	  skills: ["Redes", "TCP/IP", "Roteamento", "Sub-redes"]
	},
	{
	  titulo: "cub3d",
	  descricao: `O projeto cub3d envolve a criação de um jogo simples em 3D, 
	  inspirado em Wolfenstein 3D, usando o conceito de "raycasting". Em C, o 
	  aluno deve renderizar um ambiente 3D a partir de uma perspectiva em 2D, 
	  criando gráficos e permitindo a navegação no espaço virtual. Este projeto 
	  desenvolve habilidades em gráficos 2D/3D, matemática aplicada (geometria), 
	  e interação com o usuário.`,
	  skills: ["Raycasting", "C", "Gráficos"]
	},
	{
	  titulo: "cpp",
	  descricao: `O piscina cpp é uma série de projetos que introduz os fundamentos 
	  da programação orientada a objetos em C++. Ele explora conceitos como classes, 
	  herança, polimorfismo, encapsulamento, e gerenciamento de memória. Cada módulo 
	  se concentra em um aspecto específico da linguagem, proporcionando uma introdução 
	  sólida ao paradigma de orientação a objetos e ao uso de C++ em projetos mais avançados.`,
	  skills: ["C++", "Programação Orientada a Objetos"]
	},
	{
	  titulo: "inception",
	  descricao: `O projeto inception foca na criação de uma infraestrutura de 
	  contêineres com Docker. O aluno deve configurar serviços em contêineres 
	  (como Nginx, MariaDB, e WordPress) que interagem em uma rede virtual. O 
	  objetivo é aprender sobre virtualização, orquestração de contêineres e redes, 
	  preparando o aluno para ambientes de produção e DevOps.`,
	  skills: ["Docker", "DevOps"]
	},
	{
	  titulo: "ft_irc",
	  descricao: `No projeto ft_irc, o objetivo é desenvolver um servidor de IRC 
	  (Internet Relay Chat) em C++ que permita a comunicação entre múltiplos clientes, 
	  com suporte a canais e mensagens privadas. Este projeto ensina sobre redes e 
	  protocolos, manipulação de sockets, e gestão de clientes simultâneos, aprofundando 
	  o entendimento de comunicação em rede.`,
	  skills: ["Redes", "C", "C++", "Sockets", "Protocolo IRC", "Programação de Servidor"]
	},
	{
	  titulo: "ft_transcendence",
	  descricao: `O projeto ft_transcendence consiste em criar uma aplicação web 
	  completa, utilizando uma stack moderna (Python, JavaScript, HTML, CSS, etc.).
	  Geralmente envolve a criação de um sistema de autenticação, 
	  chat em tempo real, e outras funcionalidades interativas. Este projeto explora 
	  o desenvolvimento web full-stack, com foco em segurança, autenticação, e 
	  interfaces dinâmicas, consolidando conceitos de front-end e back-end.`,
	  skills: ["Desenvolvimento Web", "Full-Stack", "IA", "Deploy", "Django", "websockets"]
	}
  ];
  // Função para gerar os slides
  function initSlider() {
	const carouselContent = document.getElementById('carousel-container');
	if (!carouselContent) {
	  console.error('Elemento #carousel-container não encontrado.');
	  return;
	}
	loadSlider(carouselContent);
}

function loadSlider(conteudo){  
	projetos.forEach((projeto, index) => {
	const item = document.createElement('div');
	item.id="texto-projeto"
	item.className = `carousel-item${index === 0 ? ' active' : ''}`; // Marca o primeiro item como ativo
	item.innerHTML = `
	  <h2 class="mt-1 text-center">${projeto.titulo}</h2>
	  <p class="mt-2">${projeto.descricao}</p>
	  <h5 class="mt-4 text-center">Skills Desenvolvidas</h5>
	  <div class="skills-list d-flex justify-content-center align-items-center">
		${createSkillsList(projeto.skills).outerHTML}
	  </div>
	  `;
	// item.appendChild(createSkillsList(projeto.skills));
	conteudo.appendChild(item);
  });
}
	//   <ul class="skills-list">
	// 	${projeto.skills.map(skill => `<li>${skill}</li>`).join('')}
	//   </ul>


	function createSkillsList(skills) {
		const container = document.createElement('div');
		container.className = 'skills-container';
	  
		const skillsPerRow = 3; // Número de habilidades por linha
		const rows = Math.ceil(skills.length / skillsPerRow);
	  
		for (let i = 0; i < rows; i++) {
		  const row = document.createElement('div');
		  row.className = 'skills-row';
	  
		  for (let j = 0; j < skillsPerRow; j++) {
			const index = i * skillsPerRow + j;
			if (index < skills.length) {
			  const skillItem = document.createElement('div');
			  skillItem.className = 'skill-item';
			  skillItem.textContent = skills[index];
			  row.appendChild(skillItem);
			}
		  }
	  
		  container.appendChild(row);
		}
	  
		return container;
	  }

// function createSkillsList(skills) {
// 	const container = document.createElement('div');
// 	container.className = 'skills-container';

// 	const columns = Math.ceil(Math.sqrt(skills.length)); 
// 	const skillsPerColumn = Math.ceil(skills.length / columns);
// 	// const skillsPerColumn = skills.length % 2 === 0 ? 2 : 3;
// 	// const columns = Math.ceil(skills.length / skillsPerColumn);

// 	for (let i = 0; i < columns; i++) {
// 	const column = document.createElement('div');
// 	column.className = 'skills-column flex-grow-1';

// 	for (let j = 0; j < skillsPerColumn; j++) {
// 		const index = i * skillsPerColumn + j;
// 		if (index < skills.length) {
// 			const skill = document.createElement('div');
// 			skill.className = 'skill-item';
// 			skill.textContent = skills[index];
// 			column.appendChild(skill);
// 		}
// 	}

// 	container.appendChild(column);
//   }

//   return container;
// }

window.initSlider = initSlider;