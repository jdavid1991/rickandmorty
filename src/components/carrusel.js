import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/productos.css'
import { useNavigate } from "react-router-dom";


function BasicExample() {
  const navigate = useNavigate() 

  return (
    <div className='forconte'>
      <div className='formulario'>
      <Form >
        <div style={{textAlign: 'center'}}>
        <img src='https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png' alt='sii' width='50%'></img>
        </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      
      <div style={{textAlign: 'center'}} className='bboton'>
      <Button variant="success" onClick={() => navigate('productos')}>
        INICIAR
      </Button> <br></br><br></br>
      <a href='https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser'> Registrate</a><br></br>
      <a href='https://accounts.google.com/signin/v2/usernamerecovery?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser'>Olvidate tu contraseña</a><br></br><br></br>
      </div>
    </Form>
      </div>
    </div>
  );
}

export default BasicExample;