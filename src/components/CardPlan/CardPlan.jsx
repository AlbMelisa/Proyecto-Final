import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Image,
  Card,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { API_URL } from "../../utils/constant.js";
import Swal from "sweetalert2";
import '../CardPlan/CardPlan.css'
import emailjs from 'emailjs-com';

const CardPlan = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const fullData = { ...data, role: "client" };
    const EMAILJS_USER_ID = 'D0tzFr3sUlNzTuqeA'; // Reemplaza con tu User ID
    const EMAILJS_SERVICE_ID = 'service_vw1f6aj'; // Reemplaza con tu Service ID
    const EMAILJS_TEMPLATE_ID = 'template_3a3tezc'; // Reemplaza con tu Template ID

    try {
      const response = await fetch(`${API_URL}plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(fullData),
      });
      const emailData = {
        to_email: data.email, // Reemplaza con la dirección de correo a la que deseas enviar
        to_name: data.nombre,
        subject: 'Nuevo plan creado',
        message: 'Estamos emocionados de darte la bienvenida a nuestra comunidad de entusiastas del fitness. ¡Felicidades por dar el primer paso hacia una vida más saludable y activa!',
        messageDos: 'Nuestro equipo de entrenadores y personal está aquí para apoyarte en cada paso del camino. Si tienes alguna pregunta, no dudes en acercarte a nosotros. Además, echa un vistazo a nuestras clases, programas y equipos de vanguardia que harán que cada visita sea emocionante y efectiva.',
      };
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData, EMAILJS_USER_ID);

      //const responseData = await response.json()
      reset();
      Swal.fire({
        title: "Felicidades!",
        text: "Su correo fue enviado con exito.",
        icon: "success",
      });
    } catch (err) {
      Swal.fire({
        title: "¡Hubo un error Inesperado!",
        icon: "error",
      });
    }
  };

  return (
    <div >
      <div className="d-flex justify-content-center m-2">
        <h3 className="letterType text-center text-light">
          Completa el siguiente cuestionario y nos pondremos en contacto con
          vos.
        </h3>
      </div>
      <div className="d-flex justify-content-center m-2 ">
        <Card className="cardPlan col-xl-8 col-md-9 col-10  text-light border border-0">
          <Row className=" m-0">
            <Col md="auto" className="p-0 m-0">
              <div className="d-flex justify-content-center  m-0">
                <Image
                  src="https://trello.com/1/cards/65a2081e1c84a98d8542b641/attachments/65a210edb576adc057ef1a80/previews/65a210eeb576adc057ef1ae5/download/imgProyecto.png"
                  className="imagePlan  m-2 m-md-0 m-xl-0"
                />
              </div>
            </Col>
            <Col className="mb-3 p-0">
              <Row className="m-0">
                <Col>
                  <h2 className="m-2 fst-italic">PLAN #{props.plan} </h2>
                </Col>
                <Col className="m-0 p-0">
                  <div className="d-flex justify-content-end p-0 m-0">
                    <Image
                      src="https://trello.com/1/cards/65a2081264be9affda46ff7d/attachments/65a208ee049d921f3d252e18/previews/65a208ef049d921f3d252e3e/download/LogoGymageLEtras.png"
                      className="gymmageStyle"
                    />
                  </div>
                </Col>
              </Row>
              <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <Row className="m-1">
                  <Col>
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <FormControl
                        className="rounded-pill colorForm"
                        type="text"
                        maxLength={40}
                        minLength={3}
                        {...register("nombre", {
                          required: "Este campo es obligatorio",
                        })}
                        isInvalid={!!errors.nombre}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.nombre?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Apellido</Form.Label>
                      <FormControl
                        className="rounded-pill colorForm"
                        type="text"
                        maxLength={40}
                        minLength={3}
                        {...register("apellido", {
                          required: "Este campo es obligatorio",
                        })}
                        isInvalid={!!errors.apellido}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.apellido?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="m-1">
                  <Col>
                    <Form.Group>
                      <Form.Label>Telefono</Form.Label>
                      <FormControl
                        className="rounded-pill colorForm"
                        type="text"
                        maxLength={60}
                        minLength={3}
                        {...register("telefono", {
                          required: "Este campo es obligatorio",
                        })}
                        isInvalid={!!errors.telefono}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.telefono?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <FormControl
                        className="rounded-pill colorForm"
                        type="email"
                        maxLength={60}
                        minLength={3}
                        {...register("email", {
                          required: "Este campo es obligatorio",
                        })}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="m-1">
                  <Form.Group>
                    <Form.Label>¿Cómo nos conociste?</Form.Label>
                    <FormControl
                      className="rounded-pill colorForm"
                      type="text"
                      maxLength={60}
                      {...register("infoUno", {
                        required: "Este campo es obligatorio",
                      })}
                      isInvalid={!!errors.infoUno}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.infoUno?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-1">
                  <Form.Group>
                    <Form.Label>¿Estás asistiendo a algún gimnasio?</Form.Label>
                    <FormControl
                      className="rounded-pill colorForm"
                      type="text"
                      maxLength={60}
                      {...register("infoDos", {
                        required: "Este campo es obligatorio",
                      })}
                      isInvalid={!!errors.infoDos}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.infoDos?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-1">
                  <Form.Group>
                    <Form.Label>¿Cómo te encuentras fisicamente?</Form.Label>
                    <FormControl
                      className="rounded-pill colorForm"
                      type="text"
                      maxLength={60}
                      {...register("infoTres", {
                        required: "Este campo es obligatorio",
                      })}
                      isInvalid={!!errors.infoTres}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.infoTres?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button className="mt-3 mx-2 buttonStyle" type="submit">
                    Enviar
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default CardPlan;
