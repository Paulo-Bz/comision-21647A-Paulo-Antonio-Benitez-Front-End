import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';


const TablaDeDatos = (props) => {

    const { lista, usuario } = props;

    const navigate = useNavigate();

    const ver = (id) => {
        navigate('/ver/' + id);
    }

    const editar = (id) => {
        navigate('/editar/' + id);
    }

    const eliminar = (id) => {
        navigate('/eliminar/' + id);
    }

    return (
        <Table striped bordered hover variant="clar" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>TITULO</th>
                    <th>AUTOR</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((item, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.titulo}</td>
                            <td>{item.autor.nombres + ' ' + item.autor.apellidos}</td>
                            <td>
                                <ButtonGroup>
                                    <Button variant="info" onClick={() => ver(item._id)}>Ver</Button>

                                    {
                                        usuario && (usuario.id === item.autor._id) && (
                                            <>
                                                <Button variant="success" onClick={() => editar(item._id)}>Editar</Button>
                                                <Button variant="warning" onClick={() => eliminar(item._id)}>Eliminar</Button>
                                            </>
                                        )
                                    }
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table >
    );
}

export default TablaDeDatos