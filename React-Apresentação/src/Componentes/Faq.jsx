import './Faq.modules.css'
function Faq() {
    return(
        <>
         <div className="top">
        <h1>Como podemos ajudar?</h1>
       <input type="text" placeholder="Buscar..." className="input_help"/>
    </div>

    <div className="box">
       <p className="heading">perguntas mais comuns</p> 
        <div className="fqs">
            <details>
                <summary>O que é Spotify</summary>
                <p className="text">O Spotify é um serviço digital que dá acesso instantâneo a milhões de músicas, podcasts, vídeos e outros conteúdos de criadores no mundo todo.
                <br /><br />
                    As funções básicas são gratuitas, como a reprodução de músicas, mas você também pode fazer upgrade para o Spotify Premium.
                </p>
            </details>

            <details>
                <summary>Quais as vantegens do Spotify Premium</summary>
                <p className="text">
                    + Modo offline. Ouça música onde estiver.
                    <br /><br />
                    + Ouça músicas sem anúncios. Curta música, sem parar.
                    <br /><br />
                    + Ouça o que quiser. Mesmo no celular ou tablet.
                    <br /><br />
                    + Troque de música o quanto quiser. Pule quando quiser.
                    <br />
                </p>
            </details>

            <details>
                <summary>Quanto custa o Spotify</summary>
                <p className="text">
                    Individual
                    <br />
                    R$ 19,90/mês após o período da oferta
                    <br />
                    1 conta
                    <br /><br />
                    Duo
                    <br />
                    R$ 24,90/mês após o período da oferta
                    <br />
                    2 contas
                    <br /><br />
                    Família
                    <br />
                    R$ 34,90/mês após o período da oferta
                    <br />
                    Até 6 contas
                    <br /><br />
                    Universitário
                    <br />
                    R$ 9,90/mês após o período da oferta
                    <br />
                    1 conta
                </p>
            </details>

            <details>
                <summary>Como faço para assinar</summary>
                <p className="text">
                    1° Acesse o site do Spotify Premium para iniciar a assinatura do serviço. Você também pode assinar o Spotify Família (R$ 26,90/mês) ou o Spotify para estudantes (R$ 8,50/mês).
                    <br /><br />
                    2° Em qualquer um dos três, toque no botão Seja Premium ou Começar.
                    <br /><br />
                    3° Faça o cadastro ou entre com o seu Facebook.
                    <br /><br />
                    4° Caso tenha entrado pelo Facebook, autorize o acesso na rede social.
                    <br /><br />
                    5° Role a tela para baixo, selecione o método de pagamento e toque em Continuar.
                    <br /><br />
                    6° Preencha suas informações de cobrança, como CPF, número do telefone e endereço.
                    <br /><br />
                    7° Para finalizar, toque em continuar e insira os dados de pagamento.
                    <br /><br />
                    8° Pronto! Você assinou o Spotify.
                    </p>
            </details>

            <details>
                <summary>Como faço para cancelar</summary>
                <p className="text">
                    Cancele seu plano Premium a qualquer momento na página da sua conta.
                    <br /><br />
                    1. Entre em spotify.com/account.
                    <br /><br />
                    2. Em Seu plano, clique em MUDAR DE PLANO.
                    <br /><br />
                    3. Role para baixo até Cancelar o Spotify e clique em CANCELAR O PREMIUM.
                    <br /><br />
                    Sua conta continuará no Premium até a próxima data de cobrança. Depois disso, ela passará para a versão grátis.
                    </p>
            </details>

            
            <details>
                <summary>Não lembro minhas informações de login</summary>
                <p className="text">
                    Se não se lembrar do seu e-mail ou nome de usuário, acesse a página de redefinição de 
                    senha e insira os endereços de e-mail que você pode ter usado para criar uma conta. 
                    <br /><br />
                    Quando o endereço registrado no Spotify for inserido, aparecerá uma mensagem dizendo que
                    o e-mail de redefinição de senha foi enviado.
                </p>
            </details>
            
            <details>
                <summary>Não consigo redefinir a senha</summary>
                <p className="text">
                    Redefinição de senha.
                    <br /><br />
                    Insira seu nome de usuário do Spotify ou o e-mail que você usou no cadastro.
                    <br /><br />
                    Nós mandaremos um e-mail com seu nome de usuário e um link para você redefinir sua senha.
                    Se ainda precisa de ajuda, contate o Suporte do Spotify.
                </p>
            </details>

            <details>
                <summary>Formas de pagamento</summary>
                <p className="text">
                    Você pode pagar pelo Spotify Premium de muitas maneiras:
                    <br /><br />
                    1. Cartão de crédito/débito
                    <br /><br />
                    2. Cartões pré-pagos
                    <br /><br />
                    3. PayPal
                    <br /><br />
                    4. Vales-presente
                    <br /><br />
                    5. Pagamento móvel
                    <br /><br />
                    6. Plano pré-pago
                </p>
            </details>
        </div>
    </div>
    </>
    )
}

export default Faq