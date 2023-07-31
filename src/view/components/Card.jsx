
import fotoTeste from "../images/zeev.png";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";



export default function Card() {

    const openInNewTab = (url) => {
        window.open(url, '_blank' , 'noopener,noreferrer')
    };
    return (
        <div className=" flex justify-center font-primary m-10">
            <div className="rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-50 w-96 h-max my-8">
                <div className=" flex justify-center mx-auto my-auto">
                    <img src={fotoTeste} className="h-40 w-40 " />
                </div>
                <div className="flex justify-center m-2 ">
                    <div className=" grid columns-2">
                        <h1 className=" text-xl font-Rubik">
                            Pedro Fernandes</h1>
                        <h4 className=" flex justify-center text-sm text-purple-500 font-Rubik">
                            Back-end Developer
                        </h4>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" flex flex-row font-Rubik font-semibold">
                        <div>
                            <button onClick={() => openInNewTab('https://github.com/pedrovictorbf')} className=" my-1 mx-3 shadow-lg shadow-zinc-500/50 rounded hover:bg-gray-200 bg-white h-10
                        text-black flex flex-row justify-center p-2">
                                <FaGithub className="m-1" />
                                Github</button>
                        </div>
                        <div>
                            <button onClick={() => openInNewTab('https://www.linkedin.com/in/pedro-fernandes-8b4589238/')}  className="my-1 mx-3 shadow-lg shadow-zinc-500/50 rounded hover:bg-blue-800 bg-blue-500  h-10 text-white flex flex-row justify-center p-2">
                                <AiFillLinkedin className="m-1" />
                            Linkedin</button>
                        </div>
                    </div>
                </div>
                <div className=" whitespace-pre-line font-primary">
                    <h2 className=" text-purple-500 m-5 font-semibold">
                        Sobre mim : 
                    </h2>
                    <p className="flex justify-center m-5">
                        Web back-end developer atuo principalmente com Node/Express e sistemas de gerenciamento de banco de dados como PostgreSQL e SQL Server, possuo conhecimentos em T-SQL e PL/pgSQL, versionamento de código , programação orientada a Objetos e código limpo. Atualmente curso Engenharia de Software e estudo sobre engenharia de dados.
                    </p>
                    <h2 className=" text-purple-500 m-5 font-semibold">
                        Principais Interesses :
                    </h2>
                    <p className="flex justify-center m-5">
                        Atualmente estou aperfeiçoando meus conhecimentos de desenvolvimento front-end e de administração de banco de dados.
                    </p>
                </div>
            </div>
        </div>
        
    )
}