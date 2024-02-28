import CardPlan from '../../components/CardPlan/CardPlan'
import '../Plan/Plan.css'

const Plan = ({isLogged}) => {
  return (
    <div className='backColor'>
      <CardPlan isLogged={isLogged}/>
    </div>
  )
}

export default Plan