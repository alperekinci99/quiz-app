export default function SelectedQuestions(props){
    return (
        <div className="selected-area">
            <h4>Seçilen Sorular</h4>
            <ul className="selected-questions">
            {
                props.secilenSorular.map((item, index) => 
                    <li key={index}>
                    <div>{item.question}</div>
                    <span onClick={() => props.soruSil(item)}><i className="fa fa-xmark"></i></span>
                 </li> 
                 
                )
            }
            </ul>
        </div>
    )
}