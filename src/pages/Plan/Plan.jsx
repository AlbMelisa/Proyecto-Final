import CardPlan from '../../components/CardPlan/CardPlan'
import '../Plan/Plan.css'

const Plan = (props) => {
  return (
    <div className='backColor'>
      <CardPlan plan={props.plan}/>
    </div>
  )
}

export default Plan