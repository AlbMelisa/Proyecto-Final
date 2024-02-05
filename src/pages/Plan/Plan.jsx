import CardPlan from '../../components/CardPlan/CardPlan'
import FooterComponent from '../../components/Footer/FooterComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import '../Plan/Plan.css'

const Plan = (props) => {
  return (
    <div className='backColor'>
      <div className='text-light'>{props.plan}</div>
      <NavbarComponent/>
      <CardPlan plan={props.plan}/>
      <FooterComponent/>
    </div>
  )
}

export default Plan