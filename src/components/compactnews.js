export function News(props) {
    return (
      <>
        <h1>
          <b>{props.titulo}</b>
        </h1>
        <p>{props.cuerpo}</p>
        <p>{props.autor}</p>
      </>
    );
  }
  