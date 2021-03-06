<h1>Rocketseat Starter - HuntWeb</h1>


<strong>API</strong>
<p>
Como buscamos dados de uma API Rest? 
</p>
<span>
Vamos utilizar uma biblioteca chamada <strong>axios</strong>, para conseguirmos obter dados
de uma determinada API.
Para instalar essa biblioteca basta executar o comando:
</span>
<br/>
<code>
yarn add axios
</code>

<hr/>

<strong>componentDidMount()</strong>
<p>
Quando precisamos que uma ação seja executada, assim que um componente é apresentado em tela.<br/>
Utilizamos o <em>componentDidMount()</em>.
</p>

<strong>Variáveis no React?</strong>
<p>
Dentro do React, não criamos simplesmente variáveis para armazenar os valores!
</p>
Dentro do React, temos o conceito de <strong>state</strong>. Sempre teremos um array, com duas posições.
<br/>
Sendo a primeira, o próprio valor que queremos armazenar e a segunda é uma função que serve para alterar o valor da primeira posição.
<br>
<code>
const [name, setName] = useState('Thadeu');
</code>
<p>
Veja que possuo o 'name' contém o valor.<br/>
Também possuo o 'setName', que serve para alterar o valor do 'name'.
</p>
<p>
Além disso, precisamos saber que o react trabalha com programação reativa.
Sendo que basicamente o método render, fica observando todas as variáveis que temos no estado, e qualquer alteração nessas variáveis o método render será executado novamente.
<br/>
Portanto as variáveis sempre serão atualizadas e é refletido diretamente nos componentes.
</p>

<strong>react-router-dom</strong>
<p>
Vamos utilizar o <em>react-router-dom</em>, para controlarmos a navegação da nossa aplicação.
</p>