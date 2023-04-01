export default function Quiz(props){
    return(
        <section className="quiz">
            {
                <ul>
                {
                    props.secilenSorular.map((item, index) =>
                    <li key={index}>
                        <div>{item.question}</div>
                    </li> 
                    )
                }
            </ul>
            }
        </section>
    )
}