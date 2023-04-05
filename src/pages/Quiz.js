export default function Quiz(props){

    return(
        <section className="quiz">
            
            <div className="quiz-area">
                <div className="page-description">
                    <p>Sınava hoşgeldiniz! Sizin için güzel bir deneyim olması dileklerimizle..</p>
                </div>
            {
                props.secilenSorular.sort((a, b) => a.id > b.id ? 1 : -1).map((item, index) =>
                
                <div className={item.answered === false && index === props.aktifSoru ? "quiz-item active" : 
                item.answered === true && index < props.aktifSoru ? "quiz-item answered" :
                item.answered === true && index === 0 && props.aktifSoru === 0 ? "quiz-item active" :
                "quiz-item disable"} key={item.id}>
                    <div className="question">
                        <p>{item.question}</p>
                    </div>
                    <ul className="answers">
                        {item.answers.map((answer, index2) => 
                        (
                         <li key={index2} className={(item.selectAnswer === answer) && item.trueAnswer === answer ? 'true' : 
                         item.selectAnswer === answer && item.trueAnswer !== answer ? 'false' : 
                         item.selectAnswer !== answer && item.trueAnswer === answer ? 'true' : 
                         ''} onClick={() => props.cevapEkle(answer, item, index2)}>
                            {answer}
                        </li>
                        )
                        
                        )}
                    </ul>
                </div>
                )
            }
            {
                <div className="result">
                    <div className="answer-info true-answers">Doğru Cevap Sayısı: { props.dCevapSayisi }</div>
                    <div className="answer-info false-answers">Yanlış Cevap Sayısı: { props.yCevapSayisi }</div>
                </div>
                
            }
            </div>
        </section>
    )
    
}