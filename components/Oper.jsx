const Oper = ({ a, b }) => {
    // const a = props.a
    // const b = props.b
    return(
        <div>
            <p>{a+b}</p>
            <p>{a-b}</p>
            <p>{a*b}</p>
            <p>{a/b}</p>
            <p>{a%b}</p>
        </div>
    )
}

export default Oper