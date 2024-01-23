export default function Element(props) {
    return (
        <>
        <h2>Ahoj {props.elementName}.</h2>
        <p>You are {props.age}.</p>
        <p>Your weight: {props.weight}</p>
        </>
    )
}