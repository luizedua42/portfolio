
const projetos = [
	{
	  titulo: "libft",
	  descricao: `O projeto libft da 42 é um dos primeiros desafios que realizei
		e tem o objetivo de desenvolver uma biblioteca personalizada em C, com 
		funções comuns da biblioteca padrão. 
		A ideia é recriar funções fundamentais, como strlen, strcpy, atoi e muitas outras, 
		sem usar funções prontas da linguagem. O projeto é uma ótima introdução 
		para praticar conceitos importantes como manipulação de strings, 
		alocação de memória, e ponteiros.<br>
		Além das funções básicas, você também precisa implementar funções 
		adicionais para manipulação de listas encadeadas, o que dá uma boa base
		para os projetos mais complexos que vêm depois. No final, a libft serve
		como um recurso reutilizável que pode e deve ser integrado a outros
		projetos ao longo do Common Core. É uma forma de se aprofundar em C e 
		aprender como funciona uma biblioteca desde o zero.`,

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
	  skills: ["Programação 2D", "Técnicas de Otimização", "Matemática", "Programação Grafíca", "Programação Imperativa"]
	},
	{
	  titulo: "pipex",
	  descricao: "Implementar a funcionalidade de pipes em um shell.",
	  skills: ["Processos", "C"]
	},
	{
	  titulo: "pushswap",
	  descricao: "Desenvolver um algoritmo de ordenação utilizando stacks.",
	  skills: ["Algoritmos", "C"]
	},
	{
	  titulo: "minishell",
	  descricao: "Implementar um shell simples similar ao Bash.",
	  skills: ["Shell Scripting", "C"]
	},
	{
	  titulo: "philosophers",
	  descricao: "Resolver o problema dos filósofos comendo utilizando threads.",
	  skills: ["Threads", "Concorrência"]
	},
	{
	  titulo: "net_practice",
	  descricao: "Aprender sobre redes e comunicação em C.",
	  skills: ["Redes", "C"]
	},
	{
	  titulo: "cub3d",
	  descricao: "Construir um jogo 3D simples utilizando Raycasting.",
	  skills: ["Raycasting", "C", "Gráficos"]
	},
	{
	  titulo: "cpp",
	  descricao: "Introdução à programação em C++.",
	  skills: ["C++", "Programação Orientada a Objetos"]
	},
	{
	  titulo: "inception",
	  descricao: "Criar um ambiente de desenvolvimento com Docker.",
	  skills: ["Docker", "DevOps"]
	},
	{
	  titulo: "ft_irc",
	  descricao: "Implementar um servidor IRC básico.",
	  skills: ["Redes", "C"]
	},
	{
	  titulo: "ft_transcendence",
	  descricao: "Projeto que envolve comunicação entre cliente e servidor.",
	  skills: ["Redes", "C"]
	}
  ];
  // Função para gerar os slides
  const carouselContent = document.getElementById('carousel-container');

  projetos.forEach((projeto, index) => {
	const item = document.createElement('div');
	item.className = `carousel-item${index === 0 ? ' active' : ''}`; // Marca o primeiro item como ativo
	item.innerHTML = `
	  <h2 class="mt-4 text-center">${projeto.titulo}</h2>
	  <p class="mt-4 text-center">${projeto.descricao}</p>
	  <h5 class="mt-2 text-center">Skills Desenvolvidas</h5>
	  <ul class="skills-list">
		${projeto.skills.map(skill => `<li>${skill}</li>`).join('')}
	  </ul>
	`;
	carouselContent.appendChild(item);
  });