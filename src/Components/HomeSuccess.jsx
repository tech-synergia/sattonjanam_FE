import { Card , Button} from 'antd';
import { Link, NavLink } from 'react-router-dom';
const { Meta } = Card;
import '../scss/HomeSuccess.scss'
import Success1 from '../assets/successstory1.jpeg'
import Success2 from '../assets/successstory2.jpeg'
import Success3 from '../assets/success3.jpeg'
import Success4 from '../assets/successstory4.2.jpeg'

function HomeSuccess() {
  return (
    <div className='homeSuccess'>
        <h1>Success Stories</h1>
        <div className="successCards">
        <Card
            hoverable
            className='cards'
            cover={ <Link to="/successStories/1" >
                <img alt="example" src={Success1} className='image-size' />
            </Link>}
        >
            <Meta title="Himmashu & Yashika" className='name'/>
        </Card>
        <Card
            hoverable
            className='cards'
            cover={ <Link to="/successStories/2" ><img alt="example" src={Success2} className='image-size' /></Link>}
        >
            <Meta title="Himanshu & Hema" className='name'/>
        </Card>
        <Card
            hoverable
            className='cards'
            cover={<Link to="/successStories/3" ><img alt="example" src={Success3} className='image-size'/></Link>}
        >
            <Meta title="Vikrant & pooja" className='name'/>
        </Card>
        <Card
            hoverable
            className='cards'
            cover={ <Link to="/successStories/4" ><img alt="example" src={Success4} className='image-size'/></Link>}
        >
            <Meta title= "Pawan & Meenakshi" className='name'/>
        </Card>
        </div>
        <Button className='buttonSuccess'><NavLink to={'/successStories'}>View All Success Stories</NavLink></Button>

    </div>
  )
}

export default HomeSuccess
