
import { Link } from "react-router-dom"
import SelectedQuestions from "../components/SelectedQuestions"

export default function Home(props){

    return(
        <section className="home">
            <div className="content-head">
                <div className="description">
                    <p>Aşağıdaki seçenekler arasından <b>5 adet soru seçin ve sınava başlayın</b>...</p>
                    <p className="note">(Sınava başlayabilmek için yukarıda belirtilen kadar soru seçmeniz gerekmektedir!)</p>
                </div>
                
                {
                    props.butonStatu === true ? <div className="continue-button active"><Link to="quiz" onClick={() => {
                        props.butonTikla()
                    } }>{props.butonText}</Link></div> : 
                    <div className="continue-button disable"><Link to="quiz" onClick={(e) => {
                        e.preventDefault()
                    } }>{props.butonText}</Link></div>
                }
            </div>
            <div className="content-body">
                <h3>Sorular</h3>
                <ul className="questions">
                    {
                        props.sorular.map((item, index) => (
                            props.secilenSorular.length > 4 ? <li key={index} className="notSelected">
                            <div>{item.question}</div>
                         </li> : <li key={index}>
                            <div onClick={() => {
                            props.soruSec(item)
                            }}>{item.question}</div>
                         </li>
                        )
                         
                        )
                    }
                </ul>
                
                {
                    props.secilenSorular.length > 0 && 
                    <SelectedQuestions secilenSorular={props.secilenSorular} soruSil={props.soruSil}/>
                }
            </div>
        </section>
    )
}