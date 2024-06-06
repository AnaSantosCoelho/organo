import './rodape.css'

const Rodape =() =>{
    return(<footer className="footer">
    <section>
        <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/imagens/facebook.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/imagens/twitter.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/imagens/instagram.png" alt="" />
                </a>
            </li> 
            </ul>
        </section>
        <section>
            <img src="/imagens/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Ana Luiza.
            </p>
        </section>
    </footer>   
)}

export default Rodape